const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = contactForm.name.value;
  const email = contactForm.email.value;
  const message = contactForm.message.value;

  // Pour l'instant, on affiche juste un message de confirmation
  alert(`Merci ${name} !\nVotre message a été envoyé avec succès.`);

  // Réinitialiser le formulaire
  contactForm.reset();
});
