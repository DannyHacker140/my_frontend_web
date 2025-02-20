function sendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send('service_zly0h3i', 'template_ecs3owe', params)
        .then(function(res) {
            alert('Message sent successfully!');
            // Redirect to the homepage after the alert is closed
            window.location.href = "index.html";
        })
        .catch(function(error) {
            alert('Failed to send the message. Please try again.');
            console.error('Error:', error);
        });
}
  
