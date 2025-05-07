document.addEventListener("DOMContentLoaded", function () {
  // Wait for 1.5 seconds before starting the animation
  setTimeout(function () {
    const gradientText = document.querySelector(
      ".markdown-content .gradient-text"
    );
    if (gradientText) {
      gradientText.classList.add("animate-text-gradient");
    }
  }, 1500); // 1.5 seconds
});
