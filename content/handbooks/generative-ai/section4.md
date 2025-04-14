---
layout: default
title: "Finetuning and Alignment"
description: "Techniques for transforming base LLMs into helpful, harmless, and honest assistants."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  In pre-training, the goal is basically "predict the next token on random internet text". While the resulting "base" models are still useful in some contexts, their outputs are often chaotic or "unaligned", and they may not respect the format of a back-and-forth conversation. Here we'll look at a set of techniques for going from these base models to ones resembling the friendly chatbots and assistants we're more familiar with. A great companion resource, especially for this section, is Maxime Labonne's interactive <a href="https://github.com/mlabonne/llm-course?tab=readme-ov-file">LLM course</a> on Github.
</div>

<h2 id="instruct-fine-tuning">Instruct Fine-Tuning</h2>

Instruct fine-tuning (or "instruction tuning", or "supervised finetuning", or "chat tuning" -- the boundaries here are a bit fuzzy) is the primary technique used (at least initially) for coaxing LLMs to conform to a particular style or format. Here, data is presented as a sequence of (input, output) pairs where the input is a user question to answer, and the model's goal is to predict the output -- typically this also involves adding special "start"/"stop"/"role" tokens and other masking techniques, enabling the model to "understand" the difference between the user's input and its own outputs. This technique is also widely used for task-specific finetuning on datasets with a particular kind of problem structure (e.g. translation, math, general question-answering).

