Chapter 20: Diffusion Models
Core Idea: Systematically Adding Noise (Forward Process) and Learning to Reverse it (Reverse Process).

Forward Process: Markov chain adding Gaussian noise.

Reverse Process: Learning to predict noise (or original data) at each step using a neural network (often U-Net based).

Connection to Denoising Score Matching.

Training: Optimizing variational lower bound or simplified objective.

Sampling (Generation): Iteratively denoising from pure noise.

DDPM (Denoising Diffusion Probabilistic Models).

DDIM (Denoising Diffusion Implicit Models): Faster sampling.

Conditioning Diffusion Models: Classifier Guidance, Classifier-Free Guidance (CFG).

Applications: High-fidelity Image Generation, Audio Synthesis, etc.

Chapter 21: Flow-Based Generative Models
Concept: Transforming a simple distribution (e.g., Gaussian) into a complex data distribution using invertible transformations.

Change of Variables Theorem (Calculating exact likelihood).

Requirement: Transformations must have easily computable Jacobians.

Architectures: NICE (Non-linear Independent Components Estimation), RealNVP (Real-valued Non-Volume Preserving), Glow.

Pros (Exact Likelihood, Stable Training), Cons (Restricted Architectures, Computation).
