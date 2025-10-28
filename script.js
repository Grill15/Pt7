document.addEventListener('DOMContentLoaded', () => {
    
    const formContainer = document.getElementById('form-container');
    const subscribeForm = document.getElementById('subscribe-form');
    const emailInput = document.getElementById('email-input');
    const errorMessage = document.getElementById('error-message');
    
    const successDialog = document.getElementById('success-dialog');
    const subscribedEmailSpan = document.getElementById('subscribed-email');
    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!subscribeForm || !emailInput || !errorMessage || !successDialog || !subscribedEmailSpan || !formContainer) {
        console.error('Error: Could not find one or more required DOM elements.');
        return;
    }

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        const email = emailInput.value.trim();

        if (emailRegex.test(email)) {
            emailInput.classList.remove('error');
            errorMessage.classList.remove('visible');
            
            subscribedEmailSpan.textContent = email;
            
            formContainer.style.display = 'none';
            
            successDialog.showModal();

        } else {
            emailInput.classList.add('error');
            errorMessage.classList.add('visible');
        }
    });

    successDialog.addEventListener('close', () => {
        formContainer.style.display = 'block'; 
        emailInput.value = ''; 
    });
});