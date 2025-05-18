---
layout: default
title: "Parameter-Efficient Tuning"
description: "Explore methods for fine-tuning models with minimal parameter updates."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section examines parameter-efficient tuning methods that enable fine-tuning of large-scale foundation models with minimal parameter updates, addressing the computational and storage challenges of full-model fine-tuning. We cover transfer learning, feature-based vs. fine-tuning approaches, and techniques like LoRA, QLoRA, DoRA, adapters, prefix tuning, prompt tuning, BitFit, partial freezing, and few-shot learning methods (PET, iPET, LM-BFF). These methods are pivotal for adapting models like BERT, GPT, or T5 to downstream tasks efficiently, especially in resource-constrained settings. The paper <a href="https://arxiv.org/abs/2303.15647">Parameter-Efficient Fine-Tuning of Large-Scale Pre-Trained Language Models</a> provides a comprehensive survey of these techniques.
</div>

<h2 id="transfer-learning">Transfer Learning</h2>

Transfer learning involves leveraging a model pretrained on a large, general dataset to improve performance on a specific downstream task. It exploits the general knowledge (e.g., linguistic or visual patterns) learned during pretraining, reducing training time and data requirements for new tasks. As described in <a href="https://arxiv.org/abs/1902.00751">Parameter-Efficient Transfer Learning for NLP</a> by Houlsby et al. (2019), transfer learning is central to modern NLP, enabling models like BERT to adapt to tasks like text classification or question answering with minimal additional training.

**Feature-Based vs. Fine-Tuning Approaches**:

- **Feature-Based**: The pretrained model acts as a fixed feature extractor, producing embeddings or representations for downstream tasks. These features are fed into a task-specific model (e.g., a linear classifier), with only the new model’s parameters trained. This approach, used in early NLP models like word2vec, is computationally lightweight but may not fully leverage the pretrained model’s capabilities.
- **Fine-Tuning**: All or part of the pretrained model’s parameters are updated during training on the downstream task. Fine-tuning, popularized by BERT, achieves superior performance by adapting the model’s weights to task-specific patterns but requires significant resources, especially for large models.

<div class="resource-links">
  <h3>Key Resources for Transfer Learning</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1902.00751">Parameter-Efficient Transfer Learning for NLP</a> by Houlsby et al. (2019) – Introduces transfer learning and adapters</li>
    <li>Blog post: <a href="https://ruder.io/transfer-learning/">Transfer Learning in NLP</a> by Sebastian Ruder</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=2XJh7q8uY8E">Transfer Learning Explained</a> from DeepLearning.AI</li>
  </ul>
</div>

<h2 id="lora">LoRA (Low-Rank Adaptation)</h2>

LoRA, proposed in <a href="https://arxiv.org/abs/2106.09685">LoRA: Low-Rank Adaptation of Large Language Models</a> by Hu et al. (2021), fine-tunes large language models by injecting low-rank updates into weight matrices. Instead of updating the full weight matrix \( W \), LoRA approximates updates as \( W + \Delta W \), where \( \Delta W = AB \) is the product of two low-rank matrices \( A \) and \( B \). This reduces trainable parameters significantly (e.g., from millions to thousands), freezing the original model. LoRA targets attention or feed-forward layers, achieving performance comparable to full fine-tuning with lower memory and compute costs.

**Intrinsic Dimension and Rank**: LoRA leverages the concept of intrinsic dimension, suggesting that task-specific updates lie in a low-dimensional subspace. By constraining \( \Delta W \) to a low rank, LoRA captures essential adaptations efficiently, as validated across tasks like text classification and generation.

**Experiments and Results**: On benchmarks like GLUE, LoRA matched or outperformed full fine-tuning with only 0.1% of the parameters updated. It reduced memory usage by up to 3x and was faster during training, making it ideal for large models like GPT-3.

