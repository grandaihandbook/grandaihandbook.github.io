---
layout: default
title: "NLP and Computer Vision"
description: "The evolution of Natural Language Processing and Computer Vision: From traditional approaches to neural networks that paved the way for foundation models."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section explores the pivotal developments in Natural Language Processing (NLP) and Computer Vision (CV) that paved the way for foundation models. We'll trace the evolution from traditional rule-based systems to statistical methods, and finally to the deep learning architectures that enabled the creation of large-scale models with transfer learning capabilities across domains.
</div>

<h2 id="background-in-nlp">Background in NLP</h2>

Natural Language Processing evolved dramatically over decades, transforming from highly specialized rule-based systems to today's versatile foundation models. Understanding this evolution provides crucial context for appreciating current capabilities and limitations.

<h3 id="classical-nlp-pipelines">Overview of Classical NLP Pipelines</h3>

Traditional NLP systems operated as sequential pipelines with discrete processing stages. Each component handled a specific linguistic analysis task:

- **Tokenization**: Breaking text into words, subwords, or characters
- **Part-of-Speech (POS) Tagging**: Labeling words as nouns, verbs, adjectives, etc.
- **Named Entity Recognition**: Identifying proper nouns and categorizing them (people, organizations, locations)
- **Syntactic Parsing**: Determining grammatical structure (constituency or dependency parsing)
- **Coreference Resolution**: Identifying when different expressions refer to the same entity
- **Semantic Analysis**: Extracting meanings and relationships between words and phrases

<h3 id="rule-vs-statistical">Rule-based vs Statistical Methods</h3>

Early NLP development followed two distinct paradigms:

**Rule-based approaches** relied on linguistic experts to manually craft rules for language processing. These systems achieved high precision for specific domains but lacked robustness when facing new variations or domains.

**Statistical methods** emerged in the 1990s, utilizing probability and machine learning to learn patterns from data. Key developments included:

- Hidden Markov Models for POS tagging and sequence labeling
- Statistical parsers based on Probabilistic Context-Free Grammars
- Named entity recognition systems using conditional random fields
- Statistical machine translation leveraging parallel corpora

<blockquote>
  While rule-based systems offered interpretability and precision, statistical methods provided adaptability and generalization capabilities that would become essential for scaling NLP applications.
</blockquote>

<div class="resource-links">
  <h3>Key Resources for Classical NLP</h3>
  <ul>
    <li>Survey paper: <a href="https://nlp.cs.nyu.edu/sekine/papers/li07.pdf">A Survey of Named Entity Recognition and Classification</a> by Nadeau & Sekine - Comprehensive overview of classical NER approaches</li>
    <li>Book: <a href="https://web.stanford.edu/~jurafsky/slp3/">Speech and Language Processing</a> by Jurafsky & Martin - Foundational textbook covering traditional NLP components</li>
    <li>Course: <a href="https://web.stanford.edu/class/cs224n/">Stanford CS224N: Natural Language Processing with Deep Learning</a> - Includes historical context of pre-deep learning NLP</li>
    <li>Blog post: <a href="https://jalammar.github.io/a-visual-guide-to-understanding-sequence-models/">A Visual Guide to Understanding Sequence Models</a> by Jay Alammar</li>
  </ul>
</div>

<h2 id="sequence-to-sequence">Sequence to Sequence Learning</h2>

The sequence-to-sequence (seq2seq) framework represented a revolutionary paradigm shift for NLP, particularly for tasks involving transformation between sequences like translation, summarization, and question answering.

<h3 id="encoder-decoder">Encoder-decoder Architecture</h3>

The encoder-decoder architecture introduced an elegant approach to sequence transformation:

- An **encoder** processes the input sequence to create a fixed-length representation (context vector)
- A **decoder** generates the output sequence conditioned on this representation
- Initially implemented with LSTMs/GRUs, later versions incorporated attention mechanisms

This design provided a unified approach to previously distinct NLP tasks, establishing a foundation for later transformer-based models.

<h3 id="seq2seq-applications">Applications: Translation, Summarization</h3>

Seq2seq models achieved breakthroughs in key NLP applications:

- **Machine Translation**: Neural Machine Translation (NMT) systems outperformed traditional statistical methods
- **Text Summarization**: Encoder-decoder architectures enabled both extractive and abstractive summarization
- **Dialogue Systems**: Enabled more coherent multi-turn conversations
- **Speech Recognition**: Combined with acoustic modeling for improved transcription

