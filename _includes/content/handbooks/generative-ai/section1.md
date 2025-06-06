<div class="key-concept">
  Our focus in this section will be on quickly overviewing classical topics in statistical prediction and reinforcement learning, which we'll make direct reference to in later sections, as well as highlighting some topics that I think are very useful as conceptual models for understanding LLMs, yet which are often omitted from deep learning crash courses -- notably time-series analysis, regret minimization, and Markov models.
</div>

<h2 id="statistical-prediction">
  <span class="heading-text">Statistical Prediction and Supervised Learning</span>
  <!-- <span class="heading-icons">
    <a href="https://youtube.com/yourchannellink" class="icon-link youtube-icon" target="_blank" title="Watch on YouTube">
      <i class="fa fa-youtube-play"></i>
    </a>
    <a href="https://github.com/yourusername/repo" class="icon-link github-icon" target="_blank" title="View on GitHub">
      <i class="fa fa-github"></i>
    </a>
  </span> -->
</h2>

<p>Before getting to deep learning and large language models, it'll be useful to have a solid grasp on some foundational concepts in probability theory and machine learning. In particular, it helps to understand:</p>

<ul>
  <li>Random variables, expectations, and variance</li>
  <li>Supervised vs. unsupervised learning</li>
  <li>Regression vs. classification</li>
  <li>Linear models and regularization</li>
  <li>Empirical risk minimization</li>
  <li>Hypothesis classes and bias-variance tradeoffs</li>
</ul>

<p>For general probability theory, having a solid understanding of how the Central Limit Theorem works is perhaps a reasonable litmus test for how much you'll need to know about random variables before tackling some of the later topics we'll cover. This beautifully-animated 3Blue1Brown <a href="https://www.youtube.com/watch?v=zeJD6dqJ5lo">video</a> is a great starting point, and there are a couple other good probability videos to check out on the channel if you'd like. This set of <a href="https://blogs.ubc.ca/math105/discrete-random-variables/">course notes</a> from UBC covers the basics of random variables.</p>

<p>If you're into blackboard lectures, I'm a big fan of many of Ryan O'Donnell's CMU courses on YouTube, and this <a href="https://www.youtube.com/watch?v=r9S2fMQiP2E&list=PLm3J0oaFux3ZYpFLwwrlv_EHH9wtH6pnX&index=13">video</a> on random variables and the Central Limit Theorem (from the excellent "CS Theory Toolkit" course) is a nice overview.</p>

<p>For understanding linear models and other key machine learning principles, the first two chapters of Hastie's <a href="https://hastie.su.domains/ElemStatLearn/printings/ESLII_print12_toc.pdf">Elements of Statistical Learning</a> ("Introduction" and "Overview of Supervised Learning") should be enough to get started.</p>

<p>Once you're familiar with the basics, this <a href="https://ryxcommar.com/2019/09/06/some-things-you-maybe-didnt-know-about-linear-regression/">blog post</a> by anonymous Twitter/X user <a href="https://twitter.com/ryxcommar">@ryxcommar</a> does a nice job discussing some common pitfalls and misconceptions related to linear regression. <a href="https://www.youtube.com/@statquest/playlists">StatQuest</a> on YouTube has a number of videos that might also be helpful.</p>

<blockquote>
  Many phenomena in the real world are modeled quite well by linear equations — the average temperature over past 7 days is likely a solid guess for the temperature tomorrow, barring any other information about weather pattern forecasts.
</blockquote>

<p>Introductions to machine learning tend to emphasize linear models, and for good reason. Linear systems and models are a lot easier to study, interpret, and optimize than their nonlinear counterparts. For more complex and high-dimensional problems with potential nonlinear dependencies between features, it's often useful to ask:</p>

<ul>
  <li>What's a linear model for the problem?</li>
  <li>Why does the linear model fail?</li>
  <li>What's the best way to add nonlinearity, given the semantic structure of the problem?</li>
</ul>

<p>In particular, this framing will be helpful for motivating some of the model architectures we'll look at later (e.g. LSTMs and Transformers).</p>

<h2 id="time-series">
  <span class="heading-text">Time-Series Analysis</span>
</h2>

<p>How much do you need to know about time-series analysis in order to understand the mechanics of more complex generative AI methods?</p>

<p><strong>Short answer:</strong> just a tiny bit for LLMs, a good bit more for diffusion.</p>

<p>For modern Transformer-based LLMs, it'll be useful to know:</p>

<ul>
  <li>The basic setup for sequential prediction problems</li>
  <li>The notion of an autoregressive model</li>
</ul>

<p>There's not really a coherent way to "visualize" the full mechanics of a multi-billion-parameter model in your head, but much simpler autoregressive models (like ARIMA) can serve as a nice mental model to extrapolate from.</p>

<p>When we get to neural <a href="#structured-state-space-models">state-space models</a>, a working knowledge of linear time-invariant systems and control theory (which have many connections to classical time-series analysis) will be helpful for intuition, but <a href="#diffusion-models">diffusion</a> is really where it's most essential to dive deeper into into stochastic differential equations to get the full picture. But we can table that for now.</p>

<div class="resource-links">
  <h3>Key Resources</h3>
  <ul>
    <li>Blog post: <a href="https://towardsdatascience.com/forecasting-with-stochastic-models-abf2e85c9679">Forecasting with Stochastic Models</a> from Towards Data Science</li>
    <li>Course notes: <a href="https://sites.ualberta.ca/~kashlak/data/stat479.pdf">Time Series Analysis</a> from UAlberta</li>
  </ul>
</div>

<h2 id="online-learning">
  <span class="heading-text">Online Learning and Regret Minimization</span>
</h2>

