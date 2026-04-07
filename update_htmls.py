import os
import glob
import re

files = glob.glob(r'c:\Users\cheta\OneDrive\Desktop\cosio\vijayanand-foundation-main\app\pages\*.html')

desktop_nav_repl = '''      <li><a href="about.html" class="nav-link">About Us</a></li>
      <li><a href="therapy-services.html" class="nav-link">Therapy Services</a></li>
      <li><a href="pace.html" class="nav-link">PACE</a></li>
      <li><a href="online-counselling.html" class="nav-link">Online Counselling</a></li>
      <li><a href="blog.html" class="nav-link">Blog</a></li>
      <li><a href="gallery.html" class="nav-link">Gallery</a></li>'''

mobile_nav_repl = '''    <a href="about.html" class="block">About Us</a>
    <a href="therapy-services.html" class="block">Therapy Services</a>
    <a href="pace.html" class="block">PACE</a>
    <a href="online-counselling.html" class="block">Online Counselling</a>
    <a href="blog.html" class="block">Blog</a>
    <a href="gallery.html" class="block">Gallery</a>'''

footer_nav_repl = '''          <li>
            <a href="contact.html" class="hover:text-white transition">
              Contact Us
            </a>
          </li>
          <li>
            <a href="therapy-services.html" class="hover:text-white transition">
              Therapy Services
            </a>
          </li>
          <li>
            <a href="online-counselling.html" class="hover:text-white transition">
              Online Counselling
            </a>
          </li>
          <li>
            <a href="pace.html" class="hover:text-white transition">
              PACE Institute
            </a>
          </li>
          <li>
            <a href="about.html" class="hover:text-white transition">
              About Us
            </a>
          </li>
          <li>
            <a href="gallery.html" class="hover:text-white transition">
              Gallery
            </a>
          </li>'''


for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Desktop nav
    content = re.sub(
        r'<li><a href="pace\.html" class="nav-link">PACE</a></li>.*?<li><a href="gallery\.html" class="nav-link">Gallery</a></li>',
        desktop_nav_repl,
        content,
        flags=re.DOTALL
    )

    # Mobile nav
    content = re.sub(
        r'<a href="pace\.html" class="block">PACE</a>.*?<a href="gallery\.html" class="block">Gallery</a>',
        mobile_nav_repl,
        content,
        flags=re.DOTALL
    )

    # Footer nav
    content = re.sub(
        r'<li>\s*<a href="contact\.html" class="hover:text-white transition">\s*Contact Us\s*</a>\s*</li>.*?<li>\s*<a href="gallery\.html" class="hover:text-white transition">\s*Gallery\s*</a>\s*</li>',
        footer_nav_repl,
        content,
        flags=re.DOTALL
    )

    # Footer emails & numbers
    content = content.replace('vijayaanandfoundation@gmail.com', 'vijayanandtrust@gmail.com')
    content = content.replace('>8459826288<', '>+91 8598262885<')
    content = content.replace('>9922156948<', '>+91 9922156948<')
    content = content.replace('tel:+918459826288', 'tel:+918598262885')

    # Google Translate addition
    translate_snippet = '''
<!-- Google Translate -->
<div id="google_translate_element" style="position:fixed; bottom:20px; right:20px; z-index:1000;"></div>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,hi,mr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>'''

    if '<!-- Google Translate -->' not in content:
        content = re.sub(r'<body.*?>', lambda m: m.group(0) + translate_snippet, content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Updated perfectly 2")
