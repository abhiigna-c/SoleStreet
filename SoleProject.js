const menus = document.querySelectorAll(".mega-menu");

menus.forEach(function(menu) {
    const content = menu.querySelector(".mega-menu-content");
    let timer;

    menu.addEventListener("mouseenter", function() {
        clearTimeout(timer);
        content.classList.add("active");
    });

    menu.addEventListener("mouseleave", function() {
        timer = setTimeout(function() {
            content.classList.remove("active");
        }, 500);
    });

});