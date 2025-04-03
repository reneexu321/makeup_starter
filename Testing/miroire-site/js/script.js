function search() {
  const input = document.getElementById("searchInput").value.trim();
  if (input === "") {
    alert("Please enter a search term.");
  } else {
    alert("You searched for: " + input);
  }
}
