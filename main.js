
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


//counter
const targetDate = new Date('2025-03-07T09:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    } else {
      // Set all values to 0 when the countdown ends
      document.getElementById('days').textContent = '0';
      document.getElementById('hours').textContent = '0';
      document.getElementById('minutes').textContent = '0';
      document.getElementById('seconds').textContent = '0';
    }
  }

  // Initial call and periodic updates
  updateCountdown();
  setInterval(updateCountdown, 1000); // Update every second

// counter-end