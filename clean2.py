import os
import re

def remove_extra_lines(md_file, output_file):
    """Removes extra lines after </summary> until 'Correct Answer:' in Markdown files."""

    print(f"🔄 Processing: {md_file} → {output_file}")

    try:
        with open(md_file, "r", encoding="utf-8") as file:
            content = file.readlines()

        cleaned_lines = []
        skip_next = False
        
        for i in range(len(content)):
            line = content[i].rstrip()  # Trim spaces

            # If we find the summary line
            if "</summary>" in line:
                cleaned_lines.append(line)
                # Look ahead for "Correct Answer:" and append it immediately after
                for next_line in content[i+1:]:
                    if "Correct Answer:" in next_line.strip():
                        cleaned_lines.append("    " + next_line.strip())  # Preserve indentation
                        skip_next = True
                        break
                continue

            # Skip lines we've already handled
            if skip_next:
                if "Correct Answer:" in line:
                    skip_next = False
                continue

            # Add all other lines normally
            cleaned_lines.append(line)

        with open(output_file, "w", encoding="utf-8") as file:
            file.write("\n".join(cleaned_lines) + "\n")

        print(f"✅ Cleaned and saved: {output_file}")

    except Exception as e:
        print(f"❌ Error processing {md_file}: {e}")

# Process all .md files in 'cleaned-md/' folder
md_folder = "cleaned-md"
output_folder = "final-md"

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
            output_path = os.path.join(output_folder, md_file)
            remove_extra_lines(md_path, output_path)