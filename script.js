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

// Función para mostrar modal de correo
function showEmailModal() {
  const email = 'sebastiancamporenteria2434@gmail.com';
  
  // Crear modal
  const modal = document.createElement('div');
  modal.className = 'email-modal';
  modal.innerHTML = `
    <div class="email-modal-content">
      <button class="email-modal-close" onclick="this.closest('.email-modal').remove()">&times;</button>
      <h3>Mi correo</h3>
      <p>${email}</p>
      <button class="copy-btn" onclick="copyToClipboard('${email}')">Copiar correo</button>
    </div>
  `;
  
  // Agregar modal al body
  document.body.appendChild(modal);
  
  // Cerrar modal al hacer click fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Función para copiar al portapapeles
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('¡Correo copiado al portapapeles!');
  }).catch(() => {
    // Fallback para navegadores antiguos
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('¡Correo copiado al portapapeles!');
  });
}