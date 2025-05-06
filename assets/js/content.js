document.addEventListener("DOMContentLoaded", function () {
  const options = Array.from(document.querySelectorAll(".content-option"));
  const contents = Array.from(document.querySelectorAll(".content-item"));
  const progressBar = document.querySelector(".progress-bar");

  let currentIndex = 0;
  let prevIndex = null;
  let timer;
  let animationDuration = 5000; // 5 seconds
  let progressInterval;
  let autoRotationActive = true;

  // Function to show a specific content
  function showContent(index) {
    // Store previous index
    prevIndex = currentIndex;

    // Update active state for options
    options.forEach((option) => {
      option.classList.remove("active");

      // Reset indicator animation by removing and re-adding the element
      const oldIndicator = option.querySelector(".option-indicator");
      if (oldIndicator) {
        const newIndicator = oldIndicator.cloneNode(true);
        oldIndicator.parentNode.replaceChild(newIndicator, oldIndicator);
      }
    });

    // Add active class to selected option
    options[index].classList.add("active");

    // Update active state for content with transition direction
    contents.forEach((content) => {
      content.classList.remove("active");
      content.classList.remove("prev");
    });

    // Set the previous content with prev class for exit animation
    if (prevIndex !== null && prevIndex !== index) {
      contents[prevIndex].classList.add("prev");

      // Force a reflow before adding the active class to the new content
      void contents[index].offsetWidth;
    }

    // Add active class to current content for entrance animation
    contents[index].classList.add("active");

    // Reset progress bar
    resetProgressBar();

    // Current index update
    currentIndex = index;
  }

  // Function to start progress bar
  function startProgressBar() {
    // Clear any existing interval
    if (progressInterval) {
      clearInterval(progressInterval);
    }

    // Reset progress bar width
    progressBar.style.width = "0%";

    let startTime = Date.now();

    progressInterval = setInterval(() => {
      let elapsedTime = Date.now() - startTime;
      let progress = (elapsedTime / animationDuration) * 100;

      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);

        // Move to next content only if auto rotation is active
        if (autoRotationActive) {
          nextContent();
        }
      }

      progressBar.style.width = `${progress}%`;
    }, 50); // Update every 50ms for smoother animation
  }

  // Function to reset progress bar
  function resetProgressBar() {
    if (progressInterval) {
      clearInterval(progressInterval);
    }
    progressBar.style.width = "0%";
    startProgressBar();
  }

  // Function to show next content
  function nextContent() {
    // Calculate next index: increment and wrap around if needed
    const nextIndex = (currentIndex + 1) % options.length;
    showContent(nextIndex);

    // Start auto rotation for the next content
    startAutoRotation();
  }

  // Initialize with the first content
  showContent(0);

  // Add click event listeners to options
  options.forEach((option, index) => {
    option.addEventListener("click", (e) => {
      e.preventDefault();
      // Stop any existing auto-rotation
      if (timer) {
        clearTimeout(timer);
      }

      // Show the selected content
      showContent(index);

      // Restart auto-rotation from the new index
      startAutoRotation();
    });
  });

  // Start automatic rotation
  function startAutoRotation() {
    if (timer) {
      clearTimeout(timer);
    }

    autoRotationActive = true;

    timer = setTimeout(() => {
      nextContent();
    }, animationDuration);
  }

  // Start automatic rotation
  startAutoRotation();

  // Pause rotation when user hovers over content
  const contentDetails = document.querySelector(".content-details");

  contentDetails.addEventListener("mouseenter", () => {
    autoRotationActive = false;
    if (timer) {
      clearTimeout(timer);
    }
    if (progressInterval) {
      clearInterval(progressInterval);
    }
  });

  contentDetails.addEventListener("mouseleave", () => {
    autoRotationActive = true;
    startAutoRotation();
    startProgressBar();
  });
});
