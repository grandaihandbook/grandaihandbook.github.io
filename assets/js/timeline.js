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
      const left = 5 + Math.random() * 90; // Keep within 5-95% range
      const top = 20 + Math.random() * 60;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;

      // Random opacity
      dot.style.opacity = 0.3 + Math.random() * 0.5;

      // Custom dynamic animation
      // Instead of using the CSS animation, we'll do custom animation with JavaScript
      const initialLeft = left;
      const initialTop = top;
      const moveRangeX = 5 + Math.random() * 10; // Horizontal movement range (%)
      const moveRangeY = 10 + Math.random() * 15; // Vertical movement range (%)
      const speedFactor = 0.2 + Math.random() * 0.3; // Random speed
      const phaseOffset = Math.random() * Math.PI * 2; // Random starting point in animation

      // Store dot data for animation
      dots.push({
        element: dot,
        initialLeft: initialLeft,
        initialTop: initialTop,
        moveRangeX: moveRangeX,
        moveRangeY: moveRangeY,
        speedFactor: speedFactor,
        phaseOffset: phaseOffset,
      });

      container.appendChild(dot);
    }

    // Animate dots with requestAnimationFrame for smoother performance
    let startTime = null;

    function animateDots(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Update each dot position
      dots.forEach((dot) => {
        // Calculate new position using sine waves for smooth natural movement
        const xOffset =
          Math.sin((elapsed * dot.speedFactor) / 1000 + dot.phaseOffset) *
          dot.moveRangeX;
        const yOffset =
          Math.cos((elapsed * dot.speedFactor) / 1000 + dot.phaseOffset * 1.5) *
          dot.moveRangeY;

        // Apply new position
        dot.element.style.left = `${dot.initialLeft + xOffset}%`;
        dot.element.style.top = `${dot.initialTop + yOffset}%`;
      });

      // Continue animation
      requestAnimationFrame(animateDots);
    }

    // Start animation
    requestAnimationFrame(animateDots);

    // After all dots are created, create neural network connections
    setTimeout(() => {
      createNeuralNetworkLines(dots, container);
    }, 100);

    return dots; // Return dots array for use in updating network lines
  }

  // Function to create neural network connections between dots
  function createNeuralNetworkLines(dots, container) {
    // Only connect some dots to avoid visual clutter
    const maxConnections = 30;
    let connectionCount = 0;
    const connections = [];

    // For each dot, connect to 1-3 nearby dots
    dots.forEach((dot, index) => {
      // Calculate distance to all other dots and sort by distance
      const nearbyDots = dots
        .map((otherDot, otherIndex) => {
          if (otherIndex === index) return null; // Skip self

          const dx = dot.initialLeft - otherDot.initialLeft;
          const dy = dot.initialTop - otherDot.initialTop;
          const distance = Math.sqrt(dx * dx + dy * dy);

          return {
            dot: otherDot,
            distance: distance,
            index: otherIndex,
          };
        })
        .filter((item) => item !== null)
        .sort((a, b) => a.distance - b.distance);

      // Connect to 1-3 closest dots if within threshold distance
      const maxLocalConnections = 1 + Math.floor(Math.random() * 3);
      const maxDistance = 30; // Max distance for connection (as percentage of container)

      for (
        let i = 0;
        i < Math.min(maxLocalConnections, nearbyDots.length);
        i++
      ) {
        if (connectionCount >= maxConnections) break;
        if (nearbyDots[i].distance > maxDistance) continue;

        // Create the connection line
        const line = document.createElement("div");
        line.className = "network-line";

        // Add line to the container
        container.appendChild(line);

        // Store connection data for updating
        connections.push({
          line: line,
          source: dot,
          target: nearbyDots[i].dot,
        });

        connectionCount++;

        // Fade in the line
        setTimeout(() => {
          line.style.opacity = 0.2 + Math.random() * 0.3;
        }, 1000 + Math.random() * 2000);
      }
    });

    // Function to update line positions as dots move
    function updateLines() {
      connections.forEach((conn) => {
        // Get current positions of source and target dots
        const sourceX = parseFloat(conn.source.element.style.left);
        const sourceY = parseFloat(conn.source.element.style.top);
        const targetX = parseFloat(conn.target.element.style.left);
        const targetY = parseFloat(conn.target.element.style.top);

        // Calculate the line's length and angle
        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

        // Update the line's position, width and rotation
        conn.line.style.left = `${sourceX}%`;
        conn.line.style.top = `${sourceY}%`;
        conn.line.style.width = `${length}%`;
        conn.line.style.transform = `rotate(${angle}deg)`;
      });

      // Continue updating
      requestAnimationFrame(updateLines);
    }

    // Start updating line positions
    requestAnimationFrame(updateLines);
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

  // NEW ENHANCED FUNCTIONS

  // Enhanced particle system with scroll responsiveness
  function createEnhancedParticles() {
    const particles = document.querySelectorAll(".decorative-dot");
    let scrollY = window.scrollY || window.pageYOffset;
    let lastScrollY = scrollY;

    // Response to scroll
    window.addEventListener("scroll", () => {
      scrollY = window.scrollY || window.pageYOffset;
      const scrollDelta = scrollY - lastScrollY;

      particles.forEach((particle) => {
        // Get current position values
        const particleY = parseFloat(particle.style.top);
        const particleX = parseFloat(particle.style.left);

        if (!isNaN(particleY) && !isNaN(particleX)) {
          // Apply subtle movement on scroll
          particle.style.top = `${particleY + scrollDelta * 0.01}%`;
          particle.style.left = `${particleX + scrollDelta * 0.002}%`;
        }
      });

      lastScrollY = scrollY;
    });
  }

  // Create animated pathways between milestone dots
  function createMilestonePathways() {
    const container = document.querySelector(".timeline-container");
    const milestones = document.querySelectorAll(".milestone");

    // For consecutive milestones, create animated pathways
    for (let i = 0; i < milestones.length - 1; i++) {
      const start = milestones[i].querySelector(".milestone-dot");
      const end = milestones[i + 1].querySelector(".milestone-dot");

      const startRect = start.getBoundingClientRect();
      const endRect = end.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      // Create pathway
      const pathway = document.createElement("div");
      pathway.className = "neural-pathway";
      container.appendChild(pathway);

      // Calculate relative positions
      const startLeft =
        ((startRect.left + startRect.width / 2 - containerRect.left) /
          containerRect.width) *
        100;
      const startTop =
        ((startRect.top + startRect.height / 2 - containerRect.top) /
          containerRect.height) *
        100;
      const endLeft =
        ((endRect.left + endRect.width / 2 - containerRect.left) /
          containerRect.width) *
        100;

      // Position and size pathway
      pathway.style.left = `${startLeft}%`;
      pathway.style.top = `${startTop}%`;
      pathway.style.width = `${endLeft - startLeft}%`;

      // Add flowing particles to pathway
      for (let j = 0; j < 3; j++) {
        const particle = document.createElement("div");
        particle.className = "pathway-particle";
        pathway.appendChild(particle);

        // Add random delay for natural flow
        particle.style.animationDelay = `${j * 1.5 + Math.random()}s`;
      }
    }
  }

  // Enhanced neural network connections that light up
  function enhanceNeuralConnections() {
    const connections = document.querySelectorAll(".network-line");
    const milestones = document.querySelectorAll(".milestone");

    // Make connections light up on milestone hover
    milestones.forEach((milestone) => {
      const dot = milestone.querySelector(".milestone-dot");

      dot.addEventListener("mouseenter", () => {
        const dotRect = dot.getBoundingClientRect();

        connections.forEach((connection) => {
          const connRect = connection.getBoundingClientRect();

          // Calculate distance from milestone to connection
          const dotCenterX = dotRect.left + dotRect.width / 2;
          const dotCenterY = dotRect.top + dotRect.height / 2;
          const connCenterX = connRect.left + connRect.width / 2;
          const connCenterY = connRect.top + connRect.height / 2;

          const distance = Math.sqrt(
            Math.pow(dotCenterX - connCenterX, 2) +
              Math.pow(dotCenterY - connCenterY, 2)
          );

          // Activate nearby connections
          if (distance < 200) {
            connection.classList.add("connection-active");
          }
        });
      });

      dot.addEventListener("mouseleave", () => {
        // Remove active class with delay for smooth transition
        setTimeout(() => {
          connections.forEach((connection) => {
            connection.classList.remove("connection-active");
          });
        }, 300);
      });
    });
  }

  // Detect when milestones are approached during scroll
  function detectMilestoneApproach() {
    const milestones = document.querySelectorAll(".milestone");

    function isElementCloseToCenterViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      // Check if element is close to center of viewport
      return Math.abs(elementCenter - windowCenter) < windowHeight * 0.3;
    }

    function checkMilestones() {
      milestones.forEach((milestone) => {
        const dot = milestone.querySelector(".milestone-dot");

        if (isElementCloseToCenterViewport(milestone)) {
          if (!dot.classList.contains("in-view")) {
            dot.classList.add("in-view");

            // Remove class after animation completes
            setTimeout(() => {
              dot.classList.remove("in-view");
            }, 2000);
          }
        }
      });
    }

    // Initial check
    checkMilestones();

    // Check on scroll with throttling for performance
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkMilestones();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Add white circle indicators to milestone dots
  function addMilestoneIndicators() {
    const milestoneDots = document.querySelectorAll(".milestone-dot");

    milestoneDots.forEach((dot) => {
      // Create wrapper for rotation
      const wrapper = document.createElement("div");
      wrapper.className = "milestone-indicator-wrapper";
      dot.appendChild(wrapper);

      // Create white circle indicator inside the wrapper
      const indicator = document.createElement("div");
      indicator.className = "milestone-indicator-option3";
      wrapper.appendChild(indicator);
    });
  }

  // Create subtle wave background animation
  function createWaveBackground() {
    const container = document.querySelector(".timeline-container");

    // Create wave element
    const wave = document.createElement("div");
    wave.className = "timeline-wave";
    container.insertBefore(wave, container.firstChild);
  }

  // Initialize enhanced visual features
  setTimeout(() => {
    createEnhancedParticles();
    createMilestonePathways();
    enhanceNeuralConnections();
    detectMilestoneApproach();
    addMilestoneIndicators();
    createWaveBackground();
  }, 3000);
});
