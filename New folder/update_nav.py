import os
import re

html_files = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html') and 'projects/' not in root.replace('\\', '/'): # Just touching top level + projects if any? Wait, user has individual project pages inside 'projects/' folder. Let's do all.
            html_files.append(os.path.join(root, f))

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update Navigation Logo to "Utkarsh" from "blockcode.in"
    content = re.sub(r'<span class="text-xl font-black tracking-tight text-primary">blockcode\.in</span>', '<span class="text-xl font-black tracking-tight text-primary">Utkarsh</span>', content)

    # 2. Update Footer Logo to "Utkarsh" from "blockcode.in"
    content = re.sub(r'<span class="text-xl font-black">blockcode\.in</span>', '<span class="text-xl font-black">Utkarsh</span>', content)
    
    # 3. Update Footer Copyright text
    content = re.sub(r'© \d{4} blockcode\.in\.', '© 2025 Utkarsh Halwai.', content)

    # 4. Insert Blog link in Desktop Nav where Projects is
    # We look for <a class="... text-primary ..." href="projects.html">Projects</a> or <a class="..." href="#projects">Projects</a>
    # and insert Blog after it. We must handle different variations.
    
    # regex to find Projects line in desktop nav
    # <nav class="hidden md:flex items-center gap-8">
    # ... Projects ...
    # We can match <a [^>]*href="[^"]*projects(\.html|#projects)?"[^>]*>Projects</a>
    # and add the blog link right after it.
    
    # Find matching Projects link
    proj_link_re = r'(<a\s+class="[^"]*href="[^"]*(?:index\.html)?#projects|projects\.html"[^>]*>Projects</a>)'
    blog_desktop = r'\1\n                <a class="text-sm font-semibold hover:text-primary transition-colors" href="blog.html">Blog</a>'
    
    # However we need to make sure we don't add it multiple times if we run script multiple times
    if 'href="blog.html"' not in content:
        # Add to desktop nav
        # Wait, the proj_link_re captures the actual link, but there are multiple "Projects" links (e.g. footer, mobile drawer).
        # We need to distinguish them.
        # Let's just do a string replacement for navbars specifically by looking for the blocks.

        pass

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Updated names in {len(html_files)} files.")
