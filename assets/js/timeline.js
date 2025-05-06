document.addEventListener("DOMContentLoaded", () => {
  // Sequential animation of timeline elements
  setTimeout(() => {
    // Show milestones in sequence
    const milestones = [
      document.getElementById("milestone-1"),
      document.getElementById("milestone-2"),
      document.getElementById("milestone-3"),
      document.getElementById("milestone-4"),
      document.getElementById("milestone-5"),
      document.getElementById("milestone-6"),
    ];

    // Initialize progress indicator to make sure it starts from 0
    const progressLine = document.querySelector(".timeline-progress");
    progressLine.style.width = "0";

    // Reset and trigger animation
    void progressLine.offsetWidth; // Force reflow
    progressLine.style.animation =
      "progressLine 2.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";

    milestones.forEach((milestone, index) => {
      setTimeout(() => {
        milestone.classList.add("animated");
      }, 300 + index * 200); // Slightly slower animation for fewer elements
    });

    // Show current year marker
    setTimeout(() => {
      document.getElementById("current-year-marker").style.opacity = "1";
    }, 2200);
  }, 500);

  // Make milestones interactive with hover effects
  const allMilestones = document.querySelectorAll(".milestone");
  allMilestones.forEach((milestone) => {
    const dot = milestone.querySelector(".milestone-dot");
    const info = milestone.querySelector(".milestone-info");

    dot.addEventListener("mouseenter", () => {
      // Add extra glow on hover
      if (dot.classList.contains("dot-2030")) {
        // Special glow for white 2030 dot
        dot.style.boxShadow = `
          0 0 25px rgba(99, 102, 241, 0.7),
          0 0 40px rgba(99, 102, 241, 0.4),
          0 12px 30px rgba(0, 0, 0, 0.15),
          inset 0 0 20px rgba(255, 255, 255, 0.9),
          inset 0 0 40px rgba(255, 255, 255, 0.6)
        `;
      } else {
        // Regular glow for other dots
        dot.style.boxShadow = `
          0 0 20px rgba(99, 102, 241, 0.7),
          0 0 30px rgba(99, 102, 241, 0.4),
          0 12px 28px rgba(0, 0, 0, 0.15),
          inset 0 2px 5px rgba(255, 255, 255, 0.5)
        `;
      }
    });

    dot.addEventListener("mouseleave", () => {
      // Restore original shadow on mouse leave
      if (dot.classList.contains("dot-2030")) {
        // Reset white 2030 dot shadow
        dot.style.boxShadow = `
          0 0 25px rgba(99, 102, 241, 0.6),
          0 0 40px rgba(99, 102, 241, 0.3),
          0 10px 30px rgba(0, 0, 0, 0.15),
          inset 0 0 15px rgba(255, 255, 255, 0.8),
          inset 0 0 30px rgba(255, 255, 255, 0.5)
        `;
      } else {
        // Reset regular dot shadow
        dot.style.boxShadow = `
          0 0 15px rgba(99, 102, 241, 0.4),
          0 0 25px rgba(99, 102, 241, 0.2),
          0 8px 20px rgba(0, 0, 0, 0.1),
          inset 0 2px 5px rgba(255, 255, 255, 0.5)
        `;
      }
    });
  });

  // Function to create pulsing neon glow effect on the timeline
  function pulseTimelineGlow() {
    const timeline = document.querySelector(".timeline-line");
    let intensity = 0;
    let increasing = true;
    const minShadow = 15;
    const maxShadow = 25;
    const step = 0.2;

    function pulse() {
      if (increasing) {
        intensity += step;
        if (intensity >= maxShadow) {
          increasing = false;
        }
      } else {
        intensity -= step;
        if (intensity <= minShadow) {
          increasing = true;
        }
      }

      timeline.style.boxShadow = `
        0 0 ${intensity}px rgba(99, 102, 241, 0.5),
        0 0 ${intensity * 1.5}px rgba(99, 102, 241, 0.3),
        0 0 ${intensity * 2}px rgba(99, 102, 241, 0.2),
        inset 0 0 8px rgba(255, 255, 255, 0.6)
      `;

      requestAnimationFrame(pulse);
    }

    requestAnimationFrame(pulse);
  }

  // Initialize the timeline glow effect
  pulseTimelineGlow();

  // Function to create floating decorative dots
  function createDecorativeDots() {
    const container = document.querySelector(".timeline-container");
    const dotCount = 20; // Number of floating dots
    const dots = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.className = "decorative-dot";

      // Random size class
      const sizeClass =
        Math.random() < 0.4
          ? "small"
          : Math.random() < 0.7
          ? "medium"
          : "large";
      dot.classList.add(sizeClass);

      // Random position
      const left = Math.random() * 100;
      const top = 20 + Math.random() * 60;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;

      // Random opacity
      dot.style.opacity = 0.3 + Math.random() * 0.5;

      // Random animation duration and delay
      const duration = 15 + Math.random() * 20;
      const delay = Math.random() * 10;
      dot.style.animation = `floatDot ${duration}s ease-in-out infinite ${delay}s`;

      container.appendChild(dot);
      dots.push({
        element: dot,
        left: left,
        top: top,
      });
    }

    // After all dots are created, create neural network connections
    setTimeout(() => {
      createNeuralNetworkLines(dots, container);
    }, 100);
  }

  // Function to create neural network connections between dots
  function createNeuralNetworkLines(dots, container) {
    // Only connect some dots to avoid visual clutter
    const maxConnections = 30;
    let connectionCount = 0;

    // For each dot, connect to 1-3 nearby dots
    dots.forEach((dot, index) => {
      // Calculate distance to all other dots and sort by distance
      const connections = dots
        .map((otherDot, otherIndex) => {
          if (otherIndex === index) return null; // Skip self

          const dx = dot.left - otherDot.left;
          const dy = dot.top - otherDot.top;
          const distance = Math.sqrt(dx * dx + dy * dy);

          return {
            dot: otherDot,
            distance: distance,
          };
        })
        .filter((item) => item !== null)
        .sort((a, b) => a.distance - b.distance);

      // Connect to 1-3 closest dots if within threshold distance
      const maxLocalConnections = 1 + Math.floor(Math.random() * 3);
      const maxDistance = 30; // Max distance for connection (as percentage of container)

      for (
        let i = 0;
        i < Math.min(maxLocalConnections, connections.length);
        i++
      ) {
        if (connectionCount >= maxConnections) break;
        if (connections[i].distance > maxDistance) continue;

        const targetDot = connections[i].dot;

        // Create the connection line
        const line = document.createElement("div");
        line.className = "network-line";

        // Position the line at the source dot
        line.style.left = `${dot.left}%`;
        line.style.top = `${dot.top}%`;

        // Calculate the line's length and angle
        const dx = targetDot.left - dot.left;
        const dy = targetDot.top - dot.top;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

        // Set the line's width and rotation
        line.style.width = `${length}%`;
        line.style.transform = `rotate(${angle}deg)`;

        // Add line to the container
        container.appendChild(line);
        connectionCount++;

        // Fade in the line
        setTimeout(() => {
          line.style.opacity = 0.2 + Math.random() * 0.3;
        }, 1000 + Math.random() * 2000);
      }
    });
  }

  // Function to create flowing particles along the timeline
  function createTimelineParticles() {
    const timeline = document.querySelector(".timeline-line");
    const timelineContainer = document.querySelector(".timeline-container");
    const particleCount = 10;

    // Get timeline dimensions
    const timelineRect = timeline.getBoundingClientRect();
    const timelineWidth = timeline.offsetWidth;
    const containerRect = timelineContainer.getBoundingClientRect();

    function createParticle() {
      // Don't create particles if timeline is not visible
      if (!isElementInViewport(timeline)) return;

      const particle = document.createElement("div");
      particle.className = "timeline-particle";

      // Start from the beginning of the timeline
      particle.style.left = "5%";

      // Random size (2-4px)
      const size = 2 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      // Random opacity (0.5-1)
      particle.style.opacity = 0.5 + Math.random() * 0.5;

      timelineContainer.appendChild(particle);

      // Animate the particle along the timeline
      const duration = 5000 + Math.random() * 10000;
      let progress = 0;
      let lastTimestamp = null;

      function moveParticle(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const elapsed = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        progress += elapsed / duration;

        if (progress >= 1) {
          timelineContainer.removeChild(particle);
          return;
        }

        // Easing function for natural movement
        const position = easeInOut(progress);
        particle.style.left = `${5 + position * 79}%`; // Move from 5% to 84%

        requestAnimationFrame(moveParticle);
      }

      requestAnimationFrame(moveParticle);
    }

    // Create particles at random intervals
    function scheduleParticle() {
      const delay = 300 + Math.random() * 1000;
      setTimeout(() => {
        createParticle();
        scheduleParticle();
      }, delay);
    }

    // Start creating particles after initial animations
    setTimeout(scheduleParticle, 3000);
  }

  // Helper function for particle animation
  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  // Helper function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  // Call function to create dots after timeline is loaded
  setTimeout(createDecorativeDots, 1000);

  // Create timeline particles
  setTimeout(createTimelineParticles, 2500);

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // If reduced motion is preferred, set a class on the body element
  if (prefersReducedMotion) {
    document.body.classList.add("reduced-motion");
  }
});
