import os
import re

def clean_md_file(md_file, output_file):
    """Cleans a Markdown (.md) file by fixing multi-answer format and removing explanations."""
    
    print(f"🔄 Cleaning: {md_file} → {output_file}")

    try:
        with open(md_file, "r", encoding="utf-8") as file:
            content = file.read()

        # **Fix multi-answer format (AB → A, B) and remove explanations**
        pattern = re.compile(
            r"(Correct Answer:\s*)([A-E]+)(.*?)</details>",  # Capture 'Correct Answer:' + Answers + everything after
            re.DOTALL
        )

        def fix_answer_format(match):
            correct_label = match.group(1).strip()  # 'Correct Answer: '
            answers = match.group(2).strip()  # 'AB' (wrong format)
            fixed_answers = ", ".join(answers)  # Convert 'AB' → 'A, B'
            return f"{correct_label} {fixed_answers}\n</details>"  # Remove everything after answer, fix spacing

        cleaned_content = pattern.sub(fix_answer_format, content)

        with open(output_file, "w", encoding="utf-8") as file:
            file.write(cleaned_content)

        print(f"✅ Cleaned and saved: {output_file}")

    except Exception as e:
        print(f"❌ Error processing {md_file}: {e}")

# **Process all .md files in 'practice-exam/' folder**
md_folder = "practice-exam"
output_folder = "cleaned-md"

if not os.path.exists(md_folder):
    print(f"❌ Folder '{md_folder}' not found.")
else:
    os.makedirs(output_folder, exist_ok=True)  # Create folder for cleaned files

    md_files = [f for f in os.listdir(md_folder) if f.endswith(".md")]

    if not md_files:
        print("❌ No .md files found.")
    else:
        for md_file in md_files:
            md_path = os.path.join(md_folder, md_file)
            output_path = os.path.join(output_folder, md_file)  # Save cleaned files here

            clean_md_file(md_path, output_path)