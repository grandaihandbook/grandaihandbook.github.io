---
layout: default
title: "RNN and CNN"
description: "Explore the role of foundation models in natural language processing and computer vision tasks."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section delves into the core neural network architectures—Recurrent Neural Networks (RNNs) for Natural Language Processing (NLP) and Convolutional Neural Networks (CNNs) for Computer Vision (CV)—that laid the foundation for modern foundation models. We cover their basics, variants, challenges like vanishing and exploding gradients, attention mechanisms, and their applications in downstream tasks. These architectures have shaped the evolution of versatile, large-scale models. For a comprehensive overview, the paper <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models: A History from BERT to ChatGPT</a> traces their historical context.
</div>

<h2 id="recurrent-neural-networks">Recurrent Neural Networks (RNNs)</h2>

Recurrent Neural Networks are designed for sequential data, ideal for NLP tasks where word order is critical. RNNs maintain a hidden state that propagates information across time steps, modeling temporal dependencies. However, vanilla RNNs face significant challenges:

- **Vanishing Gradients**: During backpropagation through time, gradients can shrink exponentially, hindering learning of long-range dependencies.
- **Exploding Gradients**: Conversely, gradients can grow uncontrollably, causing unstable training. Techniques like gradient clipping mitigate this.

The paper <a href="https://arxiv.org/abs/1909.00029">Recurrent Neural Networks (RNNs): A Gentle Introduction and Overview</a> by Zeyer et al. provides a thorough introduction to these dynamics.

**Key Variants**:

- **Long Short-Term Memory (LSTM)**: Introduced in <a href="https://www.bioinf.jku.at/publications/older/2604.pdf">Long Short-Term Memory</a> by Hochreiter and Schmidhuber (1997), LSTMs use memory cells and gates (input, forget, output) to selectively retain information, addressing vanishing gradients.
- **Gated Recurrent Unit (GRU)**: Proposed in <a href="https://arxiv.org/abs/1412.3555">Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling</a> by Chung et al. (2014), GRUs simplify LSTMs by merging gates, offering comparable performance with fewer parameters.
- **Highway Networks**: Described in <a href="https://arxiv.org/abs/1505.00387">Highway Networks</a> by Srivastava et al. (2015), these allow information to bypass layers, easing gradient flow in deep RNNs.
- **Bidirectional RNNs**: Process sequences in both directions, enhancing context for tasks like named entity recognition.

**Attention Mechanisms in RNNs**:
Attention mechanisms, introduced in <a href="https://arxiv.org/abs/1508.04025">Effective Approaches to Attention-based Neural Machine Translation</a> by Luong et al. (2015), allow RNNs to focus on relevant parts of the input sequence, significantly improving performance in tasks like machine translation. This concept later inspired the Transformer’s self-attention, which largely replaced RNNs in foundation models.

**Downstream Applications**:

- **Text Classification**: Sentiment analysis, spam detection (e.g., LSTM-based classifiers).
- **Machine Translation**: Sequence-to-sequence models with attention (e.g., early Google Translate).
- **Speech Recognition**: Transcribing audio using RNNs for temporal modeling.
- **Named Entity Recognition (NER)**: Identifying entities with bidirectional LSTMs or GRUs.
- **Text Generation**: Generating coherent text sequences (e.g., early chatbots).

RNNs were pivotal in early NLP but have been largely superseded by Transformers due to scalability and parallelization. The blog <a href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/">Understanding LSTM Networks</a> by Chris Olah remains a gold standard for LSTM intuition.

<div class="resource-links">
  <h3>Key Resources for RNNs</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1909.00029">Recurrent Neural Networks (RNNs): A Gentle Introduction and Overview</a> by Zeyer et al. (2019) – Comprehensive RNN introduction</li>
    <li>Paper: <a href="https://www.bioinf.jku.at/publications/older/2604.pdf">Long Short-Term Memory</a> by Hochreiter and Schmidhuber (1997) – Original LSTM paper</li>
    <li>Paper: <a href="https://arxiv.org/abs/1412.3555">Empirical Evaluation of Gated Recurrent Neural Networks on Sequence Modeling</a> by Chung et al. (2014) – GRU evaluation</li>
    <li>Paper: <a href="https://arxiv.org/abs/1505.00387">Highway Networks</a> by Srivastava et al. (2015) – Gradient flow improvements</li>
    <li>Paper: <a href="https://arxiv.org/abs/1508.04025">Effective Approaches to Attention-based Neural Machine Translation</a> by Luong et al. (2015) – Attention in RNNs</li>
    <li>Blog post: <a href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/">Understanding LSTM Networks</a> by Chris Olah</li>
    <li>Blog post: <a href="https://karpathy.github.io/2015/05/21/rnn-effectiveness/">The Unreasonable Effectiveness of RNNs</a> by Andrej Karpathy</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=WCUNPb-5EYI">RNNs and LSTMs Explained</a> from DeepLearning.AI</li>
  </ul>
</div>

<h2 id="convolutional-neural-networks">Convolutional Neural Networks (CNNs)</h2>

Convolutional Neural Networks excel at processing grid-like data, such as images, by using convolutional layers to extract spatial features (e.g., edges, textures). Shared weights (filters) reduce parameters, while pooling layers downsample features for generalization. Like RNNs, CNNs face vanishing and exploding gradient issues in deep networks, addressed by architectures like ResNet. The paper <a href="https://arxiv.org/abs/1511.08458">An Introduction to Convolutional Neural Networks</a> by O’Shea and Nash (2015) offers a clear primer.

