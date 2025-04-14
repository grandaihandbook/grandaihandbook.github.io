---
layout: default
title: "LLM Architecture and Training"
description: "From decoder-only Transformers to the implementation choices behind frontier LLMs."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  In this section, we'll explore a number of concepts which will take us from the decoder-only Transformer architecture towards understanding the implementation choices and tradeoffs behind many of today's frontier LLMs. If you first want a birds-eye view the of topics in section and some of the following ones, the post ["Understanding Large Language Models"](https://magazine.sebastianraschka.com/p/understanding-large-language-models) by Sebastian Raschka is a nice summary of what the LLM landscape looks like (at least up through mid-2023).
</div>

<h2 id="tokenization">Tokenization</h2>

Character-level tokenization (like in several of the Karpathy videos) tends to be inefficient for large-scale Transformers vs. word-level tokenization, yet naively picking a fixed "dictionary" (e.g. Merriam-Webster) of full words runs the risk of encountering unseen words or misspellings at inference time. Instead, the typical approach is to use subword-level tokenization to "cover" the space of possible inputs, while maintaining the efficiency gains which come from a larger token pool, using algorithms like Byte-Pair Encoding (BPE) to select the appropriate set of tokens. If you've ever seen Huffman coding in an introductory algorithms class I think it's a somewhat useful analogy for BPE here, although the input-output format is notably different, as we don't know the set of "tokens" in advance. I'd recommend watching Andrej Karpathy's [video](https://www.youtube.com/watch?v=zduSFxRajkE) on tokenization and checking out this tokenization [guide](https://blog.octanove.org/guide-to-subword-tokenization/) from Masato Hagiwara.

<h2 id="positional-encoding">Positional Encoding</h2>

As we saw in the past section, Transformers don't natively have the same notion of adjacency or position within a context windows (in contrast to RNNs), and position must instead represented with some kind of vector encoding. While this could be done naively with something like one-hot encoding, this is impractical for context-scaling and suboptimal for learnability, as it throws away notions of ordinality. Originally, this was done with sinusoidal positional encodings, which may feel reminiscent of Fourier features if you're familiar; the most popular implementation of this type of approach nowadays is likely Rotary Positional Encoding, or RoPE, which tends to be more stable and faster to learn during training.

<div class="resource-links">
  <h3>Key Resources for Positional Encoding</h3>
  <ul>
    <li>Blog post: <a href="https://harrisonpim.com/blog/understanding-positional-embeddings-in-transformer-models">Understanding Positional Embeddings</a> by Harrison Pim on intuition for positional encodings</li>
    <li>Blog post: <a href="https://machinelearningmastery.com/a-gentle-introduction-to-positional-encoding-in-transformer-models-part-1/">A Gentle Introduction to Positional Encoding</a> by Mehreen Saeed on the original Transformer positional encodings</li>
    <li>Blog post: <a href="https://blog.eleuther.ai/rotary-embeddings/">Rotary Embeddings</a> on RoPE from Eleuther AI</li>
    <li>Animated video: <a href="https://www.youtube.com/watch?v=GQPOtyITy54">Understanding Positional Encoding</a> from DeepLearning Hero</li>
  </ul>
</div>

<h2 id="pretraining-recipes">Pretraining Recipes</h2>

Once you've committed to pretraining a LLM of a certain general size on a particular corpus of data (e.g Common Crawl, FineWeb), there are still a number of choices to make before you're ready to go:

- Attention mechanisms (multi-head, multi-query, grouped-query)
- Activations (ReLU, GeLU, SwiGLU)
- Optimizers, learning rates, and schedulers (AdamW, warmup, cosine decay)
- Dropout?
- Hyperparameter choices and search strategies
- Batching, parallelization strategies, gradient accumulation
- How long to train for, how often to repeat data
- ...and many other axes of variation

<blockquote>
  As far as I can tell, there's not a one-size-fits-all rule book for how to go about this, but the resources below provide valuable insights from those who have navigated these challenges.
</blockquote>

<div class="resource-links">
  <h3>Essential Pretraining Resources</h3>
  <ul>
    <li>Blog post: <a href="https://karpathy.github.io/2019/04/25/recipe/">A Recipe for Training Neural Networks</a> by Andrej Karpathy - While it predates the LLM era, this is a great starting point for framing many problems relevant throughout deep learning</li>
    <li>Guide: <a href="https://rentry.org/llm-training">The Novice's LLM Training Guide</a> by Alpin Dale, discussing hyperparameter choices in practice, as well as the finetuning techniques we'll see in future sections</li>
    <li>Blog post: <a href="https://blog.replit.com/llm-training">How to train your own Large Language Models</a> from Replit has some nice discussions on data pipelines and evaluations for training</li>
    <li>Article: <a href="https://iamshobhitagarwal.medium.com/navigating-the-attention-landscape-mha-mqa-and-gqa-decoded-288217d0a7d1">Navigating the Attention Landscape: MHA, MQA, and GQA Decoded</a> by Shobhit Agarwal for understanding attention mechanism tradeoffs</li>
    <li>Blog post: <a href="https://deci.ai/blog/evolution-of-modern-transformer-swiglu-rope-gqa-attention-is-all-you-need/">The Evolution of the Modern Transformer</a> from Deci AI for discussion of "popular defaults"</li>
    <li>Chapter: <a href="https://d2l.ai/chapter_optimization/lr-scheduler.html">Learning Rate Scheduling</a> from the d2l.ai book (Chapter 12.11)</li>
    <li>Blog post: <a href="https://blog.eleuther.ai/nyt-yi-34b-response/">Response to NYT</a> from Eleuther AI on controversy surrounding reporting of "best practices"</li>
  </ul>
</div>

<h2 id="distributed-training">Distributed Training and FSDP</h2>

There are a number of additional challenges associated with training models which are too large to fit on individual GPUs (or even multi-GPU machines), typically necessitating the use of distributed training protocols like Fully Sharded Data Parallelism (FSDP), in which models can be co-located across machines during training. It's probably worth also understanding its precursor Distributed Data Parallelism (DDP), which is covered in the first post linked below.

<div class="resource-links">
  <h3>Resources on Distributed Training</h3>
  <ul>
    <li>Blog post: <a href="https://engineering.fb.com/2021/07/15/open-source/fsdp/">FSDP</a> from Meta (who pioneered the method)</li>
    <li>Blog post: <a href="https://blog.clika.io/fsdp-1/">Understanding FSDP</a> by Bar Rozenman, featuring many excellent visualizations</li>
    <li>Report: <a href="https://www.yitay.net/blog/training-great-llms-entirely-from-ground-zero-in-the-wilderness">Training Great LLMs Entirely From Ground Zero in the Wilderness</a> from Yi Tai on the challenges of pretraining a model in a startup environment</li>
    <li>Technical blog: <a href="https://www.answer.ai/posts/2024-03-14-fsdp-qlora-deep-dive.html">FSDP QLora Deep Dive</a> from Answer.AI on combining FSDP with parameter-efficient finetuning techniques for use on consumer GPUs</li>
  </ul>
</div>

<h2 id="scaling-laws">Scaling Laws</h2>

It's useful to know about scaling laws as a meta-topic which comes up a lot in discussions of LLMs (most prominently in reference to the "Chinchilla" [paper](https://arxiv.org/abs/2203.15556)), more so than any particular empirical finding or technique. In short, the performance which will result from scaling up the model, data, and compute used for training a language model results in fairly reliable predictions for model loss. This then enables calibration of optimal hyperparameter settings without needing to run expensive grid searches.

<div class="resource-links">
  <h3>Resources on Scaling Laws</h3>
  <ul>
    <li>Blog overview: <a href="https://medium.com/@raniahossam/chinchilla-scaling-laws-for-large-language-models-llms-40c434e4e1c1">Chinchilla Scaling Laws for Large Language Models</a> by Rania Hossam</li>
    <li>Discussion: <a href="https://www.lesswrong.com/posts/midXmMb2Xg37F2Kgn/new-scaling-laws-for-large-language-models">New Scaling Laws for LLMs</a> on LessWrong</li>
    <li>Post: <a href="https://www.lesswrong.com/posts/6Fpvch8RR29qLEWNH/chinchilla-s-wild-implications">Chinchilla's Wild Implications</a> on LessWrong</li>
    <li>Analysis: <a href="https://epochai.org/blog/chinchilla-scaling-a-replication-attempt">Chinchilla Scaling: A Replication Attempt</a> (potential issues with Chinchilla findings)</li>
    <li>Blog post: <a href="https://cthiriet.com/blog/scaling-laws">Scaling Laws and Emergent Properties</a> by Clément Thiriet</li>
    <li>Video lecture: <a href="https://www.youtube.com/watch?v=UFem7xa3Q2Q">Scaling Language Models</a> from Stanford CS224n</li>
  </ul>
</div>

<h2 id="mixture-of-experts">Mixture-of-Experts</h2>

While many of the prominent LLMs (such as Llama3) used today are "dense" models (i.e. without enforced sparsification), Mixture-of-Experts (MoE) architectures are becoming increasingly popular for navigating tradeoffs between "knowledge" and efficiency, used perhaps most notably in the open-weights world by Mistral AI's "Mixtral" models (8x7B and 8x22B), and [rumored](https://the-decoder.com/gpt-4-architecture-datasets-costs-and-more-leaked/) to be used for GPT-4. In MoE models, only a fraction of the parameters are "active" for each step of inference, with trained router modules for selecting the parallel "experts" to use at each layer. This allows models to grow in size (and perhaps "knowlege" or "intelligence") while remaining efficient for training or inference compared to a comparably-sized dense model.

<div class="resource-links">
  <h3>Resources on Mixture-of-Experts</h3>
  <ul>
    <li>Blog post: <a href="https://huggingface.co/blog/moe">Mixture of Experts Explained</a> from Hugging Face for a technical overview</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=0U_65fLoTq0">Mixture of Experts Visualized</a> from Trelis Research for a visualized explainer</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Subword tokenization strikes a balance between efficiency and handling unknown words</li>
    <li>Positional encoding schemes like RoPE are crucial for Transformers to understand sequence order</li>
    <li>LLM pretraining involves numerous architecture and optimization decisions</li>
    <li>Distributed training techniques like FSDP enable training of models too large for individual GPUs</li>
    <li>Scaling laws provide guidance on optimal allocation of compute, data, and model size</li>
    <li>Mixture-of-Experts models offer parameter efficiency by activating only relevant parameters during inference</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section2/";
    window.nextSection = "/content/handbooks/generative-ai/section4/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
