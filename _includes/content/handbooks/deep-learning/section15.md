Chapter 42: Model Compression Techniques
Motivation: Deploying large models on resource-constrained devices (Edge AI, Mobile).

Network Pruning: Weight Pruning (Magnitude-based, Unstructured vs. Structured), Neuron/Filter Pruning. Iterative Pruning and Fine-tuning.

Quantization: Reducing numerical precision (FP32 -> FP16/BF16/INT8/etc.). Post-Training Quantization (PTQ), Quantization-Aware Training (QAT).

Chapter 43: Knowledge Distillation
Concept: Training a smaller "student" model to mimic a larger pre-trained "teacher" model.

Methods: Matching logits (Soft targets with Temperature), Matching intermediate representations.

Applications: Compressing large models, Transferring capabilities.

Chapter 44: Efficient Deep Learning Architectures
Designing for Efficiency: MobileNets (Depthwise Separable Convolutions), ShuffleNets (Group Convolutions, Channel Shuffle), EfficientNets (Compound Scaling).

Hardware-Aware Neural Architecture Search (NAS).