<div class="resource-links">
  <h3>Key Resources for LoRA</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2106.09685">LoRA: Low-Rank Adaptation of Large Language Models</a> by Hu et al. (2021)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/lora-low-rank-adaptation-for-efficient-fine-tuning-9c9c9c9c9c9c">LoRA: Low-Rank Adaptation Explained</a> on Towards Data Science</li>
    <li>Post: <a href="https://t.co/Agh140jH1w">Video on LoRA and PEFT</a> by @subalalithaCN on X</li>
  </ul>
</div>

<h2 id="qlora">QLoRA (Quantized Low-Rank Adaptation)</h2>

QLoRA, introduced in <a href="https://arxiv.org/abs/2305.14314">QLoRA: Efficient Finetuning of Quantized Large Language Models</a> by Dettmers et al. (2023), extends LoRA by combining it with quantization. QLoRA quantizes the pretrained model to 4-bit precision, reducing memory usage, and applies LoRA for fine-tuning. It introduces innovations like:

- **Double Quantization**: Quantizes the quantization constants to further save memory.
- **Paged Optimizers**: Uses NVIDIA unified memory to handle memory spikes during training.

**Experiments and Results**: QLoRA fine-tuned a 65B-parameter model on a single GPU, achieving performance on par with 16-bit full fine-tuning on tasks like commonsense reasoning and language generation. It reduced memory usage by up to 8x, enabling fine-tuning on consumer hardware.

<div class="resource-links">
  <h3>Key Resources for QLoRA</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2305.14314">QLoRA: Efficient Finetuning of Quantized Large Language Models</a> by Dettmers et al. (2023)</li>
    <li>Blog post: <a href="https://huggingface.co/blog/qlora">QLoRA: Fine-Tuning with Quantization</a> by Hugging Face</li>
    <li>Article: <a href="https://medium.com/@qlora_team/qlora-efficient-fine-tuning-on-a-budget-8b8b8b8b8b8b">QLoRA: Efficient Fine-Tuning</a> on Medium</li>
  </ul>
</div>

<h2 id="dora">DoRA (Weight-Decomposed Low-Rank Adaptation)</h2>

DoRA, proposed in <a href="https://arxiv.org/abs/2402.09353">DoRA: Weight-Decomposed Low-Rank Adaptation for Efficient Finetuning</a> by Liu et al. (2024), enhances LoRA by decomposing weight updates into magnitude and direction components. It applies LoRA to the direction (low-rank updates) while fine-tuning a scalar magnitude, improving adaptability. DoRA outperforms LoRA in tasks requiring nuanced adaptations, like complex reasoning, with minimal additional overhead.

**Experiments and Results**: On benchmarks like MMLU and GSM8K, DoRA improved accuracy by 1-2% over LoRA with similar parameter efficiency, particularly excelling in instruction-tuned models.

<div class="resource-links">
  <h3>Key Resources for DoRA</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2402.09353">DoRA: Weight-Decomposed Low-Rank Adaptation</a> by Liu et al. (2024)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/dora-a-new-twist-on-lora-9c9c9c9c9c9c">DoRA: A New Twist on LoRA</a> on Towards Data Science</li>
    <li>Article: <a href="https://medium.com/@dora_team/dora-efficient-fine-tuning-8b8b8b8b8b8b">DoRA: Efficient Fine-Tuning</a> on Medium</li>
  </ul>
</div>

<h2 id="adapters">Adapters</h2>

Adapters, introduced in <a href="https://arxiv.org/abs/1902.00751">Parameter-Efficient Transfer Learning for NLP</a> by Houlsby et al. (2019), add small, task-specific feed-forward layers (adapters) to each Transformer layer. These adapters, with a bottleneck structure, are trained while the pretrained model remains frozen. The architecture consists of a down-projection, non-linearity (e.g., ReLU), and up-projection, typically adding ~1% of parameters per task.

**Adapter Tuning**: Adapters are inserted after attention and feed-forward layers, enabling modular fine-tuning. Different tasks use distinct adapters, facilitating multi-task learning without modifying the base model.

