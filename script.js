document.addEventListener("DOMContentLoaded", function() {
    var sidebarToggle = document.getElementById("sidebar-toggle");
    var sidebar = document.getElementById("sidebar");

    function toggleSidebar() {
        if (window.innerWidth <= 768) {
            if (sidebar.classList.contains("sidebar-visible")) {
                sidebar.classList.remove("sidebar-visible");
            } else {
                sidebar.classList.add("sidebar-visible");
            }
        }
    }

    sidebarToggle.addEventListener("click", toggleSidebar);

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove("sidebar-visible");
            sidebar.classList.remove("sidebar-hidden");
        }
    });
});