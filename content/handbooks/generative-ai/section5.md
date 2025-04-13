---
layout: default
title: "Applications and Interpretability"
description: "Techniques for improving LLM performance without training and understanding their capabilities."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  Here we'll be looking at a handful of topics related to improving or modifying the performance of language models without additional training, as well as techniques for measuring and understanding their performance.
</div>

Before diving into the individual chapters, I'd recommend these two high-level overviews, which touch on many of the topics we'll examine here:

- ["Building LLM applications for production"](https://huyenchip.com/2023/04/11/llm-engineering.html) by Chip Huyen
- ["What We Learned from a Year of Building with LLMs" Part 1](https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/) and [Part 2](https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-ii/) from O'Reilly (several authors)

These web courses also have a lot of relevant interactive materials:

- ["Large Language Model Course"](https://github.com/mlabonne/llm-course) from Maxime Labonne
- ["Generative AI for Beginners"](https://microsoft.github.io/generative-ai-for-beginners/) from Microsoft

<h2 id="benchmarking">Benchmarking</h2>

Beyond the standard numerical performance measures used during LLM training like cross-entropy loss and [perplexity](https://medium.com/@priyankads/perplexity-of-language-models-41160427ed72), the true performance of frontier LLMs is more commonly judged according to a range of benchmarks, or "evals". Common types of these are:

- Human-evaluated outputs (e.g. [LMSYS Chatbot Arena](https://chat.lmsys.org/))
- AI-evaluated outputs (as used in [RLAIF](https://argilla.io/blog/mantisnlp-rlhf-part-4/))
- Challenge question sets (e.g. those in HuggingFace's [LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard))

<div class="resource-links">
  <h3>Resources on Benchmarking</h3>
  <ul>
    <li>Slides: <a href="https://web.stanford.edu/class/cs224n/slides/cs224n-spr2024-lecture11-evaluation-yann.pdf">LLM Evaluation</a> from Stanford's CS224n</li>
    <li>Blog post: <a href="https://www.jasonwei.net/blog/evals">"How to evaluate LLMs"</a> by Jason Wei</li>
    <li>Blog post: <a href="https://humanloop.com/blog/evaluating-llm-apps?utm_source=newsletter&utm_medium=sequence&utm_campaign=">"Evaluating LLM Apps"</a> by Peter Hayes</li>
    <li>Documentation: <a href="https://ukgovernmentbeis.github.io/inspect_ai/">Inspect-AI framework</a> with guidance on designing benchmarks and reliable evaluation pipelines</li>
  </ul>
</div>

<h2 id="sampling">Sampling and Structured Outputs</h2>

While typical LLM inference samples tokens one at a time, there are number of parameters controlling the token distribution (temperature, top_p, top_k) which can be modified to control the variety of responses, as well as non-greedy decoding strategies that allow some degree of "lookahead". This [blog post](https://towardsdatascience.com/decoding-strategies-in-large-language-models-9733a8f70539) by Maxime Labonne does a nice job discussing several of them.

<blockquote>
  Sometimes we want our outputs to follow a particular structure, particularly if we are using LLMs as a component of a larger system rather than as just a chat interface. Few-shot prompting works okay, but not all the time, particularly as output schemas become more complicated.
</blockquote>

For schema types like JSON, Pydantic and Outlines are popular tools for constraining the output structure from LLMs. Some useful resources:

<div class="resource-links">
  <h3>Resources on Structured Outputs</h3>
  <ul>
    <li>Documentation: <a href="https://docs.pydantic.dev/latest/concepts/models/">Pydantic Concepts</a></li>
    <li>Documentation: <a href="https://outlines-dev.github.io/outlines/reference/json/">Outlines for JSON</a></li>
    <li>Review: <a href="https://michaelwornow.net/2023/12/29/outlines-demo">Outlines Demo and Review</a> by Michael Wornow</li>
  </ul>
</div>

<h2 id="prompting">Prompting Techniques</h2>

There are many prompting techniques, and many more prompt engineering guides out there, featuring methods for coaxing more desirable outputs from LLMs. Some of the classics:

- Few-Shot Examples
- Chain-of-Thought
- Retrieval-Augmented Generation (RAG)
- ReAct

<div class="resource-links">
  <h3>Resources on Prompting</h3>
  <ul>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/">"Prompt Engineering"</a> by Lilian Weng - discusses several of the most dominant approaches</li>
    <li>Guide: <a href="https://www.promptingguide.ai/techniques">Prompt Engineering Guide</a> - decent coverage and examples for a wider range of prominent techniques</li>
  </ul>
</div>

<h2 id="vector-databases">Vector Databases and Reranking</h2>

RAG systems require the ability to quickly retrieve relevant documents from large corpuses. Relevancy is typically determined by similarity measures for semantic embedding vectors of both queries and documents, such as cosine similarity or Euclidean distance. If we have just a handful of documents, this can be computed between a query and each document, but this quickly becomes intractable when the number of documents grows large. This is the problem addressed by vector databases, which allow retrieval of the _approximate_ top-K matches (significantly faster than checking all pairs) by maintaining high-dimensional indices over vectors which efficiently encode their geometric structure.

<div class="resource-links">
  <h3>Resources on Vector Databases</h3>
  <ul>
    <li>Documentation: <a href="https://www.pinecone.io/learn/series/faiss/">Pinecone on Vector Search Methods</a> - walks through methods like Locality-Sensitive Hashing and Hierarchical Navigable Small Worlds</li>
    <li>Talk: <a href="https://www.youtube.com/watch?v=W-i8bcxkXok">Vector Databases Overview</a> by Alexander Chatzizacharias</li>
    <li>Documentation: <a href="https://www.pinecone.io/learn/series/rag/rerankers/">Reranking in RAG</a> from Pinecone - overview of optimizing for metrics beyond query similarity</li>
  </ul>
</div>

<h2 id="rag">Retrieval-Augmented Generation</h2>

One of the most buzzed-about uses of LLMs over the past year, retrieval-augmented generation (RAG) is how you can "chat with a PDF" (if larger than a model's context) and how applications like Perplexity and Arc Search can "ground" their outputs using web sources. This retrieval is generally powered by embedding each document for storage in a vector database + querying with the relevant section of a user's input.

<div class="resource-links">
  <h3>Resources on RAG</h3>
  <ul>
    <li>Blog post: <a href="https://blog.langchain.dev/deconstructing-rag/">"Deconstructing RAG"</a> from Langchain</li>
    <li>Blog post: <a href="https://www.bentoml.com/blog/building-rag-with-open-source-and-custom-ai-models">"Building RAG with Open-Source and Custom AI Models"</a> from Chaoyu Yang</li>
    <li>Course: <a href="https://learn.deeplearning.ai/courses/building-evaluating-advanced-rag/lesson/1/introduction">Advanced RAG</a> video course from DeepLearning.AI</li>
  </ul>
</div>

<h2 id="agents">Tool Use and "Agents"</h2>

The other big application buzzwords you've most likely encountered in some form are "tool use" and "agents", or "agentic programming". This typically starts with the ReAct framework we saw in the prompting section, then gets extended to elicit increasingly complex behaviors like software engineering (see the much-buzzed-about "Devin" system from Cognition, and several related open-source efforts like Devon/OpenDevin/SWE-Agent). There are many programming frameworks for building agent systems on top of LLMs, with Langchain and LlamaIndex being two of the most popular.

<blockquote>
  There also seems to be some value in having LLMs rewrite their own prompts + evaluate their own partial outputs; this observation is at the heart of the DSPy framework (for "compiling" a program's prompts, against a reference set of instructions or desired outputs) which has recently been seeing a lot of attention.
</blockquote>

<div class="resource-links">
  <h3>Resources on Agent Systems</h3>
  <ul>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2023-06-23-agent/">"LLM Powered Autonomous Agents"</a> from Lilian Weng</li>
    <li>Guide: <a href="https://www.twosigma.com/articles/a-guide-to-large-language-model-abstractions/">"A Guide to LLM Abstractions"</a> from Two Sigma</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=41EfOY0Ldkc">"DSPy Explained!"</a> by Connor Shorten</li>
    <li>Blog post: <a href="https://neo4j.com/developer-blog/knowledge-graphs-llms-multi-hop-question-answering/">LLMs with Knowledge Graphs</a> from Neo4J</li>
    <li>Blog post: <a href="https://numbersstation.ai/data-wrangling-with-fms-2/">Data Wrangling with LLMs</a> from Numbers Station</li>
  </ul>
</div>

<h2 id="synthetic-data">LLMs for Synthetic Data</h2>

An increasing number of applications are making use of LLM-generated data for training or evaluations, including distillation, dataset augmentation, AI-assisted evaluation and labeling, self-critique, and more.

<div class="resource-links">
  <h3>Resources on Synthetic Data</h3>
  <ul>
    <li>Guide: <a href="https://www.promptingguide.ai/applications/synthetic_rag">Synthetic Data for RAG</a> - demonstrates how to construct synthetic datasets</li>
    <li>Blog post: <a href="https://argilla.io/blog/mantisnlp-rlhf-part-4/">RLAIF Overview</a> from Argilla - AI-assisted feedback as an alternative to RLHF</li>
    <li>Blog post: <a href="https://www.anthropic.com/news/claudes-constitution">Constitutional AI</a> from Anthropic - overview of AI-assisted feedback for alignment</li>
  </ul>
</div>

<h2 id="representation-engineering">Representation Engineering</h2>

Representation Engineering is a new and promising technique for fine-grained steering of language model outputs via "control vectors". Somewhat similar to LoRA adapters, it has the effect of adding low-rank biases to the weights of a network which can elicit particular response styles (e.g. "humorous", "verbose", "creative", "honest"), yet is much more computationally efficient and can be implemented without any training required.

<blockquote>
  The method simply looks at differences in activations for pairs of inputs which vary along the axis of interest (e.g. honesty), which can be generated synthetically, and then performs dimensionality reduction.
</blockquote>

<div class="resource-links">
  <h3>Resources on Representation Engineering</h3>
  <ul>
    <li>Blog post: <a href="https://www.safe.ai/blog/representation-engineering-a-new-way-of-understanding-models">Representation Engineering Overview</a> from Center for AI Safety</li>
    <li>Blog post: <a href="https://vgel.me/posts/representation-engineering/">Technical Deep-Dive with Code</a> from Theia Vogel</li>
    <li>Podcast: <a href="https://www.youtube.com/watch?v=PkA4DskA-6M">Representation Engineering Explained</a> with Theia Vogel</li>
  </ul>
</div>

<h2 id="mechanistic-interpretability">Mechanistic Interpretability</h2>

Mechanistic Interpretability (MI) is the dominant paradigm for understanding the inner workings of LLMs by identifying sparse representations of "features" or "circuits" encoded in model weights. Beyond enabling potential modification or explanation of LLM outputs, MI is often viewed as an important step towards potentially "aligning" increasingly powerful systems.

<div class="resource-links">
  <h3>Resources on Mechanistic Interpretability</h3>
  <ul>
    <li>Guide: <a href="https://www.neelnanda.io/mechanistic-interpretability/glossary">"A Comprehensive Mechanistic Interpretability Explainer & Glossary"</a> by Neel Nanda</li>
    <li>List: <a href="https://www.neelnanda.io/mechanistic-interpretability/favourite-papers">"An Extremely Opinionated Annotated List of My Favourite Mechanistic Interpretability Papers"</a> by Neel Nanda</li>
    <li>Guide: <a href="https://www.lesswrong.com/posts/jLAvJt8wuSFySN975/mechanistic-interpretability-quickstart-guide">"Mechanistic Interpretability Quickstart Guide"</a> (Neel Nanda on LessWrong)</li>
    <li>Discussion: <a href="https://www.lesswrong.com/posts/tEPHGZAb63dfq2v8n/how-useful-is-mechanistic-interpretability">"How useful is mechanistic interpretability?"</a> (Neel and others on LessWrong)</li>
    <li>Spreadsheet: <a href="https://docs.google.com/spreadsheets/d/1oOdrQ80jDK-aGn-EVdDt3dg65GhmzrvBWzJ6MUZB8n4/edit#gid=0">"200 Concrete Problems In Interpretability"</a> (Annotated open problems from Neel)</li>
    <li>Article: <a href="https://transformer-circuits.pub/2022/toy_model/index.html">"Toy Models of Superposition"</a> from Anthropic</li>
    <li>Article: <a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html">"Scaling Monosemanticity"</a> from Anthropic</li>
  </ul>
</div>

<h2 id="linear-representation">Linear Representation Hypotheses</h2>

An emerging theme from several lines of interpretability research has been the observation that internal representations of features in Transformers are often "linear" in high-dimensional space (a la Word2Vec). On one hand this may appear initially surprising, but it's also essentially an implicit assumption for techniques like similarity-based retrieval, merging, and the key-value similarity scores used by attention.

<div class="resource-links">
  <h3>Resources on Linear Representations</h3>
  <ul>
    <li>Blog post: <a href="https://www.beren.io/2023-04-04-DL-models-are-secretly-linear/">"Deep Learning Models are Secretly Linear"</a> by Beren Millidge</li>
    <li>Talk: <a href="https://www.youtube.com/watch?v=ko1xVcyDt8w">Linear Representations in LLMs</a> from Kiho Park</li>
    <li>Paper: <a href="https://arxiv.org/pdf/2310.02207">"Language Models Represent Space and Time"</a> - worth skimming for its figures</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Benchmarking LLMs requires multiple evaluation approaches including human feedback, AI evaluation, and challenge sets</li>
    <li>Sampling parameters and structured output tools help control LLM response characteristics</li>
    <li>Advanced prompting techniques like Chain-of-Thought and ReAct substantially improve performance</li>
    <li>Vector databases enable efficient semantic search critical for RAG applications</li>
    <li>Retrieval-Augmented Generation grounds LLM outputs in external knowledge</li>
    <li>Agent frameworks extend LLMs with tool-use capabilities for complex tasks</li>
    <li>LLM-generated synthetic data enables training improvements without human labeling</li>
    <li>Representation Engineering offers lightweight control over LLM behaviors</li>
    <li>Mechanistic Interpretability seeks to understand the internal workings of LLMs</li>
    <li>Linear representation of features in transformers enables many practical applications</li>
  </ul>
</div>

<script>
  // Navigation variables
  var prevSection = "/content/handbooks/generative-ai/section4.md";
  var nextSection = "/content/handbooks/generative-ai/section6.md";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
