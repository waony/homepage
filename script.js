document.addEventListener("DOMContentLoaded", function() {
    var sidebarToggle = document.getElementById("sidebar-toggle");
    var sidebar = document.getElementById("sidebar");

    sidebarToggle.addEventListener("click", function() {
        if (sidebar.classList.contains("sidebar-visible")) {
            sidebar.classList.remove("sidebar-visible");
            sidebar.classList.add("sidebar-hidden");
        } else {
            sidebar.classList.remove("sidebar-hidden");
            sidebar.classList.add("sidebar-visible");
        }
    });
});
