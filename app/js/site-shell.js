(() => {
  "use strict";

  const onSubpage = /\/app\/pages\//i.test(window.location.pathname.replace(/\\/g, "/"));
  const homeHref = onSubpage ? "../../index.html" : "index.html";
  const pagesRoot = onSubpage ? "" : "app/pages/";
  const logoHref = onSubpage
    ? "../../src/images/vijayanand-foundation-logo.jpg"
    : "src/images/vijayanand-foundation-logo.jpg";
  const admissionHref = "https://docs.google.com/forms/d/e/1FAIpQLSduZvdT-8Z2eVdeYlC0H6MZrP2fkWuLoJZIjqftMcEGpTzNZw/viewform";
  const googleReviewHref = "https://g.page/r/Cd0NuPOZTJquEBE/review";
  const currentPage = onSubpage
    ? window.location.pathname.split("/").pop().toLowerCase()
    : "index.html";

  const favicon = document.querySelector('link[rel~="icon"]') || document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/jpeg";
  favicon.href = logoHref;
  if (!favicon.parentNode) document.head.appendChild(favicon);

  const themeColor = document.querySelector('meta[name="theme-color"]') || document.createElement("meta");
  themeColor.name = "theme-color";
  themeColor.content = "#fff7ed";
  if (!themeColor.parentNode) document.head.appendChild(themeColor);

  const navItems = [
    ["about.html", "About Us"],
    ["therapy-services.html", "Therapy Services"],
    ["pace.html", "PACE"],
    ["online-counselling.html", "Online Counselling"],
    ["blog.html", "Blog"],
    ["gallery.html", "Gallery"]
  ];

  const moreItems = [
    ["tujh.html", "तुझी माझी रेशिम गाठ"],
    ["contact.html", "Contact Us"]
  ];

  const pageHref = (file) => `${pagesRoot}${file}`;
  const currentAttribute = (file) => file === currentPage ? ' aria-current="page"' : "";

  const brandMarkup = (footer = false) => footer
    ? `<img class="vf-brand-logo" src="${logoHref}" alt="">
       <span><strong>Vijayanand Foundation</strong><small>Happiness Depends on Thought</small></span>`
    : `<img class="vf-brand-logo" src="${logoHref}" alt="">
       <span class="vf-brand-copy"><span class="vf-brand-name">Vijayanand Foundation</span><span class="vf-brand-tagline">Happiness Depends on Thought</span></span>`;

  const desktopLinks = navItems.map(([file, label]) =>
    `<a class="vf-nav-link" href="${pageHref(file)}"${currentAttribute(file)}>${label}</a>`
  ).join("");

  const moreLinks = moreItems.map(([file, label]) =>
    `<a href="${pageHref(file)}"${currentAttribute(file)}>${label}</a>`
  ).join("");

  const mobileLinks = [...navItems, ...moreItems].map(([file, label]) =>
    `<a href="${pageHref(file)}"${currentAttribute(file)}>${label}</a>`
  ).join("");

  const headerMount = document.getElementById("vf-header");
  if (headerMount) {
    headerMount.innerHTML = `
      <header class="vf-site-header" id="vfSiteHeader">
        <nav class="vf-nav" aria-label="Primary navigation">
          <a class="vf-brand" href="${homeHref}" aria-label="Vijayanand Foundation home">
            ${brandMarkup()}
          </a>
          <div class="vf-desktop-nav">
            ${desktopLinks}
            <div class="vf-more" id="vfMore">
              <button class="vf-more-button" id="vfMoreButton" type="button" aria-expanded="false" aria-controls="vfMoreMenu">
                More <i class="bx bx-chevron-down" aria-hidden="true"></i>
              </button>
              <div class="vf-more-menu" id="vfMoreMenu">${moreLinks}</div>
            </div>
          </div>
          <div class="vf-nav-actions">
            <a class="vf-admission" href="${admissionHref}" target="_blank" rel="noopener noreferrer">
              Admission
              <span class="vf-admission-icon" aria-hidden="true"><i class="bx bx-right-arrow-alt"></i></span>
            </a>
            <button class="vf-menu-button" id="vfMenuButton" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="vfMobileDrawer">
              <i class="bx bx-menu" aria-hidden="true"></i>
            </button>
          </div>
        </nav>
      </header>
      <div class="vf-mobile-overlay" id="vfMobileOverlay" aria-hidden="true"></div>
      <aside class="vf-mobile-drawer" id="vfMobileDrawer" aria-hidden="true" aria-label="Mobile navigation">
        <div class="vf-drawer-head">
          <a class="vf-brand" href="${homeHref}" aria-label="Vijayanand Foundation home">${brandMarkup()}</a>
          <button class="vf-close-button" id="vfCloseButton" type="button" aria-label="Close navigation menu">
            <i class="bx bx-x" aria-hidden="true"></i>
          </button>
        </div>
        <nav class="vf-mobile-nav" aria-label="Mobile navigation">
          ${mobileLinks}
          <div class="vf-mobile-divider" aria-hidden="true"></div>
          <a class="vf-mobile-admission" href="${admissionHref}" target="_blank" rel="noopener noreferrer">
            <span>Admission Form</span><span aria-hidden="true"><i class="bx bx-right-arrow-alt"></i></span>
          </a>
        </nav>
        <div class="vf-translate">
          <span class="vf-translate-label">Language</span>
          <div id="google_translate_element"></div>
        </div>
      </aside>`;
  }

  const footerMount = document.getElementById("vf-footer");
  if (footerMount) {
    footerMount.innerHTML = `
      <footer class="vf-site-footer">
        <div class="vf-footer-inner">
          <div class="vf-footer-grid">
            <div>
              <a class="vf-footer-brand" href="${homeHref}" aria-label="Vijayanand Foundation home">${brandMarkup(true)}</a>
              <p class="vf-footer-intro">Supporting social, psychological, educational, medical, research and rehabilitation needs with compassionate care.</p>
            </div>
            <div>
              <h2 class="vf-footer-title">Our Offices</h2>
              <address class="vf-footer-address">
                <strong>Head Office — Pune</strong><br>
                SSD Sai Luxuria, near Akshara International School,<br>
                Vinode Corner, Bhumkar Chowk, Wakad,<br>
                Pune — 411057.
                <br><br>
                <strong>Branch — Chiplun</strong><br>
                Khandat Pali, Tal. Chiplun, Dist. Ratnagiri,<br>
                Maharashtra — 415605.
              </address>
            </div>
            <div>
              <h2 class="vf-footer-title">Quick Links</h2>
              <ul class="vf-footer-links">
                <li><a href="${pageHref("about.html")}">About Us</a></li>
                <li><a href="${pageHref("therapy-services.html")}">Therapy Services</a></li>
                <li><a href="${pageHref("pace.html")}">PACE Institute</a></li>
                <li><a href="${pageHref("online-counselling.html")}">Online Counselling</a></li>
                <li><a href="${pageHref("contact.html")}">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h2 class="vf-footer-title">Contact</h2>
              <ul class="vf-footer-contact">
                <li><i class="bx bx-phone" aria-hidden="true"></i><span><a href="tel:+918459826288">+91 84598 26288</a></span></li>
                <li><i class="bx bx-envelope" aria-hidden="true"></i><a href="mailto:vijayanandtrust@gmail.com">vijayanandtrust@gmail.com</a></li>
                <li><i class="bx bx-map" aria-hidden="true"></i><a href="${pageHref("contact.html")}">View locations and contact details</a></li>
                <li><i class="bx bxs-star" aria-hidden="true"></i><a href="${googleReviewHref}" target="_blank" rel="noopener noreferrer">Review us on Google</a></li>
              </ul>
            </div>
          </div>
          <div class="vf-footer-bottom">
            <p>© 2026 Vijayanand Foundation. All rights reserved.</p>
            <div class="vf-socials" aria-label="Contact links">
              <a href="https://wa.me/918459826288" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp"><i class="bx bxl-whatsapp" aria-hidden="true"></i></a>
              <a href="${googleReviewHref}" target="_blank" rel="noopener noreferrer" aria-label="Review Vijayanand Foundation on Google"><i class="bx bxl-google" aria-hidden="true"></i></a>
              <a href="tel:+918459826288" aria-label="Call Vijayanand Foundation"><i class="bx bx-phone" aria-hidden="true"></i></a>
              <a href="mailto:vijayanandtrust@gmail.com" aria-label="Email Vijayanand Foundation"><i class="bx bx-envelope" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </footer>`;
  }

  const menuButton = document.getElementById("vfMenuButton");
  const closeButton = document.getElementById("vfCloseButton");
  const drawer = document.getElementById("vfMobileDrawer");
  const overlay = document.getElementById("vfMobileOverlay");

  const setMenuOpen = (open) => {
    if (!menuButton || !drawer || !overlay) return;
    menuButton.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    overlay.setAttribute("aria-hidden", String(!open));
    drawer.classList.toggle("is-open", open);
    overlay.classList.toggle("is-open", open);
    document.body.classList.toggle("vf-menu-open", open);
    if (open) {
      closeButton?.focus();
    } else if (document.activeElement === closeButton) {
      menuButton.focus();
    }
  };

  menuButton?.addEventListener("click", () => setMenuOpen(true));
  closeButton?.addEventListener("click", () => setMenuOpen(false));
  overlay?.addEventListener("click", () => setMenuOpen(false));
  drawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  const more = document.getElementById("vfMore");
  const moreButton = document.getElementById("vfMoreButton");
  moreButton?.addEventListener("click", () => {
    const open = !more?.classList.contains("is-open");
    more?.classList.toggle("is-open", open);
    moreButton.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (more && !more.contains(event.target)) {
      more.classList.remove("is-open");
      moreButton?.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      more?.classList.remove("is-open");
      moreButton?.setAttribute("aria-expanded", "false");
    }

    if (event.key === "Tab" && drawer?.classList.contains("is-open")) {
      const focusable = [...drawer.querySelectorAll("a[href], button:not([disabled])")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1180) setMenuOpen(false);
  });

  const homeVideo = document.getElementById("vfHomeVideo");
  const homeVideoTitle = document.getElementById("vfHomeVideoTitle");
  const homeVideoMeta = document.getElementById("vfHomeVideoMeta");
  const homeThumbs = document.querySelectorAll("[data-vf-video]");

  const setHomeVideo = (button) => {
    if (!homeVideo || !button) return;
    const nextSrc = button.getAttribute("data-vf-video");
    const source = homeVideo.querySelector("source");
    if (!nextSrc || source?.getAttribute("src") === nextSrc) return;

    homeVideo.pause();
    if (source) source.setAttribute("src", nextSrc);
    homeVideo.load();
    homeThumbs.forEach((thumb) => {
      const active = thumb === button;
      thumb.classList.toggle("is-active", active);
      thumb.setAttribute("aria-pressed", String(active));
    });
    if (homeVideoTitle) homeVideoTitle.textContent = button.getAttribute("data-title") || "Autism Awareness";
    if (homeVideoMeta) homeVideoMeta.textContent = button.getAttribute("data-meta") || "";
  };

  homeThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => setHomeVideo(thumb));
  });

  if (homeVideo && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) homeVideo.pause();
      });
    }, { threshold: 0.2 });
    observer.observe(homeVideo);
  }

  if (document.getElementById("google_translate_element")) {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: "en",
          includedLanguages: "en,hi,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        }, "google_translate_element");
      }
    };

    if (!document.querySelector('script[data-vf-translate]')) {
      const translateScript = document.createElement("script");
      translateScript.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      translateScript.async = true;
      translateScript.dataset.vfTranslate = "true";
      document.body.appendChild(translateScript);
    }
  }
})();
