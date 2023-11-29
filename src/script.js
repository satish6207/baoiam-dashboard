
    function toggleSidebar() {
        var content = document.getElementById("content");
        var sidebar = document.getElementById("sidebar");

        sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";

        content.style.display = sidebar.style.display === "block" ? "none" : "block";  
    }

    