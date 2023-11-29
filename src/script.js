  
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
            sidebar.onfullscreenchange.display = "block";
        }
    }
    // document.addEventListener("fullscreenchange", function () {
    //     const sidebar = document.getElementById("sidebar");
    //     const content = document.getElementById("content");
    //     const closeIcon = document.getElementById("close");
    
    //     if (document.fullscreenElement) {
    //         sidebar.style.display = "block";
    //         // closeIcon.style.display = "block";
    //         content.style.width = "calc(100% - 250px)";
    //         content.style.left = "250px";
    //     } else {
    //         sidebar.style.display = "none";
    //         // closeIcon.style.display = "none";
    //         content.style.width = "100%";
    //         content.style.left = "0";
    //     }
    // });
    
    