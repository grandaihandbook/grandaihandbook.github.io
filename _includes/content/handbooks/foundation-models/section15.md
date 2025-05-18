---
layout: default
title: "LLM Prompting"
description: "Survey prompting strategies for optimizing large language model performance."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

<div class="key-concept">
  This section surveys various prompting strategies designed to elicit optimal performance from Large Language Models (LLMs). Prompting is the art and science of crafting effective inputs (prompts) to guide LLMs toward desired outputs. As LLMs have grown in capability, sophisticated prompting techniques have evolved beyond simple instructions, enabling complex reasoning, interaction, and refinement. Effective **prompt engineering** is crucial for harnessing the full potential of these models across diverse tasks, from simple Q&A to multi-step problem-solving and agentic behavior.
</div>

<h2 id="basic-prompting-strategies">Basic Prompting Strategies</h2>

<p>These foundational techniques rely on the inherent pattern-completion abilities of LLMs learned during pre-training.</p>

<h3 id="zero-shot-prompting">Zero-Shot Prompting</h3>
<p>Zero-shot prompting involves directly asking the LLM to perform a task it hasn't been explicitly trained for, without providing any examples. The prompt typically includes the instruction or question. This relies entirely on the model's pre-trained knowledge and ability to generalize.</p>
<p><em>Example: "Translate the following English text to French: 'Hello, world!'"</em></p>

<h3 id="few-shot-prompting">Few-Shot Prompting</h3>
<p>Few-shot prompting provides the LLM with a small number (typically 1 to 5) of examples (shots) demonstrating the desired input-output format or task execution within the prompt itself. This helps the model understand the task context and expected output style better than zero-shot prompting.</p>
<p><em>Example:
Instruction: Provide the antonym.
Input: happy
Output: sad

Input: fast
Output: slow

Input: tall
Output: short

Input: hot
Output: cold</em></p>

<div class="resource-links">
  <h3>Key Resources for Basic Prompting</h3>
  <ul>
    <li>Paper (Introduced Zero/Few-Shot): <a href="https://arxiv.org/abs/2005.14165">Language Models are Few-Shot Learners (GPT-3 Paper)</a> by Brown et al. (2020)</li>
    <li>Guide: <a href="https://www.promptingguide.ai/techniques/zeroshot">Prompting Guide: Zero-Shot Prompting</a></li>
    <li>Guide: <a href="https://www.promptingguide.ai/techniques/fewshot">Prompting Guide: Few-Shot Prompting</a></li>
    <li>Course: <a href="https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/">ChatGPT Prompt Engineering for Developers</a> by DeepLearning.AI & OpenAI</li>
    <li>Blog Post: <a href="https://openai.com/blog/openai-api/">OpenAI API Introduction (Discusses prompt design)</a></li>
  </ul>
</div>

<h2 id="enhancing-reasoning-and-decomposition">Enhancing Reasoning and Decomposition</h2>

<p>These advanced techniques guide the LLM through more complex problem-solving processes, often breaking down tasks or encouraging step-by-step thinking.</p>

<h3 id="chain-of-thought-cot">Chain-of-Thought (CoT)</h3>
<p>Chain-of-Thought prompting encourages the LLM to generate intermediate reasoning steps before providing the final answer, mimicking a human thought process. This is typically achieved by including few-shot examples where the reasoning steps are explicitly shown. It significantly improves performance on tasks requiring arithmetic, commonsense, or symbolic reasoning.</p>
<p><em>Example Prompt Snippet: "... Q: Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now? A: Roger started with 5 balls. 2 cans of 3 tennis balls each is 2 * 3 = 6 balls. So he has 5 + 6 = 11 balls. The answer is 11."</em></p>

<h3 id="self-consistency">Self-Consistency</h3>
<p>Self-Consistency improves upon CoT by sampling multiple diverse reasoning paths (chains of thought) for the same prompt and then selecting the most consistent answer through a majority vote. This makes the final output more robust and less sensitive to any single flawed reasoning path.</p>

