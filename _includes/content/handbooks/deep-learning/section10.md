Chapter 25: Transfer Learning and Fine-tuning
Motivation: Leveraging knowledge from pre-trained models.

Pre-training on Large Datasets (e.g., ImageNet, Large Text Corpora).

Fine-tuning Strategies: Feature Extraction (Freezing early layers), Fine-tuning all layers, Layer-wise unfreezing, Discriminative Fine-tuning (Different learning rates per layer).

Adapters & Parameter-Efficient Fine-Tuning (PEFT): LoRA, Prefix Tuning, Prompt Tuning (Reducing computation/memory for adapting large models).

Chapter 26: Self-Supervised Learning (SSL) Deep Dive
Learning Representations from Unlabeled Data.

Pretext Tasks Revisited: Designing tasks where labels are derived from data structure.

Contrastive Learning Methods: SimCLR, MoCo, BYOL, SimSiam - Architectures, Loss Functions, Importance of Augmentations and Negative Samples (or lack thereof).

Masked Modeling Methods: Masked Autoencoders (MAE) for Vision, BERT's Masked Language Model (MLM) for NLP.

Benefits: State-of-the-art representations, Reduced reliance on labeled data.

Chapter 27: Multi-Task Learning and Curriculum Learning
Multi-Task Learning (MTL): Training a single model on multiple related tasks simultaneously. Benefits (Shared representations, Regularization), Architectures (Hard/Soft Parameter Sharing).

Curriculum Learning: Training model on easier examples first, gradually increasing difficulty. Strategies for defining curriculum.
