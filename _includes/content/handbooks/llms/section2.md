---
layout: default
title: Pre-training LLMs: Data, Objectives, and Scale
---

Chapter 5: Data Curation at Scale
Data Philosophy: Scale vs. Quality vs. Diversity Tradeoffs. Impact of data on model capabilities and biases.

Data Sources Deep Dive: Common Crawl (WET/WARC formats, Filtering strategies - CCNet, OSCAR filtering), BooksCorpus/Gutenberg PG-19, OpenWebText/WebText2, The Pile (Components, Philosophy), RedPajama, RefinedWeb, GitHub Code (Licensing issues), Wikipedia (Multiple languages), ArXiv, Dialogue Data (Reddit dumps, StackExchange), Multilingual Sources (mC4, CC-100). Domain-specific corpora.

Data Preprocessing Pipeline In-Depth: Language ID, Quality Filtering (Classifier scores, Perplexity filtering, Heuristics - line length, symbol ratios), Deduplication (Document-level, Paragraph-level; Exact vs. Fuzzy - MinHash LSH details), PII Redaction/Removal (Regex, NER, Specialized tools), Toxicity Filtering (Classifiers, Keyword lists - limitations), Code Cleaning, Format Normalization.

Data Contamination Deep Dive: Benchmark leakage detection (N-gram overlap, Embedding similarity), Mitigation during collection and filtering. Training vs. Test set separation hygiene.

Bias Analysis and Mitigation in Data: Identifying demographic biases, Stereotypes, Skewed representations. Data augmentation/reweighing strategies (limited effectiveness at scale).

Data Governance: Licensing, Copyright Issues (Fair Use debate), Privacy Regulations (GDPR, CCPA), Data Provenance Tracking.

Synthetic Data Generation for Pre-training: Using LLMs to generate supplementary data (Quality control challenges).

Chapter 6: Tokenization Strategies
Subword Tokenization Rationale: Handling OOV words, Morphological awareness, Controlling sequence length.

Byte-Pair Encoding (BPE): Detailed Algorithm (Frequency counting, Merging), Merge operations, Vocabulary construction, Use in GPT/RoBERTa/Llama.

WordPiece: Differences from BPE (Likelihood-based merging), Use in BERT.

Unigram Language Model Tokenization: Algorithm (Starts with large vocabulary, Prunes based on LM likelihood loss), Use in SentencePiece/T5/ALBERT.

SentencePiece Library: Implementation details, Normalization options, Language-agnostic processing.

Vocabulary Size: Impact on embedding matrix size, Sequence length, Model performance, Handling rare words/specialized domains. Multilingual vocabularies.

Handling Special Tokens: Role and usage of <s>, </s>, [PAD], [UNK], [CLS], [SEP], [MASK], User-defined tokens.

Chapter 7: Pre-training Objectives In-Depth
Causal Language Modeling (CLM): Formulation, Loss calculation, Teacher Forcing, Exposure Bias issue.

Masked Language Modeling (MLM): BERT objective details, Masking probability/strategies (Random, Whole Word Masking, N-gram masking - SpanBERT), Prediction head, Potential downsides (Pretrain-Finetune discrepancy).

Permutation Language Modeling (PLM): XLNet objective details, Two-Stream Self-Attention mechanism.

Denoising Objectives Deep Dive:

T5 Span Corruption: Sentinel tokens, Variable mask lengths, Pre-training tasks (Prefix-LM adaptation).

BART Denoising Schemes: Detailed examples and impact of each scheme.

Contrastive Objectives: ELECTRA's Replaced Token Detection (RTD) - Generator/Discriminator setup, Efficiency gains.

Unified Objectives / Multi-task Pre-training: Combining different objectives (e.g., UL2).

Loss Functions Analysis: Cross-Entropy details, Label Smoothing.

Implicit Objectives: What models learn beyond the explicit objective (Syntax, Semantics, World Knowledge).

Chapter 8: Scaling Laws and Training Dynamics
Empirical Scaling Laws Deep Dive: Kaplan et al. vs. Chinchilla (Data vs. Parameter scaling debate), Irreducible Loss component, Power-law relationships, Predicting performance. Deviations from scaling laws.

Training Dynamics Analysis: Loss curve interpretation (Plateaus, Spikes), Gradient norm evolution, Update norm ratios (Debugging tool), Sharpness-Aware Minimization (SAM) concept.

Emergent Abilities Revisited: Definition, Examples (Arithmetic, Reasoning tasks), Hypotheses for emergence (Scale, Instruction Tuning), Ongoing research and debate.

Training Instability Deep Dive: Causes (Numerical precision - BF16 vs FP16, Large learning rates, Initialization issues, Data outliers), Mitigation Techniques (Gradient Clipping - value/norm, Selective backpropagation, Numerical stability checks, LR schedules, Initialization tuning).

Grokking Phenomenon: Delayed generalization during training.

Chapter 9: Infrastructure for Large-Scale Training
Hardware Architectures: GPU (A100/H100 details - Tensor Cores, NVLink bandwidth), TPU (v4/v5 details - Matrix Multiply Units, Inter-Chip Interconnect - ICI). Comparison. Specialized AI accelerators.

Distributed Training Paradigms In-Depth:

Data Parallelism (DP): Synchronous vs. Asynchronous (rarely used), Gradient averaging, Communication overhead (AllReduce).

Tensor Parallelism (TP): 1D/2D/3D parallelism for MLP and Attention layers, Communication patterns (AllGather, ReduceScatter).

Pipeline Parallelism (PP): Microbatching, Bubble overhead analysis, Inter-stage communication, Schedule types (GPipe, PipeDream-Flush, 1F1B).

Sequence Parallelism: Parallelizing attention/FFN along sequence dimension, Reducing activation memory.

ZeRO Stages (1, 2, 3): Detailed explanation of what state (Optimizer, Gradient, Parameter) is sharded at each stage and communication costs. Offloading (CPU/NVMe).

FSDP (PyTorch): Comparison to ZeRO, API usage.

Combining Parallelism Strategies (e.g., 3D Parallelism: DP+TP+PP).

Optimization Algorithms at Scale: AdamW details, Adafactor (Factored optimizer, lower memory), Sophia (Second-order clipping), LAMB. Learning Rate Schedulers (Linear warmup + Cosine/Linear decay, Inverse Square Root).

Mixed Precision Training Details: FP16 vs. BF16 (Range vs. Precision), Dynamic Loss Scaling mechanism.

Checkpointing & Resiliency: Distributed checkpointing formats, Asynchronous saving, Strategies for handling node failures, Automatic resumption.

Cluster Management & Scheduling: Slurm configuration for large jobs, Kubernetes operators for ML, Orchestration tools (Ray). Monitoring infrastructure health.

Chapter 10: Environmental and Cost Considerations
Detailed Cost Breakdown: Hardware acquisition/rental, Energy consumption, Engineering time. Cloud vs. On-premise tradeoffs.

Carbon Footprint Methodologies: Estimating emissions based on energy source, PUE (Power Usage Effectiveness), Hardware utilization. Tools and calculators.

Sustainable AI Strategies: Algorithmic efficiency (Sparse models, Efficient architectures), Hardware selection, Data center efficiency (Cooling, Renewable energy sourcing), Inference optimization impact, Reporting standards (ML CO2 Impact). Life Cycle Assessment (LCA) for AI.
