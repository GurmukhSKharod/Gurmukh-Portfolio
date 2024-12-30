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

// New code for card functionality
document.querySelectorAll('.row').forEach((card) => {
    const githubIcon = card.querySelector('.github-icon');

    card.addEventListener('click', (e) => {
        // Prevent toggling description when GitHub icon is clicked
        if (e.target === githubIcon || githubIcon.contains(e.target)) return;

        card.classList.toggle('show-description'); // Toggle description visibility
    });
});