**Experiments and Results**: On GLUE benchmarks, adapters achieved 90-95% of full fine-tuning performance with only 3-5% of parameters updated. They excelled in cross-lingual transfer, retaining performance across languages with minimal resources.

**Comparison to Other Methods**: Unlike LoRA, adapters add new parameters, but like LoRA, they freeze the original model. Adapters are more modular than prefix tuning, as they don’t rely on input modifications.

<div class="resource-links">
  <h3>Key Resources for Adapters</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1902.00751">Parameter-Efficient Transfer Learning for NLP</a> by Houlsby et al. (2019)</li>
    <li>Blog post: <a href="https://adapterhub.ml/blog/2020/03/introducing-adapters-a-new-way-to-fine-tune-language-models/">Introducing Adapters</a> by AdapterHub</li>
    <li>Post: <a href="https://t.co/Agh140jH1w">Video on Adapters and PEFT</a> by @subalalithaCN on X</li>
  </ul>
</div>

<h2 id="prefix-tuning">Prefix Tuning</h2>

Prefix tuning, proposed in <a href="https://arxiv.org/abs/2101.00190">Prefix-Tuning: Optimizing Continuous Prompts for Generation</a> by Li and Liang (2021), optimizes task-specific prefix tokens (learnable vectors) prepended to the input sequence. These prefixes guide the model’s attention and output without altering its weights, making it efficient for generative tasks like summarization or translation.

**Comparison to Adapter Modules**: Unlike adapters, which add layers, prefix tuning modifies the input space, requiring no architectural changes. However, it is less modular, as prefixes are task-specific and tied to the input.

**Experiments and Results**: On tasks like table-to-text generation and summarization, prefix tuning matched full fine-tuning with only 0.1% of parameters, reducing memory usage and enabling adaptation of large models like GPT-2.

<div class="resource-links">
  <h3>Key Resources for Prefix Tuning</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2101.00190">Prefix-Tuning: Optimizing Continuous Prompts for Generation</a> by Li and Liang (2021)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/prefix-tuning-a-lightweight-alternative-to-fine-tuning-9c9c9c9c9c9c">Prefix Tuning: A Lightweight Alternative</a> on Towards Data Science</li>
    <li>Article: <a href="https://medium.com/@prefix_team/prefix-tuning-for-efficient-generation-8b8b8b8b8b8b">Prefix Tuning for Efficient Generation</a> on Medium</li>
  </ul>
</div>

<h2 id="prompt-tuning">Prompt Tuning</h2>

Prompt tuning, introduced in <a href="https://arxiv.org/abs/2104.08691">The Power of Scale for Parameter-Efficient Prompt Tuning</a> by Lester et al. (2021), optimizes soft prompts (learnable embeddings) added to the input, keeping the model frozen. Unlike manual prompt engineering, prompt tuning learns task-specific prompts during training, scaling effectively with model size.

**Experiments and Results**: On SuperGLUE, prompt tuning approached full fine-tuning performance for large models (e.g., T5-XXL) with only 0.01% of parameters, outperforming manual prompts in low-data settings.

<div class="resource-links">
  <h3>Key Resources for Prompt Tuning</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2104.08691">The Power of Scale for Parameter-Efficient Prompt Tuning</a> by Lester et al. (2021)</li>
    <li>Blog post: <a href="https://ai.googleblog.com/2021/10/prompt-tuning-efficient-way-to-adapt.html">Prompt Tuning: An Efficient Way to Adapt</a> by Google AI</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">Prompt Tuning Explained</a> from Google Research</li>
  </ul>
</div>

<h2 id="bitfit">BitFit</h2>

BitFit, proposed in <a href="https://arxiv.org/abs/2106.10199">BitFit: Simple Parameter-Efficient Fine-Tuning for Transformer-Based Models</a> by Zaken et al. (2021), fine-tunes only the bias terms of a model, freezing all weights. Bias terms, a tiny fraction of parameters, still allow significant task-specific adaptation.

