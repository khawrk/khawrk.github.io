const EmailJs = function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("IqvjpwmhQKAHvAVO8");
};

EmailJs()




window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_mqr94ob', 'template_0qo1gyl', this)
            .then(function () {
                console.log('SUCCESS!');
                document.getElementById('user_name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";
                alert("Successfully submit the form")
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

const formBtn = document.getElementById('submit')
const submitAlert = () => {
    alert("Form Sent")
}

