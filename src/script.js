  
  
    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.getElementById("menuIcon");
        const sidebar = document.getElementById("sidebar");
    
        function toggleSidebar() {
            sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
        }
        menuIcon.addEventListener("click", toggleSidebar);
    });
    
    function closeSidebar() {
        const sidebar = document.getElementById("sidebar");
        const content = document.getElementById("content");
    
        sidebar.style.display = "none";
        content.style.width = "100%";
        content.style.left = "0";
    }
    function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const content = document.getElementById("content");
        const closebtn = document.getElementById("close");
    
        sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
    
        if (sidebar.style.display === "none") {
            content.style.width = "100%";
            content.style.left = "0";
        } else {
            closebtn.style.display = "block";
            content.style.width = "calc(100% - 250px)";
            content.style.left = "250px";
        }
    }
    
    