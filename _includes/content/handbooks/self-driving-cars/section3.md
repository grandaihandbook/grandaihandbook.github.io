Chapter 7: Localization and State Estimation

The Importance of Precise Positioning: Global (in a map) and Relative (to environment). Accuracy Requirements (Lane-Level).

GNSS/GPS-based Localization:

Standard GPS, Differential GPS (DGPS).

RTK (Real-Time Kinematic), PPP (Precise Point Positioning).

Challenges: Urban Canyons, Tunnels, Multipath Effects.

IMU Integration: Dead Reckoning, Sensor Fusion with GNSS for Smoothing and Robustness (Kalman Filters).

SLAM (Simultaneous Localization and Mapping):

LiDAR SLAM: ICP (Iterative Closest Point), NDT (Normal Distributions Transform). Specific algorithms (LOAM, LeGO-LOAM, Cartographer, LIO-SAM).

Visual SLAM: Monocular, Stereo, RGB-D. Feature-based (ORB-SLAM, PTAM), Direct Methods (DSO, SVO).

Visual-Inertial Odometry (VIO) and SLAM (e.g., VINS-Mono, OKVIS).

Sensor Fusion for Robust Localization: Tightly Coupled vs. Loosely Coupled (GNSS + IMU + LiDAR + Camera + Odometry).

Map-Matching Techniques: Point Cloud Registration, Feature Matching to HD Maps, Particle Filters for Localization.

Key Datasets for SLAM/Localization: KITTI Odometry, EuRoC MAV, TUM VI.

Chapter 8: High-Definition (HD) Maps

Role of HD Maps in Autonomous Driving: Prior Information for Precise Localization, Perception Augmentation (e.g., expected traffic light locations), and Path Planning.

Content of HD Maps:

Geometric Layer: Detailed Road Geometry (Lane Centrelines, Boundaries, Curvature), Elevation.

Semantic Layer: Traffic Signs, Traffic Lights (with state if V2I), Lane Markings (Type, Color), Road Furniture (Barriers, Poles), Crosswalks, Speed Limits.

Dynamic Layer (Optional, Real-time Updates): Temporary Road Closures, Construction Zones, Real-time Traffic.

Creation of HD Maps:

Survey Vehicles equipped with high-accuracy LiDAR, Cameras, IMU, GNSS.

Automated Feature Extraction and Annotation (AI-based).

Manual Annotation and Verification.

Crowdsourcing and Fleet-sourcing Data.

Maintenance and Updating of HD Maps: Change Detection, Real-Time Updates via V2N or fleet observations.

Standardization Efforts: NDS (Navigation Data Standard), OpenDRIVE, LaneLet2, Apollo OpenDrive.

Challenges: Scalability of Creation and Maintenance, Cost, Global Coverage, Accuracy, Real-time Consistency, Data Storage.

Key HD Map Providers/Developers: HERE Technologies, TomTom, Waymo, Cruise, Mobileye Roadbook (REM), Baidu, Zenrin.

Case Study: The role of HD maps in Waymo's geofenced operations.