<h3 id="least-to-most-prompting">Least-to-Most Prompting</h3>
<p>This strategy involves breaking down a complex problem into a sequence of simpler subproblems. The LLM is prompted to solve each subproblem sequentially, often using the solution of the previous step as input for the next. This guides the model from easier steps to the final complex solution, improving performance on tasks requiring multi-step procedures.</p>

<h3 id="task-decomposition">Task Decomposition</h3>
<p>Similar to Least-to-Most, task decomposition is the general principle of breaking a large task into smaller, manageable steps or sub-tasks. This can be implemented through specific prompting strategies like Least-to-Most or by designing multi-turn interactions where the LLM focuses on one part of the problem at a time. It's a core concept in effective prompt engineering for complex problems.</p>

<h3 id="tree-of-thought-tot">Tree of Thoughts (ToT)</h3>
<p>Tree of Thoughts extends CoT by enabling the LLM to explore multiple reasoning paths simultaneously, forming a tree structure. At each step, the model can generate several possible intermediate thoughts or steps. These paths are evaluated (e.g., using the LLM itself or heuristics), and promising paths are explored further, allowing for backtracking and exploration of alternatives, akin to planning or search algorithms. This is particularly useful for tasks where exploration or creative problem-solving is needed.</p>

<h3 id="program-of-thoughts-pot">Program of Thoughts (PoT)</h3>
<p>Program of Thoughts leverages the LLM's coding capabilities by prompting it to generate code (e.g., Python) as the reasoning steps. The generated code can be executed by an interpreter to compute the final answer. This offloads complex calculations (like arithmetic or symbolic manipulation) to the reliable code execution environment, improving accuracy and robustness for quantitative reasoning tasks.</p>

<div class="resource-links">
  <h3>Key Resources for Reasoning & Decomposition</h3>
  <ul>
    <li>Paper (CoT): <a href="https://arxiv.org/abs/2201.11903">Chain-of-Thought Prompting Elicits Reasoning in Large Language Models</a> by Wei et al. (2022)</li>
    <li>Paper (Self-Consistency): <a href="https://arxiv.org/abs/2203.11171">Self-Consistency Improves Chain of Thought Reasoning in Language Models</a> by Wang et al. (2022)</li>
    <li>Paper (Least-to-Most): <a href="https://arxiv.org/abs/2205.10625">Least-to-Most Prompting Enables Complex Reasoning in Large Language Models</a> by Zhou et al. (2022)</li>
    <li>Paper (ToT): <a href="https://arxiv.org/abs/2305.10601">Tree of Thoughts: Deliberate Problem Solving with Large Language Models</a> by Yao et al. (2023)</li>
    <li>Paper (PoT): <a href="https://arxiv.org/abs/2211.10435">Program of Thoughts Prompting: Disentangling Computation from Reasoning for Numerical Reasoning Tasks</a> by Chen et al. (2022)</li>
    <li>Guide: <a href="https://www.promptingguide.ai/techniques/cot">Prompting Guide: Chain-of-Thought</a></li>
    <li>Blog Post: <a href="https://ai.googleblog.com/2022/05/language-models-perform-reasoning-via.html">Google AI Blog on CoT and Reasoning</a></li>
    <li>Blog Post: <a href="https://princeton-nlp.github.io/tree-of-thought-llm/">Tree of Thoughts Project Page</a></li>
  </ul>
</div>

<h2 id="interactive-and-agentic-prompting">Interactive and Agentic Prompting</h2>

<p>These techniques involve more dynamic interaction, potentially using external tools or iterative refinement cycles.</p>

<h3 id="react-reason-act">ReAct (Reason + Act)</h3>
<p>ReAct prompting enables LLMs to act as agents by interleaving reasoning steps (thought) with actions (e.g., using external tools like search engines or calculators). The model generates a thought about what to do next, then an action to take, receives an observation from the environment or tool, and repeats the cycle. This allows LLMs to gather external information or perform computations to solve tasks requiring up-to-date knowledge or precise calculations.</p>