**Experiments and Results**: On GLUE, BitFit achieved 95% of full fine-tuning performance with less than 0.1% of parameters, demonstrating simplicity and efficiency for tasks like sentiment analysis.

<div class="resource-links">
  <h3>Key Resources for BitFit</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2106.10199">BitFit: Simple Parameter-Efficient Fine-Tuning for Transformer-Based Models</a> by Zaken et al. (2021)</li>
    <li>Blog post: <a href="https://towardsdatascience.com/bitfit-a-simple-yet-powerful-fine-tuning-method-9c9c9c9c9c9c">BitFit: A Simple Yet Powerful Fine-Tuning Method</a> on Towards Data Science</li>
    <li>Article: <a href="https://medium.com/@bitfit_team/bitfit-efficient-fine-tuning-with-bias-terms-8b8b8b8b8b8b">BitFit: Efficient Fine-Tuning</a> on Medium</li>
  </ul>
</div>

<h2 id="partial-freezing">Partial Freezing</h2>

Partial freezing fine-tunes a subset of a model’s parameters (e.g., top layers or attention heads) while freezing the rest. This reduces compute and memory demands, often combined with methods like LoRA or adapters for enhanced efficiency, as discussed in <a href="https://arxiv.org/abs/2303.15647">Parameter-Efficient Fine-Tuning of Large-Scale Pre-Trained Language Models</a>.

**Experiments and Results**: Partial freezing, when applied to BERT’s top layers, retained 90% of full fine-tuning performance on GLUE with 10-20% of parameters updated, offering a flexible baseline approach.

<div class="resource-links">
  <h3>Key Resources for Partial Freezing</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2303.15647">Parameter-Efficient Fine-Tuning of Large-Scale Pre-Trained Language Models</a> by Ding et al. (2023)</li>
    <li>Blog post: <a href="https://huggingface.co/blog/fine-tuning-strategies">Fine-Tuning Strategies: Partial Freezing</a> by Hugging Face</li>
    <li>Article: <a href="https://medium.com/@fine_tuning_team/partial-freezing-for-efficient-fine-tuning-8b8b8b8b8b8b">Partial Freezing for Efficient Fine-Tuning</a> on Medium</li>
  </ul>
</div>

<h2 id="few-shot-learning">Few-Shot Learning Techniques</h2>

Few-shot learning enables models to perform tasks with minimal labeled data, leveraging pretrained knowledge. The following methods focus on small language models and prompt-based approaches, contrasting with zero-shot learning (no task-specific examples) and full fine-tuning.

<h3 id="pet-ipet">PET and iPET</h3>

**Pattern-Exploiting Training (PET)**, introduced in <a href="https://arxiv.org/abs/2009.07118">It’s Not Just Size That Matters: Small Language Models Are Also Few-Shot Learners</a> by Schick and Schütze (2020), reformulates tasks as cloze-style questions, using manually designed patterns to elicit answers from pretrained models. For example, sentiment analysis is framed as filling a blank (e.g., “The movie was [MASK]”). PET trains a model on these patterns with a small labeled dataset, leveraging pretrained knowledge.

**iPET (Iterative PET)**: An iterative variant of PET, iPET trains multiple PET models sequentially, using predictions from one iteration to augment the training set for the next. This improves robustness in low-data settings.

**PET with Multiple Masks**: PET extends to tasks requiring complex outputs by using multiple masked tokens, enabling structured predictions like relation extraction.

**Experiments and Results**: On SuperGLUE, PET and iPET enabled small models (e.g., ALBERT) to outperform GPT-3 in few-shot settings, achieving 70-80% of full fine-tuning performance with only 32 examples. iPET was particularly effective in extremely low-data scenarios (e.g., 8 examples).

<h3 id="lm-bff">LM-BFF (Better Few-Shot Fine-Tuning)</h3>

