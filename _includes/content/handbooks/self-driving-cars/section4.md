Chapter 9: Route Planning and Navigation (Global Planning)

Global Path Planning: Finding an optimal route from origin to destination on a road network graph.

Algorithms: A* Search, Dijkstra's Algorithm, D* Lite.

Integration with Navigation Systems, Digital Maps (e.g., Google Maps, Waze APIs for non-critical path), and Real-Time Traffic Information.

Handling Dynamic Road Closures, Detours, and Long-Term Construction.

Multi-Modal Route Planning (considering AV capabilities and ODD).

Chapter 10: Behavior Planning and Decision Making (Tactical Planning)

Tactical Decision Making in Dynamic Environments: Lane Changing, Merging, Overtaking, Intersection Traversal, Gap Acceptance, Yielding, Speed Adjustments.

Modeling Approaches:

Finite State Machines (FSMs) and Extended FSMs.

Behavior Trees.

Rule-Based Systems and Expert Systems (incorporating traffic laws and defensive driving).

Reinforcement Learning (RL) for Decision Making:

Concepts: MDPs, Value Functions, Policy Functions.

Algorithms: Deep Q-Networks (DQN) and variants, Policy Gradients (REINFORCE, A2C, A3C, PPO, SAC, DDPG).

Model-Based vs. Model-Free RL.

Inverse Reinforcement Learning (IRL) for learning from human demonstrations.

Simulation Environments for RL Training: CARLA, SUMO, LGSVL/SVL, MetaDrive, BeamNG.tech, NVIDIA Isaac Sim.

Challenges: Sample Efficiency, Safety during Exploration, Reward Design, Sim-to-Real Transfer, Interpretability.

Game Theory for Multi-Agent Interactions and Negotiations.

Predictive Control and Risk Assessment (Estimating collision probabilities, Time-to-Collision).

Ethical Decision Making Frameworks (brief introduction, detailed in Section IX).

Case Study: Challenges in unprotected left turns and how different AV companies approach it.

Chapter 11: Motion Planning and Trajectory Generation (Local Planning)

Local Path Planning: Generating Smooth, Safe, Comfortable, and dynamically feasible trajectories in the immediate vicinity.

Techniques:

Search-Based: State Lattices, A*, Hybrid A*.

Sampling-Based: RRT, RRT\*, PRM.

Optimization-Based: Optimal Control (e.g., Model Predictive Control - MPC), Quadratic Programming (QP).

Interpolation-Based: Splines (Cubic, Bezier, B-Splines), Clothoids.

Potential Fields (Artificial Potential Fields).

Collision Avoidance and Obstacle Avoidance (Dynamic Window Approach - DWA, Velocity Obstacles).

Adherence to Kinematic and Dynamic Constraints of the Vehicle.

Comfort Metrics: Jerk Minimization, Lateral Acceleration Limits.

Handling Uncertainty from Perception and Prediction.

Tools/Libraries: Open Motion Planning Library (OMPL).
