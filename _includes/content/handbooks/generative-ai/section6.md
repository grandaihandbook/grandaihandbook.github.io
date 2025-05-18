<div class="key-concept">
  Here we'll look at a handful of techniques for improving the speed and efficiency of inference from pre-trained Transformer language models, most of which are fairly widely used in practice. It's worth first reading this short Nvidia <a href="https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/">blog post</a> for a crash course in several of the topics we'll look at (and a number of others).
</div>

<h2 id="parameter-quantization">
  <span class="heading-text">Parameter Quantization</span>
</h2>

<p>With the rapid increase in parameter counts for leading LLMs and difficulties (both in cost and availability) in acquiring GPUs to run models on, there's been a growing interest in quantizing LLM weights to use fewer bits each, which can often yield comparable output quality with a 50-75% (or more) reduction in required memory. Typically this shouldn't be done naively; Tim Dettmers, one of the pioneers of several modern quantization methods (LLM.int8(), QLoRA, bitsandbytes) has a great <a href="https://timdettmers.com/2022/08/17/llm-int8-and-emergent-features/">blog post</a> for understanding quantization principles, and the need for mixed-precision quantization as it relates to emergent features in large-model training.</p>

<blockquote>
  Effective quantization can reduce memory requirements by 50-75% while maintaining comparable output quality, making large models accessible on consumer hardware.
</blockquote>

<div class="resource-links">
  <h3>Resources on Quantization</h3>
  <ul>
    <li>Blog post: <a href="https://timdettmers.com/2022/08/17/llm-int8-and-emergent-features/">Understanding Quantization Principles</a> by Tim Dettmers</li>
    <li>Overview: <a href="https://www.tensorops.ai/post/what-are-quantized-llms">What are Quantized LLMs</a> from TensorOps - covers GGUF, AWQ, HQQ, and GPTQ</li>
    <li>Blog post: <a href="https://www.maartengrootendorst.com/blog/quantization/">Quantization Methods Comparison</a> by Maarten Grootendorst</li>
    <li>Talk: <a href="https://www.youtube.com/watch?v=fQirE9N5q_Y">QLoRA Overview</a> by Tim Dettmers</li>
    <li>Blog: <a href="https://huggingface.co/blog/4bit-transformers-bitsandbytes">4-bit Transformers with bitsandbytes</a> from Hugging Face</li>
    <li>Technical post: <a href="https://www.answer.ai/posts/2024-03-14-fsdp-qlora-deep-dive.html">FSDP QLoRA Deep Dive</a> from Answer.AI - combining QLoRA with FSDP for efficient finetuning</li>
  </ul>
</div>

<h2 id="speculative-decoding">
  <span class="heading-text">Speculative Decoding</span>
</h2>

<p>The basic idea behind speculative decoding is to speed up inference from a larger model by primarily sampling tokens from a much smaller model and occasionally applying corrections (e.g. every <em>N</em> tokens) from the larger model whenever the output distributions diverge. These batched consistency checks tend to be much faster than sampling <em>N</em> tokens directly, and so there can be large overall speedups if the token sequences from smaller model only diverge periodically.</p>

<div class="resource-links">
  <h3>Resources on Speculative Decoding</h3>
  <ul>
    <li>Blog post: <a href="https://jaykmody.com/blog/speculative-sampling/">Speculative Sampling Walkthrough</a> from Jay Mody</li>
    <li>Article: <a href="https://pytorch.org/blog/hitchhikers-guide-speculative-decoding/">Hitchhiker's Guide to Speculative Decoding</a> from PyTorch - includes evaluation results</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=hm7VEgxhOvk">Speculative Decoding Overview</a> from Trelis Research</li>
  </ul>
</div>

<h2 id="flashattention">
  <span class="heading-text">FlashAttention</span>
</h2>

