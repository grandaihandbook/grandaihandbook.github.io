---
layout: default
title: Addressing Limitations and Advanced Topics
---

Chapter 30: Advanced Long Context Handling
Architectural Approaches Deep Dive:

Sparse Attention: Longformer (Local + Global + Dilated), BigBird (Random + Window + Global) - Details, Theoretical properties.

Linear Attention: Performers (FAVOR+), Linformer (Low-rank projection), RFA (Recurrent Feature Aggregation). Approximating softmax.

Recurrent Approaches: RWKV (RNN-like Transformer).

State Space Models (SSMs): S4 (Structured State Space Sequence Model), Mamba (Selective SSM) - Architecture details, Recurrent vs. Parallel modes, Hardware awareness.

Positional Encoding for Long Sequences: ALiBi analysis, RoPE Scaling methods (NTK-Aware, Dynamic NTK, YaRN) - details. Extrapolation capabilities.

Training Strategies: Curriculum learning for context length, Specialized datasets.

RAG vs. Long Context: Detailed comparison (Latency, Cost, Factuality, Up-to-dateness, Complexity). Hybrid approaches. Evaluation ("Needle in a Haystack" variations).

Chapter 31: Hallucinations: Deeper Analysis and Mitigation
Taxonomy Refined: Factual (Incorrect/ unverifiable info), Reasoning (Flawed logic), Instruction-following (Ignoring constraints), Creative (Intentional fabrication). Intrinsic vs. Extrinsic.

Root Causes Deep Dive: Data (Memorization, Exposure bias, Conflicting facts), Architecture (Inductive biases), Training Objective (MLE limitations), Decoding Strategy (Sampling randomness), Lack of grounding/world knowledge.

Advanced Detection: Uncertainty metrics (Semantic Entropy, P(True), Verbalized confidence), N-gram/embedding overlap with retrieved evidence, Contradiction detection using NLI models, Model self-critique prompting, Using external KGs/databases.

Advanced Mitigation: Retrieval augmentation enhancements (Self-correction, Evidence ranking), Fine-tuning with human preference data against hallucinations (Factuality rewards), Constrained decoding (Forcing output based on evidence), Editing model outputs post-hoc, Prompting for cautiousness/citations.

Chapter 32: Robustness, Calibration, and Uncertainty
Adversarial Robustness Deep Dive: Attack types (White-box, Black-box), Attack goals (Untargeted, Targeted), Methods (FGSM, PGD, Genetic algorithms for prompt attacks), Transferability. Defenses (Adversarial training - effectiveness/cost, Input processing/filtering, Gradient masking pitfalls). Certified robustness (concepts).

Calibration of LLMs: Definition, Reliability diagrams, ECE calculation. Miscalibration issues (Over/Under-confidence). Calibration methods (Temperature scaling, Platt scaling, Isotonic regression, Histogram binning). Impact of model size/RLHF on calibration.

Uncertainty Quantification Deep Dive: Aleatoric (Data) vs. Epistemic (Model) uncertainty. Methods (Monte Carlo Dropout, Deep Ensembles, Bayesian Neural Networks - approximations like VI, Laplace Approximation, Evidential Deep Learning). Using uncertainty for selective generation, Active learning, OOD detection.

Chapter 33: Interpretability and Explainability (XAI for LLMs)
Goals of XAI for LLMs: Debugging, Trust, Fairness auditing, Scientific understanding, Control. Global vs. Local explanations.

Attention Visualization Revisited: Limitations (Not necessarily explanation), Alternatives (Attention rollout, Intervention methods).

Gradient-based Methods: Input gradients, Saliency maps, Integrated Gradients, SmoothGrad. Application to input tokens/embeddings.

Perturbation-based Methods: Occlusion analysis, LIME details for text, SHAP (KernelSHAP, PartitionSHAP) applicability and computational cost for LLMs. Concept-based explanations.

Probing Internal Representations: Analyzing neuron activations (Polysemanticity problem), Layer activations, Using diagnostic classifiers (Probes) to test for encoded information (Syntax, Semantics).

Mechanistic Interpretability: Goal (Reverse engineering circuits), Techniques (Activation patching, Path analysis, Analyzing specific components like induction heads), Tools and research directions. Challenges (Scale, Complexity).
