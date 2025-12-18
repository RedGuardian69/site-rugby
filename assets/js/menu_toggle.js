(() => {
    const drawer = document.getElementById("drawer");

    function toggleDrawer() {
        if (drawer) {
            drawer.classList.toggle("opened");
        }
    }

    document.querySelectorAll('[data-drawer="open"]').forEach((item) => {
        item.addEventListener('click', toggleDrawer);
    });

    document.querySelectorAll('[data-drawer="close"]').forEach((item) => {
        item.addEventListener('click', toggleDrawer);
    });

    document.querySelectorAll('[data-drawer="toggle"]').forEach((item) => {
        item.addEventListener('click', toggleDrawer);
    });
})();



