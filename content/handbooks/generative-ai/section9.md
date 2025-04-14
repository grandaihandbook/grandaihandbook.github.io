---
layout: default
title: "Multimodal Models"
description: "Approaches for combining text with other modalities like images, audio, and video."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  Note: This is the set of topics with which I'm the least familiar, but wanted to include for completeness. I'll be lighter on commentary and recommendations here, and will return to add more when I think I have a tighter story to tell. The post <a href="https://huyenchip.com/2023/10/10/multimodal.html">"Multimodality and Large Multimodal Models (LMMs)"</a> by Chip Huyen is a nice broad overview (or <a href="https://www.determined.ai/blog/multimodal-llms">"How Multimodal LLMs Work"</a> by Kevin Musgrave for a more concise one).
</div>

<h2 id="tokenization-beyond-text">Tokenization Beyond Text</h2>

The idea of tokenization isn't only relevant to text; audio, images, and video can also be "tokenized" for use in Transformer-style architectures, and there a range of tradeoffs to consider between tokenization and other methods like convolution. The next two sections will look more into visual inputs; this [blog post](https://www.assemblyai.com/blog/recent-developments-in-generative-ai-for-audio/) from AssemblyAI touches on a number of relevant topics for audio tokenization and representation in sequence models, for applications like audio generation, text-to-speech, and speech-to-text.

<blockquote>
  Just as text can be broken into tokens, other modalities like images can be divided into "patches" or audio into "frames" that serve as tokens for multimodal transformers.
</blockquote>

<h2 id="vq-vae">VQ-VAE</h2>

The VQ-VAE architecture has become quite popular for image generation in recent years, and underlies at least the earlier versions of DALL-E.

<div class="resource-links">
  <h3>Resources on VQ-VAE</h3>
  <ul>
    <li>Blog post: <a href="https://mlberkeley.substack.com/p/vq-vae">"Understanding VQ-VAE (DALL-E Explained Pt. 1)"</a> from the Machine Learning @ Berkeley blog</li>
    <li>Blog post: <a href="https://mlberkeley.substack.com/p/dalle2">"How is it so good? (DALL-E Explained Pt. 2)"</a> from Machine Learning @ Berkeley</li>
    <li>Tutorial: <a href="https://shashank7-iitd.medium.com/understanding-vector-quantized-variational-autoencoders-vq-vae-323d710a888a">"Understanding Vector Quantized Variational Autoencoders (VQ-VAE)"</a> by Shashank Yadav</li>
  </ul>
</div>

<h2 id="vision-transformers">Vision Transformers</h2>

Vision Transformers extend the Transformer architecture to domains like image and video, and have become popular for applications like self-driving cars as well as for multimodal LLMs. There's a nice [section](https://d2l.ai/chapter_attention-mechanisms-and-transformers/vision-transformer.html) in the d2l.ai book about how they work.

<blockquote>
  Vision Transformers (ViT) adapt the transformer architecture to work with images by splitting them into patches, embedding these patches, and processing them just like tokens in a standard transformer model.
</blockquote>

<div class="resource-links">
  <h3>Resources on Vision and Multimodal Models</h3>
  <ul>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2022-06-09-vlm/">"Generalized Visual Language Models"</a> by Lilian Weng - discusses a range of different approaches for training multimodal Transformer-style models</li>
    <li>Guide: <a href="https://encord.com/blog/vision-language-models-guide/">"Guide to Vision Language Models"</a> from Encord's blog - overviews several architectures for mixing text and vision</li>
    <li>Paper: <a href="https://arxiv.org/abs/2403.09611">MM1</a> from Apple - examines several architecture and data tradeoffs with experimental evidence for Vision Transformers</li>
    <li>Visualization: <a href="https://distill.pub/2021/multimodal-neurons/">"Multimodal Neurons in Artificial Neural Networks"</a> from Distill.pub - very fun visualizations of concept representations in multimodal networks</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Tokenization concepts extend beyond text to images, audio, and video</li>
    <li>VQ-VAE architectures provide a foundation for image generation, including early versions of DALL-E</li>
    <li>Vision Transformers adapt the transformer architecture to process images by dividing them into patches</li>
    <li>Multimodal models combine different forms of data (text, images, audio) for richer understanding and generation</li>
    <li>Research in multimodal architectures continues to evolve rapidly, with various approaches to combining different data types</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section8/";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
