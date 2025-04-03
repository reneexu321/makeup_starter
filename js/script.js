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
  