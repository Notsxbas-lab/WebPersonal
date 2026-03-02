// Aparecer elementos al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
});

// Función para copiar correo
function copyEmail() {
  const email = 'sebastiancamporenteria2434@gmail.com';
  const btn = event.target;
  
  navigator.clipboard.writeText(email).then(() => {
    const originalText = btn.textContent;
    btn.textContent = '¡Copiado!';
    btn.style.background = '#4ade80';
    
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
    }, 2000);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = email;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.textContent = '¡Copiado!';
    setTimeout(() => {
      btn.textContent = 'Copiar';
    }, 2000);
  });
}