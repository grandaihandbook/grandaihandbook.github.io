<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Code of Conduct - The Grand AI Handbook</title>
  <style>
    :root {
      --primary: #4f46e5;
      --primary-dark: #4338ca;
      --primary-light: rgba(79, 70, 229, 0.1);
      --light-bg: #f8f9fc;
      --border: #e5e7eb;
      --text: #333;
      --text-light: #4b5563;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: var(--text);
      background-color: #fff;
    }
    
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
    
    /* Header */
    .hero {
      background: linear-gradient(135deg, #f8f9fc 0%, #e9ecfb 100%);
      padding: 4rem 1.5rem;
      text-align: center;
      border-radius: 1rem;
      margin-bottom: 3rem;
      box-shadow: 0 10px 25px rgba(79, 70, 229, 0.08);
    }
    
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: var(--text);
      line-height: 1.2;
      background: linear-gradient(90deg, #4f46e5 0%, #6366f1 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .hero p {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 0 auto 1.5rem;
      color: var(--text-light);
    }
    
    .badge {
      background-color: var(--primary);
      color: white;
      font-weight: 700;
      padding: 0.5rem 1.5rem;
      border-radius: 0.375rem;
      display: inline-block;
      margin: 1rem 0;
      letter-spacing: 0.05em;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
    
    /* Sections */
    section {
      margin-bottom: 3.5rem;
    }
    
    .section-title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--primary);
      position: relative;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .section-title::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 25%;
      width: 50%;
      height: 3px;
      background-color: var(--primary);
      border-radius: 1.5px;
    }
    
    /* Cards */
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .card {
      background-color: white;
      border-radius: 0.75rem;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      border: 1px solid var(--border);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
    
    .card-title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--primary);
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--light-bg);
    }
    
    .card ul {
      list-style-type: none;
      padding-left: 0;
    }
    
    .card li {
      margin-bottom: 0.75rem;
      padding-left: 1.75rem;
      position: relative;
    }
    
    .card li::before {
      content: "•";
      position: absolute;
      left: 0.5rem;
      color: var(--primary);
      font-weight: bold;
      font-size: 1.2rem;
    }
    
    /* Quotes & callouts */
    .quote {
      background-color: var(--light-bg);
      border-left: 4px solid var(--primary);
      padding: 1.25rem 1.5rem;
      margin: 1.5rem 0;
      font-style: italic;
      border-radius: 0 0.5rem 0.5rem 0;
    }
    
    .banner {
      background-color: var(--light-bg);
      padding: 1.5rem;
      border-radius: 0.75rem;
      margin: 2rem 0;
      text-align: center;
      box-shadow: inset 0 0 0 1px var(--border);
    }
    
    .banner p {
      margin: 0.5rem 0;
    }
    
    .banner p:first-child {
      font-weight: 600;
      color: var(--primary);
    }
    
    /* Buttons */
    .btn {
      display: inline-block;
      font-weight: 600;
      padding: 0.75rem 1.75rem;
      border-radius: 0.375rem;
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 1rem;
    }
    
    .btn-primary {
      background-color: var(--primary);
      color: white;
      border: none;
    }
    
    .btn-primary:hover {
      background-color: var(--primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    /* Dividers */
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, var(--border), transparent);
      margin: 3rem 0;
    }
    
    /* Enforcement section styles */
    .enforcement-card {
      position: relative;
      padding-left: 3rem;
    }
    
    .enforcement-card::before {
      position: absolute;
      left: 1rem;
      top: 1.5rem;
      font-size: 1.5rem;
    }
    
    .level-1::before {
      content: "🤔";
    }
    
    .level-2::before {
      content: "⚠️";
    }
    
    .level-3::before {
      content: "🔴";
    }
    
    .level-4::before {
      content: "🚫";
    }
    
    /* Footer styles */
    .footer-content {
      text-align: center;
      margin-top: 4rem;
      margin-bottom: 3rem;
    }
    
    .footer-badges {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin: 1.5rem 0;
      flex-wrap: wrap;
    }
    
    .footer-note {
      font-style: italic;
      color: var(--text-light);
      max-width: 800px;
      margin: 1rem auto;
      font-size: 1.1rem;
    }
    
    /* Links */
    a {
      color: var(--primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    a:hover {
      color: var(--primary-dark);
      text-decoration: underline;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.25rem;
      }
      
      .hero p {
        font-size: 1.1rem;
      }
      
      .section-title {
        font-size: 1.75rem;
      }
      
      .cards-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header class="hero">
    <div class="container">
      <h1>Code of Conduct</h1>
      <p>Building an awesome community for The Grand AI Handbook</p>
      <div class="badge">BUILDING AN AWESOME COMMUNITY</div>
      <p style="font-style: italic; margin-top: 1rem;">Great minds don't always think alike—that's what makes us powerful!</p>
    </div>
  </header>
  
  <main class="container">
    <section>
      <h2 class="section-title">Our Pledge</h2>
      
      <div style="max-width: 800px; margin: 0 auto;">
        <p style="margin-bottom: 1.25rem; font-size: 1.1rem;">
          We, the creators and contributors of The Grand AI Handbook, pledge to make participation in our community a harassment-free, welcoming experience for everyone, regardless of age, body size, disability, ethnicity, gender identity, experience level, nationality, race, religion, or sexual orientation.
        </p>
        
        <p style="margin-bottom: 1.25rem; font-size: 1.1rem;">
          We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community where the coolest ideas in AI can flourish.
        </p>
        
        <div class="quote">
          "The best AI community isn't built by algorithms—it's built by people who care."
        </div>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">The Awesome Behaviors We Encourage</h2>
      
      <div style="max-width: 900px; margin: 0 auto;">
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;">
          <div class="card" style="flex: 1; min-width: 280px; max-width: 440px;">
            <h3 class="card-title">Welcoming & Empathetic</h3>
            <ul>
              <li><strong>Be Radiantly Welcoming</strong> - Greet newcomers like they're the missing piece we've been waiting for!</li>
              <li><strong>Use Empathy Superpowers</strong> - Understand that we all come from different backgrounds and experiences</li>
              <li><strong>Show Patience</strong> - Everyone was a beginner once, even in cutting-edge AI</li>
            </ul>
          </div>
          
          <div class="card" style="flex: 1; min-width: 280px; max-width: 440px;">
            <h3 class="card-title">Constructive & Generous</h3>
            <ul>
              <li><strong>Give Feedback Like a Coach</strong> - Constructive, kind, and aimed at growth</li>
              <li><strong>Accept Feedback Like a Champion</strong> - Grateful and open to improvement</li>
              <li><strong>Share Knowledge Generously</strong> - We get smarter together when information flows freely</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">Behaviors to Avoid</h2>
      
      <div class="banner">
        <p>Life's too short and AI is too exciting for negativity</p>
      </div>
      
      <div style="max-width: 900px; margin: 0 auto;">
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; justify-content: center;">
          <div class="card" style="flex: 1; min-width: 280px; max-width: 440px;">
            <h3 class="card-title">Negative Interactions</h3>
            <ul>
              <li><strong>Trolling, Insulting Comments</strong> - These have no place in our community</li>
              <li><strong>Public or Private Harassment</strong> - Not tolerated in any form</li>
              <li><strong>Publishing Others' Private Information</strong> - Get explicit permission or don't share</li>
            </ul>
          </div>
          
          <div class="card" style="flex: 1; min-width: 280px; max-width: 440px;">
            <h3 class="card-title">Inappropriate Content</h3>
            <ul>
              <li><strong>Unwelcome Sexual Attention</strong> - Full stop, not acceptable</li>
              <li><strong>Inappropriate Imagery</strong> - Keep it professional and respectful</li>
              <li><strong>Any Form of Discrimination</strong> - We value and respect all community members</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">Enforcement Guidelines</h2>
      
      <div style="max-width: 800px; margin: 0 auto;">
        <p style="margin-bottom: 1.5rem; text-align: center;">
          Project maintainers will follow these Community Impact Guidelines in determining consequences for any violations:
        </p>
      </div>
      
      <div style="max-width: 850px; margin: 0 auto;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem;">
          <div class="card enforcement-card level-1">
            <h3 class="card-title">Friendly Nudge</h3>
            <p style="margin-bottom: 0.75rem;"><strong>Community Impact:</strong> Use of inappropriate language or other behavior deemed unprofessional.</p>
            <p><strong>Consequence:</strong> A private warning from moderators with an explanation of why the behavior was inappropriate.</p>
          </div>
          
          <div class="card enforcement-card level-2">
            <h3 class="card-title">Yellow Card</h3>
            <p style="margin-bottom: 0.75rem;"><strong>Community Impact:</strong> A violation through a single incident or series of actions.</p>
            <p><strong>Consequence:</strong> A warning with consequences for continued behavior, including temporary restriction from community interaction.</p>
          </div>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
          <div class="card enforcement-card level-3">
            <h3 class="card-title">Red Card</h3>
            <p style="margin-bottom: 0.75rem;"><strong>Community Impact:</strong> A serious violation of community standards, including sustained inappropriate behavior.</p>
            <p><strong>Consequence:</strong> A temporary ban from any sort of interaction with the community.</p>
          </div>
          
          <div class="card enforcement-card level-4">
            <h3 class="card-title">Permanent Ban</h3>
            <p style="margin-bottom: 0.75rem;"><strong>Community Impact:</strong> Demonstrating a pattern of violation of community standards.</p>
            <p><strong>Consequence:</strong> A permanent ban from any sort of public interaction within the community.</p>
          </div>
        </div>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">Reporting Process</h2>
      
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <p style="margin-bottom: 1.5rem; font-size: 1.1rem;">
          Instances of unacceptable behavior may be reported to the project team at <strong>conduct@grandaihandbook.org</strong>. All complaints will be reviewed and investigated promptly and fairly.
        </p>
        
        <p style="margin-bottom: 2rem; font-size: 1.1rem;">
          The project team is obligated to maintain confidentiality regarding the reporter of an incident.
        </p>
        
        <a href="mailto:conduct@grandaihandbook.org" class="btn btn-primary">Report an Incident</a>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">Attribution</h2>
      
      <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <p style="margin-bottom: 1.5rem;">
          This Code of Conduct is adapted from the <a href="https://www.contributor-covenant.org" target="_blank" rel="noopener noreferrer">Contributor Covenant</a>, version 2.0.
        </p>
        
        <div class="footer-content">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Together We Build Something Extraordinary</h3>
          
          <div class="footer-badges">
            <span class="badge">KIND & COLLABORATIVE</span>
            <span class="badge">CREATIVE & INCLUSIVE</span>
          </div>
          
          <p class="footer-note">
            Let's make AI knowledge accessible through a community as intelligent as the technology we explore.
          </p>
        </div>
      </div>
    </section>
  </main>
</body>
</html>
