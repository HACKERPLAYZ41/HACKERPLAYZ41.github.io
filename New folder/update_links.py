import os
import re

files_to_update = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html') or f == 'PROJECTS_LIST.md':
            files_to_update.append(os.path.join(root, f))

discord_new = 'https://discord.com/invite/DugRxFGKGD'
github_new = 'https://github.com/hackerplayz41'

# We know the old discord forms: https://discord.gg/z3c4TBWw68, https://discord.gg/blockcode, discord.gg/blockcode, discord.gg/z3c4TBWw68
# We know the old github forms: https://github.com/HACKERPLAYZ41 or any variation that needs to match hackerplayz41 casing
for file in files_to_update:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic regex for any discord link
    content = re.sub(r'https?://discord\.(gg|com/invite)/[A-Za-z0-9_-]+', discord_new, content)
    
    # Generic regex for github links except assets or raw text
    content = re.sub(r'https?://github\.com/(?i:HACKERPLAYZ41)[/]?', github_new, content)

    # Some hardcoded text replacements if any
    content = content.replace('discord.gg/blockcode', 'discord.com/invite/DugRxFGKGD')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated {len(files_to_update)} files for Discord and GitHub links.")
