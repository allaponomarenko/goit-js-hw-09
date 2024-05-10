let formData = {
    email: "",
    message: ""
  };

  document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      formData = JSON.parse(savedData);
      document.querySelector('[name="email"]').value = formData.email;
      document.querySelector('[name="message"]').value = formData.message;
    }
  });

  const form = document.querySelector('.feedback-form');

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', e => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      return alert('Please fill in all fields');
    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData = { email: "", message: "" };
  });

  //console.log(localStorage.getItem('feedback-form-state'));