<p>It's debatable how important it is to have a strong grasp on regret minimization, but I think a basic familiarity is useful. The basic setting here is similar to supervised learning, but:</p>

<ul>
  <li>Points arrive one-at-a-time in an arbitrary order</li>
  <li>We want low average error across this sequence</li>
</ul>

<p>If you squint and tilt your head, most of the algorithms designed for these problems look basically like gradient descent, often with delicate choices of regularizers and learning rates require for the math to work out. But there's a lot of satisfying math here. I have a soft spot for it, as it relates to a lot of the research I worked on during my PhD. I think it's conceptually fascinating. Like the previous section on time-series analysis, online learning is technically "sequential prediction" but you don't really need it to understand LLMs.</p>

<p>The most direct connection to it that we'll consider is when we look at <a href="#generative-adversarial-nets">GANs</a> in Section VIII. There are many deep connections between regret minimization and equilibria in games, and GANs work basically by having two neural networks play a game against each other. Practical gradient-based optimization algorithms like Adam have their roots in this field as well, following the introduction of the AdaGrad algorithm, which was first analyzed for online and adversarial settings.</p>

<blockquote>
  If you're doing gradient-based optimization with a sensible learning rate schedule, then the order in which you process data points doesn't actually matter much. Gradient descent can handle it.
</blockquote>

<p>I'd encourage you to at least skim Chapter 1 of <a href="https://arxiv.org/pdf/1909.05207.pdf">"Introduction to Online Convex Optimization"</a> by Elad Hazan to get a feel for the goal of regret minimization. I've spent a lot of time with this book and I think it's excellent.</p>

<h2 id="reinforcement-learning">
  <span class="heading-text">Reinforcement Learning</span>
</h2>

<p>Reinforcement Learning (RL) will come up most directly when we look at finetuning methods in <a href="#finetuning-methods-for-llms">Section IV</a>, and may also be a useful mental model for thinking about "agent" <a href="#tool-use-and-agents">applications</a> and some of the "control theory" notions which come up for <a href="#structured-state-space-models">state-space models</a>.</p>

<p>Like a lot of the topics discussed in this document, you can go quite deep down many different RL-related threads if you'd like; as it relates to language modeling and alignment, it'll be most important to be comfortable with the basic problem setup for Markov decision processes, notion of policies and trajectories, and high-level understanding of standard iterative + gradient-based optimization methods for RL.</p>

<div class="resource-links">
  <h3>Essential Resources</h3>
  <ul>
    <li>Blog post: <a href="https://lilianweng.github.io/posts/2018-02-19-rl-overview/">Lilian Weng's RL Overview</a> - A concise yet comprehensive starting point</li>
    <li>Textbook: <a href="https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf">Reinforcement Learning: An Introduction</a> by Sutton and Barto</li>
    <li>Video Series: <a href="https://www.youtube.com/playlist?list=PLzvYlJMoZ02Dxtwe-MmH4nOB5jYlMGBjr">Reinforcement Learning By the Book</a> - 3Blue1Brown-style animations</li>
  </ul>
</div>

<p>If you want to jump ahead to some more neural-flavored content, Andrej Karpathy has a nice <a href="https://karpathy.github.io/2016/05/31/rl/">blog post</a> on deep RL; this <a href="https://arxiv.org/pdf/1810.06339">manuscript</a> by Yuxi Li and this <a href="https://arxiv.org/pdf/2201.02135">textbook</a> by Aske Plaat may be useful for further deep dives.</p>

<h2 id="markov-models">
  <span class="heading-text">Markov Models</span>
</h2>

<p>Running a fixed policy in a Markov decision process yields a Markov chain; processes resembling this kind of setup are fairly abundant, and many branches of machine learning involve modeling systems under Markovian assumptions (i.e. lack of path-dependence, given the current state).</p>

<p>This <a href="https://thagomizer.com/blog/2017/11/07/markov-models.html">blog post</a> from Aja Hammerly makes a nice case for thinking about language models via Markov processes, and this <a href="https://ericmjl.github.io/essays-on-data-science/machine-learning/markov-models/">post</a> from "Essays on Data Science" has examples and code building up towards auto-regressive Hidden Markov Models, which will start to vaguely resemble some of the neural network architectures we'll look at later on.</p>

<p>This <a href="https://www.tweag.io/blog/2019-10-25-mcmc-intro1/">blog post</a> from Simeon Carstens gives a nice coverage of Markov chain Monte Carlo methods, which are powerful and widely-used techniques for sampling from implicitly-represented distributions, and are helpful for thinking about probabilistic topics ranging from stochastic gradient descent to diffusion.</p>

<p>Markov models are also at the heart of many Bayesian methods. See this <a href="https://mlg.eng.cam.ac.uk/zoubin/papers/ijprai.pdf">tutorial</a> from Zoubin Ghahramani for a nice overview, the textbook <a href="https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf">"Pattern Recognition and Machine Learning"</a> for Bayesian angles on many machine learning topics (as well as a more-involved HMM presentation), and this <a href="https://www.deeplearningbook.org/contents/graphical_models.html">chapter</a> of the Goodfellow et al. "Deep Learning" textbook for some connections to deep learning.</p>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Foundational statistical methods provide essential mental models for understanding LLMs</li>
    <li>Linear models serve as both a starting point and a point of comparison for more complex architectures</li>
    <li>Time-series analysis and autoregressive models help conceptualize how language models work</li>
    <li>Reinforcement learning principles are crucial for understanding fine-tuning and alignment</li>
    <li>Markov models offer a probabilistic framework for thinking about sequential prediction</li>
  </ul>
</div>

<script>
    window.prevSection = "/content/handbooks/generative-ai/";
    window.nextSection = "/content/handbooks/generative-ai/section2/";
</script>
