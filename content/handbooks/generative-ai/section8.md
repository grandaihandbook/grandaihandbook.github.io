---
layout: default
title: "Beyond Transformers: Other Generative Models"
description: "Non-Transformer architectures for generative modeling of complex distributions."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  So far, everything we've looked has been focused on text and sequence prediction with language models, but many other "generative AI" techniques require learning distributions with less of a sequential structure (e.g. images). Here we'll examine a number of non-Transformer architectures for generative modeling, starting from simple mixture models and culminating with diffusion.
</div>

<h2 id="distribution-modeling">Distribution Modeling</h2>

Recalling our first glimpse of language models as simple bigram distributions, the most basic thing you can do in distributional modeling is just count co-occurrence probabilities in your dataset and repeat them as ground truth. This idea can be extended to conditional sampling or classification as "Naive Bayes" ([blog post](https://mitesh1612.github.io/blog/2020/08/30/naive-bayes) and [video](https://www.youtube.com/watch?v=O2L2Uv9pdDA)), often one of the simplest algorithms covered in introductory machine learning courses.

The next generative model students are often taught is the Gaussian Mixture Model and its Expectation-Maximization algorithm. This [blog post](https://mpatacchiola.github.io/blog/2020/07/31/gaussian-mixture-models.html) and this [video](https://www.youtube.com/watch?v=DODphRRL79c) give decent overviews; the core idea here is assuming that data distributions can be approximated as a mixture of multivariate Gaussian distributions. GMMs can also be used for clustering if individual groups can be assumed to be approximately Gaussian.

<blockquote>
  While these methods aren't very effective at representing complex structures like images or language, related ideas will appear as components of some of the more advanced methods we'll see.
</blockquote>

<h2 id="variational-auto-encoders">Variational Auto-Encoders</h2>

Auto-encoders and variational auto-encoders are widely used for learning compressed representations of data distributions, and can also be useful for "denoising" inputs, which will come into play when we discuss diffusion.

<div class="resource-links">
  <h3>Resources on Variational Auto-Encoders</h3>
  <ul>
    <li>Textbook chapter: <a href="https://www.deeplearningbook.org/contents/autoencoders.html">"Autoencoders"</a> in the "Deep Learning" book</li>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2018-08-12-vae/">"From Autoencoder to Beta-VAE"</a> from Lilian Weng</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=9zKuYvjFFS8">"Variational Autoencoders"</a> from Arxiv Insights</li>
    <li>Blog post: <a href="https://towardsdatascience.com/deep-generative-models-25ab2821afd3">"Deep Generative Models"</a> from Prakash Pandey - covers both VAEs and GANs</li>
  </ul>
</div>

<h2 id="generative-adversarial-nets">Generative Adversarial Nets</h2>

The basic idea behind Generative Adversarial Networks (GANs) is to simulate a "game" between two neural nets --- the Generator wants to create samples which are indistinguishable from real data by the Discriminator, who wants to identify the generated samples, and both nets are trained continuously until an equilibrium (or desired sample quality) is reached.

<blockquote>
  Following from von Neumann's minimax theorem for zero-sum games, you basically get a "theorem" promising that GANs succeed at learning distributions, if you assume that gradient descent finds global minimizers and allow both networks to grow arbitrarily large.
</blockquote>

Granted, neither of these are literally true in practice, but GANs do tend to be quite effective (although they've fallen out of favor somewhat in recent years, partly due to the instabilities of simultaneous training).

<div class="resource-links">
  <h3>Resources on GANs</h3>
  <ul>
    <li>Guide: <a href="https://blog.paperspace.com/complete-guide-to-gans/">"Complete Guide to Generative Adversarial Networks"</a> from Paperspace</li>
    <li>Tutorial: <a href="https://www.analyticsvidhya.com/blog/2021/10/an-end-to-end-introduction-to-generative-adversarial-networksgans/">"Generative Adversarial Networks (GANs): End-to-End Introduction"</a></li>
    <li>Textbook chapter: <a href="https://www.deeplearningbook.org/contents/generative_models.html">Deep Learning, Ch. 20 - Generative Models</a> (theory-focused)</li>
  </ul>
</div>

<h2 id="conditional-gans">Conditional GANs</h2>

Conditional GANs are where we'll start going from vanilla "distribution learning" to something which more closely resembles interactive generative tools like DALL-E and Midjourney, incorporating text-image multimodality. A key idea is to learn "representations" (in the sense of text embeddings or autoencoders) which are more abstract and can be applied to either text or image inputs.

<blockquote>
  For example, you could imagine training a vanilla GAN on (image, caption) pairs by embedding the text and concatenating it with an image, which could then learn this joint distribution over images and captions. This implicitly involves learning conditional distributions if part of the input (image or caption) is fixed.
</blockquote>

This can be extended to enable automatic captioning (given an image) or image generation (given a caption). There a number of variants on this setup with differing bells and whistles. The VQGAN+CLIP architecture is worth knowing about, as it was a major popular source of early "AI art" generated from input text.

<div class="resource-links">
  <h3>Resources on Conditional GANs</h3>
  <ul>
    <li>Blog post: <a href="https://blog.paperspace.com/conditional-generative-adversarial-networks/">"Implementing Conditional Generative Adversarial Networks"</a> from Paperspace</li>
    <li>Article: <a href="https://towardsdatascience.com/cgan-conditional-generative-adversarial-network-how-to-gain-control-over-gan-outputs-b30620bd0cc8">"Conditional Generative Adversarial Network — How to Gain Control Over GAN Outputs"</a> by Saul Dobilas</li>
    <li>Tutorial: <a href="https://ljvmiranda921.github.io/notebook/2021/08/08/clip-vqgan/">"The Illustrated VQGAN"</a> by LJ Miranda</li>
    <li>Talk: <a href="https://www.youtube.com/watch?v=Ih4qOakCZD4">"Using Deep Learning to Generate Artwork with VQGAN-CLIP"</a> from Paperspace</li>
  </ul>
</div>

<h2 id="normalizing-flows">Normalizing Flows</h2>

The aim of normalizing flows is to learn a series of invertible transformations between Gaussian noise and an output distribution, avoiding the need for "simultaneous training" in GANs, and have been popular for generative modeling in a number of domains.

<div class="resource-links">
  <h3>Resources on Normalizing Flows</h3>
  <ul>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2018-10-13-flow-models/">"Flow-based Deep Generative Models"</a> from Lilian Weng</li>
  </ul>
</div>

I haven't personally gone very deep on normalizing flows, but they come up enough that they're probably worth being aware of.

<h2 id="diffusion-models">Diffusion Models</h2>

One of the central ideas behind diffusion models (like StableDiffusion) is iterative guided application of denoising operations, refining random noise into something that increasingly resembles an image. Diffusion originates from the worlds of stochastic differential equations and statistical physics --- relating to the "Schrodinger bridge" problem and optimal transport for probability distributions --- and a fair amount of math is basically unavoidable if you want to understand the whole picture.

<blockquote>
  Diffusion models work by gradually adding noise to training data and then learning to reverse this process, effectively learning how to transform random noise into structured data that matches the target distribution.
</blockquote>

<div class="resource-links">
  <h3>Resources on Diffusion Models</h3>
  <ul>
    <li>Introduction: <a href="https://medium.com/@gitau_am/a-friendly-introduction-to-denoising-diffusion-probabilistic-models-cc76b8abef25">"A friendly Introduction to Denoising Diffusion Probabilistic Models"</a> by Antony Gitau</li>
    <li>Deep dive: <a href="https://lilianweng.github.io/posts/2021-07-11-diffusion-models/">"What are Diffusion Models?"</a> by Lilian Weng</li>
    <li>Code walkthrough: <a href="https://huggingface.co/blog/annotated-diffusion">"The Annotated Diffusion Model"</a> from Hugging Face</li>
    <li>Advanced technique: <a href="https://huggingface.co/blog/lora">"Fine-tuning Diffusion Models with LoRA"</a> from Hugging Face</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Simple models like Naive Bayes and Gaussian Mixture Models form the foundation of generative modeling</li>
    <li>Variational Auto-Encoders learn compressed data representations useful for generation and denoising</li>
    <li>Generative Adversarial Networks create realistic outputs through an adversarial training process</li>
    <li>Conditional GANs extend the GAN framework to enable text-to-image generation</li>
    <li>Normalizing Flows learn invertible transformations between simple distributions and complex ones</li>
    <li>Diffusion Models iteratively denoise random inputs to create structured outputs like images</li>
    <li>Each architecture presents different tradeoffs in training stability, output quality, and controllability</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section7/";
    window.nextSection = "/content/handbooks/generative-ai/section9/";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