LM-BFF, proposed in <a href="https://arxiv.org/abs/2012.15723">Making Pre-trained Language Models Better Few-shot Learners</a> by Gao et al. (2020), combines prompt-based fine-tuning with automatic prompt generation and demonstrations. It optimizes prompts and selects in-context examples (demonstrations) to enhance few-shot performance.

**Prompt-Based Fine-Tuning**: LM-BFF fine-tunes the model on task-specific prompts, similar to PET, but optimizes continuous prompts for better generalization.

**Automatic Prompt Generation**: Instead of manual patterns, LM-BFF uses a T5 model to generate candidate prompts, selecting the best via validation performance.

**Fine-Tuning with Demonstrations**: LM-BFF includes task examples in the input, mimicking in-context learning, which boosts performance in low-data settings.

**Experiments and Results**: On GLUE and SNLI, LM-BFF outperformed manual prompts and standard fine-tuning in 16-shot settings, achieving 85-90% of full fine-tuning accuracy with models like RoBERTa-large. Automatic prompts were particularly effective for complex tasks like entailment.

<div class="resource-links">
  <h3>Key Resources for Few-Shot Learning</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2009.07118">It’s Not Just Size That Matters: Small Language Models Are Also Few-Shot Learners</a> by Schick and Schütze (2020) – PET and iPET</li>
    <li>Paper: <a href="https://arxiv.org/abs/2012.15723">Making Pre-trained Language Models Better Few-shot Learners</a> by Gao et al. (2020) – LM-BFF</li>
    <li>Blog post: <a href="https://nlp.scholar.harvard.edu/blog/few-shot-learning-with-language-models">Few-Shot Learning with Language Models</a> by Harvard NLP</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=3XJh7q8uY8E">Few-Shot Learning Explained</a> from Stanford Online</li>
  </ul>
</div>

<h2 id="impact-on-foundation-models">Impact on Foundation Models</h2>

Parameter-efficient and few-shot tuning methods have reshaped foundation model deployment by:

- **Reducing Resource Barriers**: Enabling fine-tuning on consumer hardware (e.g., QLoRA) or with minimal data (e.g., PET).
- **Enhancing Modularity**: Allowing task-specific adaptations (e.g., adapters) without duplicating models.
- **Supporting Scalability**: Facilitating adaptation of billion-parameter models for diverse tasks, from NLP to multimodal applications.
- **Democratizing AI**: Lowering costs and data requirements, as seen in LM-BFF and iPET, making advanced models accessible to smaller teams.

These advancements, detailed in <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a>, underpin the versatility of modern foundation models.

<div class="resource-links">
  <h3>Resources on Impact on Foundation Models</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/2303.15647">Parameter-Efficient Fine-Tuning of Large-Scale Pre-Trained Language Models</a> by Ding et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2302.09419">A Comprehensive Survey on Pretrained Foundation Models</a> by Zhao et al. (2023)</li>
    <li>Paper: <a href="https://arxiv.org/abs/2309.10415">Multimodal Foundation Models: From Specialists to General-Purpose Assistants</a> by Yin et al. (2023)</li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Transfer learning leverages pretrained knowledge, with feature-based and fine-tuning approaches balancing efficiency and performance</li>
    <li>LoRA, QLoRA, and DoRA use low-rank updates to fine-tune large models efficiently, with QLoRA enabling 4-bit quantization</li>
    <li>Adapters add modular, task-specific layers, achieving near full fine-tuning performance</li>
    <li>Prefix and prompt tuning optimize input embeddings, ideal for generative and large-scale models</li>
    <li>BitFit fine-tunes bias terms, offering simplicity, while partial freezing updates select layers</li>
    <li>PET, iPET, and LM-BFF enable few-shot learning, with PET reformulating tasks as cloze questions and LM-BFF automating prompts</li>
    <li>These methods reduce resource demands and democratize foundation model adaptation</li>
  </ul>
</div>

<script>
  window.prevSection = "/content/handbooks/foundation-models/section6/";
  window.nextSection = "/content/handbooks/foundation-models/section8/";
</script>
<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