<div class="resource-links">
  <h3>Essential Seq2Seq Resources</h3>
  <ul>
    <li>Paper: <a href="https://papers.nips.cc/paper/2014/file/a14ac55a4f27472c5d894ec1c3c743d2-Paper.pdf">Sequence to Sequence Learning with Neural Networks</a> by Sutskever et al. - Seminal work establishing the seq2seq paradigm</li>
    <li>Paper: <a href="https://aclanthology.org/P15-1142.pdf">A Neural Attention Model for Sentence Summarization</a> by Rush et al. - Early application of neural methods to summarization</li>
    <li>Tutorial: <a href="https://www.tensorflow.org/text/tutorials/nmt_with_attention">Neural Machine Translation with Attention</a> from TensorFlow - Practical implementation guide</li>
    <li>Paper: <a href="https://arxiv.org/abs/1503.08895">Deep Speech 2: End-to-End Speech Recognition in English and Mandarin</a> by Baidu Research - Application of deep learning to speech recognition</li>
  </ul>
</div>

<h2 id="sentiment-classification">Thumbs Up? Sentiment Classification Using ML</h2>

Sentiment analysis represents one of the most commercially valuable and widely deployed NLP applications, evolving from basic polarity detection to nuanced emotion recognition.

<h3 id="traditional-ml-models">Traditional ML Models</h3>

Early sentiment classification relied on classical machine learning approaches:

- **Naive Bayes**: Probabilistic classifiers based on applying Bayes' theorem
- **Support Vector Machines (SVMs)**: Finding optimal hyperplanes to separate sentiment classes
- **Logistic Regression**: Predicting probability of sentiment categories

<h3 id="feature-engineering">Feature Engineering</h3>

The performance of traditional models depended heavily on feature engineering:

- **Bag of Words (BoW)**: Simple word presence/absence or frequency-based representations
- **TF-IDF**: Term Frequency-Inverse Document Frequency weighting to prioritize informative words
- **N-grams**: Capturing short phrases rather than individual words
- **Lexicon-based features**: Using sentiment dictionaries to assign polarity scores
- **Syntactic features**: Incorporating grammatical relationships between words

<div class="resource-links">
  <h3>Sentiment Analysis Resources</h3>
  <ul>
    <li>Paper: <a href="https://www.aclweb.org/anthology/P02-1053.pdf">Thumbs up? Sentiment Classification using Machine Learning Techniques</a> by Pang et al. - Foundational work in ML-based sentiment analysis</li>
    <li>Dataset: <a href="https://ai.stanford.edu/~amaas/data/sentiment/">IMDB Movie Reviews</a> - Widely used benchmark for sentiment classification</li>
    <li>Blog post: <a href="https://towardsdatascience.com/machine-learning-for-text-classification-f1f464ff30f7">Machine Learning for Text Classification</a> - Tutorial on traditional ML approaches</li>
    <li>Article: <a href="https://www.kaggle.com/code/stoicstatic/twitter-sentiment-analysis-for-beginners">Twitter Sentiment Analysis for Beginners</a> - Practical application of classification techniques</li>
  </ul>
</div>

<h2 id="reading-comprehension">Teaching Machines to Read and Comprehend</h2>

Machine reading comprehension (MRC) focuses on systems that can understand text passages and answer questions about them, representing a crucial step toward language understanding.

<h3 id="reading-datasets">Reading Comprehension Datasets</h3>

Progress in MRC has been driven by increasingly challenging datasets:

- **SQuAD (Stanford Question Answering Dataset)**: Questions on Wikipedia articles where answers are text spans
- **CNN/Daily Mail**: News articles paired with bullet-point summaries converted to cloze-style questions
- **RACE**: Reading comprehension questions from English exams for Chinese students
- **NarrativeQA**: Questions requiring understanding of entire books or movie scripts

<h3 id="early-models">Early Models</h3>

Initial approaches to reading comprehension utilized recurrent architectures:

- **LSTM/GRU-based models**: Capturing sequential dependencies in text
- **Attention mechanisms**: Helping models focus on relevant parts of input when generating answers
- **Memory networks**: Explicitly storing information for later retrieval when answering questions
- **BiDAF (Bi-Directional Attention Flow)**: Connecting question and context bidirectionally

<div class="resource-links">
  <h3>Reading Comprehension Resources</h3>
  <ul>
    <li>Paper: <a href="https://papers.nips.cc/paper/2015/file/afdec7005cc9f14302cd0474fd0f3c96-Paper.pdf">Teaching Machines to Read and Comprehend</a> by Hermann et al. - Pioneering work on neural reading comprehension</li>
    <li>Paper: <a href="https://arxiv.org/abs/1606.02858">SQuAD: 100,000+ Questions for Machine Comprehension of Text</a> by Rajpurkar et al. - Introducing the influential SQuAD dataset</li>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2018-06-24-attention/">Attention? Attention!</a> by Lilian Weng - Comprehensive guide to attention mechanisms</li>
    <li>Tutorial: <a href="https://web.stanford.edu/class/cs224n/readings/cs224n-2019-notes07-QA.pdf">Question Answering</a> from Stanford CS224N - Technical overview of QA approaches</li>
  </ul>
