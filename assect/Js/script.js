
        
        // Form validation
        const forms = document.querySelectorAll('.email-signup');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = form.querySelector('.email-input');
                const email = emailInput.value.trim();
                
                if (validateEmail(email)) {
                    alert('Thank you for signing up!');
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        });
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }
