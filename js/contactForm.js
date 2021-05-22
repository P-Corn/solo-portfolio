const submitMessage = document.querySelector('.submit-message');

(function() {
    emailjs.init('user_WDObBAlbPYJe8ZiZ6VQ9w')
})();

window.onload = () => {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // generate 5 digit number for contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // IDs
        emailjs.sendForm('portfolio_site', 'portfolio_site', this)
            .then(() => {
                submitMessage.textContent = 'Message sent successfully';
                submitMessage.classList.add('success');
                document.getElementById('contact-form').reset()
                setTimeout(() => {
                    submitMessage.textContent = '';
                    submitMessage.classList.remove('success')
                }, 4000)
            }, (error) => {
                submitMessage.textContent = 'Message failed to send';
                submitMessage.classList.add('fail');
                console.log('Message failed to send. Error: ' + error);
                setTimeout(() => {
                    submitMessage.textContent = '';
                    submitMessage.classList.remove('fail')
                }, 4000)
            });
    });
}