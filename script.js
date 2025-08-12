// Copyright year + simple demo submit
document.addEventListener('DOMContentLoaded', () => {
  const c = document.getElementById('copyright');
  if (c) c.textContent = `© ${new Date().getFullYear()} Ops Detangling Capital`;

  const form = document.getElementById('lead-form');
  const thanks = document.getElementById('thanks');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (thanks) thanks.classList.remove('hidden');
      form.reset();
      // TODO: wire to EmailJS, Formspree, or Apollo webhook
    });
  }
});