</div>

<h2 id="neural-attention">A Neural Attention Model for Sequence Learning</h2>

Attention mechanisms revolutionized sequence modeling by allowing models to focus selectively on different parts of the input when generating each element of the output.

<h3 id="bahdanau-attention">Bahdanau Attention</h3>

Bahdanau (or "additive") attention introduced a mechanism to align and weight input elements:

- Computes a score between each encoder hidden state and the current decoder state
- Normalizes scores using softmax to obtain attention weights
- Creates a context vector as weighted sum of encoder states
- Combines context vector with decoder state for prediction

<h3 id="attention-improvements">Improves seq2seq by Focusing on Relevant Parts</h3>

Attention mechanisms addressed key limitations of vanilla seq2seq:

- **Information bottleneck**: Eliminated reliance on fixed-length context vectors
- **Long-range dependencies**: Enabled direct connections between related words regardless of distance
- **Interpretability**: Provided visualization of what the model focuses on when generating each word
- **Alignment learning**: Automatically discovered word/phrase correspondences between languages

<blockquote>
  Attention mechanisms were the critical innovation that eventually led to the Transformer architecture, which forms the backbone of nearly all foundation models today.
</blockquote>

<div class="resource-links">
  <h3>Attention Mechanism Resources</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1409.0473">Neural Machine Translation by Jointly Learning to Align and Translate</a> by Bahdanau et al. - Introduced attention mechanisms for NMT</li>
    <li>Blog post: <a href="https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/">Visualizing Neural Machine Translation</a> by Jay Alammar - Excellent visual explanation of attention</li>
    <li>Tutorial: <a href="https://distill.pub/2016/augmented-rnns/">Attention and Augmented Recurrent Neural Networks</a> from Distill - Interactive visualizations of attention</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=W2rWgXJBZhU">Attention Mechanisms in Neural Networks</a> from DeepLearning.AI - Conceptual explanation by Andrew Ng</li>
  </ul>
</div>

<h2 id="background-in-cv">Background in Computer Vision</h2>

Computer vision has undergone a parallel evolution to NLP, moving from hand-crafted features to learned representations through deep neural networks.

<h3 id="cv-tasks">Image Classification, Detection, Segmentation</h3>

Computer vision encompasses several core tasks of increasing complexity:

- **Image Classification**: Assigning labels to entire images
- **Object Detection**: Localizing and classifying multiple objects in images
- **Semantic Segmentation**: Classifying each pixel into a category
- **Instance Segmentation**: Distinguishing individual objects within categories
- **Pose Estimation**: Identifying the position and orientation of objects or people

<h3 id="traditional-cv">Traditional Pipelines: SIFT, HOG, CNNs</h3>

Early computer vision relied on hand-engineered feature extraction:

- **SIFT (Scale-Invariant Feature Transform)**: Detecting and describing local features invariant to scaling and rotation
- **HOG (Histogram of Oriented Gradients)**: Counting occurrences of gradient orientations in localized portions of images
- **SURF (Speeded-Up Robust Features)**: Faster approximation of SIFT

These were followed by machine learning approaches:

- **Bag of Visual Words**: Adapting text classification techniques to images
- **Early CNNs**: LeNet and other convolutional architectures showing promise for digit recognition

<div class="resource-links">
  <h3>Classical Computer Vision Resources</h3>
  <ul>
    <li>Paper: <a href="https://www.cs.ubc.ca/~lowe/papers/ijcv04.pdf">Distinctive Image Features from Scale-Invariant Keypoints</a> by David Lowe - Introducing SIFT</li>
    <li>Paper: <a href="https://lear.inrialpes.fr/people/triggs/pubs/Dalal-cvpr05.pdf">Histograms of Oriented Gradients for Human Detection</a> by Dalal & Triggs - HOG feature descriptor</li>
    <li>Book: <a href="https://szeliski.org/Book/">Computer Vision: Algorithms and Applications</a> by Richard Szeliski - Comprehensive reference</li>
    <li>Course: <a href="http://cs231n.stanford.edu/">Stanford CS231n: Convolutional Neural Networks for Visual Recognition</a> - Historical context and modern methods</li>
  </ul>
</div>

