document.addEventListener("DOMContentLoaded", function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var themeText = document.getElementById("theme-text");
  var hamburger = document.querySelector(".nav-hamburger");
  var navMenu = document.getElementById("nav-menu");

  function setTheme(theme) {
    root.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    if (themeText) {
      themeText.textContent = theme === "dark" ? "Light" : "Dark";
    }

    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  if (toggle) {
    setTheme(root.dataset.theme || "light");

    toggle.addEventListener("click", function () {
      setTheme(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      var expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("is-open", !expanded);
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      });
    });
  }

  var toc = document.querySelector(".table-of-contents");
  if (toc) {
    var links = toc.querySelectorAll('a[href^="#"]');
    var headings = Array.from(links)
      .map(function (link) {
        return document.getElementById(link.getAttribute("href").slice(1));
      })
      .filter(Boolean);

    if (headings.length && "IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              links.forEach(function (link) {
                link.classList.toggle(
                  "active",
                  link.getAttribute("href") === "#" + entry.target.id
                );
              });
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      headings.forEach(function (heading) {
        observer.observe(heading);
      });
    }
  }
});
