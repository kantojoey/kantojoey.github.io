function sendMail(event){
    event.preventDefault();

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_4kirde3", "template_so5xcz9", params)
        .then((response) => {
            console.log("SUCCESS", response);
            alert("Email sent!");
            document.querySelector("form").reset();
        })
        .catch((error) => {
            console.error("FAILED...", error);
            alert("Failed to send email.");
        });
}