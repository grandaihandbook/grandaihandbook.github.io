---
layout: default
title: Interacting with LLMs: Prompting, Inference, and Applications
---

Chapter 20: Decoding Algorithms and Inference Control
Autoregressive Generation Process Review.

Decoding Algorithms Deep Dive:

Greedy Search: Limitations (Suboptimal sequences).

Beam Search: Algorithm details (Maintaining K hypotheses), Parameters (Beam width b, Length penalty, N-gram blocking/Repetition penalty), Pros/Cons (Better quality vs. Lack of diversity, Computation). Constrained Beam Search.

Sampling Methods:

Temperature Scaling: Softmax modification, Impact on probability distribution (Low T -> Greedy, High T -> Uniform).

Top-k Sampling: Algorithm, Parameter k.

Nucleus (Top-p) Sampling: Algorithm, Parameter p. Dynamic vocabulary selection.

Contrastive Search: Combining likelihood with diversity promotion.

Typical Decoding Strategies: Combining Top-k/Top-p with Temperature.

Controlling Generation Output: max_length, min_length, Repetition penalties (Algorithmic details), eos_token_id, stop_sequences.

Logit Processors & Warpers (Hugging Face): Framework for customizing decoding. Logit Bias for encouraging/discouraging specific tokens.

Chapter 21: Prompt Engineering: The Art and Science
Prompting Fundamentals: Instructions, Context, Input Data, Output Indicators.

Zero-Shot vs. Few-Shot (In-Context Learning - ICL): Role of demonstrations, Impact of example selection/order, Formatting examples. Understanding ICL mechanisms (Implicit fine-tuning vs. Attention steering).

Prompt Formatting Best Practices: Clarity, Specificity, Role-playing, Delimiters, Structured Input/Output (JSON, XML), Handling constraints.

Advanced Prompting Techniques Deep Dive:

Chain-of-Thought (CoT): Zero-shot ("Let's think step by step") vs. Few-shot (Rationale examples). Improving Mathematical, Symbolic, and Commonsense Reasoning. Variants (Self-critique CoT).

Self-Consistency: Rationale, Sampling multiple CoT paths, Aggregation methods (Majority vote). Improving robustness.

Tree-of-Thoughts (ToT): Algorithm (Generate thoughts, Evaluate states, Search algorithm - BFS/DFS), Application to complex planning/exploration tasks.

Graph-of-Thoughts (GoT): Generalizing ToT to arbitrary graph structures for complex reasoning flows.

Self-Ask / Iterative Refinement: Prompting model to break down problems, ask clarifying questions, refine answers based on feedback/retrieval.

ReAct (Reason + Act): Interleaving reasoning traces (Thought:) with actions (Action:, Observation:). Enabling tool use and grounding.

Automatic Prompt Engineering (APE) / Optimization: Using LLMs to generate or refine prompts (e.g., Instruction Induction, Gradients methods - limited).

Structured Prompting Frameworks (e.g., DSPy): Programming prompts, separating logic from LLM calls.

Prompt Injection & Security: Direct vs. Indirect injection, Defenses (Instruction filtering, Input sanitization, Output parsing - limited effectiveness).

Chapter 22: Retrieval-Augmented Generation (RAG) Deep Dive
RAG Architecture Components: User Query -> Query Transformation -> Retriever -> Re-ranker -> Context Compression/Selection -> LLM Prompt Augmentation -> Generator -> Response Generation -> Output Validation/Filtering.

Retriever Component Deep Dive:

Sparse: BM25 algorithm details, TF-IDF variants, SPLADE (Learned sparse representations).

Dense: Bi-Encoder architectures, Training (Contrastive loss - In-batch negatives, Hard negatives), Pre-trained embedding models (SBERT, DPR, E5, BGE, Instructor). Fine-tuning embedding models.

Hybrid Search: RRF implementation, Weighted combinations.

Vector Databases: Index types (Flat, IVF, HNSW - details, tradeoffs), Distance metrics (Cosine, Dot Product, Euclidean), Metadata filtering, Scalability.

Graph RAG: Retrieving from knowledge graphs.

Augmentation & Generation: Context integration strategies (Prepend, Interleave), Handling long contexts (Summarization, Selection), Prompting the LLM to utilize context effectively.

Advanced RAG Techniques Deep Dive:

Query Transformations: HyDE, Multi-query RAG, Rewriting for conversational context.

Chunking Strategies: Fixed size vs. Semantic chunking (Sentence splitting, Recursive splitting, Agentic chunking). Chunk overlap.

Re-ranking: Cross-Encoder models (Architecture, Training), Using LLMs for re-ranking. Computational cost.

Multi-hop / Iterative Retrieval: Retrieving based on initial results or intermediate reasoning steps.

Self-Correction / Reflection: Using retrieved documents to verify/correct generated answer (e.g., CRAG - Corrective RAG).

