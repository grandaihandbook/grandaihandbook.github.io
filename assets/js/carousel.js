// Optimized Video Carousel with smooth sliding transitions
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const slides = document.querySelectorAll(".carousel-item");
  const indicators = document.querySelectorAll(".indicator");
  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".prev-button");

  if (!slides.length || !indicators.length || !nextButton || !prevButton) {
    console.error("Missing essential carousel elements");
    return;
  }

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoplayTimer = null;
  let slidesReady = false;
  let isAnimating = false;
  let videoPlaybackAttempts = {}; // Track video playback attempts

  // Pre-load all videos
  function preloadVideos() {
    let videosLoaded = 0;
    const totalVideos = slides.length;

    slides.forEach((slide, index) => {
      const video = slide.querySelector("video");
      if (video) {
        // Set important attributes
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("preload", "auto");

        // Keep track of this video element
        videoPlaybackAttempts[index] = 0;

        // Add error event handler to detect when videos fail
        video.addEventListener("error", function (e) {
          console.error(`Video ${index} error:`, e);
          // Reset the video source as a recovery attempt
          if (video.querySelector("source")) {
            const src = video.querySelector("source").src;
            video.querySelector("source").src = src;
            video.load();
          }
        });

        // Add loading event
        video.addEventListener("loadeddata", function () {
          console.log(`Video ${index + 1} loaded`);
          videosLoaded++;

          // When all videos are loaded, start the carousel
          if (videosLoaded === totalVideos) {
            console.log("All videos preloaded, starting carousel");
            slidesReady = true;
            initCarousel();
          }
        });

        // Add visibility change handler to restart videos when tab becomes visible again
        document.addEventListener("visibilitychange", function () {
          if (document.visibilityState === "visible") {
            // If the current slide has a video, ensure it's playing
            const currentVideo = slides[currentIndex].querySelector("video");
            if (currentVideo) {
              playVideo(currentVideo);
            }
          }
        });

        // Force load the video
        video.load();
      }
    });

    // Fallback in case videos take too long
    setTimeout(() => {
      if (!slidesReady) {
        console.log(
          "Fallback: starting carousel even though not all videos loaded"
        );
        slidesReady = true;
        initCarousel();
      }
    }, 3000); // Increased timeout for slower connections
  }

  // Initialize carousel
  function initCarousel() {
    // Setup slide positions
    slides.forEach((slide, index) => {
      // Set initial positions
      if (index === 0) {
        // First slide is active and visible
        slide.classList.add("active");
        slide.style.transform = "translateX(0)";
        slide.style.opacity = "1";
        slide.style.zIndex = "2";
        indicators[index].classList.add("active");

        // Play the video in the first slide
        playVideo(slide.querySelector("video"));
      } else {
        // Other slides are positioned to the right
        slide.classList.remove("active");
        slide.style.transform = "translateX(100%)";
        slide.style.opacity = "0";
        slide.style.zIndex = "1";
        indicators[index].classList.remove("active");

        // Preload next slide's video
        if (index === 1) {
          const nextVideo = slide.querySelector("video");
          if (nextVideo) {
            // Don't play, just prepare it
            nextVideo.currentTime = 0;
            nextVideo.load();
          }
        }
      }
    });

    // Start autoplay
    startAutoplay();
  }

  // Function to play video with better error handling
  function playVideo(video) {
    if (!video) return;

    // Reset video to beginning
    video.currentTime = 0;

    // Ensure it's muted (for autoplay)
    video.muted = true;

    // Check if video source exists
    const source = video.querySelector("source");
    if (source && !source.src) {
      console.error("Video source is empty, trying to fix");
      const slideIndex = Array.from(slides).findIndex(
        (slide) => slide.querySelector("video") === video
      );

      // Try to repair the source
      if (slideIndex >= 0) {
        const expectedPath = `/assets/videos/main/${slideIndex + 1}.mp4`;
        source.src = expectedPath;
        video.load();
      }
    }

    // Get index of the current video's slide
    const slideIndex = Array.from(slides).findIndex(
      (slide) => slide.querySelector("video") === video
    );

    // Track attempts per video
    if (slideIndex >= 0) {
      if (!videoPlaybackAttempts[slideIndex]) {
        videoPlaybackAttempts[slideIndex] = 0;
      }
      videoPlaybackAttempts[slideIndex]++;
    }

    // Play with error handling
    try {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video play error:", error);

          // Check if we've tried too many times
          if (slideIndex >= 0 && videoPlaybackAttempts[slideIndex] < 5) {
            // Try again with a delay
            setTimeout(() => {
              // Force reload the video before attempting to play again
              video.load();
              video.play().catch((e) => {
                console.log("Retry failed:", e);
                // Last resort: replace the video element
                if (slideIndex >= 0 && videoPlaybackAttempts[slideIndex] >= 4) {
                  regenerateVideoElement(video, slideIndex);
                }
              });
            }, 200);
          } else if (slideIndex >= 0) {
            // Too many attempts, try regenerating the video element
            regenerateVideoElement(video, slideIndex);
          }
        });
      }
    } catch (e) {
      console.error("Play error:", e);
      if (slideIndex >= 0) {
        regenerateVideoElement(video, slideIndex);
      }
    }
  }

  // Function to completely regenerate a problematic video element
  function regenerateVideoElement(oldVideo, slideIndex) {
    if (!oldVideo || slideIndex < 0) return;

    console.log(`Regenerating video element for slide ${slideIndex}`);

    // Create a new video element
    const newVideo = document.createElement("video");
    newVideo.muted = true;
    newVideo.setAttribute("playsinline", "");
    newVideo.setAttribute("preload", "auto");
    newVideo.loop = true;

    // Create new source element
    const source = document.createElement("source");
    source.src = `/assets/videos/main/${slideIndex + 1}.mp4`;
    source.type = "video/mp4";

    // Add source to video
    newVideo.appendChild(source);

    // Add fallback text
    const fallbackText = document.createTextNode(
      "Your browser does not support the video tag."
    );
    newVideo.appendChild(fallbackText);

    // Replace old video with new one
    oldVideo.parentNode.replaceChild(newVideo, oldVideo);

    // Reset attempts counter
    videoPlaybackAttempts[slideIndex] = 0;

    // Load and play the new video
    newVideo.load();

    // Only play if this is the current slide
    if (currentIndex === slideIndex) {
      setTimeout(() => {
        newVideo
          .play()
          .catch((e) => console.error("Failed to play regenerated video:", e));
      }, 100);
    }
  }

  // Change slide function with smooth transitions
  function goToSlide(index, direction = "next") {
    // Prevent multiple transitions at once
    if (isAnimating) return;
    isAnimating = true;

    // Validate index
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    // If it's the same slide, do nothing
    if (index === currentIndex) {
      isAnimating = false;
      return;
    }

    // Get current and next slides
    const currentSlide = slides[currentIndex];
    const nextSlide = slides[index];

    // Calculate the upcoming slide index (for preloading)
    const upcomingIndex = (index + 1) % totalSlides;
    const upcomingSlide = slides[upcomingIndex];

    // Pause current video
    const currentVideo = currentSlide.querySelector("video");
    if (currentVideo) {
      currentVideo.pause();
      // Save video position for potential resumption
      if (currentVideo.readyState >= 2) {
        currentVideo.currentTime = 0; // Reset to beginning for next viewing
      }
    }

    // Set up the transition based on direction
    if (direction === "next") {
      // Current slide moves left, next slide comes from right
      currentSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      currentSlide.style.transform = "translateX(-100%)";
      currentSlide.style.opacity = "0";

      // Position next slide off-screen right first
      nextSlide.style.transition = "none";
      nextSlide.style.transform = "translateX(100%)";
      nextSlide.style.opacity = "0";
      nextSlide.style.zIndex = "2";

      // Force reflow
      nextSlide.offsetHeight;

      // Then transition in from right
      nextSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      nextSlide.style.transform = "translateX(0)";
      nextSlide.style.opacity = "1";
    } else {
      // Current slide moves right, next slide comes from left
      currentSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      currentSlide.style.transform = "translateX(100%)";
      currentSlide.style.opacity = "0";

      // Position next slide off-screen left first
      nextSlide.style.transition = "none";
      nextSlide.style.transform = "translateX(-100%)";
      nextSlide.style.opacity = "0";
      nextSlide.style.zIndex = "2";

      // Force reflow
      nextSlide.offsetHeight;

      // Then transition in from left
      nextSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      nextSlide.style.transform = "translateX(0)";
      nextSlide.style.opacity = "1";
    }

    // Update indicators
    indicators[currentIndex].classList.remove("active");
    indicators[index].classList.add("active");

    // After transition completes
    setTimeout(() => {
      // Play next video
      const nextVideo = nextSlide.querySelector("video");
      if (nextVideo) {
        // Check if video needs regeneration (black screen fix)
        if (nextVideo.readyState < 2 || videoPlaybackAttempts[index] > 3) {
          regenerateVideoElement(nextVideo, index);
        } else {
          playVideo(nextVideo);
        }
      }

      // Update classes for screen readers and backup styles
      currentSlide.classList.remove("active");
      nextSlide.classList.add("active");

      // Reset current slide z-index
      currentSlide.style.zIndex = "1";

      // Preload upcoming video
      const upcomingVideo = upcomingSlide.querySelector("video");
      if (upcomingVideo) {
        // Just load it without playing
        upcomingVideo.currentTime = 0;
        upcomingVideo.load();
      }

      // Allow next transition
      isAnimating = false;
    }, 500);

    // Update current index
    currentIndex = index;
  }

  // Next slide function
  function nextSlide() {
    goToSlide((currentIndex + 1) % totalSlides, "next");
  }

  // Previous slide function
  function prevSlide() {
    goToSlide((currentIndex - 1 + totalSlides) % totalSlides, "prev");
  }

  // Start autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      // Check if current video is healthy before advancing
      const currentVideo = slides[currentIndex].querySelector("video");
      if (currentVideo && currentVideo.readyState < 2) {
        // Video not ready, try to fix it before moving on
        regenerateVideoElement(currentVideo, currentIndex);
        // Wait a moment before advancing
        setTimeout(nextSlide, 1000);
      } else {
        nextSlide();
      }
    }, 6000);
  }

  // Stop autoplay
  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  // Set up click event listeners
  nextButton.addEventListener("click", function () {
    nextSlide();
    stopAutoplay();
    startAutoplay();
  });

  prevButton.addEventListener("click", function () {
    prevSlide();
    stopAutoplay();
    startAutoplay();
  });

  // Set up indicator click events
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      // Determine direction based on index
      const direction = index > currentIndex ? "next" : "prev";
      goToSlide(index, direction);
      stopAutoplay();
      startAutoplay();
    });
  });

  // Set up keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextSlide();
      stopAutoplay();
      startAutoplay();
    } else if (e.key === "ArrowLeft") {
      prevSlide();
      stopAutoplay();
      startAutoplay();
    }
  });

  // Set up hover pause
  const wrapper = document.querySelector(".carousel-items-wrapper");
  if (wrapper) {
    wrapper.addEventListener("mouseenter", stopAutoplay);
    wrapper.addEventListener("mouseleave", startAutoplay);
  }

  // Add window focus/blur event handlers to manage resources
  window.addEventListener("focus", function () {
    console.log("Window focused - reactivating carousel");
    // If autoplay was stopped, restart it
    startAutoplay();

    // Ensure current video is playing
    const currentVideo = slides[currentIndex].querySelector("video");
    if (currentVideo) {
      playVideo(currentVideo);
    }
  });

  window.addEventListener("blur", function () {
    console.log("Window blurred - conserving resources");
    // Optional: You can pause videos when window loses focus to save resources
    const currentVideo = slides[currentIndex].querySelector("video");
    if (currentVideo) {
      currentVideo.pause();
    }
  });

  // Health check interval - periodically check and fix videos
  setInterval(() => {
    // Check current video health
    const currentVideo = slides[currentIndex].querySelector("video");
    if (currentVideo && (currentVideo.readyState < 2 || currentVideo.paused)) {
      console.log("Health check: Current video needs attention");
      playVideo(currentVideo);
    }
  }, 10000); // Check every 10 seconds

  // Start by preloading videos
  preloadVideos();
});
