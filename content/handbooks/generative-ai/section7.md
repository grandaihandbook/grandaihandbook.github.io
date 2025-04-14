---
layout: default
title: "Addressing the Quadratic Scaling Problem"
description: "Approaches for circumventing the quadratic nature of attention in Transformers."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  A major bottleneck in scaling both the size and context length of Transformers is the quadratic nature of attention, in which all pairs of token interactions are considered. Here we'll look at a number of approaches for circumventing this, ranging from those which are currently widely used to those which are more exploratory (but promising) research directions.
</div>

<h2 id="sliding-window-attention">Sliding Window Attention</h2>

Introduced in the "Longformer" [paper](https://arxiv.org/abs/2004.05150), sliding window attention acts as a sub-quadratic drop-in replacement for standard attention which allows attending only to a sliding window (shocking, right?) of recent tokens/states rather than the entire context window, under the pretense that vectors for these states have already attended to earlier ones and thus have sufficient representational power to encode relevant pieces of early context. Due to its simplicity, it's become one of the more widely adopted approaches towards sub-quadratic scaling, and is used in Mistral's popular Mixtral-8x7B model (among others).

<div class="resource-links">
  <h3>Resources on Sliding Window Attention</h3>
  <ul>
    <li>Blog post: <a href="https://klu.ai/glossary/sliding-window-attention">"What is Sliding Window Attention?"</a> by Stephen M. Walker</li>
    <li>Blog post: <a href="https://medium.com/@manojkumal/sliding-window-attention-565f963a1ffd">"Sliding Window Attention"</a> by Manoj Kumal</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=_8KNb5iqblE">"Longformer: The Long-Document Transformer"</a> by Yannic Kilcher</li>
  </ul>
</div>

<h2 id="ring-attention">Ring Attention</h2>

Another modification to standard attention mechanisms, Ring Attention enables sub-quadratic full-context interaction via incremental computation with a "message-passing" structure, wherein "blocks" of context communicate with each other over a series of steps rather than all at once. Within each block, the technique is essentially classical attention.

<blockquote>
  While largely a research direction rather than standard technique at least within the open-weights world, Google's Gemini is <a href="https://www.reddit.com/r/MachineLearning/comments/1arj2j8/d_gemini_1m10m_token_context_window_how/">rumored</a> to possibly be using Ring Attention in order to enable its million-plus-token context.
</blockquote>

<div class="resource-links">
  <h3>Resources on Ring Attention</h3>
  <ul>
    <li>Blog post: <a href="https://medium.com/@tanuj22july/breaking-the-boundaries-understanding-context-window-limitations-and-the-idea-of-ring-attention-170e522d44b2">"Breaking the Boundaries: Understanding Context Window Limitations and the idea of Ring Attention"</a> by Tanuj Sharma</li>
    <li>Blog post: <a href="https://www.e2enetworks.com/blog/understanding-ring-attention-building-transformers-with-near-infinite-context">"Understanding Ring Attention: Building Transformers With Near-Infinite Context"</a> from E2E Networks</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=jTJcP8iyoOM">"Ring Attention Explained"</a></li>
  </ul>
</div>

<h2 id="linear-attention-rwkv">Linear Attention (RWKV)</h2>

The Receptance-Weighted Key Value (RWKV) architecture is a return to the general structure of RNN models (e.g LSTMs), with modifications to enable increased scaling and a _linear_ attention-style mechanism which supports recurrent "unrolling" of its representation (allowing constant computation per output token as context length scales).

<div class="resource-links">
  <h3>Resources on RWKV</h3>
  <ul>
    <li>Blog post: <a href="https://huggingface.co/blog/rwkv">"Getting Started With RWKV"</a> from Hugging Face</li>
    <li>Blog post: <a href="https://johanwind.github.io/2023/03/23/rwkv_overview.html">"The RWKV language model: An RNN with the advantages of a transformer" - Pt. 1</a> by Johan Wind</li>
    <li>Blog post: <a href="https://johanwind.github.io/2023/03/23/rwkv_details.html">"How the RWKV language model works" - Pt. 2</a> by Johan Wind</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=x8pW19wKfXQ">"RWKV: Reinventing RNNs for the Transformer Era (Paper Explained)"</a> by Yannic Kilcher</li>
  </ul>
</div>

<h2 id="structured-state-space-models">Structured State Space Models</h2>

Structured State Space Models (SSMs) have become one of the most popular alternatives to Transformers in terms of current research focus, with several notable variants (S4, Hyena, Mamba/S6, Jamba, Mamba-2), but are somewhat notorious for their complexity.

<blockquote>
  The architecture draws inspiration from classical control theory and linear time-invariant systems, with a number of optimizations to translate from continuous to discrete time, and to avoid dense representations of large matrices. They support both recurrent and convolutional representations, which allows efficiency gains both for training and at inference.
</blockquote>

Many variants require carefully-conditioned "hidden state matrix" representations to support "memorization" of context without needing all-pairs attention. SSMs also seem to be becoming more practical at scale, and have recently resulted in breakthrough speed improvements for high-quality text to speech (via [Cartesia AI](https://www.cartesia.ai/), founded by the inventors of SSMs).

<div class="resource-links">
  <h3>Resources on SSMs</h3>
  <ul>
    <li>Tutorial: <a href="https://srush.github.io/annotated-s4/">"The Annotated S4"</a> - comprehensive explainer focused on the S4 paper from which SSMs originated</li>
    <li>Blog post: <a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state">"A Visual Guide to Mamba and State Space Models"</a> by Maarten Grootendorst - great for intuitions and visuals with slightly less math</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=9dSkvxS2EB0">"Mamba: Linear-Time Sequence Modeling with Selective State Spaces (Paper Explained)"</a> by Yannic Kilcher</li>
  </ul>
</div>

Recently, the Mamba authors released their follow-up "Mamba 2" paper, and their accompanying series of blog posts discusses some newly-uncovered connections between SSM representations and linear attention which may be interesting:

<div class="resource-links">
  <h3>Mamba-2 Blog Series</h3>
  <ul>
    <li>Blog post: <a href="https://tridao.me/blog/2024/mamba2-part1-model/">State Space Duality (Mamba-2) Part I - The Model</a></li>
    <li>Blog post: <a href="https://tridao.me/blog/2024/mamba2-part2-theory/">State Space Duality (Mamba-2) Part II - The Theory</a></li>
    <li>Blog post: <a href="https://tridao.me/blog/2024/mamba2-part3-algorithm/">State Space Duality (Mamba-2) Part III - The Algorithm</a></li>
    <li>Blog post: <a href="https://tridao.me/blog/2024/mamba2-part4-systems/">State Space Duality (Mamba-2) Part IV - The Systems</a></li>
  </ul>
</div>

<h2 id="hyperattention">HyperAttention</h2>

Somewhat similar to RWKV and SSMs, HyperAttention is another proposal for achieving near-linear scaling for attention-like mechanisms, relying on locality-sensitive hashing (think vector DBs) rather than recurrent representations. I don't see it discussed as much as the others, but it may be worth being aware of nonetheless.

<div class="resource-links">
  <h3>Resources on HyperAttention</h3>
  <ul>
    <li>Blog post: <a href="https://medium.com/@yousra.aoudi/linear-time-magic-how-hyperattention-optimizes-large-language-models-b691c0e2c2b0">"Linear Time Magic: How HyperAttention Optimizes Large Language Models"</a> by Yousra Aoudi</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=uvix7XwAjOg">"HyperAttention Explained"</a> by Tony Shin</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Sliding Window Attention provides a simple way to achieve sub-quadratic scaling by limiting attention to recent tokens</li>
    <li>Ring Attention enables full-context interaction with sub-quadratic complexity through message-passing between blocks</li>
    <li>RWKV combines RNN structure with linear attention to achieve constant computation per token as context scales</li>
    <li>Structured State Space Models draw from control theory to create efficient alternatives to Transformers</li>
    <li>HyperAttention uses locality-sensitive hashing to achieve near-linear scaling for attention mechanisms</li>
    <li>These approaches represent a significant research direction for scaling context length beyond what's feasible with standard attention</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section6/";
    window.nextSection = "/content/handbooks/generative-ai/section8/";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
