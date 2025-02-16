
// sidebar-start

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  
  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("sidebar");
    const menuButton = document.querySelector(".menu");
  
    // Check if the click is outside the sidebar and not on the menu button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
    }
  });
  
  // Close sidebar when pressing ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.getElementById("sidebar").classList.remove("active");
    }
  });
  
  // Close sidebar when clicking a menu item
  document.querySelectorAll(".sidebar ul li a").forEach(link => {
    link.addEventListener("click", function () {
        document.getElementById("sidebar").classList.remove("active");
    });
  });


// sidebar-end