import os
import re

# Define the folder containing the markdown files
folder_path = "cleaned-md/"

# Function to clean and format markdown content while preserving structure
def format_markdown(content):
    # Remove duplicate "layout: exam" headers while keeping spacing intact
    content = re.sub(r"(?s)^(---\nlayout: exam\n---\n)\s*---\nlayout: exam\n---\n", r"\1", content, 1)

    # Ensure there is exactly **one** blank line after `layout: exam`
    content = re.sub(r"(---\nlayout: exam\n---)(\n*)", r"\1\n\n", content)

    # Ensure there is **one** blank line after `# Practice Exam X`
    content = re.sub(r"(# Practice Exam \d+)(\n*)", r"\1\n\n", content)

    # Fix numbering of questions while preserving question text
    def renumber_questions(match):
        renumber_questions.counter += 1
        return f"{renumber_questions.counter}. {match.group(1)}\n{match.group(2)}"

    renumber_questions.counter = 0
    content = re.sub(
        r"(\d+)\.\s(.+?)\n((?:\s*- .*?\n)+)",  # Captures question number, text, and options
        renumber_questions,
        content,
        flags=re.DOTALL
    )

    # Ensure the correct answer block has proper indentation and removes unwanted spacing
    content = re.sub(
        r"<details markdown=1>\s*<summary markdown=['\"]span['\"]>\s*Answer\s*</summary>\s*\n*\s*(Correct Answer:\s*[A-E, ]+)\s*\n*</details>",
        r"""    <details markdown=1><summary markdown="span">Answer</summary>\n        \1\n    </details>""",
        content,
        flags=re.MULTILINE
    )

    return content

# Process all markdown files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".md"):
        file_path = os.path.join(folder_path, filename)

        # Read file content
        with open(file_path, "r", encoding="utf-8") as file:
            content = file.read()

        # Format the content while preserving structure
        formatted_content = format_markdown(content)

        # Write back the formatted content
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(formatted_content)

        print(f"Formatted: {filename}")

print("\n✅ All markdown files in 'cleaned-md/' have been formatted correctly!")