Chapter 5: Exact Unlearning: Guaranteed Forgetting

Naive Retraining: The Gold Standard (and its impracticality).

Data Partitioning Strategies:

SISA (Sharded, Isolated, Sliced, and Aggregated) Training.

Ensemble-based Methods (e.g., Bagging, Random Forests with partition-based unlearning).

Selective Retraining and Checkpointing.

Data Augmentation and Deletion-Compliant Training.

Unlearning in Models with Strong Decomposability (e.g., k-NN, some linear models).

Chapter 6: Approximate Unlearning: Efficient Forgetting Mechanisms

Gradient-Based Methods:

Influence Functions: Estimating the impact of data points.

Gradient Ascent on Forgotten Data (Anti-learning).

Gradient Pruning or Nullification.

Newton-Step Based Unlearning.

Perturbation-Based Methods:

Parameter Perturbation and Noise Injection.

Differentially Private Perturbations for Unlearning.

Optimization-Based Unlearning:

Formulating Unlearning as a Constrained Optimization Problem.

Bilevel Optimization Approaches.

Knowledge Distillation for Unlearning:

Training a student model on a "scrubbed" dataset or with modified teacher signals.

Data Modification / Nullification Techniques:

Modifying training data to counteract the effect of forgotten samples.

Counterfactual Explanations and Unlearning.

Amortized Unlearning: Designing models for efficient future unlearning.

Machine Teaching for Unlearning: Guiding the model to forget.

Chapter 7: Certified and Verifiable Unlearning

Techniques for Providing Provable Guarantees about Unlearning.

Differential Privacy as a Framework for Certified Unlearning.

Cryptographic Approaches (less common, more theoretical).

Membership Inference Attacks as a Proxy for Verification (and its limitations).

Auditing Unlearning Mechanisms.