<h3 id="self-refine">Self-Refine</h3>
<p>Self-Refine is an iterative approach where the LLM generates an initial output, then critiques its own output based on given criteria or goals, and finally refines the output based on the critique. This generation-critique-refinement loop can be repeated multiple times, leading to higher-quality outputs by allowing the model to correct its own mistakes or improve clarity and coherence.</p>

<div class="resource-links">
  <h3>Key Resources for Interactive & Agentic Prompting</h3>
  <ul>
    <li>Paper (ReAct): <a href="https://arxiv.org/abs/2210.03629">ReAct: Synergizing Reasoning and Acting in Language Models</a> by Yao et al. (2022)</li>
    <li>Paper (Self-Refine): <a href="https://arxiv.org/abs/2303.17651">Self-Refine: Iterative Refinement with Self-Feedback</a> by Madaan et al. (2023)</li>
    <li>Guide: <a href="https://www.promptingguide.ai/techniques/react">Prompting Guide: ReAct</a></li>
    <li>Blog Post: <a href="https://ai.googleblog.com/2023/03/react-synergizing-reasoning-and-acting.html">Google AI Blog on ReAct</a></li>
     <li>Project Page: <a href="https://self-refine.github.io/">Self-Refine Project Page</a></li>
  </ul>
</div>

<h2 id="addressing-specific-challenges">Addressing Specific Challenges</h2>

<p>Research also focuses on understanding and mitigating limitations through prompting or analysis.</p>

<h3 id="compositionality-gap">Measuring and Narrowing the Compositionality Gap</h3>
<p>Compositionality refers to the ability to understand and produce novel combinations of familiar concepts. While LLMs excel at many tasks, they sometimes struggle with complex compositional instructions (e.g., "Find the largest city in the country whose capital is Paris"). Research in this area focuses on designing benchmarks to measure this gap and developing prompting strategies (often involving decomposition or structured reasoning like CoT or Least-to-Most) to improve compositional generalization.</p>

<div class="resource-links">
  <h3>Key Resources for Compositionality</h3>
  <ul>
    <li>Paper (Example Study): <a href="https://arxiv.org/abs/2210.07369">Measuring and Narrowing the Compositionality Gap in Language Models</a> by Press et al. (2022)</li>
    <li>Workshop/Survey: <a href="https://compositional-generalization.github.io/">Resources on Compositional Generalization (Often includes relevant papers/benchmarks)</a></li>
    <li>Blog Post: <a href="https://blog.research.google/2023/03/towards-understanding-and-improving.html">Google Research Blog on Compositionality (Contextual)</a></li>
  </ul>
</div>

<div class="summary-section">
  <h3>Key Takeaways</h3>
  <ul>
    <li>Prompting is fundamental to interacting with and controlling LLMs.</li>
    <li>Basic techniques like zero-shot and few-shot prompting leverage the model's pre-trained knowledge.</li>
    <li>Advanced strategies like Chain-of-Thought, Self-Consistency, Least-to-Most, Tree of Thoughts, and Program of Thoughts enhance complex reasoning and problem-solving.</li>
    <li>Agentic approaches like ReAct enable LLMs to interact with external tools and environments.</li>
    <li>Iterative methods like Self-Refine allow models to improve their own outputs.</li>
    <li>Ongoing research addresses challenges like compositionality through better prompting and evaluation.</li>
    <li>Effective prompt engineering combines these techniques to optimize LLM performance for specific tasks.</li>
  </ul>
</div>

<script>
  // Navigation variables - Update these paths as needed
  window.prevSection = "/content/handbooks/foundation-models/section14/"; // Assuming section 14 was previous
  window.nextSection = "/content/handbooks/foundation-models/section16/"; // Assuming section 16 is next
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
