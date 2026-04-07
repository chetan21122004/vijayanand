import glob
from bs4 import BeautifulSoup

files = glob.glob(r'c:\Users\cheta\OneDrive\Desktop\cosio\vijayanand-foundation-main\app\pages\*.html')

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        html = f.read()

    soup = BeautifulSoup(html, 'html.parser')

    # Desktop Nav
    ds_navs = soup.find_all('a', class_='nav-link')
    for a in ds_navs:
        if 'psychological' in a.get('href', ''):
            a['href'] = 'therapy-services.html'
            a.string = 'Therapy Services'

    # Ensure Online Counselling and Blog are there
    # It's better to recreate the li elements
    ul = soup.find('ul', class_=lambda x: x and 'hidden' in x and 'md:flex' in x)
    if ul:
        # We know li elements 0,1,2,3...
        # Let's just find the gallery li
        gallery_li = None
        for li in ul.find_all('li', recursive=False):
            a = li.find('a', class_='nav-link')
            if a and 'gallery' in a.get('href', ''):
                gallery_li = li
                break
        
        if gallery_li:
            # Add Online Counselling and Blog before Gallery if not exist
            if not soup.find('a', href='online-counselling.html'):
                oc_li = soup.new_tag('li')
                oc_a = soup.new_tag('a', href='online-counselling.html', attrs={'class': 'nav-link'})
                oc_a.string = 'Online Counselling'
                oc_li.append(oc_a)
                gallery_li.insert_before(oc_li)
            
            if not soup.find('a', href='blog.html'):
                blog_li = soup.new_tag('li')
                blog_a = soup.new_tag('a', href='blog.html', attrs={'class': 'nav-link'})
                blog_a.string = 'Blog'
                blog_li.append(blog_a)
                gallery_li.insert_before(blog_li)
                
            # Rename About -> About Us, Psychological -> Therapy Services
            for li in ul.find_all('li', recursive=False):
                a = li.find('a', class_='nav-link')
                if a:
                    if 'about' in a.get('href', ''):
                        a.string = 'About Us'
                    if 'psychological.html' == a.get('href', ''):
                        a['href'] = 'therapy-services.html'
                        a.string = 'Therapy Services'

    # Mobile Nav
    mob_nav = soup.find('nav', class_=lambda x: x and 'text-primaryDark' in x)
    if mob_nav:
        gallery_a = mob_nav.find('a', href=lambda x: x and 'gallery' in x)
        if gallery_a:
            if not mob_nav.find('a', href='online-counselling.html'):
                oc_a = soup.new_tag('a', href='online-counselling.html', attrs={'class': 'block'})
                oc_a.string = 'Online Counselling'
                gallery_a.insert_before(oc_a)
            if not mob_nav.find('a', href='blog.html'):
                blog_a = soup.new_tag('a', href='blog.html', attrs={'class': 'block'})
                blog_a.string = 'Blog'
                gallery_a.insert_before(blog_a)

        for a in mob_nav.find_all('a', class_='block'):
            if 'about' in a.get('href', ''):
                a.string = 'About Us'
            if 'psychological' in a.get('href', ''):
                a['href'] = 'therapy-services.html'
                a.string = 'Therapy Services'

    # Footer Quick Links
    footers = soup.find_all('a', class_='hover:text-white transition')
    for a in footers:
        if 'psychological' in a.get('href', ''):
            a['href'] = 'therapy-services.html'
            a.string = 'Therapy Services'
    
    # Let's add online counselling to footer
    footer_ul = soup.find('ul', class_='space-y-3 text-sm')
    if footer_ul:
        if not footer_ul.find('a', href='online-counselling.html'):
            li = soup.new_tag('li')
            a = soup.new_tag('a', href='online-counselling.html', attrs={'class': 'hover:text-white transition'})
            a.string = 'Online Counselling'
            li.append(a)
            footer_ul.append(li)

    # Footer emails & numbers
    for a in soup.find_all('a'):
        href = a.get('href', '')
        if href == 'mailto:vijayaanandfoundation@gmail.com':
            a['href'] = 'mailto:vijayanandtrust@gmail.com'
            a.string = 'vijayanandtrust@gmail.com'
        if href == 'tel:+918459826288':
            a['href'] = 'tel:+918598262885'
            a.string = '+91 8598262885'
        if href == 'tel:+919922156948':
            a.string = '+91 9922156948'

    # Google Translate
    if not soup.find(id='google_translate_element'):
        body = soup.find('body')
        if body:
            div = soup.new_tag('div', id='google_translate_element', style='position:fixed; bottom:20px; right:20px; z-index:1000;')
            body.insert(0, div)
            
            sc1 = soup.new_tag('script', type='text/javascript')
            sc1.string = """
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,hi,mr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}
"""
            body.insert(1, sc1)
            sc2 = soup.new_tag('script', type='text/javascript', src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
            body.insert(2, sc2)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(str(soup))

print("Updated via BS4")
