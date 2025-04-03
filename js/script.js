// Function to handle search logic
function search() {
    const input = document.getElementById("searchInput").value.trim();
  
    // If the input is empty, alert the user
    if (input === "") {
      alert("Please enter a search term.");
    } else {
      // Otherwise, show the searched text
      alert("You searched for: " + input);
    }
}

// Toggle the clicked dropdown
document.querySelectorAll(".dropbtn").forEach(button => {
    button.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevents window click from closing it instantly
        closeAllDropdowns(); // Closes others
    
        const dropdown = this.nextElementSibling;
        if (dropdown && dropdown.classList.contains("dropdown-content")) {
            dropdown.classList.toggle("show");
        }
    });
});

// Close dropdowns when clicking outside
window.addEventListener("click", () => {
    closeAllDropdowns();
});
  
function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-content").forEach(menu => {
        menu.style.display = "none";
    });
}
  