---
layout: default
title: Foundations and Theoretical Underpinnings
---

Chapter 1: Introduction: The LLM Phenomenon
Defining LLMs: Scale, Emergence, Generalization, In-Context Learning, Scaling Laws Overview.

Historical Trajectory: Statistical LMs -> Neural LMs (RNNs, LSTMs) -> Attention -> Transformers -> Scaling Era (BERT, GPT-2/3/4, T5, Llama, Mistral, Gemini, Claude).

Key Concepts: Pre-training, Fine-tuning, Prompting, Emergent Abilities (Definition, Examples, Debate).

The LLM Ecosystem: Open Source vs. Closed Source Models & Data, APIs vs. Self-Hosting, Research Labs vs. Industry Deployment.

Core Capabilities (Generation, NLU, Reasoning - Overview) & Fundamental Limitations (Hallucinations, Bias, Robustness, Common Sense - Overview).

Chapter 2: Mathematical and Computational Preliminaries
Linear Algebra: Tensors, Operations, Norms, Eigendecomposition, SVD, Low-Rank Approximation.

Calculus: Gradients, Jacobians, Hessians, Chain Rule, Optimization Landscapes (Convexity, Saddle Points, Local/Global Minima).

Probability & Statistics: Distributions (Categorical, Dirichlet, Gaussian), MLE, MAP, Bayesian Inference, Markov Chains, Statistical Tests.

Information Theory: Entropy, Cross-Entropy, KL Divergence, Mutual Information, Pointwise Mutual Information (PMI), Perplexity Formulation.

Computational Complexity: Big O Notation, Analyzing Transformer Complexity (Attention O(n^2), FFN O(d^2)), Amortized Analysis.

Hardware Fundamentals: CPU, GPU (CUDA Cores, Tensor Cores, Memory Bandwidth), TPU Architectures, Memory Hierarchies (HBM, SRAM, DRAM), Interconnects (NVLink, InfiniBand).

Chapter 3: Language Modeling Fundamentals
The Task: Assigning Probabilities to Sequences, Generating Text.

N-gram Models: Markov Assumption, Parameter Estimation, Smoothing Techniques (Add-k, Witten-Bell, Kneser-Ney).

Neural LMs (Pre-Transformer): Feedforward NNLMs (Architecture, Limitations), RNN/LSTM/GRU LMs (Architecture, BPTT, Vanishing/Exploding Gradients).

Evaluation Metrics: Perplexity (Calculation, Interpretation, Sensitivity, Limitations), Bits-Per-Character (BPC), Word Error Rate (WER), BLEU/ROUGE (Context for generation eval).

Chapter 4: The Transformer Architecture: A Deep Dive
Revisiting Attention: Dot-Product, Additive, Scaled Dot-Product Attention. Computational graph view.

Self-Attention: Queries, Keys, Values (Derivation, Interpretation), Attention Weight Matrix, Softmax Temperature, Contextualization process.

Multi-Head Self-Attention: Rationale (Multiple representation subspaces), Implementation (Splitting/Projecting QKV, Concatenation, Output Projection).

Positional Encodings: Necessity, Absolute (Sinusoidal, Learned - pros/cons), Relative (Shaw et al., T5 bias), Rotary Positional Embedding (RoPE - Su et al. - Formulation, Properties), ALiBi (Attention with Linear Biases). Extrapolation properties.

Transformer Blocks:

Layer Normalization: Pre-LN vs. Post-LN (Stability vs. Performance), RMSNorm.

Feed-Forward Networks (MLPs): Role (Pointwise non-linearity), Activation Functions (ReLU, GeLU, SwiGLU, SiLU), Gated Linear Units.

Residual Connections: Importance for depth, Gradient flow analysis.

Encoder Architecture (BERT-like): Stacking blocks, Bidirectional context capture.

Decoder Architecture (GPT-like): Causal (Masked) Self-Attention, Autoregressive generation process, Stacking blocks.

Encoder-Decoder Architecture (T5/BART-like): Encoder stack, Decoder stack, Cross-Attention mechanism (Details).

Architectural Variants: Sparse Attention Preliminaries (Factorized, Strided, Local), Mixture-of-Experts (MoE) Preliminaries (Expert layers, Gating network). Adaptive Computation concepts.
