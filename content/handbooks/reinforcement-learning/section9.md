---
layout: default
title: " Core Concepts of Reinforcement Learning"
description: "An introduction to Decision Transformer, Gato, and RT-1, using sequence modeling for RL tasks."
---

<link rel="stylesheet" href="{{ '/assets/css/section-academic.css' | relative_url }}">

Chapter 35: Decision Transformer
Problem Definition: RL as sequence modeling
Approach: Conditioning on returns, states, actions for prediction
Applications: Offline RL, trajectory optimization
References
Chapter 36: Trajectory Transformer
Problem Definition: Discretizing RL for next-token prediction
Approach: Beam search, state-action trajectory modeling
Applications: Planning, sparse reward tasks
References
Chapter 37: Diffusion Transformer
Problem Definition: Diffusion for trajectory generation
Approach: Combining diffusion models with transformers
Applications: Planning, continuous control
References
Chapter 38: Gato
Problem Definition: Multi-modal, multi-task RL
Approach: Transformer for diverse data (images, text, control)
Applications: Generalist agents, cross-domain tasks
References
Chapter 39: Robotic Transformers (RT-1/RT-2)
Problem Definition: Transformers for robotic control
Approach: Learning from demonstrations, real-time control
Applications: Robotics, manipulation, navigation
References
Chapter 40: Q-Transformer
Problem Definition: Q-learning with transformers
Approach: Attention for state-action histories
Applications: Value-based RL, complex environments
References
Chapter 41: Transformer World Models
Problem Definition: Modeling environments with transformers
Approach: Predictive modeling, planning with attention
Applications: Model-based RL, simulation
References
Chapter 42: Attention-Based Recurrent Models
Problem Definition: Recurrence in transformers for RL
Approach: Gated Transformer-XL (GTrXL) for memory
Applications: Sequential decision-making, memory-based RL
References

<script>
  // Navigation variables
  var prevSection = "/content/handbooks/generative-ai/index.md";
  var nextSection = "/content/handbooks/generative-ai/section2.md";
</script>

<script src="{{ '/assets/js/section-academic.js' | relative_url }}"></script>
