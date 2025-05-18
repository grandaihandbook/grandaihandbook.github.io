<link rel="stylesheet" href="/assets/css/section-academic.css">
<div class="handbook-container-vertical-tabs">
<div class="handbook-container-inner">
    <aside class="handbook-vertical-nav">
        <div class="vertical-nav-header">
            <h1>Self-Driving Cars</h1>
            <div class="header-accent-vertical"></div>
        </div>
        <ul class="vertical-tabs-list">
            <li class="vertical-tab-ul"><a href="#overview" data-tab="overview" class="vertical-tab-link active">Overview</a></li>
            <li class="vertical-tab-ul"><a href="#s1" data-tab="s1" class="vertical-tab-link">Foundations</a></li>
            <li class="vertical-tab-ul"><a href="#s2" data-tab="s2" class="vertical-tab-link">Perception</a></li>
            <li class="vertical-tab-ul"><a href="#s3" data-tab="s3" class="vertical-tab-link">Localization & Mapping</a></li>
            <li class="vertical-tab-ul"><a href="#s4" data-tab="s4" class="vertical-tab-link">Planning & Decision</a></li>
            <li class="vertical-tab-ul"><a href="#s5" data-tab="s5" class="vertical-tab-link">Control</a></li>
            <li class="vertical-tab-ul"><a href="#s6" data-tab="s6" class="vertical-tab-link">AI & Machine Learning</a></li>
            <li class="vertical-tab-ul"><a href="#s7" data-tab="s7" class="vertical-tab-link">System Architecture</a></li>
            <li class="vertical-tab-ul"><a href="#s8" data-tab="s8" class="vertical-tab-link">Safety & Security</a></li>
            <li class="vertical-tab-ul"><a href="#s9" data-tab="s9" class="vertical-tab-link">Human Factors</a></li>
            <li class="vertical-tab-ul"><a href="#s10" data-tab="s10" class="vertical-tab-link">Infrastructure</a></li>
            <li class="vertical-tab-ul"><a href="#s11" data-tab="s11" class="vertical-tab-link">Development & Testing</a></li>
            <li class="vertical-tab-ul"><a href="#s12" data-tab="s12" class="vertical-tab-link">Regulations & Policy</a></li>
            <li class="vertical-tab-ul"><a href="#s13" data-tab="s13" class="vertical-tab-link">Societal Impact</a></li>
            <li class="vertical-tab-ul"><a href="#s14" data-tab="s14" class="vertical-tab-link">Future Trends</a></li>
        </ul>
        <div class="vertical-nav-footer">
             <p><strong>Related Handbooks:</strong></p>
            <ul>
                <li><a href="/content/handbooks/robotics/">Robotics Handbook</a></li>
                <li><a href="/content/handbooks/computer-vision/">Computer Vision Handbook</a></li>
                <li><a href="/content/handbooks/ai-agents/">AI Agents Handbook</a></li>
            </ul>
        </div>
    </aside>

    <main class="handbook-vertical-content-area">
        <div id="tab-content-overview" class="tab-content-panel active welcome-section">
            <div class="content-panel-header">
                <h2>Welcome to the Self-Driving Car Handbook</h2>
            </div>
            <div class="content-panel-body welcome-panel">
                <p><strong>About this Handbook:</strong> This comprehensive resource guides you through the multifaceted world of self-driving cars. From technical foundations to societal implications, this handbook provides a structured approach to understanding autonomous vehicle technologies, their integration, deployment challenges, and broader impact on our transportation ecosystem.</p>
                <p><strong>Learning Path Suggestion:</strong></p>
                <ul class="learning-path-list">
                    <li><span class="step-number">1</span> Begin with the foundations of autonomous driving, including key concepts, history, and levels of autonomy (Section 1).</li>
                    <li><span class="step-number">2</span> Master the core technologies that enable self-driving vehicles: perception systems, localization and mapping, planning and decision making, and control (Sections 2-5).</li>
                    <li><span class="step-number">3</span> Explore the AI and machine learning approaches that power modern autonomous systems (Section 6).</li>
                    <li><span class="step-number">4</span> Understand how these technologies are integrated into cohesive architectures and the safety considerations they entail (Sections 7-8).</li>
                    <li><span class="step-number">5</span> Examine the human factors, infrastructure requirements, and development strategies for autonomous vehicles (Sections 9-11).</li>
                    <li><span class="step-number">6</span> Investigate the regulatory landscape and broader societal impact of self-driving technology (Sections 12-13).</li>
                    <li><span class="step-number">7</span> Discover emerging trends and future directions in autonomous transportation (Section 14).</li>
                </ul>
                <p class="last-updated"><em>This handbook is a living document, regularly updated to reflect the latest research and industry best practices. <strong>Last major review: May 2025.</strong></em></p>
            </div>
        </div>

        <div id="tab-content-s1" class="tab-content-panel"></div>
        <div id="tab-content-s2" class="tab-content-panel"></div>
        <div id="tab-content-s3" class="tab-content-panel"></div>
        <div id="tab-content-s4" class="tab-content-panel"></div>
        <div id="tab-content-s5" class="tab-content-panel"></div>
        <div id="tab-content-s6" class="tab-content-panel"></div>
        <div id="tab-content-s7" class="tab-content-panel"></div>
        <div id="tab-content-s8" class="tab-content-panel"></div>
        <div id="tab-content-s9" class="tab-content-panel"></div>
        <div id="tab-content-s10" class="tab-content-panel"></div>
        <div id="tab-content-s11" class="tab-content-panel"></div>
        <div id="tab-content-s12" class="tab-content-panel"></div>
        <div id="tab-content-s13" class="tab-content-panel"></div>
        <div id="tab-content-s14" class="tab-content-panel"></div>
    </main>

    <div class="section-content-templates" style="display: none;">
        <div id="template-s1">
            <div class="content-panel-header">
                <h2>Foundations of Autonomous Driving</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section1.md %}
        </div>

        <div id="template-s2">
            <div class="content-panel-header">
                <h2>Core Technologies: Perception</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section2.md %}
        </div>

        <div id="template-s3">
            <div class="content-panel-header">
                <h2>Core Technologies: Localization and Mapping</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section3.md %}
        </div>

        <div id="template-s4">
            <div class="content-panel-header">
                <h2>Core Technologies: Planning and Decision Making</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section4.md %}
        </div>

        <div id="template-s5">
            <div class="content-panel-header">
                <h2>Core Technologies: Control</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section5.md %}
        </div>

        <div id="template-s6">
            <div class="content-panel-header">
                <h2>AI and Machine Learning in Depth</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section6.md %}
        </div>

        <div id="template-s7">
            <div class="content-panel-header">
                <h2>System Architecture and Integration</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section7.md %}
        </div>

        <div id="template-s8">
            <div class="content-panel-header">
                <h2>Safety, Reliability, and Security</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section8.md %}
        </div>

        <div id="template-s9">
            <div class="content-panel-header">
                <h2>Human Factors and Interaction</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section9.md %}
        </div>

        <div id="template-s10">
            <div class="content-panel-header">
                <h2>Infrastructure and Ecosystem Considerations</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section10.md %}
        </div>

        <div id="template-s11">
            <div class="content-panel-header">
                <h2>Development, Testing, and Deployment Strategies</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section11.md %}
        </div>

        <div id="template-s12">
            <div class="content-panel-header">
                <h2>Regulations, Standards, and Policy</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section12.md %}
        </div>

        <div id="template-s13">
            <div class="content-panel-header">
                <h2>Societal and Economic Impact</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section13.md %}
        </div>

        <div id="template-s14">
            <div class="content-panel-header">
                <h2>Future Trends and Frontier Research</h2>
            </div>
            {% include /content/handbooks/self-driving-cars/section14.md %}
        </div>
    </div>

</div>
</div>
<script src="/assets/js/section-academic.js"></script>
