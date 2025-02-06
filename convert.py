import re
import json
import time
import os

def convert_md_to_js(md_file, js_file):
    with open(md_file, "r", encoding="utf-8") as file:
        content = file.read()

    # Updated regex to support 4 or 5 options dynamically and multiple correct answers
    pattern = re.compile(
        r"(\d+)\.\s(.+?)\n\s*- (A\..+?)\n\s*- (B\..+?)\n\s*- (C\..+?)\n\s*- (D\..+?)"
        r"(?:\n\s*- (E\..+?))?\n\n\s*<details markdown=1><summary markdown='span'>Answer</summary>\n\s*Correct answer: ([A-E](?:, [A-E])*)"
        r"(?:Explanation: <.+?>\n)?",  # Optional explanation line
        re.DOTALL
    )

    quiz_data = []

    for match in pattern.findall(content):
        question_number, question, opt_a, opt_b, opt_c, opt_d, opt_e, correct_answer = match
        options = [opt_a, opt_b, opt_c, opt_d]
        
        if opt_e:  # If there is an "E" option, add it
            options.append(opt_e)

        # Convert multiple answers like "A, B" to [0, 1]
        answer_indices = [ord(ans.strip()) - ord('A') for ans in correct_answer.split(", ")]

        # If there's only one correct answer, store it as an integer instead of a list
        answer_final = answer_indices if len(answer_indices) > 1 else answer_indices[0]

        quiz_data.append({
            "question": question.strip(),
            "options": options,
            "answer": answer_final
        })

    # Format the output JavaScript file
    js_content = f"const quizData = {json.dumps(quiz_data, indent=4)};"

    with open(js_file, "w", encoding="utf-8") as file:
        file.write(js_content)

    print(f"Converted {md_file} to {js_file}")

# file_names = ['practice-exam-21.md', 'practice-exam-15.md', 'practice-exam-7.md', 'practice-exam-11.md', 'practice-exam-3.md', 'practice-exam-10.md', 'practice-exam-2.md', 'practice-exam-20.md', 'practice-exam-14.md', 'practice-exam-6.md', 'practice-exam-9.md', 'practice-exam-8.md', 'practice-exam-19.md', 'practice-exam-18.md', 'practice-exam-13.md', 'practice-exam-1.md', 'practice-exam-23.md', 'practice-exam-17.md', 'practice-exam-5.md', 'practice-exam-22.md', 'practice-exam-16.md', 'practice-exam-4.md', 'practice-exam-12.md']

file_names = [f'practice-exam-{i}.md' for i in range(1,13)]

# file_names = ['practice-exam-13.md']


for file in file_names:
    convert_md_to_js(f"final-md/{file}", f"{file[:-3]}.js")