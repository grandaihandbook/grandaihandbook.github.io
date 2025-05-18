---
layout: default
title: Multimodal LLMs
---

Chapter 39: Foundations of Multimodal Learning
Representing Modalities: Text (Embeddings), Images (CNN features, ViT patches/embeddings), Audio (Spectrograms, Wav2Vec 2.0/HuBERT embeddings), Video (Frame features + Temporal modeling), Tabular data, Code.

Challenges Revisited: Modality gap (Different statistical properties), Alignment (Semantic correspondence), Fusion complexity, Data availability (Paired multimodal data).

Fusion Techniques: Early Fusion (Concatenation at input), Late Fusion (Combining outputs), Intermediate Fusion (Cross-modal attention, Gated mechanisms).

Chapter 40: Architectures for Vision-Language Models (VLMs)
Joint Embedding Models: CLIP/ALIGN details (Contrastive loss, Image/Text encoders, Zero-shot capabilities).

Encoder-Decoder VLMs: Image Captioning (Show, Attend, and Tell; BUTD), Visual Dialogue.

LLM-Centric VLMs (Large Language and Vision Models):

Input Integration: Projecting visual features (From ViT/CNN) into LLM embedding space (Linear projection, Q-Former - BLIP-2, Perceiver Resampler - Flamingo).

Architectural Choices: Using frozen LLMs vs. End-to-end training, Interleaved image-text data format.

Key Models: Flamingo, BLIP/BLIP-2, LLaVA (Visual instruction tuning), GPT-4V, Gemini, IDEFICS.

Training Data & Objectives: Image-Text pairs (LAION, COCO, CC3M/12M), Interleaved data (MMC4), Visual instruction tuning datasets. Contrastive, Captioning, VQA objectives.

Chapter 41: Extending to Other Modalities
Audio-Language Models: ASR (Whisper architecture), TTS (Spear-TTS, VALL-E - using LLM principles), Audio Captioning, Audio QA, Speech Translation. Unified speech-language models.

Video-Language Models: Spatio-temporal feature extraction (VideoMAE, SlowFast), Temporal modeling (Transformers over frames), Video Captioning, Video QA, Action Recognition/Localization.

Integrating Other Modalities: Tabular data reasoning with LLMs, Code understanding/generation within multimodal context, Sensor data fusion.

Chapter 42: Applications and Evaluation of Multimodal Models
VQA Benchmarks (VQA v2, GQA, OK-VQA, TextVQA). Evaluation metrics.

Image/Video Captioning Evaluation (BLEU, ROUGE, METEOR, CIDEr, SPICE). Human evaluation.

Text-to-Image Generation Evaluation (FID, IS, CLIP Score, Human preference ratings). Compositionality evaluation (DrawBench).

Multimodal Dialogue Systems Evaluation (Turn-level quality, Task success).

Document Intelligence (DocVQA).

Challenges: Evaluating compositional understanding, Grounding, Robustness, Bias in multimodal data/models.
