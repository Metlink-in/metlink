import glob, os, re

root = r'e:\Metlink.com\metlink'

# Color replacements: yellow → blue
replacements = [
    # Hex colors
    ('#F5C400', '#2B80F0'),
    ('#FFD84D', '#5FA8FF'),
    ('#D4A800', '#1A6BD6'),
    ('#f5c400', '#2B80F0'),
    ('#ffd84d', '#5FA8FF'),
    ('#d4a800', '#1A6BD6'),
    # rgba yellow → rgba blue
    ('rgba(245,196,0,', 'rgba(43,128,240,'),
    ('rgba(255,216,77,', 'rgba(95,168,255,'),
    # Background reverts: very dark near-black → navy dark
    # globals.css bg tokens
    ("'#050505'", "'#07111F'"),
    ("'#0C0C0C'", "'#0B1628'"),
    ("'#020202'", "'#050B14'"),
    ("'#080800'", "'#050E1A'"),
    # rgba glass bg
    ('rgba(3,3,3,0.88)', 'rgba(6,13,26,0.88)'),
    ('rgba(3,3,3,0.96)', 'rgba(6,13,26,0.96)'),
    ('rgba(3,3,3,0.82)', 'rgba(6,13,26,0.82)'),
    ('rgba(3,3,3,', 'rgba(6,13,26,'),
    # primary-light token
    ("'#1A1500'", "'#0A1F3A'"),
]

# CSS variable replacements for globals.css
css_replacements = [
    ('--bg:            #050505', '--bg:            #07111F'),
    ('--bg-alt:        #0C0C0C', '--bg-alt:        #0B1628'),
    ('--accent:        #F5C400', '--accent:        #2B80F0'),
    ('--accent-soft:   rgba(245,196,0,0.1)', '--accent-soft:   rgba(43,128,240,0.1)'),
    ('--accent-glow:   rgba(245,196,0,0.2)', '--accent-glow:   rgba(43,128,240,0.2)'),
    ('--glass-bg:      rgba(3,3,3,0.88)', '--glass-bg:      rgba(6,13,26,0.88)'),
    ('--background:   #050505', '--background:   #07111F'),
    ('--surface-alt:  #0C0C0C', '--surface-alt:  #0B1628'),
    ('--primary:      #F5C400', '--primary:      #2B80F0'),
    ('--primary-foreground: #050505', '--primary-foreground: #FFFFFF'),
    ('--primary-light: #1A1500', '--primary-light: #0A1F3A'),
    ('--primary-dark:  #D4A800', '--primary-dark:  #1A6BD6'),
    # btn-primary: yellow bg → blue bg
    ('background: #F5C400;\n  color: #050505;', 'background: #2B80F0;\n  color: #FFFFFF;'),
    # scrollbar track
    ('background: #050505; }', 'background: #07111F; }'),
    # gradient text
    ('background: linear-gradient(135deg, #D4A800 0%, #F5C400 50%, #FFD84D 100%)',
     'background: linear-gradient(135deg, #1A6BD6 0%, #2B80F0 50%, #5FA8FF 100%)'),
    ('background: linear-gradient(135deg, #F5C400, #FFD84D)',
     'background: linear-gradient(135deg, #2B80F0, #5FA8FF)'),
    # glow utilities
    ('box-shadow: 0 0 22px rgba(245,196,0,.16), 0 0 60px rgba(245,196,0,.06)',
     'box-shadow: 0 0 22px rgba(43,128,240,.16), 0 0 60px rgba(43,128,240,.06)'),
    ('background: linear-gradient(135deg, rgba(245,196,0,.3), rgba(255,216,77,.3))',
     'background: linear-gradient(135deg, rgba(43,128,240,.3), rgba(95,168,255,.3))'),
    # border glow keyframe
    ('border-color:rgba(245,196,0,.2); box-shadow:0 0 10px rgba(245,196,0,.07)',
     'border-color:rgba(43,128,240,.2); box-shadow:0 0 10px rgba(43,128,240,.07)'),
    ('border-color:rgba(255,216,77,.4); box-shadow:0 0 20px rgba(255,216,77,.14)',
     'border-color:rgba(95,168,255,.4); box-shadow:0 0 20px rgba(95,168,255,.14)'),
    # shimmerBorder in btn-primary-glass
    ('background: #F5C400;\n  color: #050505;\n  border: 1px solid transparent;\n  font-weight: 500;\n  transition: opacity 0.2s ease, transform 0.18s ease;\n}\n.btn-primary-glass:hover',
     'background: #2B80F0;\n  color: #FFFFFF;\n  border: 1px solid transparent;\n  font-weight: 500;\n  transition: opacity 0.2s ease, transform 0.18s ease;\n}\n.btn-primary-glass:hover'),
]

# Files to process
tsx_files = glob.glob(os.path.join(root, 'app', '**', '*.tsx'), recursive=True)
tsx_files += glob.glob(os.path.join(root, 'components', '**', '*.tsx'), recursive=True)
tsx_files += glob.glob(os.path.join(root, 'lib', '**', '*.ts'), recursive=True)
tsx_files += glob.glob(os.path.join(root, 'app', '**', '*.ts'), recursive=True)

# Remove duplicates, skip node_modules / .next
tsx_files = [f for f in set(tsx_files) if 'node_modules' not in f and '.next' not in f]

changed = []

for fpath in tsx_files:
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        new_content = content
        for old, new in replacements:
            new_content = new_content.replace(old, new)
        if new_content != content:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            changed.append(fpath)
    except Exception as e:
        print(f'Error {fpath}: {e}')

# Handle globals.css separately with its own replacements
css_path = os.path.join(root, 'app', 'globals.css')
try:
    with open(css_path, 'r', encoding='utf-8') as f:
        css_content = f.read()
    new_css = css_content
    # Apply CSS-specific replacements first
    for old, new in css_replacements:
        new_css = new_css.replace(old, new)
    # Then apply general hex replacements
    for old, new in replacements:
        new_css = new_css.replace(old, new)
    if new_css != css_content:
        with open(css_path, 'w', encoding='utf-8') as f:
            f.write(new_css)
        changed.append(css_path)
except Exception as e:
    print(f'Error globals.css: {e}')

print(f'\nUpdated {len(changed)} files:')
for f in sorted(changed):
    print(' -', f.replace(root, ''))
