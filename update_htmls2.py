import glob

files = glob.glob(r'c:\Users\cheta\OneDrive\Desktop\cosio\vijayanand-foundation-main\app\pages\*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Desktop Nav
    if '<li><a href="pace.html" class="nav-link">PACE</a></li>' in content:
        start_idx = content.find('<li><a href="pace.html" class="nav-link">PACE</a></li>')
        end_idx = content.find('<li><a href="gallery.html" class="nav-link">Gallery</a></li>')
        if start_idx != -1 and end_idx != -1:
            end_idx += len('<li><a href="gallery.html" class="nav-link">Gallery</a></li>')
            desktop_repl = '''<li><a href="about.html" class="nav-link">About Us</a></li>
      <li><a href="therapy-services.html" class="nav-link">Therapy Services</a></li>
      <li><a href="pace.html" class="nav-link">PACE</a></li>
      <li><a href="online-counselling.html" class="nav-link">Online Counselling</a></li>
      <li><a href="blog.html" class="nav-link">Blog</a></li>
      <li><a href="gallery.html" class="nav-link">Gallery</a></li>'''
            content = content[:start_idx] + desktop_repl + content[end_idx:]

    # Mobile Nav
    if '<a href="pace.html" class="block">PACE</a>' in content:
        start_idx = content.find('<a href="pace.html" class="block">PACE</a>')
        end_idx = content.find('<a href="gallery.html" class="block">Gallery</a>')
        if start_idx != -1 and end_idx != -1:
            end_idx += len('<a href="gallery.html" class="block">Gallery</a>')
            mobile_repl = '''<a href="about.html" class="block">About Us</a>
    <a href="therapy-services.html" class="block">Therapy Services</a>
    <a href="pace.html" class="block">PACE</a>
    <a href="online-counselling.html" class="block">Online Counselling</a>
    <a href="blog.html" class="block">Blog</a>
    <a href="gallery.html" class="block">Gallery</a>'''
            content = content[:start_idx] + mobile_repl + content[end_idx:]

    # Footer Quick Links
    if '<ul class="space-y-3 text-sm">' in content:
        start_idx = content.find('<ul class="space-y-3 text-sm">') + len('<ul class="space-y-3 text-sm">')
        end_idx = content.find('</ul>', start_idx)
        footer_repl = '''
          <li>
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
            <a href="pace.html" class="hover:text-white transition">
              PACE Institute
            </a>
          </li>
          <li>
            <a href="online-counselling.html" class="hover:text-white transition">
              Online Counselling
            </a>
          </li>
          <li>
            <a href="blog.html" class="hover:text-white transition">
              Blog
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
          </li>
        '''
        content = content[:start_idx] + footer_repl + content[end_idx:]

    # Footer emails & numbers
    content = content.replace('vijayaanandfoundation@gmail.com', 'vijayanandtrust@gmail.com')
    content = content.replace('>8459826288<', '>+91 8598262885<')
    content = content.replace('>9922156948<', '>+91 9922156948<')
    content = content.replace('tel:+918459826288', 'tel:+918598262885')

    # Google Translate
    if '<!-- Google Translate -->' not in content:
        content = content.replace('<body class="font-body bg-white text-black">', 
'''<body class="font-body bg-white text-black">

<!-- Google Translate -->
<div id="google_translate_element" style="position:fixed; bottom:20px; right:20px; z-index:1000;"></div>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,hi,mr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
''')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Attempt 3 complete")
