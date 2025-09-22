document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");
    const declineBtn = document.getElementById("declineCookies");
    const welcomeToast = document.getElementById("welcomeToast");

    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    } else {
        cookieBanner.style.display = "block";
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
        showWelcomeToast();
    });

    declineBtn.addEventListener("click", () => {
        cookieBanner.style.display = "none";
    });

    function showWelcomeToast() {
        const nombre = document.getElementById("Nombre").value.trim();
        let mensaje = "¡Bienvenido a la página!";
        if (nombre) {
            mensaje = `¡Bienvenido, ${nombre}! 🎮`;
        }
        welcomeToast.textContent = mensaje;
        welcomeToast.style.display = "block";
        welcomeToast.classList.add("show");
        setTimeout(() => {
            welcomeToast.classList.remove("show");
            welcomeToast.style.display = "none";
        }, 4000);
    }
});


