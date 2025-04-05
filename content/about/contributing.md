---
layout: default
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Grand AI Handbook - Contribution Page</title>
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
    
    /* Buttons */
    .btn-group {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-top: 2rem;
    }
    
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
    
    .btn-secondary {
      background-color: white;
      color: var(--primary);
      border: 1px solid var(--primary);
    }
    
    .btn-secondary:hover {
      background-color: var(--light-bg);
      transform: translateY(-2px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    
    /* Tables */
    .table-container {
      overflow-x: auto;
      margin: 1.5rem 0;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      background-color: white;
    }
    
    th {
      background-color: var(--light-bg);
      text-align: left;
      padding: 1rem;
      font-weight: 600;
    }
    
    td {
      padding: 1rem;
      border-top: 1px solid var(--border);
    }
    
    /* Code */
    .code {
      background-color: var(--light-bg);
      padding: 0.2rem 0.4rem;
      border-radius: 0.25rem;
      font-family: monospace;
      color: var(--primary-dark);
      font-size: 0.9rem;
    }
    
    .code-block {
      background-color: var(--light-bg);
      border-radius: 0.5rem;
      padding: 1.5rem;
      overflow-x: auto;
      margin: 1.5rem 0;
      border: 1px solid var(--border);
      font-family: monospace;
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
    
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, var(--border), transparent);
      margin: 3rem 0;
    }
    
    /* Badge */
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
    
    /* Icon bullets */
    .icon-bullet {
      display: inline-block;
      width: 24px;
      text-align: center;
      margin-right: 8px;
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
      text-align: center;
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
      <h1>Contributing to The Grand AI Handbook</h1>
      <p>Your brilliance + our framework = AI knowledge for all</p>
      <div class="badge">BUILD THE FUTURE OF AI KNOWLEDGE</div>
      <div class="btn-group">
        <a href="https://github.com/grandaihandbook/grandaihandbook.github.io" class="btn btn-primary">GitHub Repository</a>
        <a href="https://discord.gg/grandaihandbook" class="btn btn-secondary">Join Discord</a>
      </div>
    </div>
  </header>
  
  <main class="container">
    <section>
      <h2 class="section-title">The Contribution Mindset</h2>
      <div class="cards-container">
        <div class="card">
          <h3 class="card-title">Content Quality</h3>
          <ul>
            <li><strong>Clarity over complexity</strong> - Make the complicated understandable</li>
            <li><strong>Beginner-friendly with expert depth</strong> - Scaffold knowledge thoughtfully</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="card-title">Knowledge Focus</h3>
          <ul>
            <li><strong>Current and evolving</strong> - Reflect the rapid pace of AI advancement</li>
            <li><strong>Practical alongside theoretical</strong> - Bridge research to application</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="card-title">Community Value</h3>
          <ul>
            <li><strong>Inclusive and accessible</strong> - AI knowledge belongs to everyone</li>
            <li><strong>Collaborative approach</strong> - Build on each other's strengths</li>
          </ul>
        </div>
      </div>
      
      <div class="quote">
        "The best way to predict the future is to create it. Join us in creating the future of AI education."
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">How to Contribute</h2>
      
      <div class="card">
        <h3 class="card-title">Quick Start Guide</h3>
        <ul>
          <li><strong>Find Your Sweet Spot</strong>: Choose what excites you – handbooks, research, projects, or infrastructure</li>
          <li><strong>Fork & Clone</strong>: Get the repo locally (<span class="code">git clone https://github.com/YOUR-USERNAME/grandaihandbook.github.io.git</span>)</li>
          <li><strong>Branch Out</strong>: Create a feature branch (<span class="code">git checkout -b awesome-contribution</span>)</li>
          <li><strong>Work Your Magic</strong>: Make your brilliant changes</li>
          <li><strong>Test Locally</strong>: Run with <span class="code">bundle exec jekyll serve</span></li>
          <li><strong>Push to Your Fork</strong>: Share your work (<span class="code">git push origin awesome-contribution</span>)</li>
          <li><strong>Create a Pull Request</strong>: Tell us about your contribution!</li>
        </ul>
      </div>
      
      <div class="banner">
        <p>New to GitHub or Open Source?</p>
        <p>No worries! Check out our <a href="#">First-Time Contributor's Guide</a> to get started.</p>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">What Can I Contribute?</h2>
      
      <div class="table-container">
        <table>
          <tr>
            <th>Contribution Type</th>
            <th>Description</th>
          </tr>
          <tr>
            <td><span class="icon-bullet">📖</span> <strong>Handbook Chapters</strong></td>
            <td>Add or improve sections in our domain handbooks</td>
          </tr>
          <tr>
            <td><span class="icon-bullet">📊</span> <strong>Tutorials & Projects</strong></td>
            <td>Create practical learning resources</td>
          </tr>
          <tr>
            <td><span class="icon-bullet">📰</span> <strong>Research Summaries</strong></td>
            <td>Distill complex papers into accessible insights</td>
          </tr>
          <tr>
            <td><span class="icon-bullet">🗺️</span> <strong>Career Roadmaps</strong></td>
            <td>Help map out learning journeys</td>
          </tr>
          <tr>
            <td><span class="icon-bullet">🎨</span> <strong>UI/UX Improvements</strong></td>
            <td>Enhance user experience and accessibility</td>
          </tr>
          <tr>
            <td><span class="icon-bullet">⚙️</span> <strong>Infrastructure</strong></td>
            <td>Improve site performance and functionality</td>
          </tr>
        </table>
      </div>
    </section>
    
    <div class="divider"></div>
    
    <section>
      <h2 class="section-title">Style Guidelines</h2>
      
      <div class="cards-container">
        <div class="card">
          <h3 class="card-title">Writing Style</h3>
          <ul>
            <li><strong>Be conversational but precise</strong> - Write like you're explaining to a smart friend</li>
            <li><strong>Use active voice</strong> - "LLMs generate text" not "Text is generated by LLMs"</li>
            <li><strong>Break down complexity</strong> - Use analogies, examples, and visualizations</li>
          </ul>
        </div>
        
        <div class="card">
          <h3 class="card-title">Code Style</h3>
          <ul>
            <li><strong>Prioritize readability</strong> over cleverness</li>
            <li><strong>Comment generously</strong> - Explain the "why" not just the "what"</li>
            <li><strong>Include requirements</strong> - What dependencies are needed?</li>
          </ul>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section>
      <h2 class="section-title">Communication Channels</h2>

      <div class="cards-container">
        <div class="card">
          <h3 class="card-title">GitHub</h3>
          <p>For ideas, questions, and community interaction</p>
          <div style="text-align: center; margin-top: 1rem;">
            <a href="https://github.com/grandaihandbook/grandaihandbook.github.io/discussions" class="btn btn-primary">Join Discussions</a>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Discord</h3>
          <p>Real-time chat and collaboration with other contributors</p>
          <div style="text-align: center; margin-top: 1rem;">
            <a href="https://discord.gg/grandaihandbook" class="btn btn-primary">Join Discord</a>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Twitter</h3>
          <p>Follow for updates and share your contributions!</p>
          <div style="text-align: center; margin-top: 1rem;">
            <a href="https://twitter.com/grandaihandbook" class="btn btn-primary">Follow Us</a>
          </div>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <section>
      <h2 class="section-title">Recognition</h2>

      <div class="cards-container">
        <div class="card">
          <h3 class="card-title">Contributor List</h3>
          <p>Your name in the contributors section of our website</p>
        </div>

        <div class="card">
          <h3 class="card-title">Authorship</h3>
          <p>Credit for sections you create or significantly improve</p>
        </div>

        <div class="card">
          <h3 class="card-title">Community Spotlights</h3>
          <p>Regular features highlighting outstanding contributions</p>
        </div>
      </div>
    </section>

    <div class="divider"></div>

    <div class="footer-content">
      <h2 style="margin-bottom: 1rem;">The Magic Happens When We Collaborate</h2>
      <div class="footer-badges">
        <div class="badge">LEARN TOGETHER</div>
        <div class="badge">BUILD TOGETHER</div>
        <div class="badge">GROW TOGETHER</div>
      </div>
      <p class="footer-note">Happy contributing! 🚀</p>
    </div>

  </main>
</body>
</html>