Routing: Deciding whether to use RAG, which index to query, or generate directly.

RAG Evaluation Metrics: RAGAS framework components (Faithfulness, Answer Relevance, Context Precision, Context Recall), Human evaluation protocols for RAG.

Chapter 23: LLM Applications In-Depth
Text Summarization: Abstractive vs. Extractive, Query-focused, Dialogue summarization techniques, Evaluation challenges.

Question Answering: Open-domain (RAG focus), Closed-book (Knowledge probing), Multi-hop QA strategies, Conversational QA.

Machine Translation: LLMs vs. Specialized NMT, Low-resource translation, Multilingual capabilities.

Code Generation: Models (Codex, AlphaCode, Code Llama), Capabilities (Completion, Synthesis, Debugging, Translation), Security risks, Evaluation (HumanEval, MBPP).

Creative Writing: Story generation, Poetry, Scriptwriting, Style imitation, Co-creation tools.

Conversational AI: Task-oriented dialogue systems (Intent recognition, Slot filling, Dialogue state tracking with LLMs), Open-domain chatbots (Persona management, Safety, Engagement).

Data Analysis: Generating insights from structured/unstructured data, Generating code (Python/SQL) for analysis, Natural language interfaces to databases.

Education: Tutoring systems, Personalized learning, Content generation for educators.

Chapter 24: LLM Agents and Tool Use
Agent Architectures: LLM as the core reasoning engine/controller.

Core Agent Loop Deep Dive: Perception (Parsing inputs, State representation), Planning (Task decomposition, Strategy selection - LLM prompting, Classical planners), Action (Tool selection, API call formatting, Execution), Observation (Parsing tool outputs, Updating state).

Function Calling / Tool Definition: OpenAPI specifications, JSON Schema, Model support (OpenAI, Gemini, Mistral), Reliable parsing of model outputs.

Planning Algorithms: ReAct details, Hierarchical Planning (LLM sets high-level goals, sub-agents execute), Reflection mechanisms (Self-critique and plan refinement).

Memory Architectures for Agents: Short-term (Context window management), Long-term (Vector DB for episodic memory, Knowledge Graphs, Databases), Working memory concepts. Retrieval and synthesis for memory access.

Multi-Agent Systems Deep Dive: Communication protocols, Collaboration frameworks (Role assignment, Hierarchical structures - e.g., AutoGen, CrewAI), Negotiation strategies, Emergent behavior simulation.

Challenges Revisited: Reliability, Error handling & recovery, Latency, Cost control, Safety constraints, Long-horizon planning limitations, Grounding.Chapter 20: Decoding Algorithms and Inference Control
Autoregressive Generation Process Review.

Decoding Algorithms Deep Dive:

Greedy Search: Limitations (Suboptimal sequences).

Beam Search: Algorithm details (Maintaining K hypotheses), Parameters (Beam width b, Length penalty, N-gram blocking/Repetition penalty), Pros/Cons (Better quality vs. Lack of diversity, Computation). Constrained Beam Search.

Sampling Methods:

Temperature Scaling: Softmax modification, Impact on probability distribution (Low T -> Greedy, High T -> Uniform).

Top-k Sampling: Algorithm, Parameter k.

Nucleus (Top-p) Sampling: Algorithm, Parameter p. Dynamic vocabulary selection.

Contrastive Search: Combining likelihood with diversity promotion.

Typical Decoding Strategies: Combining Top-k/Top-p with Temperature.

Controlling Generation Output: max_length, min_length, Repetition penalties (Algorithmic details), eos_token_id, stop_sequences.

Logit Processors & Warpers (Hugging Face): Framework for customizing decoding. Logit Bias for encouraging/discouraging specific tokens.

Chapter 21: Prompt Engineering: The Art and Science
Prompting Fundamentals: Instructions, Context, Input Data, Output Indicators.

Zero-Shot vs. Few-Shot (In-Context Learning - ICL): Role of demonstrations, Impact of example selection/order, Formatting examples. Understanding ICL mechanisms (Implicit fine-tuning vs. Attention steering).

Prompt Formatting Best Practices: Clarity, Specificity, Role-playing, Delimiters, Structured Input/Output (JSON, XML), Handling constraints.

Advanced Prompting Techniques Deep Dive:

Chain-of-Thought (CoT): Zero-shot ("Let's think step by step") vs. Few-shot (Rationale examples). Improving Mathematical, Symbolic, and Commonsense Reasoning. Variants (Self-critique CoT).

Self-Consistency: Rationale, Sampling multiple CoT paths, Aggregation methods (Majority vote). Improving robustness.

Tree-of-Thoughts (ToT): Algorithm (Generate thoughts, Evaluate states, Search algorithm - BFS/DFS), Application to complex planning/exploration tasks.

Graph-of-Thoughts (GoT): Generalizing ToT to arbitrary graph structures for complex reasoning flows.

