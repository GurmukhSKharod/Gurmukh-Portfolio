const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 120);
    }

    if (menu && navlist) {
        menu.classList.remove("bx-x");
        navlist.classList.remove("active");
    }
});

if (menu && navlist) {
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("bx-x");
        navlist.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        const clickedInsideMenu = e.target.closest(".navlist, #menu-icon");
        if (!clickedInsideMenu) {
            menu.classList.remove("bx-x");
            navlist.classList.remove("active");
        }
    });
}

// card functionality for projects + experience
document.querySelectorAll('.Projects-content .row, .experience-content .row').forEach((card) => {
    card.addEventListener('click', (e) => {
        const blockedClick = e.target.closest(
            '.github-icon, .netlify-icon, .company-link, .languages .box'
        );

        if (blockedClick) return;

        card.classList.toggle('show-description');
    });
});

// one-time experience reveal
document.addEventListener("DOMContentLoaded", () => {
    const expCards = document.querySelectorAll(".experience-row.exp-anim");
    if (!expCards.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        expCards.forEach((card) => card.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
    });

    expCards.forEach((card) => observer.observe(card));
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