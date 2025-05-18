---
layout: default
title: "Language Model Pretraining"
description: "Examine techniques for pretraining large language models on vast datasets."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section explores the techniques and motivations behind pretraining large language models (LLMs) on vast datasets, a cornerstone of modern foundation models. We discuss the rationale for pretraining, its benefits, and key methods like masked language modeling, next-token prediction, and contrastive objectives. We also examine pioneering pretrained models such as ELMo and BERT, their motivations, and their impact on downstream tasks. Pretraining leverages unsupervised corpora, data augmentation, and domain adaptation to create versatile models. For a broader perspective, the paper <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models: A History from BERT to ChatGPT</a> provides a historical overview of pretraining advancements.
</div>

<h2 id="about-pretraining">About Pretraining</h2>

Pretraining involves training a model on a large, general dataset using unsupervised or self-supervised objectives to learn broad patterns, such as linguistic structures or semantic relationships, before fine-tuning on specific tasks. This approach, foundational to models like BERT and GPT, leverages vast datasets (e.g., Wikipedia, Common Crawl) to capture general knowledge, making models adaptable to diverse downstream applications.

**Why We Need Pretraining**:

- **Data Efficiency**: Pretraining reduces the need for labeled data in downstream tasks by learning general representations from unlabeled corpora.
- **Generalization**: Models pretrained on diverse datasets generalize better across tasks, from text classification to question answering.
- **Scalability**: Pretraining enables large models to learn complex patterns, improving performance as model size and data scale, as noted in scaling laws (<a href="https://arxiv.org/abs/2203.15556">Chinchilla</a>).

**Does Pretraining Indeed Help?**:
Empirical evidence confirms pretraining’s efficacy. For instance, BERT’s pretrained representations improved GLUE benchmark scores by 5-10% over non-pretrained models. Similarly, GPT’s pretraining enabled zero-shot and few-shot learning, reducing task-specific training costs. Pretraining’s benefits are particularly pronounced in low-data regimes, where fine-tuned models outperform task-specific training.

<div class="resource-links">
  <h3>Key Resources for Pretraining</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2203.15556">Training Compute-Optimal Large Language Models</a> by Hoffmann et al. (2022) – Chinchilla scaling laws</li>
    <li>Blog post: <a href="https://ruder.io/exploring-pretraining/">Exploring Pretraining in NLP</a> by Sebastian Ruder</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=2XJh7q8uY8E">Pretraining Language Models</a> from DeepLearning.AI</li>
  </ul>
</div>

<h2 id="pretrained-models">Introduce Pretrained Models</h2>

Pretrained models like ELMo, BERT, and GPT revolutionized NLP by introducing self-supervised learning objectives that exploit unlabeled text. These models differ in architecture, objectives, and motivations, addressing specific limitations in prior approaches.

**Motivation for Developing Different Models**:

- **Contextual Representations**: Earlier models like word2vec provided static embeddings, lacking context sensitivity. ELMo introduced contextualized embeddings using bidirectional LSTMs.
- **Bidirectional Context**: BERT addressed the unidirectional bias of models like GPT-1, enabling richer contextual understanding via masked language modeling.
- **Generative Capabilities**: GPT focused on autoregressive generation, prioritizing tasks like text completion and dialogue.
- **Scalability and Efficiency**: Models like RoBERTa optimized pretraining recipes to improve performance without architectural changes.

<h3 id="elmo">ELMo (Embeddings from Language Models)</h3>

Introduced in <a href="https://arxiv.org/abs/1802.05365">Deep Contextualized Word Representations</a> by Peters et al. (2018), ELMo uses bidirectional LSTMs to generate contextualized word embeddings. Pretrained on a large corpus with a language modeling objective, ELMo captures word meaning based on surrounding context, improving tasks like sentiment analysis and named entity recognition.

**Detailed Method**:

- **Architecture**: Two stacked bidirectional LSTMs, one processing the sequence forward and another backward.
- **Objective**: Predict the next word (forward) and previous word (backward), maximizing log-likelihood over a corpus.
- **Usage**: ELMo embeddings are concatenated with task-specific inputs, enhancing downstream models without fine-tuning the LSTM.

**Impact**: ELMo improved performance on benchmarks like SQuAD by 4-5%, demonstrating the power of contextual embeddings over static word vectors.

<h3 id="bert">BERT (Bidirectional Encoder Representations from Transformers)</h3>

Proposed in <a href="https://arxiv.org/abs/1810.04805">BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</a> by Devlin et al. (2018), BERT uses a Transformer encoder pretrained on two self-supervised tasks:

- **Masked Language Modeling (MLM)**: Randomly masks 15% of tokens, predicting them based on bidirectional context.
- **Next Sentence Prediction (NSP)**: Predicts whether two sentences are consecutive, aiding tasks like question answering.

**Detailed Method**:

- **Architecture**: Multi-layer Transformer encoder (12-24 layers in base/large versions).
- **Corpus**: BooksCorpus and English Wikipedia (~3.3B words).
- **Training**: MLM and NSP objectives, optimized with AdamW over large batches.

**Impact**: BERT achieved state-of-the-art results on GLUE (80.5% average score) and SQuAD, setting the standard for pretraining and fine-tuning.

