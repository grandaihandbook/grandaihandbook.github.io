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
});