<p>Computing attention matrices tends to be a primary bottleneck in inference and training for Transformers, and FlashAttention has become one of the most widely-used techniques for speeding it up. In contrast to some of the techniques we'll see in <a href="#s7">Section 7</a> which <em>approximate</em> attention with a more concise representation (occurring some representation error as a result), FlashAttention is an <em>exact</em> representation whose speedup comes from hardware-aware implementation.</p>

<blockquote>
  FlashAttention applies tiling and recomputation to decompose the expression of attention matrices, enabling significantly reduced memory I/O and faster wall-clock performance (even while slightly increasing the required FLOPS).
</blockquote>

<div class="resource-links">
  <h3>Resources on FlashAttention</h3>
  <ul>
    <li>Talk: <a href="https://www.youtube.com/watch?v=gMOAud7hZg4">FlashAttention Explained</a> by Tri Dao (author of FlashAttention)</li>
    <li>Explainer: <a href="https://gordicaleksa.medium.com/eli5-flash-attention-5c44017022ad">ELI5: FlashAttention</a> by Aleksa Gordić</li>
  </ul>
</div>

<h2 id="kv-caching">
  <span class="heading-text">Key-Value Caching and Paged Attention</span>
</h2>

<p>As noted in the <a href="https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/">NVIDIA blog</a> referenced above, key-value caching is fairly standard in Transformer implementation matrices to avoid redundant recomputation of attention. This enables a tradeoff between speed and resource utilization, as these matrices are kept in GPU VRAM. While managing this is fairly straightforward for a single "thread" of inference, a number of complexities arise when considering parallel inference or multiple users for a single hosted model instance.</p>

<blockquote>
  How can you avoid recomputing values for system prompts and few-shot examples? When should you evict cache elements for a user who may or may not want to continue a chat session? PagedAttention addresses these challenges by leveraging ideas from classical paging in operating systems.
</blockquote>

<p>PagedAttention and its popular implementation <a href="https://docs.vllm.ai/en/stable/">vLLM</a> has become a standard for self-hosted multi-user inference servers.</p>

<div class="resource-links">
  <h3>Resources on KV Caching</h3>
  <ul>
    <li>Video: <a href="https://www.youtube.com/watch?v=80bIUggRJf4">The KV Cache: Memory Usage in Transformers</a> by Efficient NLP</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=5ZlavKF_98U">Fast LLM Serving with vLLM and PagedAttention</a> by Anyscale</li>
    <li>Blog post: <a href="https://blog.vllm.ai/2023/06/20/vllm.html">vLLM: Easy, Fast, and Cheap LLM Serving</a> from vLLM team</li>
  </ul>
</div>

<h2 id="cpu-offloading">
  <span class="heading-text">CPU Offloading</span>
</h2>

<p>The primary method used for running LLMs either partially or entirely on CPU (vs. GPU) is llama.cpp. This approach is particularly valuable for those without access to high-end GPUs or for deployment in resource-constrained environments.</p>

<div class="resource-links">
  <h3>Resources on CPU Offloading</h3>
  <ul>
    <li>Tutorial: <a href="https://www.datacamp.com/tutorial/llama-cpp-tutorial">Llama.cpp Tutorial</a> from DataCamp - high-level overview</li>
    <li>Blog post: <a href="https://justine.lol/matmul/">CPU Matrix Multiplication Optimizations</a> - technical details about CPU performance improvements</li>
    <li>Note: llama.cpp serves as the backend for popular self-hosted LLM tools like LMStudio and Ollama</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Parameter quantization makes large models accessible on consumer hardware with minimal quality loss</li>
    <li>Speculative decoding accelerates inference by using smaller models to "draft" outputs for larger models</li>
    <li>FlashAttention significantly speeds up attention computation through hardware-aware implementation</li>
    <li>Key-value caching avoids redundant computation during autoregressive decoding</li>
    <li>PagedAttention enables efficient memory management for multi-user inference</li>
    <li>CPU offloading techniques like llama.cpp allow running models without dedicated GPU hardware</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section5/";
    window.nextSection = "/content/handbooks/generative-ai/section7/";
