const revealItems = Array.from(document.querySelectorAll('.reveal'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  }
);

revealItems.forEach((item, idx) => {
  item.style.animationDelay = `${Math.min(idx * 90, 360)}ms`;
  observer.observe(item);
});

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) {
      return;
    }

    const section = document.querySelector(href);
    if (!section) {
      return;
    }

    event.preventDefault();
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