**Key Variants**:

- **AlexNet**: Introduced in <a href="https://papers.nips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf">ImageNet Classification with Deep Convolutional Neural Networks</a> by Krizhevsky et al. (2012), it popularized deep CNNs.
- **ResNet (Residual Network)**: Proposed in <a href="https://arxiv.org/abs/1512.03385">Deep Residual Learning for Image Recognition</a> by He et al. (2015), uses skip connections to mitigate vanishing gradients in deep networks.
- **ResNeXt**: Described in <a href="https://arxiv.org/abs/1611.05431">Aggregated Residual Transformations for Deep Neural Networks</a> by Xie et al. (2016), enhances ResNet with grouped convolutions.
- **DenseNet**: Introduced in <a href="https://arxiv.org/abs/1608.06993">Densely Connected Convolutional Networks</a> by Huang et al. (2016), connects each layer to all subsequent layers for feature reuse.
- **ConvNeXt**: Proposed in <a href="https://arxiv.org/abs/2201.03545">A ConvNet for the 2020s</a> by Liu et al. (2022), modernizes CNNs with Transformer-inspired designs.
- **UNet**: Developed in <a href="https://arxiv.org/abs/1505.04597">U-Net: Convolutional Networks for Biomedical Image Segmentation</a> by Ronneberger et al. (2015), uses an encoder-decoder for segmentation.
- **MobileNet**: Optimized for mobile devices with depthwise separable convolutions.

**Downstream Applications**:

- **Image Classification**: Labeling images (e.g., ResNet on ImageNet).
- **Object Detection**: Localizing objects (e.g., Faster R-CNN, YOLO).
- **Semantic Segmentation**: Pixel-wise classification (e.g., UNet in medical imaging).
- **Facial Recognition**: Identifying faces (e.g., MobileNet-based systems).
- **Image Generation**: Supporting GANs for tasks like style transfer.

CNNs remain integral to vision foundation models like CLIP and DINO, often serving as feature extractors. The paper <a href="https://arxiv.org/abs/2307.06942">Large Multimodal Models: Notes on CVPR 2023 Tutorial</a> discusses their role in multimodal systems.

<div class="resource-links">
  <h3>Key Resources for CNNs</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1511.08458">An Introduction to Convolutional Neural Networks</a> by O’Shea and Nash (2015) – CNN basics</li>
    <li>Paper: <a href="https://papers.nips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf">ImageNet Classification with Deep Convolutional Neural Networks</a> by Krizhevsky et al. (2012) – AlexNet</li>
    <li>Paper: <a href="https://arxiv.org/abs/1512.03385">Deep Residual Learning for Image Recognition</a> by He et al. (2015) – ResNet</li>
    <li>Paper: <a href="https://arxiv.org/abs/1611.05431">Aggregated Residual Transformations for Deep Neural Networks</a> by Xie et al. (2016) – ResNeXt</li>
    <li>Paper: <a href="https://arxiv.org/abs/1608.06993">Densely Connected Convolutional Networks</a> by Huang et al. (2016) – DenseNet</li>
    <li>Paper: <a href="https://arxiv.org/abs/1505.04597">U-Net: Convolutional Networks for Biomedical Image Segmentation</a> by Ronneberger et al. (2015) – UNet</li>
    <li>Paper: <a href="https://arxiv.org/abs/2201.03545">A ConvNet for the 2020s</a> by Liu et al. (2022) – ConvNeXt</li>
    <li>Blog post: <a href="https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way-3bd2b1164a53">A Comprehensive Guide to CNNs</a> on Towards Data Science</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=ArPaAXj9IVg">CNNs Explained</a> from Stanford CS231n</li>
    <li>Paper: <a href="https://arxiv.org/abs/2307.06942">Large Multimodal Models: Notes on CVPR 2023 Tutorial</a> by Chan et al. (2023) – CNNs in multimodal models</li>
  </ul>
</div>

<h2 id="rnn-cnn-in-foundation-models">RNNs and CNNs in Foundation Models</h2>

RNNs and CNNs were critical precursors to foundation models. RNNs, with attention mechanisms, shaped early NLP models like seq2seq and word2vec, influencing self-supervised learning in BERT and GPT. CNNs provided robust feature extraction for vision models like CLIP, which integrates CNN backbones with Transformers. Hybrid approaches, such as ConvNeXt or attention-augmented LSTMs, remain relevant in specialized tasks. The paper <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> highlights CNNs’ role in multimodal systems.

<div class="resource-links">
  <h3>Resources on RNNs and CNNs in Foundation Models</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023) – Historical context</li>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023) – CNNs in multimodal models</li>
    <li>Blog post: <a href="https://www.ibm.com/blog/how-cnns-and-rnns-paved-the-way-for-transformers/">How CNNs and RNNs Paved the Way for Transformers</a> by IBM Research</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>RNNs process sequential data for NLP, with LSTMs and GRUs addressing vanishing/exploding gradients</li>
    <li>Attention mechanisms in RNNs improved tasks like translation, inspiring Transformer architectures</li>
    <li>CNNs extract spatial features for vision tasks, with variants like ResNet and ConvNeXt tackling gradient issues</li>
    <li>Applications include text classification, translation, image classification, and segmentation</li>
    <li>RNNs and CNNs influenced foundation models, contributing to NLP and vision components</li>
  </ul>
</div>

<script>
  window.prevSection = "/content/handbooks/foundation-models/section1/";
  window.nextSection = "/content/handbooks/foundation-models/section3/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
