<link rel="stylesheet" href="/assets/css/section-academic.css">
<div class="handbook-container-vertical-tabs">
<div class="handbook-container-inner">
    <aside class="handbook-vertical-nav">
        <div class="vertical-nav-header">
            <h1>Generative AI</h1>
            <div class="header-accent-vertical"></div>
        </div>
        <ul class="vertical-tabs-list">
            <li class="vertical-tab-ul"><a href="#overview" data-tab="overview" class="vertical-tab-link active">Overview</a></li>
            <li class="vertical-tab-ul"><a href="#s1" data-tab="s1" class="vertical-tab-link">Foundation & ML</a></li>
            <li class="vertical-tab-ul"><a href="#s2" data-tab="s2" class="vertical-tab-link">Neural Networks</a></li>
            <li><a href="#s3" data-tab="s3" class="vertical-tab-link">LLM Architecture</a></li>
            <li><a href="#s4" data-tab="s4" class="vertical-tab-link">Finetuning</a></li>
            <li><a href="#s5" data-tab="s5" class="vertical-tab-link">Applications</a></li>
            <li><a href="#s6" data-tab="s6" class="vertical-tab-link">Inference Opt.</a></li>
            <li><a href="#s7" data-tab="s7" class="vertical-tab-link">Quadratic Scaling</a></li>
            <li><a href="#s8" data-tab="s8" class="vertical-tab-link">Other Models</a></li>
            <li><a href="#s9" data-tab="s9" class="vertical-tab-link">Multimodal</a></li>
        </ul>
        <div class="vertical-nav-footer">
             <p><strong>Related Handbooks:</strong></p>
            <ul>
                <li><a href="/content/handbooks/nlp/">NLP Handbook</a></li>
                <li><a href="/content/handbooks/deep-learning/">Deep Learning Handbook</a></li>
                <li><a href="/content/handbooks/foundation-models/">Foundation Models Handbook</a></li>
            </ul>
        </div>
    </aside>

    <main class="handbook-vertical-content-area">
        <div id="tab-content-overview" class="tab-content-panel active welcome-section">
    <div class="content-panel-header">
        <h2>Welcome to the Generative AI Handbook</h2>
    </div>
    <div class="content-panel-body welcome-panel">
        <p><strong>About this Handbook:</strong> This comprehensive resource is meticulously designed to guide you through the fascinating and rapidly evolving field of Generative Artificial Intelligence. From the core statistical underpinnings to the complex architectures of modern Large Language Models, each section builds upon the last, offering a clear and structured learning pathway.</p>
        <p><strong>Learning Path Suggestion:</strong></p>
        <ul class="learning-path-list">
            <li><span class="step-number">1</span> Begin with the foundational concepts in statistical prediction and machine learning (Section 1).</li>
            <li><span class="step-number">2</span> Progress through neural network approaches (Section 2) and the intricacies of LLM architecture (Section 3).</li>
            <li><span class="step-number">3</span> Explore specialized techniques for training, finetuning, and aligning these powerful models (Section 4).</li>
            <li><span class="step-number">4</span> Examine diverse applications, interpretability methods, and crucial evaluation metrics (Section 5).</li>
            <li><span class="step-number">5</span> Understand performance enhancements through inference optimization (Section 6) and solutions to challenges like quadratic scaling (Section 7).</li>
            <li><span class="step-number">6</span> Discover generative models beyond transformers (Section 8) and the exciting frontier of multimodal AI (Section 9).</li>
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
    </main>

    <div class="section-content-templates" style="display: none;">
        <div id="template-s1">
            <div class="content-panel-header">
                <h2>Foundation: Statistical Prediction & ML</h2>
            </div>
            {% include /content/handbooks/generative-ai/section1.md %}
        </div>

        <div id="template-s2">
            <div class="content-panel-header">
                <h2>Neural Networks & Deep Learning</h2>
            </div>
            {% include /content/handbooks/generative-ai/section2.md %}
        </div>

        <div id="template-s3">
            <div class="content-panel-header">
                <h2>LLM Architecture & Training</h2>
            </div>
            {% include /content/handbooks/generative-ai/section3.md %}
        </div>

        <div id="template-s4">
            <div class="content-panel-header">
                <h2>Finetuning & Alignment</h2>
            </div>
            {% include /content/handbooks/generative-ai/section4.md %}
        </div>

        <div id="template-s5">
            <div class="content-panel-header">
                <h2>Applications & Interpretability</h2>
            </div>
            {% include /content/handbooks/generative-ai/section5.md %}
        </div>

        <div id="template-s6">
            <div class="content-panel-header">
                <h2>Inference Optimization</h2>
            </div>
            {% include /content/handbooks/generative-ai/section6.md %}
        </div>

        <div id="template-s7">
            <div class="content-panel-header">
                <h2>Addressing the Quadratic Scaling Problem</h2>
            </div>
            {% include /content/handbooks/generative-ai/section7.md %}
        </div>

        <div id="template-s8">
            <div class="content-panel-header">
                <h2>Beyond Transformers: Other Generative Models</h2>
            </div>
            {% include /content/handbooks/generative-ai/section8.md %}
        </div>

        <div id="template-s9">
            <div class="content-panel-header">
                <h2>Multimodal Models</h2>
            </div>
            {% include /content/handbooks/generative-ai/section9.md %}
        </div>
    </div>

</div>
</div>
<script src="/assets/js/section-academic.js"></script>
