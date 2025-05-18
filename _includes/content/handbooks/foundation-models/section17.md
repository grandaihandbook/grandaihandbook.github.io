---

layout: default
title: "Diffusion Models"
description: "Explore the fascinating world of diffusion models for generative tasks in vision, audio, and beyond, covering DDPM, Stable Diffusion, noise scheduling, latent diffusion, score-based models, and denoising steps."

---

 <link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

 <div class="key-concept">
   This section delves into diffusion models, a powerful class of generative models that have achieved state-of-the-art results in various domains, particularly image synthesis. We will unravel the core principles behind diffusion models, starting with the forward diffusion process that gradually adds noise to data, and the reverse denoising process that learns to generate data from noise. Key concepts like DDPM (Denoising Diffusion Probabilistic Models), Stable Diffusion and its efficient latent space operations, the crucial role of noise scheduling, the advantages of latent diffusion models, the connection to score-based generative models, and the iterative denoising steps will be thoroughly examined. Understanding these components is crucial for grasping the capabilities and potential of diffusion models in generating high-fidelity and diverse data.
 </div>

 <h2 id="introduction-to-diffusion-models">Introduction to Diffusion Models</h2>

 <p>Diffusion models are a class of generative models inspired by non-equilibrium thermodynamics. They learn to generate data by reversing a gradual noising process. This approach has shown remarkable success in generating high-quality images, audio, and other complex data.</p>

 <h3 id="forward-diffusion-process">Forward Diffusion Process (Noising)</h3>
 <p>The forward diffusion process gradually adds Gaussian noise to the input data over a series of time steps $T$. Starting from a real data sample $x_0 \sim q(x)$, a Markov chain of diffusion steps is defined, producing a sequence of noisy samples $x_1, x_2, ..., x_T$. Each step adds a small amount of Gaussian noise according to a variance schedule $\{\beta_t\}_{t=1}^T$. The conditional distribution for the forward process is:</p>
 $$q(x_t | x_{t-1}) = \mathcal{N}(x_t; \sqrt{1 - \beta_t} x_{t-1}, \beta_t \mathbf{I})$$
 <p>For sufficiently large $T$ and a well-designed variance schedule, the data distribution $q(x_T)$ approaches a simple, tractable distribution, typically an isotropic Gaussian distribution $\mathcal{N}(0, \mathbf{I})$.</p>
 <div class="resource-links">
   <h3>Key Resources for Forward Diffusion</h3>
   <ul>
     <li>Blog Post: <a href="https://lilianweng.github.io/posts/2021-07-11-diffusion-models/">What are Diffusion Models?</a> by Lilian Weng</li>
     <li>Tutorial: <a href="https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial8/Diffusion_Models.html">Diffusion Models - Deep Learning Course</a> by University of Amsterdam</li>
   </ul>
 </div>

 <h3 id="reverse-diffusion-process-denoising">Reverse Diffusion Process (Denoising)</h3>
 <p>The goal is to learn the reverse process, which starts from the noise $x_T \sim \mathcal{N}(0, \mathbf{I})$ and gradually denoises it back to a real data sample $x_0$. If we knew the conditional probability $p(x_{t-1} | x_t)$, we could sample from the reverse process. This reverse process is also a Gaussian distribution:</p>
 $$p(x_{t-1} | x_t) = \mathcal{N}(x_{t-1}; \mu_\theta(x_t, t), \Sigma_\theta(x_t, t))$$
 <p>A neural network is trained to predict the parameters of this conditional distribution, $\mu_\theta(x_t, t)$ (mean) and $\Sigma_\theta(x_t, t)$ (covariance), at each time step $t$. The training objective typically involves predicting the noise added at each step of the forward process.</p>
 <div class="resource-links">
   <h3>Key Resources for Reverse Diffusion</h3>
   <ul>
     <li>Paper: <a href="https://arxiv.org/abs/2006.11239">Denoising Diffusion Probabilistic Models</a> by Ho et al. (2020) - The seminal DDPM paper.</li>
     <li>Blog Post: <a href="https://colab.research.google.com/drive/1PEsNFhSGFUCpefMTTcqg4Ce1JRHdtFow?usp=sharing">Understanding Diffusion Models</a> by AssemblyAI</li>
   </ul>
 </div>

 <h2 id="key-concepts-and-architectures">Key Concepts and Architectures</h2>

 <h3 id="ddpm-denoising-diffusion-probabilistic-models">DDPM (Denoising Diffusion Probabilistic Models)</h3>
 <p>DDPM, as introduced by Ho et al. (2020), is a foundational diffusion model that defines the forward and reverse processes as described above. It trains a U-Net architecture to predict the noise added at each diffusion step. The loss function aims to minimize the difference between the predicted noise and the actual noise added during the forward process.</p>
 <div class="resource-links">
   <h3>Key Resources for DDPM</h3>
   <ul>
     <li>Paper: <a href="https://arxiv.org/abs/2006.11239">Denoising Diffusion Probabilistic Models</a> by Ho et al. (2020)</li>
     <li>Code Implementation (PyTorch): <a href="https://github.com/lucidrains/denoising-diffusion-pytorch">denoising-diffusion-pytorch</a> by lucidrains</li>
   </ul>
 </div>

 <h3 id="stable-diffusion">Stable Diffusion</h3>
 <p>Stable Diffusion, developed by Rombach et al. (2022), is a significant advancement that operates in the latent space of a pre-trained autoencoder. This reduces the dimensionality of the data, making the diffusion process more computationally efficient and allowing for the generation of high-resolution images with lower computational resources. Text-to-image generation is achieved by conditioning the denoising process on text embeddings.</p>
 <div class="resource-links">
   <h3>Key Resources for Stable Diffusion</h3>
   <ul>
     <li>Paper: <a href="https://arxiv.org/abs/2112.10752">High-Resolution Image Synthesis with Latent Diffusion Models</a> by Rombach et al. (2022)</li>
     <li>Blog Post: <a href="https://stability.ai/blog/stable-diffusion-public-release">Stable Diffusion Public Release</a> by Stability AI</li>
     <li>Tutorial: <a href="https://huggingface.co/docs/diffusers/stable_diffusion">Stable Diffusion with 🤗 Diffusers</a> by Hugging Face</li>
   </ul>
 </div>

 <h3 id="noise-scheduling">Noise Scheduling (Variance Schedule)</h3>
 <p>The variance schedule $\{\beta_t\}_{t=1}^T$ in the forward diffusion process determines how much noise is added at each time step. Different schedules (e.g., linear, cosine) can significantly impact the training and generation quality. Carefully designed schedules help in ensuring a smooth transition to a Gaussian distribution and facilitate effective learning of the reverse process.</p>
 <div class="resource-links">
   <h3>Key Resources for Noise Scheduling</h3>
   <ul>
     <li>Explanation: <a href="https://nn.labml.ai/diffusion/ddpm/noise_schedule.html">Noise Schedule in DDPM</a> by LabML AI</li>
     <li>Research Paper: <a href="https://arxiv.org/abs/2102.09672">Improved Techniques for Training Score-Based Generative Models</a> by Song et al. (2021) - Discusses variance explosion and scheduling.</li>
   </ul>
 </div>

 <h3 id="latent-diffusion">Latent Diffusion Models (LDMs)</h3>
 <p>Latent Diffusion Models (LDMs), as exemplified by Stable Diffusion, perform the diffusion and denoising processes in a lower-dimensional latent space learned by an autoencoder. This approach offers several advantages, including reduced computational cost, faster sampling, and the ability to condition generation on various inputs (e.g., text, semantic maps) more effectively.</p>
 <div class="resource-links">
   <h3>Key Resources for Latent Diffusion</h3>
   <ul>
     <li>Paper: <a href="https://arxiv.org/abs/2112.10752">High-Resolution Image Synthesis with Latent Diffusion Models</a> by Rombach et al. (2022)</li>
     <li>Blog Post: <a href="https://wandb.ai/wandb_fc/generative-models/reports/Latent-Diffusion-Models--VmlldzoyNTYwODIx">Latent Diffusion Models Explained</a> by Weights & Biases</li>
   </ul>
 </div>

 <h3 id="score-based-generative-models">Score-Based Generative Models</h3>
 <p>Score-based generative models are closely related to diffusion models. They aim to learn the score function (the gradient of the log probability density) of the data distribution at different noise levels. Sampling is then performed by following the gradient of the score function back to the data manifold using Langevin dynamics or similar techniques. DDPM can be viewed as a specific parameterization of a score-based model.</p>
 <div class="resource-links">
   <h3>Key Resources for Score-Based Models</h3>
   <ul>
     <li>Paper: <a href="https://arxiv.org/abs/1907.05600">Generative Modeling by Estimating Gradients of the Data Distribution</a> by Song and Ermon (2019)</li>
     <li>Paper: <a href="https://arxiv.org/abs/2006.09011">Score-Based Generative Modeling through Stochastic Differential Equations</a> by Song et al. (2020)</li>
   </ul>
 </div>

 <h3 id="denoising-steps">Denoising Steps</h3>
 <p>The reverse diffusion process involves iteratively denoising a noisy sample over multiple steps. At each step $t$, the trained neural network predicts the mean (and sometimes the variance) of the previous step's distribution, allowing us to sample a less noisy version of the data. The quality of the generated data heavily depends on the number of denoising steps and the accuracy of the learned denoising function.</p>
 <div class="resource-links">
   <h3>Key Resources for Denoising Steps</h3>
   <ul>
     <li>Tutorial: <a href="https://pytorch.org/tutorials/beginner/dcgan_faces.html">DCGAN Tutorial</a> (while focused on GANs, it illustrates iterative generative processes) by PyTorch - The iterative nature is a key similarity.</li>
     <li>Research Paper: Many diffusion model papers detail the sampling algorithms involving iterative denoising. Refer back to the DDPM and Stable Diffusion papers.</li>
   </ul>
 </div>

 <h2 id="applications-and-advancements">Applications and Advancements</h2>

 <p>Diffusion models have revolutionized generative modeling and are being applied to a wide range of tasks:</p>
 <ul>
   <li><strong>Image Synthesis</strong>: Generating photorealistic images from text prompts (e.g., Stable Diffusion, DALL-E 2, Midjourney).</li>
   <li><strong>Image Editing</strong>: Performing semantically meaningful edits on existing images.</li>
   <li><strong>Video Generation</strong>: Creating realistic and coherent video sequences.</li>
   <li><strong>Audio Synthesis</strong>: Generating high-fidelity audio, music, and speech.</li>
   <li><strong>3D Generation</strong>: Creating 3D models and scenes.</li>
   <li><strong>Scientific Applications</strong>: Generating molecules, materials, and biological sequences.</li>
 </ul>
 <p>Ongoing research focuses on improving the efficiency (reducing the number of denoising steps), controllability (better alignment with conditioning inputs), and fidelity of diffusion models.</p>
 <div class="resource-links">
   <h3>Key Resources for Applications</h3>
   <ul>
     <li>Blog Post: <a href="https://openai.com/blog/dall-e-2/">DALL·E 2: Creating Images from Text</a> by OpenAI</li>
     <li>Research Survey: <a href="https://arxiv.org/abs/2209.00796">A Survey on Generative Diffusion Models</a> by Croitoru et al. (2022)</li>
   </ul>
 </div>

 <h2 id="challenges-and-future-directions">Challenges and Future Directions</h2>

 <p>Despite their success, diffusion models still face challenges:</p>
 <ul>
   <li><strong>Computational Cost</strong>: Training and sampling can be computationally expensive, especially for high-resolution data and a large number of denoising steps.</li>
   <li><strong>Sampling Speed</strong>: Generating a single high-quality sample can take significant time due to the iterative denoising process.</li>
   <li><strong>Controllability</strong>: Achieving fine-grained control over the generation process can be challenging.</li>
 </ul>
 <p>Future research directions include:</p>
 <ul>
   <li><strong>Faster Sampling Techniques</strong>: Developing methods to reduce the number of denoising steps without sacrificing quality (e.g., using advanced ODE solvers or distillation techniques).</li>
   <li><strong>Improved Efficiency</strong>: Designing more efficient model architectures and training strategies.</li>
   <li><strong>Enhanced Controllability</strong>: Exploring better ways to condition the generation process on various modalities and fine-grained instructions.</li>
   <li><strong>Theoretical Understanding</strong>: Further investigating the theoretical foundations of diffusion models to guide architectural design and training.</li>
 </ul>
 <div class="resource-links">
   <h3>Key Resources for Challenges and Future Directions</h3>
   <ul>
     <li>Perspective: <a href="https://distill.pub/2021/understanding-diffusion/">Understanding Diffusion Models: A Guided Tour</a> by Jonathan Ho et al. (2021) - Discusses limitations and future work.</li>
     <li>Review Paper: <a href="https://arxiv.org/abs/2301.11093">Diffusion Models: A Comprehensive Review</a> by Gu et al. (2023)</li>
   </ul>
 </div>

 <div class="summary-section">
   <h3>Key Takeaways</h3>
   <ul>
     <li>Diffusion models generate data by reversing a gradual noising process.</li>
     <li>DDPM is a foundational model that iteratively denoises data using a learned neural network.</li>
     <li>Stable Diffusion improves efficiency by operating in the latent space of an autoencoder.</li>
     <li>Noise scheduling plays a crucial role in the forward diffusion process.</li>
     <li>Latent Diffusion Models offer computational advantages for high-resolution generation.</li>
     <li>Diffusion models are closely related to score-based generative models.</li>
     <li>The reverse process involves iterative denoising steps to generate data.</li>
     <li>Diffusion models have achieved state-of-the-art results in various generative tasks.</li>
     <li>Ongoing research focuses on improving efficiency, speed, and controllability.</li>
   </ul>
 </div>

 <script>
   window.prevSection = "/content/handbooks/foundation-models/section16/";
   window.nextSection = "/content/handbooks/foundation-models/section18/";
 </script>
 <script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
