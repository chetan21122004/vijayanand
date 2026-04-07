import os

base_path = r"c:\Users\cheta\OneDrive\Desktop\cosio\vijayanand-foundation-main\app\pages"
html_content = open(os.path.join(base_path, "about.html"), "r", encoding="utf-8").read()

open(os.path.join(base_path, "online-counselling.html"), "w", encoding="utf-8").write(html_content)
open(os.path.join(base_path, "blog.html"), "w", encoding="utf-8").write(html_content)

print("done")
