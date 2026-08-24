import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace the colors inline object definition inside the html
    new_colors = '''colors: {
                        "primary": "#4f633d",
                        "primary-light": "#708a58",
                        "secondary": "#abbf97",
                        "background": "#f3f6ef",
                        "background-alt": "#e5eadd",
                        "text-main": "#191f14",
                        "axolotl": {
                            '50': '#f3f6ef',
                            '100': '#e5eadd',
                            '200': '#ccd8be',
                            '300': '#abbf97',
                            '400': '#8da675',
                            '500': '#708a58',
                            '600': '#4f633d',
                            '700': '#445536',
                            '800': '#39452f',
                            '900': '#323c2b',
                            '950': '#191f14',
                        }
                    }'''
    
    # regex to replace colors: { ... }
    content = re.sub(r'colors:\s*\{[^}]*\"text-main\"[^\}]*\}', new_colors, content, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

# Update style.css
with open('assets/css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

css = re.sub(r'--primary:\s*#[0-9a-fA-F]+;', '--primary: #4f633d;', css)
css = re.sub(r'--primary-light:\s*#[0-9a-fA-F]+;', '--primary-light: #708a58;', css)
css = re.sub(r'--secondary:\s*#[0-9a-fA-F]+;', '--secondary: #abbf97;', css)
css = re.sub(r'--background:\s*#[0-9a-fA-F]+;', '--background: #f3f6ef;', css)
css = re.sub(r'--background-alt:\s*#[0-9a-fA-F]+;', '--background-alt: #e5eadd;', css)
css = re.sub(r'--text-main:\s*#[0-9a-fA-F]+;', '--text-main: #191f14;', css)
css = re.sub(r'--text-white:\s*#[0-9a-fA-F]+;', '--text-white: #f3f6ef;', css)
css = re.sub(r'--glass-bg:\s*rgba\([^)]+\);', '--glass-bg: rgba(243, 246, 239, 0.8);', css)

with open('assets/css/style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated colors globally")
