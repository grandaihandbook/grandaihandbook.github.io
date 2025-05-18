<div class="key-concept">
  Here, more than any other section of the handbook, I'll defer mostly wholesale to existing sequences of instructional resources. This material has been covered quite well by many people in a variety of formats, and there's no need to reinvent the wheel.
</div>

<h2 id="routes-to-transformers">
  <span class="heading-text">Routes to Understanding Transformers</span>
</h2>

<p>There are a couple different routes you can take from the basics of neural networks towards Transformers (the dominant architecture for most frontier LLMs in 2024). Once we cover the basics, I'll mostly focus on "deep sequence learning" methods like RNNs. Many deep learning books and courses will more heavily emphasize convolutional neural nets (CNNs), which are quite important for image-related applications and historically were one of the first areas where "scaling" was particularly successful, but technically they're fairly disconnected from Transformers. They'll make an appearance when we discuss <a href="#structured-state-space-models">state-space models</a> and are definitely important for vision applications, but you'll mostly be okay skipping them for now. However, if you're in a rush and just want to get to the new stuff, you could consider diving right into decoder-only Transformers once you're comfortable with feed-forward neural nets --- this the approach taken by the excellent <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY">"Let's build GPT"</a> video from Andrej Karpathy, casting them as an extension of neural n-gram models for next-token prediction. That's probably your single best bet for speedrunning Transformers in under 2 hours. But if you've got a little more time, understanding the history of RNNs, LSTMs, and encoder-decoder Transformers is certainly worthwhile.</p>

<p>This section is mostly composed of signposts to content from the following sources (along with some blog posts):</p>

<ul>
  <li>The <a href="http://d2l.ai">"Dive Into Deep Learning" (d2l.ai)</a> interactive textbook (nice graphics, in-line code, some theory)</li>
  <li>3Blue1Brown's <a href="https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi">"Neural networks"</a> video series (lots of animations)</li>
  <li>Andrej Karpathy's <a href="https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ">"Zero to Hero"</a> video series (live coding + great intuitions)</li>
  <li><a href="https://www.youtube.com/@statquest">"StatQuest with Josh Starmer"</a> videos</li>
  <li>The Goodfellow et al. <a href="https://www.deeplearningbook.org/">"Deep Learning"</a> textbook (theory-focused, no Transformers)</li>
</ul>

<p>If your focus is on applications, you might find the interactive <a href="https://github.com/rasbt/machine-learning-book/tree/main">"Machine Learning with PyTorch and Scikit-Learn"</a> book useful, but I'm not as familiar with it personally.</p>

<p>For these topics, you can also probably get away with asking conceptual questions to your preferred LLM chat interface. This likely won't be true for later sections --- some of those topics were introduced after the knowledge cutoff dates for many current LLMs, and there's also just a lot less text on the internet about them, so you end up with more "hallucinations".</p>

<h2 id="neural-nets">
  <span class="heading-text">Statistical Prediction with Neural Networks</span>
</h2>

<p>I'm not actually sure where I first learned about neural nets --- they're pervasive enough in technical discussions and general online media that I'd assume you've picked up a good bit through osmosis even if you haven't studied them formally. Nonetheless, there are many worthwhile explainers out there, and I'll highlight some of my favorites.</p>

<ul>
  <li>The first 4 videos in 3Blue1Brown's <a href="https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi">"Neural networks"</a> series will take you from basic definitions up through the mechanics of backpropagation.</li>
  <li>This <a href="https://karpathy.github.io/neuralnets/">blog post</a> from Andrej Karpathy (back when he was a PhD student) is a solid crash-course, well-accompanied by his <a href="https://www.youtube.com/watch?v=VMj-3S1tku0">video</a> on building backprop from scratch.</li>
  <li>This <a href="https://colah.github.io/posts/2015-08-Backprop/">blog post</a> from Chris Olah has a nice and concise walk-through of the math behind backprop for neural nets.</li>
  <li>Chapters 3-5 of the <a href="http://d2l.ai">d2l.ai</a> book are great as a "classic textbook" presentation of deep nets for regression + classification, with code examples and visualizations throughout.</li>
</ul>

<h2 id="recurrent-neural-networks">
  <span class="heading-text">Recurrent Neural Networks</span>
</h2>