<div class="resource-links">
  <h3>Key Resources for Pretrained Models</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1802.05365">Deep Contextualized Word Representations</a> by Peters et al. (2018) – ELMo</li>
    <li>Paper: <a href="https://arxiv.org/abs/1810.04805">BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding</a> by Devlin et al. (2018)</li>
    <li>Blog post: <a href="https://jalammar.github.io/illustrated-bert/">The Illustrated BERT</a> by Jay Alammar</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2018/02/introducing-elmo-deep-contextualized.html">Introducing ELMo</a> by Google AI</li>
  </ul>
</div>

<h2 id="pretraining-techniques">Pretraining Techniques</h2>

Pretraining relies on self-supervised objectives and diverse data strategies to learn robust representations. Below are key techniques used in LLMs.

<h3 id="masked-language-modeling">Masked Language Modeling (MLM)</h3>

MLM, popularized by BERT, involves randomly masking tokens in a sequence and training the model to predict them using bidirectional context. This objective encourages the model to learn rich semantic and syntactic representations, effective for understanding tasks. Variants include dynamic masking (RoBERTa) and span masking (T5), where contiguous token spans are masked.

<h3 id="next-token-prediction">Next-Token Prediction</h3>

Next-token prediction, used in autoregressive models like GPT, trains the model to predict the next token given prior context. This objective, rooted in traditional language modeling, excels in generative tasks like text completion and dialogue. It leverages causal attention to ensure unidirectional processing.

<h3 id="unsupervised-corpora">Unsupervised Corpora</h3>

Pretraining relies on large, unlabeled text corpora, such as:

- **Wikipedia**: High-quality, diverse text (~6M articles).
- **Common Crawl**: Web-scraped data (~100TB), filtered for quality (e.g., FineWeb).
- **BooksCorpus**: Fiction and non-fiction books (~800M words).

These corpora provide the scale needed for general-purpose representations, as discussed in <a href="https://arxiv.org/abs/1910.10683">Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer</a> (T5).

<h3 id="data-augmentation">Data Augmentation</h3>

Data augmentation enhances pretraining by artificially expanding the corpus or introducing noise, improving robustness. Techniques include:

- **Back-Translation**: Translating text to another language and back to create paraphrases.
- **Text Infilling**: Replacing spans with random tokens to mimic MLM.
- **Mixup**: Combining sentences or embeddings to create synthetic examples.

Augmentation, used in models like T5, improves generalization, especially for low-resource tasks.

<h3 id="contrastive-objectives">Contrastive Objectives</h3>

Contrastive objectives, inspired by methods like SimCLR, train models to distinguish positive pairs (e.g., related sentences) from negative pairs (unrelated ones). Used in models like Sentence-BERT, contrastive pretraining enhances semantic similarity tasks, such as paraphrase detection, by learning discriminative embeddings.

<h3 id="domain-adaptation">Domain Adaptation</h3>

Domain adaptation pretrains models on domain-specific corpora (e.g., biomedical texts for BioBERT, legal documents for LegalBERT) to improve performance on specialized tasks. This involves continued pretraining on targeted datasets, often using MLM or next-token prediction, as seen in <a href="https://arxiv.org/abs/1903.10676">BioBERT: A Pre-trained Biomedical Language Representation Model</a>.

<div class="resource-links">
  <h3>Key Resources for Pretraining Techniques</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1910.10683">Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer</a> by Raffel et al. (2019) – T5 and corpora</li>
    <li>Paper: <a href="https://arxiv.org/abs/1903.10676">BioBERT: A Pre-trained Biomedical Language Representation Model</a> by Lee et al. (2019)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/masked-language-modeling-and-the-power-of-context-9c9c9c9c9c9c">Masked Language Modeling and Context</a> on Towards Data Science</li>
    <li>Blog post: <a href="https://huggingface.co/blog/domain-adaptation">Domain Adaptation for Language Models</a> by Hugging Face</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">Pretraining Objectives Explained</a> from Stanford Online</li>
  </ul>
</div>

<h2 id="impact-on-foundation-models">Impact on Foundation Models</h2>

Pretraining has shaped foundation models by:

- **Enabling Versatility**: Models like BERT and T5 handle diverse tasks (e.g., classification, generation) due to general-purpose representations.
- **Reducing Data Needs**: Pretraining allows zero-shot or few-shot learning, as seen in GPT, minimizing labeled data requirements.
- **Driving Scalability**: Large corpora and objectives like MLM enable scaling to billion-parameter models, as discussed in <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a>.
- **Supporting Domain Specialization**: Domain adaptation creates models like BioBERT, tailored for specific fields.

<div class="resource-links">
  <h3>Resources on Impact on Foundation Models</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023)</li>
    <li>Blog post: <a href="https://www.ibm.com/blog/how-pretraining-shapes-modern-ai/">How Pretraining Shapes Modern AI</a> by IBM Research</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Pretraining learns general representations from unlabeled data, enabling data-efficient downstream tasks</li>
    <li>ELMo introduced contextual embeddings, while BERT pioneered bidirectional MLM</li>
    <li>Masked language modeling and next-token prediction are core self-supervised objectives</li>
    <li>Unsupervised corpora like Wikipedia and Common Crawl provide scale for pretraining</li>
    <li>Data augmentation and contrastive objectives enhance robustness and semantic understanding</li>
    <li>Domain adaptation tailors models to specialized fields like biomedicine</li>
    <li>Pretraining underpins the versatility and scalability of foundation models</li>
  </ul>
</div>

<script>
  window.prevSection = "/content/handbooks/foundation-models/section7/";
  window.nextSection = "/content/handbooks/foundation-models/section9/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
