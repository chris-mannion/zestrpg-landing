document.querySelector('.signup-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission

    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you! We'll notify you at ${email} when ZestRPG launches!`);

    fetch('https://script.google.com/macros/s/AKfycbxjiPkDmloOm8slUAqjPeOLGylG6KLk__c17sjvOrmqLH_fRbpq_DTmd81_599_jg/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'email': email
        })
    })
    .then(response => response.json())  // Parse JSON response
    .then(data => {
        console.log('Success:', data);
        // You can handle the response here if needed
    })
    .catch(error => console.error('Error:', error));

    this.reset();  // Reset the form fields
});
