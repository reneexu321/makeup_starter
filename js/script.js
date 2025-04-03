document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdown = button.nextElementSibling;
        dropdown.classList.toggle('show');
    });
});

// close dropdowns when clicking outside
window.addEventListener('click', e=> {
    if (!e.target.matches('.dropbtn')) {
        document.querySelectorAll('.dropdown-content').forEach(drop => {
            drop.classList.remove('show');
        });
    }
});


function search() {
    const input = document.getElementById("searchInput").ariaValueMax;
    alert("You searched for: " + input);
}