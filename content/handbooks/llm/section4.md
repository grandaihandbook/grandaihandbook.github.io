---
layout: default
title: Evaluation: Measuring LLM Capabilities and Limitations
---

Chapter 15: Evaluation Fundamentals and Challenges
The Evaluation Landscape: Capabilities, Alignment, Safety, Robustness, Efficiency.

Challenges Revisited: Nuance of language, Subjectivity, Lack of ground truth, Sensitivity, Contamination, Cost, Dynamic nature of models. Ethics of evaluation.

Intrinsic vs. Extrinsic Evaluation Details.

Static Benchmarks: Pros/Cons (Reproducibility vs. Gaming/Stagnation).

Dynamic / Interactive Evaluation: Chatbots arenas, Human-in-the-loop testing.

Meta-Evaluation: Evaluating the evaluation metrics and benchmarks themselves (Correlation with human judgment, Robustness).

Chapter 16: Automated Metrics: NLU, Generation, Code
NLU Metrics: Accuracy, F1, Matthews Correlation Coefficient (MCC) - GLUE/SuperGLUE details.

Generation Metrics Deep Dive:

BLEU: N-gram precision details, Brevity penalty calculation, Smoothing techniques.

ROUGE: ROUGE-N, ROUGE-L (LCS), ROUGE-S (Skip-bigram) - Calculation details, Confidence intervals.

METEOR: Alignment process, Stemming/Synonymy matching (WordNet), Parameter tuning.

Embedding-Based: BERTScore (Contextual embeddings, Cosine similarity, Importance weighting), MoverScore (Word Mover's Distance).

Model-Based: Using pre-trained LMs to score likelihood (Perplexity variants), Quality estimation models (BLEURT, COMET for MT).

Code Generation Metrics: Pass@k calculation, CodeBLEU components (N-gram match, Syntactic AST match, Semantic data-flow match), Execution-based evaluation details (Test case generation, Sandboxing).

Critique of Automated Metrics: Known failure modes, Lack of sensitivity to factual errors, coherence issues. Need for human oversight.

Chapter 17: Benchmarking Reasoning, Knowledge, and Safety
Reasoning Benchmarks Deep Dive:

Mathematical: GSM8K, MATH (Problem types, Difficulty levels).

Commonsense: HellaSwag (Sentence completion), PIQA (Physical interaction), WinoGrande (Coreference resolution), ARC (AI2 Reasoning Challenge), StrategyQA.

Multi-step/Complex: Big-Bench Hard (BBH - specific tasks), DROP (Reading comprehension with discrete reasoning), LogiQA, ReClor.

Symbolic Reasoning tasks.

Knowledge & Factuality Benchmarks: TriviaQA, Natural Questions (Real user questions), PopQA, TruthfulQA (Measuring tendency to mimic human falsehoods), FreshQA (Temporal knowledge).

Safety & Bias Benchmarks:

Toxicity: RealToxicityPrompts, ToxiGen (Implicit hate speech).

Bias: StereoSet (Intrasentence bias), CrowS-Pairs (Contrastive bias), BOLD (Domain bias analysis), Measuring bias amplification.

Robustness: AdvGLUE, Robustness Gym framework, Checklist methodology.

Holistic Frameworks: HELM details (Coverage, Metrics, Scenarios), LM Evaluation Harness. Analysis beyond leaderboards.

Benchmark Design Principles: Avoiding contamination, Measuring specific capabilities, Reliability, Validity.

Chapter 18: Human Evaluation Methodologies
Necessity & Scope: Fluency, Coherence, Relevance, Factuality, Safety, Helpfulness, Honesty, Creativity, Instruction Following, Comparison.

Evaluation Protocols Deep Dive:

Direct Assessment: Likert Scales (Design, Anchors), Rating Rubrics (Defining dimensions, Levels).

Pairwise Comparison: Elo Rating calculation, Bradley-Terry model connection, Handling ties, Reducing comparisons needed (Swiss system). Chatbot Arena example.

Side-by-Side: Focused comparison on specific criteria.

Annotation Tasks: Error categorization, Fact-checking against sources, Identifying specific failure modes (hallucinations, bias).

Human Evaluation Best Practices: Detailed guideline design, Rater selection and training, Calibration tasks, Blind evaluation, Measuring IAA (Cohen's Kappa, Krippendorff's Alpha, Fleiss' Kappa), Statistical significance testing. Interface design.

LLM as a Judge:

Concept: Using powerful LLMs (e.g., GPT-4) to evaluate outputs of other LLMs based on prompts/rubrics.

Methodology: Prompt design for evaluation, Scaling evaluation, Comparison to human judgments (Correlation, Bias).

Limitations: Positional bias, Self-preference bias, Limited reasoning capabilities of judge LLM, Cost. Potential for automated evaluation scaling.

Platforms: Crowdsourcing (MTurk, Prolific), Specialized annotation platforms (Scale AI, Appen, Surge AI). Ethical considerations for annotators.

Chapter 19: Evaluating Specific Failure Modes
Hallucination Measurement: Defining metrics (Factual consistency, Contradiction detection), Reference-based vs. Reference-free methods, Human annotation protocols.

Calibration Evaluation: Reliability diagrams, Expected Calibration Error (ECE). Methods for improving calibration.

Robustness Testing Deep Dive: Distribution shifts (Domain, Style), Adversarial attacks (Character/Word/Sentence level), Typo injection, Paraphrasing robustness, Checklist-based testing.

Long-Context Evaluation: Needle-in-a-Haystack test details, Evaluating performance degradation with context length on specific tasks (Summarization, QA).

Interpretability for Failure Analysis: Using XAI methods (Attention, Gradients, SHAP/LIME) to understand why a model failed on specific inputs.