<h2 id="imagenet-boom">ImageNet and the Deep Learning Boom</h2>

The ImageNet competition catalyzed a revolution in computer vision, demonstrating the power of deep learning at scale.

<h3 id="key-architectures">AlexNet, VGG, ResNet (Brief Overview)</h3>

Several breakthrough architectures emerged during the ImageNet era:

- **AlexNet** (2012): First CNN to win ImageNet, featuring ReLU activations and dropout
- **VGG** (2014): Demonstrated the importance of network depth with small, uniform filters
- **GoogLeNet/Inception** (2014): Introduced inception modules with multiple filter sizes
- **ResNet** (2015): Solved the vanishing gradient problem with residual connections, enabling training of much deeper networks
- **DenseNet** (2017): Created dense connections between layers for improved information flow

<h3 id="large-scale-datasets">Importance of Large-scale Vision Datasets</h3>

Large datasets proved critical for vision progress:

- **ImageNet**: 14 million images across 20,000+ categories
- **COCO (Common Objects in Context)**: Rich annotations including object detection, segmentation, and captioning
- **Open Images**: Multi-label classification with 9 million images across 6,000+ categories
- **JFT-300M**: Google's internal dataset with 300M+ images used for pretraining

<blockquote>
  The success of supervised learning on large-scale vision datasets established a pattern that would later be applied to foundation models: scale matters tremendously for both data and model size.
</blockquote>

<div class="resource-links">
  <h3>ImageNet Revolution Resources</h3>
  <ul>
    <li>Paper: <a href="https://papers.nips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf">ImageNet Classification with Deep Convolutional Neural Networks</a> by Krizhevsky et al. - The AlexNet paper that started the revolution</li>
    <li>Paper: <a href="https://arxiv.org/abs/1512.03385">Deep Residual Learning for Image Recognition</a> by He et al. - Introducing ResNet architecture</li>
    <li>Paper: <a href="https://arxiv.org/abs/1409.4842">Microsoft COCO: Common Objects in Context</a> by Lin et al. - Detailed explanation of the COCO dataset</li>
    <li>Blog post: <a href="https://medium.com/@sidereal/cnns-architectures-lenet-alexnet-vgg-googlenet-resnet-and-more-666091488df5">CNN Architectures: LeNet, AlexNet, VGG, GoogLeNet, ResNet and more</a> - Overview of CNN evolution</li>
  </ul>
</div>

<h2 id="cnn-architecture">CNN Architecture Intuition</h2>

Understanding the intuition behind convolutional neural networks helps explain their effectiveness for visual tasks.

<h3 id="cnn-components">Convolution, Pooling, Filters</h3>

CNNs consist of several key components working together:

- **Convolutional layers**: Apply learned filters across the input to detect features
- **Activation functions**: Introduce non-linearity (typically ReLU)
- **Pooling layers**: Reduce spatial dimensions while preserving important features
- **Feature hierarchies**: Early layers detect edges and textures; deeper layers detect complex shapes and objects
- **Fully connected layers**: Convert spatial features to classification outputs

<h3 id="cnn-advantages">Why CNNs Work Well for Images</h3>

CNNs are uniquely suited to image processing due to:

- **Parameter sharing**: Using the same filters across the entire image
- **Local connectivity**: Each neuron connects only to a small region of the input
- **Translation invariance**: Detecting features regardless of position
- **Hierarchical feature learning**: Building complex representations from simple ones
- **Scale and distortion robustness**: Handling variations through pooling and depth

<div class="resource-links">
  <h3>CNN Architecture Resources</h3>
  <ul>
    <li>Blog post: <a href="https://poloclub.github.io/cnn-explainer/">CNN Explainer</a> - Interactive visualization of CNN operations</li>
    <li>Tutorial: <a href="https://cs231n.github.io/convolutional-networks/">CS231n Convolutional Neural Networks</a> - Detailed explanation of CNN principles</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=FmpDIaiMIeA">How Convolutional Neural Networks Work</a> by Brandon Rohrer - Visual explanation</li>
    <li>Paper: <a href="https://arxiv.org/abs/1311.2901">Visualizing and Understanding Convolutional Networks</a> by Zeiler & Fergus - Techniques for interpreting CNN features</li>
  </ul>
</div>

<h2 id="early-cv-applications">Early CV Applications</h2>

The success of CNNs quickly led to their application in numerous computer vision tasks.

<h3 id="object-detection">Object Detection (YOLO, R-CNN)</h3>

Object detection systems evolved rapidly:

