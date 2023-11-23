let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.rightnav ul a');

window.onscroll = () => {
    sections.forEach(sec=> {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.rightnav ul a[href*='+ id +']').classList.add('active');
            })
        };
    });
};
let nav = document.querySelector(".rightnav ul");
let hamburger = document.querySelector("#ham");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("act");
});
