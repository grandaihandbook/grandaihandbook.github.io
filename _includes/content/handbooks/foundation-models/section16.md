---
layout: default
title: "Vision Transformers"
description: "Introduce transformer-based architectures for computer vision tasks."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section introduces Vision Transformers (ViTs), a class of deep learning models that adapt the highly successful Transformer architecture, originally designed for natural language processing, to computer vision tasks. By treating images as sequences of patches and leveraging self-attention mechanisms (**attention-based vision**), ViTs have challenged the long-standing dominance of Convolutional Neural Networks (CNNs) in the field. We explore the foundational ViT model, its key components like **patch embeddings**, and significant advancements like **DeiT** for data efficiency and **hierarchical transformers** such as the **Swin Transformer**, which incorporate structural biases suitable for vision.
</div>

<h2 id="the-vision-transformer-vit">The Vision Transformer (ViT)</h2>

<p>The Vision Transformer, introduced by Google Brain researchers in 2020, marked a pivotal moment by demonstrating that a pure Transformer architecture could achieve state-of-the-art results on image classification benchmarks, given sufficient training data.</p>

<h3 id="core-idea-patches-as-tokens">Core Idea: Images as Sequences</h3>
<p>ViT's core innovation is to treat an image as a sequence of fixed-size, non-overlapping patches, analogous to tokens in a sentence. Each patch is flattened into a vector.</p>

<h3 id="key-components">Key Components</h3>
<ul>
  <li><strong>Patch Embeddings:</strong> The image is divided into patches (e.g., 16x16 pixels). Each patch is flattened and linearly projected into an embedding vector. Positional embeddings are added to these patch embeddings to retain spatial information, as the standard Transformer is permutation-invariant.</li>
  <li><strong>Transformer Encoder:</strong> The sequence of patch embeddings (plus an optional learnable class token embedding) is fed into a standard Transformer encoder, consisting of multiple layers of multi-head self-attention (MHSA) and feed-forward networks (MLP blocks). The self-attention mechanism allows the model to weigh the importance of different patches when representing any given patch.</li>
  <li><strong>Classification Head:</strong> For image classification, typically the output corresponding to the class token is fed into a simple MLP head to produce the final prediction.</li>
</ul>
<p>ViT showed excellent performance, especially when pre-trained on massive datasets (like JFT-300M), but initially struggled to match CNNs when trained on smaller datasets like ImageNet from scratch due to a lack of inductive biases inherent in CNNs (like locality and translation equivariance).</p>

<div class="resource-links">
  <h3>Key Resources for ViT</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2010.11929">An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale</a> by Dosovitskiy et al. (2020)</li>
    <li>Blog Post: <a href="https://ai.googleblog.com/2020/12/transformers-for-image-recognition-at.html">Google AI Blog explaining ViT</a></li>
    <li>Explainer: <a href="https://towardsdatascience.com/vision-transformer-vit-explained-e309f64f6483">Vision Transformer (ViT) Explained</a> (Community explanation)</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=TrdevFK_am4">Vision Transformer (ViT) - Paper Explained (Yannic Kilcher)</a></li>
  </ul>
</div>

<h2 id="evolution-and-advancements">Evolution and Advancements</h2>

<p>Following the original ViT, research rapidly addressed its limitations, particularly data inefficiency and the lack of hierarchical structure suitable for dense prediction tasks.</p>

<h3 id="deit-data-efficient-image-transformers">DeiT: Data-efficient Image Transformers</h3>
<p>DeiT, developed by Facebook AI, focused on training ViTs effectively using only ImageNet-1k, without requiring massive external datasets. Its key contribution was using knowledge distillation, where a separately trained CNN (like RegNet) acts as a "teacher" model. The ViT ("student") is trained to mimic the output predictions of the teacher model, in addition to learning from the true labels. DeiT also introduced a distillation token to specifically learn from the teacher's output.</p>

<div class="resource-links">
  <h3>Key Resources for DeiT</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2012.12877">Training data-efficient image transformers &amp; distillation through attention</a> by Touvron et al. (2021)</li>
    <li>Blog Post: <a href="https://ai.facebook.com/blog/training-data-efficient-image-transformers-distillation-through-attention/">Facebook AI Blog on DeiT</a></li>
    <li>Code: <a href="https://github.com/facebookresearch/deit">Official DeiT GitHub Repository</a></li>
  </ul>
</div>

<h3 id="hierarchical-transformers-swin">Hierarchical Transformers (Swin)</h3>
<p>Standard ViTs produce feature maps of a single, low resolution throughout the network. This is inefficient for dense prediction tasks like object detection and semantic segmentation, which benefit from hierarchical or multi-scale feature maps, a hallmark of CNNs. Hierarchical vision transformers address this.</p>

<p>The **Swin Transformer (Shifted Window Transformer)**, developed by Microsoft Research, is a prominent example. It introduces two key innovations:</p>
<ul>
  <li><strong>Windowed Self-Attention:</strong> Self-attention is computed within local, non-overlapping windows (e.g., 7x7 patches) instead of globally across all patches. This significantly reduces computational complexity from quadratic to linear with respect to the number of patches.</li>
  <li><strong>Shifted Windowing (SW-MSA):</strong> To enable cross-window communication while maintaining efficiency, the window configuration is shifted between consecutive layers. A window partition in one layer is shifted in the next, so patches that were in different windows can interact in the subsequent layer's attention calculation.</li>
  <li><strong>Patch Merging:</strong> As the network deepens, layers progressively merge neighboring patches, increasing the receptive field and reducing the spatial resolution while increasing the feature dimension, creating a hierarchical feature pyramid similar to CNNs.</li>
</ul>
<p>Swin Transformers achieved state-of-the-art performance across various vision tasks (classification, detection, segmentation) and demonstrated better scalability and efficiency compared to ViT.</p>

<div class="resource-links">
  <h3>Key Resources for Swin Transformer</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2103.14030">Swin Transformer: Hierarchical Vision Transformer using Shifted Windows</a> by Liu et al. (2021)</li>
    <li>Code: <a href="https://github.com/microsoft/Swin-Transformer">Official Swin Transformer GitHub Repository</a></li>
    <li>Explainer: <a href="https://towardsdatascience.com/swin-transformer-explained-including-comparison-with-vision-transformer-vit-ca77d33e91a6">Swin Transformer Explained</a> (Community explanation)</li>
     <li>Video: <a href="https://www.youtube.com/watch?v=2lZvuU_IIMA">Swin Transformer (Paper Explained)</a></li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Vision Transformers (ViTs) apply the Transformer architecture to vision by treating images as sequences of patches.</li>
    <li>The core ViT uses patch embeddings and a standard Transformer encoder, relying heavily on large-scale pre-training.</li>
    <li>DeiT introduced knowledge distillation techniques to train ViTs efficiently on smaller datasets like ImageNet.</li>
    <li>Hierarchical transformers, like the Swin Transformer, incorporate locality and multi-scale processing, crucial for dense prediction tasks.</li>
    <li>Swin Transformer uses efficient windowed self-attention and a shifted window mechanism to enable cross-window connections while building hierarchical feature maps.</li>
    <li>ViTs and their variants represent a major paradigm shift in computer vision, offering powerful attention-based alternatives to CNNs.</li>
  </ul>
</div>

<script>
  // Navigation variables - Update these paths as needed
  window.prevSection = "/content/handbooks/foundation-models/section15/"; // Assuming section 15 was previous
  window.nextSection = "/content/handbooks/foundation-models/section17/"; // Assuming section 17 is next
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