</script><div class="key-concept">

Here we'll look at a handful of techniques for improving the speed and efficiency of inference from pre-trained Transformer language models, most of which are fairly widely used in practice. It's worth first reading this short Nvidia <a href="https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/">blog post</a> for a crash course in several of the topics we'll look at (and a number of others).

</div>

<h2 id="parameter-quantization">
  <span class="heading-text">Parameter Quantization</span>
</h2>

<p>With the rapid increase in parameter counts for leading LLMs and difficulties (both in cost and availability) in acquiring GPUs to run models on, there's been a growing interest in quantizing LLM weights to use fewer bits each, which can often yield comparable output quality with a 50-75% (or more) reduction in required memory. Typically this shouldn't be done naively; Tim Dettmers, one of the pioneers of several modern quantization methods (LLM.int8(), QLoRA, bitsandbytes) has a great <a href="https://timdettmers.com/2022/08/17/llm-int8-and-emergent-features/">blog post</a> for understanding quantization principles, and the need for mixed-precision quantization as it relates to emergent features in large-model training.</p>

<blockquote>
  Effective quantization can reduce memory requirements by 50-75% while maintaining comparable output quality, making large models accessible on consumer hardware.
</blockquote>

<div class="resource-links">
  <h3>Resources on Quantization</h3>
  <ul>
    <li>Blog post: <a href="https://timdettmers.com/2022/08/17/llm-int8-and-emergent-features/">Understanding Quantization Principles</a> by Tim Dettmers</li>
    <li>Overview: <a href="https://www.tensorops.ai/post/what-are-quantized-llms">What are Quantized LLMs</a> from TensorOps - covers GGUF, AWQ, HQQ, and GPTQ</li>
    <li>Blog post: <a href="https://www.maartengrootendorst.com/blog/quantization/">Quantization Methods Comparison</a> by Maarten Grootendorst</li>
    <li>Talk: <a href="https://www.youtube.com/watch?v=fQirE9N5q_Y">QLoRA Overview</a> by Tim Dettmers</li>
    <li>Blog: <a href="https://huggingface.co/blog/4bit-transformers-bitsandbytes">4-bit Transformers with bitsandbytes</a> from Hugging Face</li>
    <li>Technical post: <a href="https://www.answer.ai/posts/2024-03-14-fsdp-qlora-deep-dive.html">FSDP QLoRA Deep Dive</a> from Answer.AI - combining QLoRA with FSDP for efficient finetuning</li>
  </ul>
</div>

<h2 id="speculative-decoding">
  <span class="heading-text">Speculative Decoding</span>
</h2>

<p>The basic idea behind speculative decoding is to speed up inference from a larger model by primarily sampling tokens from a much smaller model and occasionally applying corrections (e.g. every <em>N</em> tokens) from the larger model whenever the output distributions diverge. These batched consistency checks tend to be much faster than sampling <em>N</em> tokens directly, and so there can be large overall speedups if the token sequences from smaller model only diverge periodically.</p>

<div class="resource-links">
  <h3>Resources on Speculative Decoding</h3>
  <ul>
    <li>Blog post: <a href="https://jaykmody.com/blog/speculative-sampling/">Speculative Sampling Walkthrough</a> from Jay Mody</li>
    <li>Article: <a href="https://pytorch.org/blog/hitchhikers-guide-speculative-decoding/">Hitchhiker's Guide to Speculative Decoding</a> from PyTorch - includes evaluation results</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=hm7VEgxhOvk">Speculative Decoding Overview</a> from Trelis Research</li>
  </ul>
</div>

<h2 id="flashattention">
  <span class="heading-text">FlashAttention</span>
</h2>

<p>Computing attention matrices tends to be a primary bottleneck in inference and training for Transformers, and FlashAttention has become one of the most widely-used techniques for speeding it up. In contrast to some of the techniques we'll see in <a href="#s7">Section 7</a> which <em>approximate</em> attention with a more concise representation (occurring some representation error as a result), FlashAttention is an <em>exact</em> representation whose speedup comes from hardware-aware implementation.</p>