<p>RNNs are where we start adding "state" to our models (as we process increasingly long sequences), and there are some high-level similarities to hidden Markov models. This blog post from <a href="https://karpathy.github.io/2015/05/21/rnn-effectiveness/">Andrej Karpathy</a> is a good starting point. <a href="https://d2l.ai/chapter_recurrent-neural-networks/index.html">Chapter 9</a> of the <a href="http://d2l.ai">d2l.ai</a> book is great for main ideas and code; check out <a href="https://www.deeplearningbook.org/contents/rnn.html">Chapter 10</a> of "Deep Learning" if you want more theory.</p>

<p>For videos, <a href="https://www.youtube.com/watch?v=AsNTP8Kwu80">here</a>'s a nice one from StatQuest.</p>

<h2 id="lstms-grus">
  <span class="heading-text">LSTMs and GRUs</span>
</h2>

<p>Long Short-Term Memory (LSTM) networks and Gated Recurrent Unit (GRU) networks build upon RNNs with more specialized mechanisms for state representation (with semantic inspirations like "memory", "forgetting", and "resetting"), which have been useful for improving performance in more challenging data domains (like language).</p>

<p><a href="https://d2l.ai/chapter_recurrent-modern/index.html">Chapter 10</a> of <a href="http://d2l.ai">d2l.ai</a> covers both of these quite well (up through 10.3). The <a href="https://colah.github.io/posts/2015-08-Understanding-LSTMs/">"Understanding LSTM Networks"</a> blog post from Chris Olah is also excellent. This <a href="https://www.youtube.com/watch?v=8HyCNIVRbSU">video</a> from "The AI Hacker" gives solid high-level coverage of both; StatQuest also has a video on <a href="https://www.youtube.com/watch?v=YCzL96nL7j0">LSTMs</a>, but not GRUs. GRUs are essentially a simplified alternative to LSTMs with the same basic objective, and it's up to you if you want to cover them specifically.</p>

<blockquote>
  Neither LSTMs or GRUs are really prerequisites for Transformers, which are "stateless", but they're useful for understanding the general challenges of neural sequence modeling and contextualizing the Transformer design choices.
</blockquote>

<p>They'll also help motivate some of the approaches towards addressing the "quadratic scaling problem" in <a href="#s7">Section VII</a>.</p>

<h2 id="embeddings">
  <span class="heading-text">Embeddings and Topic Modeling</span>
</h2>

<p>Before digesting Transformers, it's worth first establishing a couple concepts which will be useful for reasoning about what's going on under the hood inside large language models. While deep learning has led to a large wave of progress in NLP, it's definitely a bit harder to reason about than some of the "old school" methods which deal with word frequencies and n-gram overlaps; however, even though these methods don't always scale to more complex tasks, they're useful mental models for the kinds of "features" that neural nets might be learning. For example, it's certainly worth knowing about Latent Dirichlet Allocation for topic modeling (<a href="https://towardsdatascience.com/latent-dirichlet-allocation-lda-9d1cd064ffa2">blog post</a>) and <a href="https://jaketae.github.io/study/tf-idf/">tf-idf</a> to get a feel for what numerical similarity or relevance scores can represent for language.</p>

<p>Thinking about words (or tokens) as high-dimensional "meaning" vectors is quite useful, and the Word2Vec embedding method illustrates this quite well --- you may have seen the classic "King - Man + Woman = Queen" example referenced before. <a href="https://jalammar.github.io/illustrated-word2vec/">"The Illustrated Word2Vec"</a> from Jay Alammar is great for building up this intuition, and these <a href="https://web.stanford.edu/class/cs224n/readings/cs224n_winter2023_lecture1_notes_draft.pdf">course notes</a> from Stanford's CS224n are excellent as well. Here's also a nice <a href="https://www.youtube.com/watch?v=f7o8aDNxf7k">video</a> on Word2Vec from ritvikmath, and another fun one <a href="https://www.youtube.com/watch?v=gQddtTdmG_8">video</a> on neural word embeddings from Computerphile.</p>

<div class="resource-links">
  <h3>Key Resources for Embeddings</h3>
  <ul>
    <li>Blog post: <a href="https://jalammar.github.io/illustrated-word2vec/">The Illustrated Word2Vec</a> - Visual guide to word embeddings</li>
    <li>Video: <a href="https://www.youtube.com/watch?v=gQddtTdmG_8">Neural Word Embeddings</a> from Computerphile</li>
    <li>Paper: <a href="https://arxiv.org/pdf/1301.3781.pdf">Efficient Estimation of Word Representations in Vector Space</a> - Original Word2Vec paper</li>
  </ul>
</div>

