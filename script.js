document.addEventListener("DOMContentLoaded", function () {
	const navbar = document.querySelector(".navbar-custom");

	function updateNavbarStyle() {
		if (window.scrollY > 0) {
			navbar.classList.remove("navbar-top");
			navbar.classList.add("scrolled");
		} else {
			navbar.classList.add("navbar-top");
			navbar.classList.remove("scrolled");
		}
	}

	// Początkowy stan
	updateNavbarStyle();

	// Zmieniaj klasę przy scrollowaniu
	window.addEventListener("scroll", updateNavbarStyle);
});
