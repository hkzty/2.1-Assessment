    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById('contact-form');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Thank you for contacting us! We will get back to you soon.');
                form.reset();
            });

            const orderModal = document.getElementById('order-modal');
            const orderBtns = document.querySelectorAll('.order-btn'); // Add this class to order buttons in your products section

            orderBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    orderModal.style.display = 'block';
                });
            });

            const closeModalBtn = document.querySelector('.close-modal');
            closeModalBtn.addEventListener('click', () => {
                orderModal.style.display = 'none';
            });

            window.onclick = function(event) {
                if (event.target === orderModal) {
                    orderModal.style.display = 'none';
                }
            };
        });
    </script>