<p>Beyond being a useful intuition and an element of larger language models, standalone neural embedding models are also widely used today. Often these are encoder-only Transformers, trained via "contrastive loss" to construct high-quality vector representations of text inputs which are useful for retrieval tasks (like <a href="#retrieval-augmented-generation">RAG</a>). See this <a href="https://docs.cohere.com/docs/text-embeddings">post+video</a> from Cohere for a brief overview, and this <a href="https://lilianweng.github.io/posts/2021-05-31-contrastive/">blog post</a> from Lilian Weng for more of a deep dive.</p>

<h2 id="encoder-decoder">
  <span class="heading-text">Encoders and Decoders</span>
</h2>

<p>Up until now we've been pretty agnostic as to what the inputs to our networks are --- numbers, characters, words --- as long as it can be converted to a vector representation somehow. Recurrent models can be configured to both input and output either a single object (e.g. a vector) or an entire sequence. This observation enables the sequence-to-sequence encoder-decoder architecture, which rose to prominence for machine translation, and was the original design for the Transformer in the famed <a href="https://arxiv.org/abs/1706.03762">"Attention is All You Need"</a> paper. Here, the goal is to take an input sequence (e.g. an English sentence), "encode" it into a vector object which captures its "meaning", and then "decode" that object into another sequence (e.g. a French sentence). <a href="https://d2l.ai/chapter_recurrent-modern/index.html">Chapter 10</a> in <a href="http://d2l.ai">d2l.ai</a> (10.6-10.8) covers this setup as well, which sets the stage for the encoder-decoder formulation of Transformers in <a href="https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html">Chapter 11</a> (up through 11.7). For historical purposes you should certainly at least skim the original paper, though you might get a bit more out of the presentation of its contents via <a href="https://nlp.seas.harvard.edu/annotated-transformer/">"The Annotated Transformer"</a>, or perhaps <a href="https://jalammar.github.io/illustrated-transformer/">"The Illustrated Transformer"</a> if you want more visualizations. These <a href="https://web.stanford.edu/class/cs224n/readings/cs224n-self-attention-transformers-2023_draft.pdf">notes</a> from Stanford's CS224n are great as well.</p>

<p>There are videos on <a href="https://www.youtube.com/watch?v=L8HKweZIOmg">encoder-decoder</a> architectures and <a href="https://www.youtube.com/watch?v=PSs6nxngL6k">Attention</a> from StatQuest, a full walkthrough of the original Transformer by <a href="https://www.youtube.com/watch?v=4Bdc55j80l8">The AI Hacker</a>.</p>

<p>However, note that these encoder-decoder Transformers differ from most modern LLMs, which are typically "decoder-only" -- if you're pressed for time, you may be okay jumping right to these models and skipping the history lesson.</p>

<h2 id="decoder-transformers">
  <span class="heading-text">Decoder-Only Transformers</span>
</h2>

<p>There's a lot of moving pieces inside of Transformers --- multi-head attention, skip connections, positional encoding, etc. --- and it can be tough to appreciate it all the first time you see it. Building up intuitions for why some of these choices are made helps a lot, and here I'll recommend to pretty much anyone that you watch a video or two about them (even if you're normally a textbook learner), largely because there are a few videos which are really excellent:</p>

<ul>
  <li>3Blue1Brown's <a href="https://www.youtube.com/watch?v=wjZofJX0v4M">"But what is a GPT?"</a> and <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY">"Attention in transformers, explained visually"</a> -- beautiful animations + discussions, supposedly a 3rd video is on the way</li>
  <li>Andrej Karpathy's <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY">"Let's build GPT"</a> video -- live coding and excellent explanations, really helped some things "click" for me</li>
</ul>

<p>Here's a <a href="https://cameronrwolfe.substack.com/p/decoder-only-transformers-the-workhorse">blog post</a> from Cameron Wolfe walking through the decoder-only architecture in a similar style to the Illustrated/Annotated Transformer posts. There's also a nice section in d2l.ai (<a href="https://d2l.ai/chapter_attention-mechanisms-and-transformers/large-pretraining-transformers.html">11.9</a>) covering the relationships between encoder-only, encoder-decoder, and decoder-only Transformers.</p>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Neural networks form the foundation of modern deep learning methods</li>
    <li>Recurrent neural networks (RNNs) and their variants introduced state for sequence modeling</li>
    <li>Word embeddings provide a way to represent semantic meaning in a vector space</li>
    <li>Encoder-decoder architectures were a critical step toward modern Transformers</li>
    <li>Decoder-only Transformers are the architecture behind most modern LLMs</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/section1/";
    window.nextSection = "/content/handbooks/generative-ai/section3/";
</script>
