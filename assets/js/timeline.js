document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const milestones = [
      document.getElementById("milestone-1"),
      document.getElementById("milestone-2"),
      document.getElementById("milestone-3"),
      document.getElementById("milestone-4"),
      document.getElementById("milestone-5"),
      document.getElementById("milestone-6"),
    ];

    const progressLine = document.querySelector(".timeline-progress");
    progressLine.style.width = "0";

    void progressLine.offsetWidth;
    progressLine.style.animation =
      "progressLine 2.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards";

    // Create the indicators with their random starting positions
    milestones.forEach((milestone) => {
      const dot = milestone.querySelector(".milestone-dot");

      // Random angle between 0-360 degrees
      const randomAngle = Math.floor(Math.random() * 360);

      // Convert angle to radians for calculation
      const angleRad = randomAngle * (Math.PI / 180);

      // Calculate the position based on the angle
      const radius = dot.offsetWidth / 2; // Radius of milestone dot
      const topOffset = -Math.sin(angleRad) * radius;
      const leftOffset = Math.cos(angleRad) * radius;

      // Create the indicator directly (no wrapper needed)
      const indicator = document.createElement("div");
      indicator.className = "milestone-indicator";

      // Position it absolutely within the milestone dot
      indicator.style.position = "absolute";
      indicator.style.top = `calc(50% + ${topOffset}px)`;
      indicator.style.left = `calc(50% + ${leftOffset}px)`;
      indicator.style.transform = "translate(-50%, -50%)";
      indicator.style.opacity = "0";

      // Store the angle for animation
      indicator.dataset.angle = randomAngle;

      // Add to the milestone dot
      dot.appendChild(indicator);

      // Create the animation immediately but make it invisible
      animateIndicator(indicator, dot);
    });

    // Now make the milestones and indicators visible in sequence
    milestones.forEach((milestone, index) => {
      setTimeout(() => {
        milestone.classList.add("animated");

        const indicator = milestone.querySelector(".milestone-indicator");
        if (indicator) {
          indicator.style.opacity = "1";
        }
      }, 300 + index * 200);
    });

    setTimeout(() => {
      document.getElementById("current-year-marker").style.opacity = "1";
    }, 2200);
  }, 500);

  function enhanceMilestoneDots() {
    document.querySelectorAll(".milestone-dot").forEach((dot) => {
      // Ensure the dot's ::before and ::after elements are properly visible
      dot.style.position = "relative";
      dot.style.overflow = "visible";

      // Add a subtle pulse to the concentric rings
      const ringPulse = document.createElement("div");
      ringPulse.className = "ring-pulse";
      ringPulse.style.position = "absolute";
      ringPulse.style.top = "0";
      ringPulse.style.left = "0";
      ringPulse.style.width = "100%";
      ringPulse.style.height = "100%";
      ringPulse.style.borderRadius = "50%";
      ringPulse.style.background = "transparent";
      ringPulse.style.boxShadow = "inset 0 0 0 1px rgba(255, 255, 255, 0.1)";
      ringPulse.style.animation = `pulseConcentric ${
        8 + Math.random() * 4
      }s ease-in-out infinite alternate`;
      ringPulse.style.zIndex = "1";

      dot.appendChild(ringPulse);
    });
  }

  function addIndicatorTrails() {
    // For each milestone dot
    document.querySelectorAll(".milestone-dot").forEach((dot) => {
      const indicator = dot.querySelector(".milestone-indicator");
      if (!indicator) return;

      // Set up the animation
      let lastX = 0;
      let lastY = 0;

      // Function to create a trail element
      function createTrail() {
        // Get current indicator position
        const rect = indicator.getBoundingClientRect();
        const dotRect = dot.getBoundingClientRect();

        // Only create trail if we have a previous position and indicator is visible
        if (lastX && lastY && indicator.style.opacity !== "0") {
          // Create trail element
          const trail = document.createElement("div");
          trail.className = "indicator-trail";

          // Set size (smaller than indicator)
          const size = Math.max(
            4,
            parseInt(getComputedStyle(indicator).width) * 0.6
          );
          trail.style.width = size + "px";
          trail.style.height = size + "px";

          // Get position relative to dot
          const relativeX = rect.left - dotRect.left + rect.width / 2;
          const relativeY = rect.top - dotRect.top + rect.height / 2;

          // Position in the same place as indicator
          trail.style.position = "absolute";
          trail.style.left = relativeX + "px";
          trail.style.top = relativeY + "px";

          // Match background color
          trail.style.background = getComputedStyle(indicator).background;
          trail.style.opacity = "0.7";

          // Add to dot
          dot.appendChild(trail);

          // Fade out and remove
          setTimeout(() => {
            trail.style.transition = "opacity 0.5s, transform 0.5s";
            trail.style.opacity = "0";
            trail.style.transform = "scale(0.5)";

            setTimeout(() => dot.removeChild(trail), 500);
          }, 10);
        }

        // Store current position for next time
        lastX = rect.left;
        lastY = rect.top;
      }

      // Create trails at interval
      const interval = setInterval(() => {
        if (document.body.contains(dot)) {
          createTrail();
        } else {
          clearInterval(interval);
        }
      }, 100);
    });
  }

  function animateIndicator(indicator, dot) {
    let angle = parseFloat(indicator.dataset.angle);
    const radius = dot.offsetWidth / 2;
    const speed = 0.5 + Math.random() * 1;

    function updatePosition() {
      // Update angle
      angle = (angle + speed) % 360;

      // Convert to radians
      const angleRad = angle * (Math.PI / 180);

      // Calculate new position
      const topOffset = -Math.sin(angleRad) * radius;
      const leftOffset = Math.cos(angleRad) * radius;

      // Update position
      indicator.style.top = `calc(50% + ${topOffset}px)`;
      indicator.style.left = `calc(50% + ${leftOffset}px)`;

      // Continue animation if element exists
      if (document.body.contains(indicator)) {
        requestAnimationFrame(updatePosition);
      }
    }

    // Start the animation
    requestAnimationFrame(updatePosition);
  }

  const allMilestones = document.querySelectorAll(".milestone");
  allMilestones.forEach((milestone) => {
    const dot = milestone.querySelector(".milestone-dot");
    const info = milestone.querySelector(".milestone-info");

    dot.addEventListener("mouseenter", () => {
      if (dot.classList.contains("dot-2030")) {
        dot.style.boxShadow = `
          0 0 25px rgba(99, 102, 241, 0.7),
          0 0 40px rgba(99, 102, 241, 0.4),
          0 12px 30px rgba(0, 0, 0, 0.15),
          inset 0 0 20px rgba(255, 255, 255, 0.9),
          inset 0 0 40px rgba(255, 255, 255, 0.6)
        `;
      } else {
        dot.style.boxShadow = `
          0 0 20px rgba(99, 102, 241, 0.7),
          0 0 30px rgba(99, 102, 241, 0.4),
          0 12px 28px rgba(0, 0, 0, 0.15),
          inset 0 2px 5px rgba(255, 255, 255, 0.5)
        `;
      }
    });

    dot.addEventListener("mouseleave", () => {
      if (dot.classList.contains("dot-2030")) {
        dot.style.boxShadow = `
          0 0 25px rgba(99, 102, 241, 0.6),
          0 0 40px rgba(99, 102, 241, 0.3),
          0 10px 30px rgba(0, 0, 0, 0.15),
          inset 0 0 15px rgba(255, 255, 255, 0.8),
          inset 0 0 30px rgba(255, 255, 255, 0.5)
        `;
      } else {
        dot.style.boxShadow = `
          0 0 15px rgba(99, 102, 241, 0.4),
          0 0 25px rgba(99, 102, 241, 0.2),
          0 8px 20px rgba(0, 0, 0, 0.1),
          inset 0 2px 5px rgba(255, 255, 255, 0.5)
        `;
      }
    });
  });

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

  pulseTimelineGlow();

  function createDecorativeDots() {
    const container = document.querySelector(".timeline-container");
    const dotCount = 20;
    const dots = [];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.className = "decorative-dot";

      const sizeClass =
        Math.random() < 0.4
          ? "small"
          : Math.random() < 0.7
          ? "medium"
          : "large";
      dot.classList.add(sizeClass);

      const left = 5 + Math.random() * 90;
      const top = 20 + Math.random() * 60;
      dot.style.left = `${left}%`;
      dot.style.top = `${top}%`;

      dot.style.opacity = 0.3 + Math.random() * 0.5;

      const initialLeft = left;
      const initialTop = top;
      const moveRangeX = 5 + Math.random() * 10;
      const moveRangeY = 10 + Math.random() * 15;
      const speedFactor = 0.2 + Math.random() * 0.3;
      const phaseOffset = Math.random() * Math.PI * 2;

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

    let startTime = null;

    function animateDots(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      dots.forEach((dot) => {
        const xOffset =
          Math.sin((elapsed * dot.speedFactor) / 1000 + dot.phaseOffset) *
          dot.moveRangeX;
        const yOffset =
          Math.cos((elapsed * dot.speedFactor) / 1000 + dot.phaseOffset * 1.5) *
          dot.moveRangeY;

        dot.element.style.left = `${dot.initialLeft + xOffset}%`;
        dot.element.style.top = `${dot.initialTop + yOffset}%`;
      });

      requestAnimationFrame(animateDots);
    }

    requestAnimationFrame(animateDots);

    setTimeout(() => {
      createNeuralNetworkLines(dots, container);
    }, 100);

    return dots;
  }

  function createNeuralNetworkLines(dots, container) {
    const maxConnections = 30;
    let connectionCount = 0;
    const connections = [];

    dots.forEach((dot, index) => {
      const nearbyDots = dots
        .map((otherDot, otherIndex) => {
          if (otherIndex === index) return null;

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

      const maxLocalConnections = 1 + Math.floor(Math.random() * 3);
      const maxDistance = 30;

      for (
        let i = 0;
        i < Math.min(maxLocalConnections, nearbyDots.length);
        i++
      ) {
        if (connectionCount >= maxConnections) break;
        if (nearbyDots[i].distance > maxDistance) continue;

        const line = document.createElement("div");
        line.className = "network-line";

        container.appendChild(line);

        connections.push({
          line: line,
          source: dot,
          target: nearbyDots[i].dot,
        });

        connectionCount++;

        setTimeout(() => {
          line.style.opacity = 0.2 + Math.random() * 0.3;
        }, 1000 + Math.random() * 2000);
      }
    });

    function updateLines() {
      connections.forEach((conn) => {
        const sourceX = parseFloat(conn.source.element.style.left);
        const sourceY = parseFloat(conn.source.element.style.top);
        const targetX = parseFloat(conn.target.element.style.left);
        const targetY = parseFloat(conn.target.element.style.top);

        const dx = targetX - sourceX;
        const dy = targetY - sourceY;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

        conn.line.style.left = `${sourceX}%`;
        conn.line.style.top = `${sourceY}%`;
        conn.line.style.width = `${length}%`;
        conn.line.style.transform = `rotate(${angle}deg)`;
      });

      requestAnimationFrame(updateLines);
    }

    requestAnimationFrame(updateLines);
  }

  function createTimelineParticles() {
    const timeline = document.querySelector(".timeline-line");
    const timelineContainer = document.querySelector(".timeline-container");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }

    function createParticle() {
      if (!isElementInViewport(timeline)) return;

      const particle = document.createElement("div");
      particle.className = "timeline-particle";

      particle.style.left = "5%";

      const size = 2 + Math.random() * 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.opacity = 0.5 + Math.random() * 0.5;

      timelineContainer.appendChild(particle);

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

        const position = easeInOut(progress);
        particle.style.left = `${5 + position * 79}%`;

        requestAnimationFrame(moveParticle);
      }

      requestAnimationFrame(moveParticle);
    }

    function scheduleParticle() {
      const delay = 300 + Math.random() * 1000;
      setTimeout(() => {
        createParticle();
        scheduleParticle();
      }, delay);
    }

    setTimeout(scheduleParticle, 3000);
  }

  function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  setTimeout(createDecorativeDots, 1000);
  setTimeout(createTimelineParticles, 2500);

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) {
    document.body.classList.add("reduced-motion");
  }

  function createEnhancedParticles() {
    const particles = document.querySelectorAll(".decorative-dot");
    let scrollY = window.scrollY || window.pageYOffset;
    let lastScrollY = scrollY;

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY || window.pageYOffset;
      const scrollDelta = scrollY - lastScrollY;

      particles.forEach((particle) => {
        const particleY = parseFloat(particle.style.top);
        const particleX = parseFloat(particle.style.left);

        if (!isNaN(particleY) && !isNaN(particleX)) {
          particle.style.top = `${particleY + scrollDelta * 0.01}%`;
          particle.style.left = `${particleX + scrollDelta * 0.002}%`;
        }
      });

      lastScrollY = scrollY;
    });
  }

  function createMilestonePathways() {
    const container = document.querySelector(".timeline-container");
    const milestones = document.querySelectorAll(".milestone");

    for (let i = 0; i < milestones.length - 1; i++) {
      const start = milestones[i].querySelector(".milestone-dot");
      const end = milestones[i + 1].querySelector(".milestone-dot");

      const startRect = start.getBoundingClientRect();
      const endRect = end.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const pathway = document.createElement("div");
      pathway.className = "neural-pathway";
      container.appendChild(pathway);

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

      pathway.style.left = `${startLeft}%`;
      pathway.style.top = `${startTop}%`;
      pathway.style.width = `${endLeft - startLeft}%`;

      for (let j = 0; j < 3; j++) {
        const particle = document.createElement("div");
        particle.className = "pathway-particle";
        pathway.appendChild(particle);

        particle.style.animationDelay = `${j * 1.5 + Math.random()}s`;
      }
    }
  }

  function enhanceNeuralConnections() {
    const connections = document.querySelectorAll(".network-line");
    const milestones = document.querySelectorAll(".milestone");

    milestones.forEach((milestone) => {
      const dot = milestone.querySelector(".milestone-dot");

      dot.addEventListener("mouseenter", () => {
        const dotRect = dot.getBoundingClientRect();

        connections.forEach((connection) => {
          const connRect = connection.getBoundingClientRect();

          const dotCenterX = dotRect.left + dotRect.width / 2;
          const dotCenterY = dotRect.top + dotRect.height / 2;
          const connCenterX = connRect.left + connRect.width / 2;
          const connCenterY = connRect.top + connRect.height / 2;

          const distance = Math.sqrt(
            Math.pow(dotCenterX - connCenterX, 2) +
              Math.pow(dotCenterY - connCenterY, 2)
          );

          if (distance < 200) {
            connection.classList.add("connection-active");
          }
        });
      });

      dot.addEventListener("mouseleave", () => {
        setTimeout(() => {
          connections.forEach((connection) => {
            connection.classList.remove("connection-active");
          });
        }, 300);
      });
    });
  }

  function detectMilestoneApproach() {
    const milestones = document.querySelectorAll(".milestone");

    function isElementCloseToCenterViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const windowCenter = windowHeight / 2;
      const elementCenter = rect.top + rect.height / 2;

      return Math.abs(elementCenter - windowCenter) < windowHeight * 0.3;
    }

    function checkMilestones() {
      milestones.forEach((milestone) => {
        const dot = milestone.querySelector(".milestone-dot");

        if (isElementCloseToCenterViewport(milestone)) {
          if (!dot.classList.contains("in-view")) {
            dot.classList.add("in-view");

            setTimeout(() => {
              dot.classList.remove("in-view");
            }, 2000);
          }
        }
      });
    }

    checkMilestones();

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

  function createWaveBackground() {
    const container = document.querySelector(".timeline-container");
    const wave = document.createElement("div");
    wave.className = "timeline-wave";
    container.insertBefore(wave, container.firstChild);
  }

  setTimeout(() => {
    createEnhancedParticles();
    createMilestonePathways();
    enhanceNeuralConnections();
    detectMilestoneApproach();
    createWaveBackground();
    setTimeout(enhanceMilestoneDots, 2000);

    // setTimeout(() => {
    //   addIndicatorTrails();
    // }, 500);
  }, 3000);
});
