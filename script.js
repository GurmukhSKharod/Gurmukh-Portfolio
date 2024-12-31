const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky",this.window.scrollY > 120);
})
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
    menu.remove.toggle('bx-x');
    navlist.remove.toggle('active');
}

// card functionality
document.querySelectorAll('.row').forEach((card) => {
    const githubIcon = card.querySelector('.github-icon');

    card.addEventListener('click', (e) => {
        // Prevent toggling description when GitHub icon is clicked
        if (e.target === githubIcon || githubIcon.contains(e.target)) return;

        card.classList.toggle('show-description'); // Toggle description visibility
    });
});

// Email functionality from form to Contact Me
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

// Connect to EmailJS
const sendEmail = (e) => {
    e.preventDefault('')

    // serviceID - templateID - #form-id in html - public key in account on EmailJS
    emailjs.sendForm('service_ch2aj8t', 'template_dfgun2b', '#contact-form', 'yMH25VChUO4KL-WQJ')

    .then(()=> {
        contactMessage.textContent = "Message Sent Successfully!"

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()

    })
}
contactForm.addEventListener('submit', sendEmail);