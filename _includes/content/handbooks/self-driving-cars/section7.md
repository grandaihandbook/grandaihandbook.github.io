Chapter 18: Hardware Architecture for Autonomous Vehicles

Centralized vs. Distributed Compute Architectures (Domain Controllers, Zonal Architectures).

Compute Platforms:

GPUs (e.g., NVIDIA DRIVE AGX/Orin/Thor).

CPUs (e.g., Intel Core, ARM-based processors).

FPGAs (e.g., Xilinx Versal).

ASICs and SoCs (e.g., NVIDIA DRIVE SoCs, Qualcomm Snapdragon Ride, Mobileye EyeQ series, Tesla FSD Computer, Horizon Robotics Journey).

Trends: Chiplets, Heterogeneous Computing.

Sensor Integration and High-Bandwidth Data Busing (Automotive Ethernet - 100BASE-T1, 1000BASE-T1, Multi-Gig; CAN-FD, FlexRay).

Power Distribution and Management: Redundancy, High Voltage Systems for EVs.

Thermal Management for High-Performance Compute.

Redundancy in Hardware Components (Compute, Sensors, Actuators).

Chapter 19: Software Architecture for Autonomous Vehicles

Operating Systems:

Real-Time Operating Systems (RTOS) (e.g., QNX, VxWorks, FreeRTOS) for safety-critical functions.

POSIX-compliant OS (e.g., Linux-based - Automotive Grade Linux (AGL), Android Automotive OS) for non-critical/infotainment.

Hypervisors for mixed-criticality systems.

Middleware:

ROS (Robot Operating System) / ROS 2 for research and development.

AUTOSAR (Classic and Adaptive Platform) for production automotive systems.

DDS (Data Distribution Service) for real-time communication.

Custom Middleware Solutions.

Modular vs. Monolithic Software Architectures. Microservices in Automotive.

Software Development Processes: Agile, DevOps, ASPICE (Automotive SPICE).

Over-the-Air (OTA) Software Updates: Architecture, Security, Rollback Mechanisms.

Data Logging and Diagnostic Systems.

Case Study: AUTOSAR Adaptive Platform as a standard for high-performance ECUs.

Chapter 19A: Software Engineering Best Practices for Safety-Critical AV Software (New Chapter)

Coding Standards (e.g., MISRA C/C++, AUTOSAR C++14).

Static and Dynamic Code Analysis.

Formal Methods for Software Verification (Model Checking, Theorem Proving).

Fault Injection Testing.

Requirements Engineering and Traceability.

Configuration Management and Version Control.

Defensive Programming and Error Handling.

Chapter 20: Communication Systems (V2X) and Connectivity

Vehicle-to-Everything (V2X) Communication:

V2V (Vehicle-to-Vehicle): Cooperative Awareness (CAMs), Collision Avoidance.

V2I (Vehicle-to-Infrastructure): Traffic Light Optimal Speed Advisory (GLOSA), Road Hazard Warnings.

V2P (Vehicle-to-Pedestrian): Warning pedestrians and cyclists.

V2N (Vehicle-to-Network/Cloud): HD Map Updates, OTA Software, Remote Diagnostics, Teleoperation.

Technologies:

DSRC (Dedicated Short-Range Communications - IEEE 802.11p).

C-V2X (Cellular V2X - based on LTE and 5G NR): LTE-V2X (PC5 Sidelink), 5G NR V2X.

Applications: Cooperative Perception, Cooperative Maneuvering, Platooning, Emergency Vehicle Warnings, Traffic Optimization.

Challenges: Latency, Reliability, Scalability, Security (Authentication, Integrity, Privacy), Standardization, Spectrum Allocation.

Case Study: Deployment of C-V2X in China or DSRC trials in the US/Europe.
