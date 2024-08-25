// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form and add a submit event listener
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    });
  
    // Get the order modal and buttons
    const orderModal = document.getElementById('order-modal');
    const orderBtns = document.querySelectorAll('.order-btn');
  
    // Add a click event listener to each order button
    orderBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        orderModal.style.display = 'block';
      });
    });
  
    // Get the close modal button and add a click event listener
    const closeModalBtn = document.querySelector('.close-modal');
    closeModalBtn.addEventListener('click', () => {
      orderModal.style.display = 'none';
    });
  
    // Add a click event listener to the window to close the modal
    window.addEventListener('click', function(event) {
      if (event.target === orderModal) {
        orderModal.style.display = 'none';
      }
    });
  });