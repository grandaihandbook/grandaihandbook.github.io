---
layout: default
title: Adaptation: Post-Pre-training Methods
---

Chapter 11: Supervised Fine-Tuning (SFT) / Instruction Tuning
Rationale Revisited: Aligning format, Teaching task execution, Improving controllability.

Instruction Dataset Design: Task diversity, Linguistic diversity, Formatting consistency, Quality vs. Quantity, Negative examples, Role prompting formats (System/User/Assistant). Dataset examples (FLAN, T0, Super-NaturalInstructions, Self-Instruct, Alpaca, Dolly, OpenOrca, ShareGPT). Synthetic data generation risks.

Training Details: Full fine-tuning vs. PEFT, Hyperparameter search space, Handling catastrophic forgetting (Rehearsal, Regularization methods - EWC), Multi-epoch fine-tuning considerations. Data augmentation for instructions.

Impact Analysis: Measuring instruction following fidelity, Zero-shot performance gains/losses, Impact on safety/bias. Tradeoffs with pre-training knowledge.

Multi-task Instruction Tuning vs. Single-task Fine-tuning.

Chapter 12: Reinforcement Learning from Human Feedback (RLHF)
Alignment Goals: Helpfulness, Honesty, Harmlessness (HHH) - nuances and tensions. Defining preferences.

Preference Data Collection Deep Dive: Prompt sourcing, Sampling strategies from SFT model, Labeling interface design (Pairwise comparison, K-way comparison, Rating scales), Rater instructions and training, Dealing with subjective/ambiguous cases, IAA metrics. Active learning for data selection.

Reward Modeling (RM) Details: Architecture choices (Using SFT head vs. separate model), Training data formatting, Loss functions (Bradley-Terry model, Rank-based losses), Calibration techniques, RM limitations (Reward hacking, Out-of-distribution issues, Brittleness). Ensemble RMs.

RL Algorithm (PPO) Deep Dive: Policy network (LLM), Value network (Critic), Advantage estimation (GAE - Generalized Advantage Estimation), Clipped Surrogate Objective details, Entropy bonus, KL Divergence Penalty (Adaptive vs. Fixed KL coefficient), PPO implementation details (Experience replay buffer, Mini-batch updates).

RLHF Pipeline Challenges: Stability, Computational cost, Hyperparameter sensitivity, Reward-KL tradeoff. Iterative nature.

Alignment Tax Revisited: Quantifying performance changes on standard benchmarks after RLHF.

Chapter 13: Advanced Alignment Techniques
Direct Preference Optimization (DPO): Detailed derivation, Connection to RLHF reward implicit model, Bradley-Terry objective link, Implementation details, Advantages/Disadvantages vs RLHF/PPO.

IPO / KTO: Addressing DPO limitations (e.g., preference neglect). Theoretical basis.

Constitutional AI: Detailed process (Critique -> Revision loop), Defining the constitution (Principles, Examples), Using AI feedback (RLAIF) vs. Human feedback. Scalability benefits and risks.

Iterated Alignment Processes: Combining SFT, RM training, RLHF/DPO in multiple rounds. Self-critique loops.

Steerability and Controllability: Techniques for guiding generation at inference time (e.g., Classifier guidance, Contrastive decoding, Guided sampling based on external classifiers or rules). Connection to Inference-Time Computation.

Model Editing Techniques: ROME, MEMIT - Directly modifying model weights to correct factual errors or behaviors without full retraining.

Chapter 14: Parameter-Efficient Fine-Tuning (PEFT) Deep Dive
Motivation: Overcoming prohibitive cost of full fine-tuning, Multi-task adaptation, Model customization.

Addition-Based Methods:

Adapters: Original Bottleneck Adapters, Pfeiffer Adapters, Houlsby Adapters (Serial vs. Parallel placement), Parameter count analysis.

Soft Prompts / Prompt Tuning: Embedding space tuning, Initialization strategies, Parameter count analysis, Performance characteristics.

Prefix Tuning: Tuning prefixes in Key/Value projections of attention layers.

Reparameterization-Based Methods:

LoRA: Low-Rank matrix decomposition details, Application to Attention/FFN layers, Rank (r) and alpha parameter tuning, Merging weights for zero inference overhead.

QLoRA: 4-bit NormalFloat (NF4) quantization, Double Quantization, Paged Optimizers (NVIDIA unified memory). Enabling fine-tuning very large models on single GPUs.

DoRA (Weight-Decomposed Low-Rank Adaptation): Further refinement.

AdaLoRA: Dynamically allocating rank budget based on importance scores.

Selective Methods:

BitFit: Rationale, Effectiveness on different architectures.

(IA)^3: Scaling activations - details and comparison to LoRA.

Choosing PEFT Methods: Comparison table (Parameters, Performance, Memory, Inference Overhead, Implementation Complexity). Task-specific suitability (NLU vs. Generation).

Combining PEFT Methods (e.g., Adapters + LoRA). Unified frameworks (e.g., peft library). Catastrophic forgetting in PEFT.
