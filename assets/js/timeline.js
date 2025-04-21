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
      document.getElementById("milestone-7"),
      document.getElementById("milestone-8"),
      document.getElementById("milestone-9"),
      document.getElementById("milestone-10"),
      document.getElementById("milestone-11"),
      document.getElementById("milestone-12"),
      document.getElementById("milestone-13"),
    ];

    const connectors = [
      document.getElementById("connector-1"),
      document.getElementById("connector-2"),
      document.getElementById("connector-3"),
      document.getElementById("connector-4"),
      document.getElementById("connector-5"),
      document.getElementById("connector-6"),
      document.getElementById("connector-7"),
      document.getElementById("connector-8"),
      document.getElementById("connector-9"),
      document.getElementById("connector-10"),
      document.getElementById("connector-11"),
      document.getElementById("connector-12"),
      document.getElementById("connector-13"),
    ];

    milestones.forEach((milestone, index) => {
      setTimeout(() => {
        milestone.classList.add("animated");

        // Animate the connector
        setTimeout(() => {
          connectors[index].classList.add("animated-connector");
        }, 150); // Changed from 200
      }, 300 + index * 150); // Changed from 180
    });

    // Show current year marker
    setTimeout(() => {
      document.getElementById("current-year-marker").classList.add("animated");
    }, 500); // Changed from 2800

    // Create and animate floating particles
    createParticles();

    // Add floating decoration elements
    createFloatingElements();

    // Create pulsing neon glow effect on the timeline
    pulseTimelineGlow();
  }, 500);

  // Function to create floating particles
  function createParticles() {
    const container = document.getElementById("particles-container");
    const particleCount = window.innerWidth < 768 ? 20 : 40;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");

      // Random position, size, and opacity
      const size = Math.random() * 4 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.1;

      // Create more particles along the timeline line
      const adjustedPosY =
        Math.random() > 0.6
          ? 50 + (Math.random() * 30 - 15) // 60% chance to be near the line
          : Math.random() * 100; // 40% chance to be anywhere

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${adjustedPosY}%`;
      particle.style.opacity = opacity;

      // Add subtle glow to some particles
      if (Math.random() > 0.7) {
        particle.style.boxShadow = `0 0 ${
          Math.random() * 5 + 2
        }px rgba(147, 51, 234, ${Math.random() * 0.3 + 0.1})`;
      }

      // Add to container
      container.appendChild(particle);

      // Custom floating animation
      animateParticle(particle);
    }
  }

  function animateParticle(particle) {
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const rangeX = Math.random() * 10 - 5;
    const rangeY = Math.random() * 10 - 5;
    const duration = Math.random() * 8000 + 5000;

    let startTime;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      // Sinusoidal movement
      const x = startX + Math.sin(progress * Math.PI * 2) * rangeX;
      const y =
        startY + Math.sin(progress * Math.PI * 2 + Math.PI / 2) * rangeY;

      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;

      if (progress >= 1) {
        startTime = timestamp;
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  // Function to create floating decoration elements
  function createFloatingElements() {
    const container = document.getElementById("floating-elements");
    const elementCount = window.innerWidth < 768 ? 4 : 7;

    // Create circular decoration elements
    for (let i = 0; i < elementCount; i++) {
      const element = document.createElement("div");
      element.classList.add("float-element");

      // Random size between 50px and 150px
      const size = Math.random() * 100 + 50;

      // Position randomly but skew toward the edges
      let posX, posY;

      if (Math.random() > 0.5) {
        // Position near the edges
        posX =
          Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
      } else {
        // Position anywhere
        posX = Math.random() * 100;
      }

      if (Math.random() > 0.5) {
        // Position near the top or bottom
        posY =
          Math.random() > 0.5 ? Math.random() * 20 : 80 + Math.random() * 20;
      } else {
        // Position anywhere
        posY = Math.random() * 100;
      }

      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
      element.style.left = `${posX}%`;
      element.style.top = `${posY}%`;
      element.style.animationDelay = `${Math.random() * 2}s`;

      // Random blur effect
      element.style.filter = `blur(${Math.random() * 10 + 5}px)`;

      // Add to container
      container.appendChild(element);

      // Custom floating animation
      animateFloatingElement(element);
    }
  }

  function animateFloatingElement(element) {
    const startX = parseFloat(element.style.left);
    const startY = parseFloat(element.style.top);
    const rangeX = Math.random() * 5 - 2.5;
    const rangeY = Math.random() * 5 - 2.5;
    const duration = Math.random() * 10000 + 8000;

    let startTime;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = elapsed / duration;

      // Sinusoidal movement
      const x = startX + Math.sin(progress * Math.PI * 2) * rangeX;
      const y =
        startY + Math.sin(progress * Math.PI * 2 + Math.PI / 2) * rangeY;

      element.style.left = `${x}%`;
      element.style.top = `${y}%`;

      if (progress >= 1) {
        startTime = timestamp;
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

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
        0 0 ${intensity}px rgba(147, 51, 234, 0.5),
        0 0 ${intensity * 1.5}px rgba(147, 51, 234, 0.3),
        0 0 ${intensity * 2}px rgba(147, 51, 234, 0.2),
        inset 0 0 8px rgba(255, 255, 255, 0.6)
      `;

      requestAnimationFrame(pulse);
    }

    requestAnimationFrame(pulse);
  }

  // Make milestones interactive with hover effects
  const allMilestones = document.querySelectorAll(".milestone");
  allMilestones.forEach((milestone) => {
    const dot = milestone.querySelector(".milestone-dot");
    const info = milestone.querySelector(".milestone-info");

    dot.addEventListener("mouseenter", () => {
      // Add extra glow on hover
      dot.style.boxShadow = `
        0 0 20px rgba(147, 51, 234, 0.7),
        0 0 30px rgba(147, 51, 234, 0.4),
        0 12px 28px rgba(0, 0, 0, 0.15),
        inset 0 2px 5px rgba(255, 255, 255, 0.5)
      `;
    });

    dot.addEventListener("mouseleave", () => {
      // Restore original shadow on mouse leave
      dot.style.boxShadow = `
        0 0 15px rgba(147, 51, 234, 0.4),
        0 0 25px rgba(147, 51, 234, 0.2),
        0 8px 20px rgba(0, 0, 0, 0.1),
        inset 0 2px 5px rgba(255, 255, 255, 0.5)
      `;
    });
  });

  // Add click functionality to milestones for mobile devices
  allMilestones.forEach((milestone) => {
    const dot = milestone.querySelector(".milestone-dot");
    const info = milestone.querySelector(".milestone-info");

    dot.addEventListener("click", (e) => {
      // Close any other open info boxes
      document
        .querySelectorAll(".milestone-info.active")
        .forEach((activeInfo) => {
          if (activeInfo !== info) {
            activeInfo.classList.remove("active");
          }
        });

      // Toggle info box
      info.classList.toggle("active");
      e.stopPropagation();
    });
  });

  // Close info boxes when clicking elsewhere
  document.addEventListener("click", () => {
    document.querySelectorAll(".milestone-info.active").forEach((info) => {
      info.classList.remove("active");
    });
  });
});