- **R-CNN family**: Region-based CNN approaches (R-CNN, Fast R-CNN, Faster R-CNN)
- **YOLO (You Only Look Once)**: First real-time detection system treating detection as regression
- **SSD (Single Shot Detector)**: Multi-scale detection with predefined anchor boxes
- **RetinaNet**: Addressing class imbalance with focal loss
- **Mask R-CNN**: Extending Faster R-CNN for instance segmentation

<h3 id="image-captioning">Image Captioning (Tie-in to NLP)</h3>

Image captioning represented an early bridge between CV and NLP:

- **CNN-LSTM architectures**: Using CNNs to encode images and LSTMs to generate captions
- **Attention mechanisms**: Focusing on relevant image regions when generating each word
- **Semantic alignment**: Learning correspondences between visual features and textual descriptions
- **Multimodal embeddings**: Creating joint representations of images and text

<blockquote>
  Early multimodal models like image captioning systems were precursors to foundation models, demonstrating how representations could transfer between domains.
</blockquote>

<div class="resource-links">
  <h3>CV Applications Resources</h3>
  <ul>
    <li>Paper: <a href="https://arxiv.org/abs/1311.2524">Rich Feature Hierarchies for Accurate Object Detection and Semantic Segmentation</a> by Girshick et al. - R-CNN approach</li>
    <li>Paper: <a href="https://arxiv.org/abs/1506.02640">You Only Look Once: Unified, Real-Time Object Detection</a> by Redmon et al. - Introducing YOLO</li>
    <li>Paper: <a href="https://arxiv.org/abs/1411.4555">Show and Tell: A Neural Image Caption Generator</a> by Vinyals et al. - Early image captioning system</li>
    <li>Paper: <a href="https://arxiv.org/abs/1411.4389">Deep Visual-Semantic Alignments for Generating Image Descriptions</a> by Karpathy & Fei-Fei - Aligning image regions with text</li>
    <li>Paper: <a href="https://arxiv.org/abs/1505.04597">Fully Convolutional Networks for Semantic Segmentation</a> by Long et al. - Pioneering semantic segmentation approach</li>
    <li>Paper: <a href="https://www.cv-foundation.org/openaccess/content_cvpr_2014/papers/Taigman_DeepFace_Closing_the_2014_CVPR_paper.pdf">DeepFace: Closing the Gap to Human-Level Performance in Face Verification</a> by Taigman et al. - Early deep learning for face recognition</li>
    <li>Paper: <a href="https://arxiv.org/abs/1312.4659">DeepPose: Human Pose Estimation via Deep Neural Networks</a> by Toshev & Szegedy - CNN-based approach to pose estimation</li>
    <li>Paper: <a href="https://arxiv.org/abs/1511.06434">Unsupervised Representation Learning with Deep Convolutional Generative Adversarial Networks</a> by Radford et al. - Introducing DCGANs</li>
  </ul>
</div>

<h2 id="class-discussion">Class Discussion / Case Study</h2>

<h3 id="comparing-approaches">Compare Classical ML vs Deep Learning NLP</h3>

Discussion points for comparing traditional and deep learning approaches:

- **Feature engineering vs representation learning**: Shift from manual feature design to learned representations
- **Task-specific vs general models**: Evolution from specialized systems to multipurpose architectures
- **Data requirements**: Increase in data needed for modern approaches
- **Interpretability tradeoffs**: Classical models often more transparent but less powerful
- **Domain adaptation capabilities**: Deep learning's advantages for transfer learning

<h3 id="toward-foundation">Discuss Evolution Toward Foundation Models</h3>

Key trends in the development of foundation models:

- **Architecture convergence**: Transformer becoming dominant across domains
- **Scale as a strategy**: Increasing model size, data, and compute
- **Self-supervised learning**: Moving beyond labeled data
- **Cross-modal capabilities**: Integrating text, images, audio in unified frameworks
- **Few-shot learning**: Adapting to new tasks with minimal examples
- **Emergent abilities**: Capabilities not present in smaller models appearing at scale

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>NLP and CV evolved from rule-based systems to statistical methods to deep learning</li>
    <li>Sequence-to-sequence learning and attention mechanisms were critical innovations for NLP</li>
    <li>Large datasets like ImageNet and COCO catalyzed progress in computer vision</li>
    <li>CNNs revolutionized computer vision through hierarchical feature learning</li>
    <li>Early multimodal systems like image captioning bridged the gap between vision and language</li>
    <li>The convergence of architectures (especially Transformers) across modalities set the stage for foundation models</li>
  </ul>
</div>

<script>
  // Navigation variables
  window.prevSection = "/content/handbooks/foundation-models/section1";
  window.nextSection = "/content/handbooks/foundation-models/section3/";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
