/* Init Animation on scroll */

AOS.init({
    once: true,
});

/* Clone Main Menu, Social links in Mobile Menu */

var nav = document.querySelector("#nav #collapsibleNavbar").innerHTML;
var socialLinks = document.querySelector("#socialLinks").innerHTML;
document.querySelector("#mobileNav .offcanvas-body").innerHTML = nav + socialLinks;

/* Init Tooltip */

var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
