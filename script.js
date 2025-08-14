// Auto-year + simple form handling
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('copyright');
  if (year) year.textContent = `© ${new Date().getFullYear()} Loan Link`;

  const form = document.getElementById('lead-form');
  const thanks = document.getElementById('thanks');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (thanks) thanks.classList.remove('hidden');
      form.reset();
      // Wire this to EmailJS/Formspree/Apollo when you're ready.
    });
  }
});