Self-Ask / Iterative Refinement: Prompting model to break down problems, ask clarifying questions, refine answers based on feedback/retrieval.

ReAct (Reason + Act): Interleaving reasoning traces (Thought:) with actions (Action:, Observation:). Enabling tool use and grounding.

Automatic Prompt Engineering (APE) / Optimization: Using LLMs to generate or refine prompts (e.g., Instruction Induction, Gradients methods - limited).

Structured Prompting Frameworks (e.g., DSPy): Programming prompts, separating logic from LLM calls.

Prompt Injection & Security: Direct vs. Indirect injection, Defenses (Instruction filtering, Input sanitization, Output parsing - limited effectiveness).

Chapter 22: Retrieval-Augmented Generation (RAG) Deep Dive
RAG Architecture Components: User Query -> Query Transformation -> Retriever -> Re-ranker -> Context Compression/Selection -> LLM Prompt Augmentation -> Generator -> Response Generation -> Output Validation/Filtering.

Retriever Component Deep Dive:

Sparse: BM25 algorithm details, TF-IDF variants, SPLADE (Learned sparse representations).

Dense: Bi-Encoder architectures, Training (Contrastive loss - In-batch negatives, Hard negatives), Pre-trained embedding models (SBERT, DPR, E5, BGE, Instructor). Fine-tuning embedding models.

Hybrid Search: RRF implementation, Weighted combinations.

Vector Databases: Index types (Flat, IVF, HNSW - details, tradeoffs), Distance metrics (Cosine, Dot Product, Euclidean), Metadata filtering, Scalability.

Graph RAG: Retrieving from knowledge graphs.

Augmentation & Generation: Context integration strategies (Prepend, Interleave), Handling long contexts (Summarization, Selection), Prompting the LLM to utilize context effectively.

Advanced RAG Techniques Deep Dive:

Query Transformations: HyDE, Multi-query RAG, Rewriting for conversational context.

Chunking Strategies: Fixed size vs. Semantic chunking (Sentence splitting, Recursive splitting, Agentic chunking). Chunk overlap.

Re-ranking: Cross-Encoder models (Architecture, Training), Using LLMs for re-ranking. Computational cost.

Multi-hop / Iterative Retrieval: Retrieving based on initial results or intermediate reasoning steps.

Self-Correction / Reflection: Using retrieved documents to verify/correct generated answer (e.g., CRAG - Corrective RAG).

Routing: Deciding whether to use RAG, which index to query, or generate directly.

RAG Evaluation Metrics: RAGAS framework components (Faithfulness, Answer Relevance, Context Precision, Context Recall), Human evaluation protocols for RAG.

Chapter 23: LLM Applications In-Depth
Text Summarization: Abstractive vs. Extractive, Query-focused, Dialogue summarization techniques, Evaluation challenges.

Question Answering: Open-domain (RAG focus), Closed-book (Knowledge probing), Multi-hop QA strategies, Conversational QA.

Machine Translation: LLMs vs. Specialized NMT, Low-resource translation, Multilingual capabilities.

Code Generation: Models (Codex, AlphaCode, Code Llama), Capabilities (Completion, Synthesis, Debugging, Translation), Security risks, Evaluation (HumanEval, MBPP).

Creative Writing: Story generation, Poetry, Scriptwriting, Style imitation, Co-creation tools.

Conversational AI: Task-oriented dialogue systems (Intent recognition, Slot filling, Dialogue state tracking with LLMs), Open-domain chatbots (Persona management, Safety, Engagement).

Data Analysis: Generating insights from structured/unstructured data, Generating code (Python/SQL) for analysis, Natural language interfaces to databases.

Education: Tutoring systems, Personalized learning, Content generation for educators.

Chapter 24: LLM Agents and Tool Use
Agent Architectures: LLM as the core reasoning engine/controller.

Core Agent Loop Deep Dive: Perception (Parsing inputs, State representation), Planning (Task decomposition, Strategy selection - LLM prompting, Classical planners), Action (Tool selection, API call formatting, Execution), Observation (Parsing tool outputs, Updating state).

Function Calling / Tool Definition: OpenAPI specifications, JSON Schema, Model support (OpenAI, Gemini, Mistral), Reliable parsing of model outputs.

Planning Algorithms: ReAct details, Hierarchical Planning (LLM sets high-level goals, sub-agents execute), Reflection mechanisms (Self-critique and plan refinement).

Memory Architectures for Agents: Short-term (Context window management), Long-term (Vector DB for episodic memory, Knowledge Graphs, Databases), Working memory concepts. Retrieval and synthesis for memory access.

Multi-Agent Systems Deep Dive: Communication protocols, Collaboration frameworks (Role assignment, Hierarchical structures - e.g., AutoGen, CrewAI), Negotiation strategies, Emergent behavior simulation.

Challenges Revisited: Reliability, Error handling & recovery, Latency, Cost control, Safety constraints, Long-horizon planning limitations, Grounding.
