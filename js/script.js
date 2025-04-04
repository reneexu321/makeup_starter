// Run this once the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {

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

    // Expose search to global scope (so HTML button can call it)
    window.search = search;

    // Toggle the clicked dropdown
    document.querySelectorAll(".dropdown > button").forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            closeAllDropdowns();
            console.log("Clicked:", this.innerText); // added 
            const dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains("dropdown-content")){
                dropdown.classList.toggle("show");
            }
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener("click", () => {
        closeAllDropdowns();
    });
    
    function closeAllDropdowns() {
        document.querySelectorAll(".dropdown-content.show").forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
// });