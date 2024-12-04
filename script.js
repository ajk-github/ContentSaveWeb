document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleButton.textContent = document.body.classList.contains("dark-mode") ? "🌞" : "🌙";
    });
});
