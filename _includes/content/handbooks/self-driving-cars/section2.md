Chapter 3: Sensor Technologies for Perception

LiDAR (Light Detection and Ranging):

Principles (Time-of-Flight, FMCW), Wavelengths.

Types: Mechanical Scanning, Solid-State (MEMS, OPA, Flash LiDAR).

Strengths (Accurate 3D Point Clouds, Range), Weaknesses (Cost, Weather Sensitivity, Interference).

Key Manufacturers & Products (e.g., Velodyne Puck/Alpha Prime, Luminar Iris, Ouster OS series, Hesai Pandar series, InnovizOne).

Key Datasets with LiDAR: KITTI, nuScenes, Waymo Open Dataset, Argoverse, Lyft Level 5, Pandaset.

RADAR (Radio Detection and Ranging):

Principles, Frequencies (e.g., 24GHz, 77GHz, 79GHz).

Types: Pulse, FMCW, Phased Array. Imaging RADAR / 4D RADAR.

Strengths (Weather Penetration, Velocity Measurement), Weaknesses (Angular Resolution, Sparsity).

Long-Range RADAR (LRR) vs. Short-Range RADAR (SRR).

Key Manufacturers (e.g., Bosch, Continental, NXP, Infineon, Arbe Robotics).

Cameras (Visual Sensors):

Types: Monocular, Stereo, Trinocular, Fisheye, Event Cameras, Infrared/Thermal Cameras.

Image Sensor Technology (CMOS, CCD), Resolution, Frame Rate, Dynamic Range (HDR).

Image Processing Basics (ISP pipelines).

Strengths (Rich Semantic Information, Color, Texture, Cost-Effectiveness), Weaknesses (Lighting Dependency, Weather Sensitivity, Range Estimation for Monocular).

Key Manufacturers (e.g., Sony, Omnivision, ON Semiconductor, Mobileye EyeQ series with integrated vision processing).

Key Datasets with Camera Data: KITTI, nuScenes, Waymo, BDD100K, Cityscapes, Mapillary Vistas.

Ultrasonic Sensors: Principles, Applications (Parking Assist, Blind Spot Detection, Low-Speed Maneuvers).

Inertial Measurement Units (IMUs): Accelerometers, Gyroscopes, Magnetometers for Ego-Motion Estimation, Orientation, and Sensor Fusion.

GNSS (Global Navigation Satellite System) & GPS: For Global Localization (detailed in Section III).

Emerging Sensor Technologies: Event Cameras (Dynamic Vision Sensors), Ground Penetrating RADAR (GPR) for localization, Quantum Sensing (speculative), Proprioceptive Sensors (Wheel Encoders, Steering Angle).

Sensor Calibration: Intrinsic and Extrinsic Calibration, Online vs. Offline. Tools and Techniques.

Chapter 4: Sensor Fusion

The Need for Sensor Fusion: Redundancy, Complementary Information, Improved Robustness, Extended ODD.

Levels of Fusion: Low-Level (Raw Data/Signal-Level), Mid-Level (Object/Feature-Level, Tracklet-Level), High-Level (Decision-Level).

Fusion Architectures: Centralized, Decentralized, Distributed, Hybrid.

Algorithms and Techniques:

Probabilistic Methods: Kalman Filters (EKF, UKF), Particle Filters, Bayesian Networks, Dempster-Shafer Theory.

Deep Learning-based Fusion: Early, Mid, Late Fusion in NNs. Attention Mechanisms for Fusion.

Specific Architectures: BEVFusion, DeepFusion, PointFusion, VoxelFusion, Transformer-based fusion.

Grid-based Fusion (Occupancy Grids, Evidence Grids).

Challenges: Temporal Synchronization, Spatial Calibration, Data Association, Confidence Management, Sensor Degradation, Computational Cost.

Case Study: Mobileye's camera-centric approach vs. Waymo's multi-modal sensor suite – pros and cons.

Chapter 5: Environmental Perception: Object Detection, Tracking, and Segmentation

Object Detection:

Identifying and Localizing: Vehicles, Pedestrians, Cyclists, Animals, Traffic Signs, Traffic Lights, Road Markings, Debris.

Traditional Computer Vision Approaches (Haar Cascades, HOG+SVM, Deformable Part Models).

Deep Learning Approaches:

2D Object Detection (CNNs: R-CNN family - Fast R-CNN, Faster R-CNN, Mask R-CNN; YOLO series - YOLOv3-v8; SSD, RetinaNet, EfficientDet; Transformers - DETR, Deformable DETR).

3D Object Detection from LiDAR (PointPillars, VoxelNet, SECOND, PIXOR, CenterPoint) and Camera (Pseudo-LiDAR, LSS, BEVDet).

Multi-Modal 3D Object Detection.

Key Datasets: KITTI, nuScenes, Waymo Open Dataset, Argoverse, Lyft L5, BDD100K, ApolloScape.

Competitions: nuScenes Detection Challenge, Waymo Open Dataset Challenges.

Object Tracking (Multi-Object Tracking - MOT):

Maintaining Identities and Trajectories of Detected Objects Over Time.

Techniques: Tracking-by-Detection Paradigm.

Data Association: Hungarian Algorithm, Joint Probabilistic Data Association (JPDA).

Motion Modeling: Kalman Filters, Particle Filters.

Appearance Modeling: Deep Embeddings (Re-ID features).

Specific Algorithms: SORT, Deep SORT, FairMOT, CenterTrack, ByteTrack.

Key Datasets & Competitions: MOTChallenge, KITTI Tracking, nuScenes Tracking.

Semantic Segmentation: Pixel-wise classification of the scene (Road, Lane, Sidewalk, Sky, Buildings, Vegetation, Drivable Area).

Architectures: FCN, U-Net, DeepLab series, PSPNet, SegNet. Vision Transformers for Segmentation.

Key Datasets: Cityscapes, Mapillary Vistas, BDD100K, KITTI Semantic Segmentation.

Instance Segmentation: Differentiating instances of the same class (e.g., individual cars, pedestrians).

Panoptic Segmentation: Combining Semantic and Instance Segmentation for a holistic scene understanding.

Free Space Detection / Drivable Area Estimation.

Road Boundary and Lane Line Detection/Tracking.

Chapter 6: Scene Understanding and Contextual Awareness

Beyond Object Detection: Understanding Object Behaviors, Intentions, and Interactions.

Pedestrian Intention Prediction (Crossing, Waiting).

Vehicle Behavior Prediction (Lane Change, Turn, Braking).

Interaction Modeling between multiple agents.

Key Datasets: nuScenes (prediction challenge), Argoverse (forecasting challenge), Waymo Motion.

Activity Recognition (e.g., construction zones, emergency vehicle presence).

Road Geometry Understanding (Intersection Topology, Lane Connectivity, Curvature).

Weather and Road Condition Assessment (Rain, Snow, Fog, Wet/Icy Roads) from sensor data.

Traffic Flow Analysis and Congestion Detection.

Anomaly Detection (Unexpected events, objects, or behaviors).

Social Norm Compliance.

Tools/Frameworks: Open-source libraries for trajectory forecasting (e.g., Trajectron++).
