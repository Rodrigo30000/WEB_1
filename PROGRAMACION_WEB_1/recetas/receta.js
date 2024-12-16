const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

// Función para validar el formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  // Regex para validar los campos
  const phoneRegex = /^\d{8}$/; // Exactamente 8 dígitos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Formato de correo

  if (name === '') {
    formMessage.textContent = 'Nombre no debe estar vacio, por favor';
    return;
  }

  if (!phoneRegex.test(phone)) {
    formMessage.textContent = 'Celular debe tener 8 digitos ';
    return;
  }

  if (!emailRegex.test(email)) {
    formMessage.textContent = 'correo electronico no valido';
    return;
  }

  // Si todo es válido
  formMessage.textContent = 'FORMULARIO ENVIADO CORRECTAMENTE';
  formMessage.style.color = 'green';

  // Opcional: Reiniciar el formulario después de un tiempo
  setTimeout(() => {
    form.reset();
    formMessage.textContent = '';
    formMessage.style.color = 'red';
  }, 3000);
});
// MODAR BORRAR O MANTENER SEGUN SE NECESITE
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');
const viewMoreButtons = document.querySelectorAll('.view-more-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

viewMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    const description = button.getAttribute('data-description');
    modalDescription.textContent = description;
    modal.classList.add('active');
  });
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});
