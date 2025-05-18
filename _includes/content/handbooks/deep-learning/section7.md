Chapter 17: Autoencoders Deep Dive
Unsupervised Representation Learning Recap.

Undercomplete vs. Overcomplete Autoencoders.

Regularized Autoencoders: Sparse AE, Denoising AE (DAE).

Variational Autoencoders (VAEs):

Generative Modeling Goal.

Probabilistic Encoder (Latent Distribution - Mean & Variance).

Probabilistic Decoder.

Loss Function: Reconstruction Loss + KL Divergence (Regularizing the Latent Space).

Reparameterization Trick.

Generating New Samples.

Applications: Dimensionality Reduction, Denoising, Anomaly Detection, Generative Art.

Chapter 18: Generative Adversarial Networks (GANs)
Core Idea: Two-Player Minimax Game (Generator vs. Discriminator).

Architecture: Generator Network, Discriminator Network.

Training Process: Alternating updates for Generator and Discriminator.

Loss Functions: Original Minimax Loss, Non-Saturating Loss.

Chapter 19: Improving GANs: Architectures and Techniques
Challenges in GAN Training: Mode Collapse, Non-convergence, Gradient Diminishing.

DCGAN (Deep Convolutional GANs): Architectural Guidelines (Conv layers, Batch Norm, No pooling).

Conditional GANs (cGANs): Generating data conditioned on labels or other inputs.

Improved Training Techniques: Wasserstein GAN (WGAN / WGAN-GP - Critic, Earth Mover's Distance, Gradient Penalty), Spectral Normalization.

Advanced Architectures: StyleGAN (Style-based generation, Adaptive Instance Normalization), CycleGAN (Unpaired image-to-image translation).

Evaluating GANs (Inception Score, FID - Frechet Inception Distance).
