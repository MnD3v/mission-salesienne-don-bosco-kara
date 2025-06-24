// 1. Animation de menu sticky et effet d'ombre au scroll
(function() {
  const nav = document.querySelector('nav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    if (!nav) return;
    if (window.scrollY > 80) {
      nav.style.position = 'fixed';
      nav.style.top = '0';
      nav.style.left = '0';
      nav.style.width = '100%';
      nav.style.boxShadow = '0 4px 18px rgba(0,91,170,0.13)';
      nav.style.background = 'rgba(0,63,107,0.98)';
      nav.style.zIndex = '100';
      nav.classList.add('nav-sticky');
    } else {
      nav.style.position = '';
      nav.style.boxShadow = '';
      nav.style.background = '';
      nav.classList.remove('nav-sticky');
    }
    lastScroll = window.scrollY;
  });
})();

// 2. Animation d'apparition des sections au scroll (sans dépendance)
(function() {
  const revealElements = document.querySelectorAll('.container, .news-item, .ong-value, .pastorale-value, .action-link');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.92;
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.3,1), transform 0.7s cubic-bezier(.4,2,.3,1)';
      } else {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('DOMContentLoaded', revealOnScroll);
})();

// 3. Animation de compteur dynamique pour les chiffres clés
function animateCounter(selector, duration = 1800) {
  document.querySelectorAll(selector).forEach(counter => {
    const target = +counter.dataset.target;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    function update() {
      start += step;
      if (start >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = start;
        requestAnimationFrame(update);
      }
    }
    update();
  });
}
// Utilisation : <span class="counter" data-target="1500"></span>
window.addEventListener('DOMContentLoaded', () => animateCounter('.counter'));

// 4. Effet de survol sur les images de galerie (zoom + overlay)
document.querySelectorAll('.news-img, .gallery-img').forEach(img => {
  img.style.transition = 'transform 0.4s cubic-bezier(.4,2,.3,1), box-shadow 0.3s';
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.07)';
    img.style.boxShadow = '0 8px 32px rgba(0,91,170,0.18)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = '';
    img.style.boxShadow = '';
  });
});

// 5. Modal universel pour affichage d'images ou d'infos
(function() {
  // Création du modal si non existant
  if (!document.getElementById('modal-universel')) {
    const modal = document.createElement('div');
    modal.id = 'modal-universel';
    modal.style.cssText = `
      display:none;position:fixed;z-index:2000;inset:0;background:rgba(0,0,0,0.75);
      align-items:center;justify-content:center;
    `;
    modal.innerHTML = `
      <div id="modal-content" style="background:#fff;border-radius:14px;max-width:90vw;max-height:90vh;overflow:auto;box-shadow:0 8px 32px rgba(0,91,170,0.18);position:relative;padding:2rem;">
        <button id="modal-close" style="position:absolute;top:10px;right:10px;background:none;border:none;font-size:2rem;color:#0072ce;cursor:pointer;"><i class="fa fa-times"></i></button>
        <div id="modal-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('modal-close').onclick = () => modal.style.display = 'none';
    modal.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });
  }
  // Fonction d'ouverture
  window.openModal = function(html) {
    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('modal-universel').style.display = 'flex';
  };
})();

// 6. Affichage d'image en grand dans le modal au clic
document.querySelectorAll('.news-img, .gallery-img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', function() {
    openModal(`<img src="${img.src}" alt="${img.alt}" style="max-width:80vw;max-height:70vh;border-radius:12px;box-shadow:0 4px 24px rgba(0,91,170,0.18);">`);
  });
});

// 7. Animation du bouton retour en haut
(function() {
  const btn = document.getElementById('topBtn');
  if (btn) {
    btn.addEventListener('mouseenter', () => btn.style.background = '#ffd700');
    btn.addEventListener('mouseleave', () => btn.style.background = '#0072ce');
  }
})();

// 8. Animation de texte type "machine à écrire" pour les slogans
function typeWriter(element, text, speed = 60) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  element.textContent = '';
  typing();
}
// Utilisation : <span id="slogan"></span>
window.addEventListener('DOMContentLoaded', () => {
  const slogan = document.getElementById('slogan');
  if (slogan) typeWriter(slogan, slogan.dataset.text || slogan.textContent);
});

// 9. Animation d'apparition progressive du loader
(function() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.opacity = 1;
    setTimeout(() => {
      loader.style.transition = 'opacity 0.7s';
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = 'none', 700);
    }, 800);
  }
})();

// 10. Accessibilité : navigation clavier pour le menu
document.querySelectorAll('nav a, nav .dropbtn').forEach(link => {
  link.addEventListener('focus', function() {
    this.style.outline = '2px solid #ffd700';
    this.style.background = '#005baa';
  });
  link.addEventListener('blur', function() {
    this.style.outline = '';
    this.style.background = '';
  });
});

// 11. Notification toast universelle
window.showToast = function(message, duration = 3000) {
  let toast = document.getElementById('toast-universel');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-universel';
    toast.style.cssText = `
      position:fixed;bottom:40px;left:50%;transform:translateX(-50%);
      background:#0072ce;color:#fff;padding:1rem 2rem;border-radius:8px;
      font-size:1.1rem;box-shadow:0 2px 12px rgba(0,91,170,0.13);z-index:3000;
      opacity:0;transition:opacity 0.4s;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = 1;
  setTimeout(() => { toast.style.opacity = 0; }, duration);
};

// 12. Amélioration du formulaire partenaire (validation + feedback)
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    if (form.classList.contains('no-enhance')) return;
    let valid = true;
    form.querySelectorAll('input[required], textarea[required]').forEach(input => {
      if (!input.value.trim()) {
        input.style.borderColor = '#e74c3c';
        valid = false;
      } else {
        input.style.borderColor = '#0072ce';
      }
    });
    if (!valid) {
      showToast('Merci de remplir tous les champs obligatoires.');
      e.preventDefault();
    }
  });
});

// 13. Animation d’apparition des chiffres clés sur scroll (si présents)
window.addEventListener('scroll', () => {
  document.querySelectorAll('.counter').forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && !counter.classList.contains('counted')) {
      counter.classList.add('counted');
      animateCounter('.counter');
    }
  });
});