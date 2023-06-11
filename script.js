// script.js

const btn = document.getElementById('btn');

// document.getElementById('form').addEventListener('submit', function(event) {
//    event.preventDefault();
document.querySelector('#form').addEventListener('submit', function(event) {
  event.preventDefault();
  btn.value = 'Sending...';

  const serviceID = 'service_c8rs2xj'; 
  const templateID = 'template_pzi60re'; 

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});