See this [blog post](https://newsletter.ruder.io/p/instruction-tuning-vol-1) from Sebastian Ruder or this [video](https://www.youtube.com/watch?v=YoVek79LFe0) from Shayne Longpre for short overviews.

<h2 id="lora">Low-Rank Adapters (LoRA)</h2>

While pre-training (and "full finetuning") requires applying gradient updates to all parameters of a model, this is typically impractical on consumer GPUs or home setups; fortunately, it's often possible to significantly reduce the compute requirements by using parameter-efficient finetuning (PEFT) techniques like Low-Rank Adapters (LoRA). This can enable competitive performance even with relatively small datasets, particularly for application-specific use cases. The main idea behind LoRA is to train each weight matrix in a low-rank space by "freezing" the base matrix and training a factored representation with much smaller inner dimension, which is then added to the base matrix.

<div class="resource-links">
  <h3>Resources on LoRA</h3>
  <ul>
    <li>Video: <a href="https://youtu.be/dA-NhCtrrVE?si=TpJkPfYxngQQ0iGj">LoRA paper walkthrough (part 1)</a></li>
    <li>Video: <a href="https://youtu.be/iYr1xZn26R8?si=aG0F8ws9XslpZ4ur">LoRA code demo (part 2)</a></li>
    <li>Blog post: <a href="https://sebastianraschka.com/blog/2023/llm-finetuning-lora.html">"Parameter-Efficient LLM Finetuning With Low-Rank Adaptation"</a> by Sebastian Raschka</li>
    <li>Blog post: <a href="https://magazine.sebastianraschka.com/p/practical-tips-for-finetuning-llms">"Practical Tips for Finetuning LLMs Using LoRA"</a> by Sebastian Raschka</li>
  </ul>
</div>

Additionally, an "decomposed" LoRA variant called DoRA has been gaining popularity in recent months, often yielding performance improvements; see this [post](https://magazine.sebastianraschka.com/p/lora-and-dora-from-scratch) from Sebastian Raschka for more details.

<h2 id="rlhf">Reward Models and RLHF</h2>

One of the most prominent techniques for "aligning" a language model is Reinforcement Learning from Human Feedback (RLHF); here, we typically assume that an LLM has already been instruction-tuned to respect a chat style, and that we additionally have a "reward model" which has been trained on human preferences. Given pairs of differing outputs to an input, where a preferred output has been chosen by a human, the learning objective of the reward model is to predict the preferred output, which involves implicitly learning preference "scores". This allows bootstrapping a general representation of human preferences (at least with respect to the dataset of output pairs), which can be used as a "reward simulator" for continual training of a LLM using RL policy gradient techniques like PPO.

<blockquote>
  RLHF represents a significant advancement in aligning LLMs with human values and preferences, enabling models to produce outputs that are not just factually accurate but also helpful, harmless, and honest.
</blockquote>

<div class="resource-links">
  <h3>Resources on RLHF</h3>
  <ul>
    <li>Blog post: <a href="https://huggingface.co/blog/rlhf">"Illustrating Reinforcement Learning from Human Feedback (RLHF)"</a> from Hugging Face</li>
    <li>Blog post: <a href="https://huyenchip.com/2023/05/02/rlhf.html">"Reinforcement Learning from Human Feedback"</a> from Chip Huyen</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=2MBJOuVq380">RLHF talk</a> by Nathan Lambert</li>
    <li>Blog post: <a href="https://sebastianraschka.com/blog/2024/research-papers-in-march-2024.html">Insights on RewardBench</a> from Sebastian Raschka</li>
  </ul>
</div>

<h2 id="dpo">Direct Preference Optimization Methods</h2>

The space of alignment algorithms seems to be following a similar trajectory as we saw with stochastic optimization algorithms a decade ago. In this an analogy, RLHF is like SGD --- it works, it's the original, and it's also become kind of a generic "catch-all" term for the class of algorithms that have followed it. Perhaps DPO is AdaGrad, and in the year since its release there's been a rapid wave of further algorithmic developments along the same lines (KTO, IPO, ORPO, etc.), whose relative merits are still under active debate. Maybe a year from now, everyone will have settled on a standard approach which will become the "Adam" of alignment.

<div class="resource-links">
  <h3>Resources on DPO</h3>
  <ul>
    <li>Blog post: <a href="https://towardsdatascience.com/understanding-the-implications-of-direct-preference-optimization-a4bbd2d85841">"Understanding the Implications of Direct Preference Optimization"</a> by Matthew Gunton</li>
    <li>Blog post: <a href="https://huggingface.co/blog/dpo-trl">"Fine-tuning language models with Direct Preference Optimization"</a> from Hugging Face</li>
    <li>Blog post: <a href="https://huggingface.co/blog/pref-tuning">"The Art of Preference Optimization"</a> from Hugging Face (comparing DPO-flavored methods)</li>
  </ul>
</div>

<h2 id="context-scaling">Context Scaling</h2>

Beyond task specification or alignment, another common goal of finetuning is to increase the effective context length of a model, either via additional training, adjusting parameters for positional encodings, or both. Even if adding more tokens to a model's context can "type-check", training on additional longer examples is generally necessary if the model may not have seen such long sequences during pretraining.

<div class="resource-links">
  <h3>Resources on Context Scaling</h3>
  <ul>
    <li>Blog post: <a href="https://gradient.ai/blog/scaling-rotational-embeddings-for-long-context-language-models">"Scaling Rotational Embeddings for Long-Context Language Models"</a> by Gradient AI</li>
    <li>Blog post: <a href="https://blog.eleuther.ai/yarn/">"Extending the RoPE"</a> by Eleuther AI, introducing the YaRN method for increased context via attention temperature scaling</li>
    <li>Blog post: <a href="https://huggingface.co/blog/wenbopan/long-context-fine-tuning">"Everything About Long Context Fine-tuning"</a> by Wenbo Pan</li>
  </ul>
</div>

<h2 id="distillation-merging">Distillation and Merging</h2>

Here we'll look at two very different methods of consolidating knowledge across LLMs --- distillation and merging. Distillation was first popularized for BERT models, where the goal is to "distill" the knowledge and performance of a larger model into a smaller one (at least for some tasks) by having it serve as a "teacher" during the smaller model's training, bypassing the need for large quantities of human-labeled data.

<div class="resource-links">
  <h3>Resources on Distillation</h3>
  <ul>
    <li>Blog post: <a href="https://medium.com/huggingface/distilbert-8cf3380435b5">"Smaller, faster, cheaper, lighter: Introducing DistilBERT, a distilled version of BERT"</a> from Hugging Face</li>
    <li>Guide: <a href="https://snorkel.ai/llm-distillation-demystified-a-complete-guide/">"LLM distillation demystified: a complete guide"</a> from Snorkel AI</li>
    <li>Research blog: <a href="https://blog.research.google/2023/09/distilling-step-by-step-outperforming.html">"Distilling Step by Step"</a> from Google Research</li>
  </ul>
</div>

<blockquote>
  Merging is much more of a "wild west" technique, largely used by open-source engineers who want to combine the strengths of multiple finetuning efforts. It's kind of wild that it works at all, and perhaps grants some credence to "linear representation hypotheses".
</blockquote>

The idea behind model merging is basically to take two different finetunes of the same base model and just average their weights. No training required. Technically, it's usually "spherical interpolation" (or "slerp"), but this is pretty much just fancy averaging with a normalization step. For more details, see the post [Merge Large Language Models with mergekit](https://huggingface.co/blog/mlabonne/merge-models) by Maxime Labonne.

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Instruct fine-tuning transforms base LLMs into models that follow user instructions</li>
    <li>Parameter-efficient techniques like LoRA make fine-tuning feasible on consumer hardware</li>
    <li>RLHF aligns models with human preferences through reward modeling and reinforcement learning</li>
    <li>Direct Preference Optimization (DPO) offers a simpler alternative to RLHF for alignment</li>
    <li>Context scaling techniques enable LLMs to handle much longer inputs than their pretraining allowed</li>
    <li>Knowledge distillation creates smaller, faster models that retain much of their teacher's capabilities</li>
    <li>Model merging can combine strengths from different fine-tuned models without additional training</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section3/";
    window.nextSection = "/content/handbooks/generative-ai/section5/";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