<blockquote>
  FlashAttention applies tiling and recomputation to decompose the expression of attention matrices, enabling significantly reduced memory I/O and faster wall-clock performance (even while slightly increasing the required FLOPS).
</blockquote>

<div class="resource-links">
  <h3>Resources on FlashAttention</h3>
  <ul>
    <li>Talk: <a href="https://www.youtube.com/watch?v=gMOAud7hZg4">FlashAttention Explained</a> by Tri Dao (author of FlashAttention)</li>
    <li>Explainer: <a href="https://gordicaleksa.medium.com/eli5-flash-attention-5c44017022ad">ELI5: FlashAttention</a> by Aleksa Gordić</li>
  </ul>
</div>

<h2 id="kv-caching">
  <span class="heading-text">Key-Value Caching and Paged Attention</span>
</h2>

<p>As noted in the <a href="https://developer.nvidia.com/blog/mastering-llm-techniques-inference-optimization/">NVIDIA blog</a> referenced above, key-value caching is fairly standard in Transformer implementation matrices to avoid redundant recomputation of attention. This enables a tradeoff between speed and resource utilization, as these matrices are kept in GPU VRAM. While managing this is fairly straightforward for a single "thread" of inference, a number of complexities arise when considering parallel inference or multiple users for a single hosted model instance.</p>

<blockquote>
  How can you avoid recomputing values for system prompts and few-shot examples? When should you evict cache elements for a user who may or may not want to continue a chat session? PagedAttention addresses these challenges by leveraging ideas from classical paging in operating systems.
</blockquote>

<p>PagedAttention and its popular implementation <a href="https://docs.vllm.ai/en/stable/">vLLM</a> has become a standard for self-hosted multi-user inference servers.</p>

<div class="resource-links">
  <h3>Resources on KV Caching</h3>
  <ul>
    <li>Video: <a href="https://www.youtube.com/watch?v=80bIUggRJf4">The KV Cache: Memory Usage in Transformers</a> by Efficient NLP</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=5ZlavKF_98U">Fast LLM Serving with vLLM and PagedAttention</a> by Anyscale</li>
    <li>Blog post: <a href="https://blog.vllm.ai/2023/06/20/vllm.html">vLLM: Easy, Fast, and Cheap LLM Serving</a> from vLLM team</li>
  </ul>
</div>

<h2 id="cpu-offloading">
  <span class="heading-text">CPU Offloading</span>
</h2>

<p>The primary method used for running LLMs either partially or entirely on CPU (vs. GPU) is llama.cpp. This approach is particularly valuable for those without access to high-end GPUs or for deployment in resource-constrained environments.</p>

<div class="resource-links">
  <h3>Resources on CPU Offloading</h3>
  <ul>
    <li>Tutorial: <a href="https://www.datacamp.com/tutorial/llama-cpp-tutorial">Llama.cpp Tutorial</a> from DataCamp - high-level overview</li>
    <li>Blog post: <a href="https://justine.lol/matmul/">CPU Matrix Multiplication Optimizations</a> - technical details about CPU performance improvements</li>
    <li>Note: llama.cpp serves as the backend for popular self-hosted LLM tools like LMStudio and Ollama</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Parameter quantization makes large models accessible on consumer hardware with minimal quality loss</li>
    <li>Speculative decoding accelerates inference by using smaller models to "draft" outputs for larger models</li>
    <li>FlashAttention significantly speeds up attention computation through hardware-aware implementation</li>
    <li>Key-value caching avoids redundant computation during autoregressive decoding</li>
    <li>PagedAttention enables efficient memory management for multi-user inference</li>
    <li>CPU offloading techniques like llama.cpp allow running models without dedicated GPU hardware</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section5/";
    window.nextSection = "/content/handbooks/generative-ai/section7/";
</script>
