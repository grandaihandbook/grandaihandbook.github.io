Chapter 21: Functional Safety (ISO 26262) for Automotive Systems

Hazard Analysis and Risk Assessment (HARA).

Automotive Safety Integrity Levels (ASIL A, B, C, D).

Safety Goals, Functional Safety Requirements, Technical Safety Requirements.

Safety Mechanisms: Fault Detection, Diagnosis, Mitigation, Fault Tolerance.

Redundancy (Hardware, Software, Information, Time) and Fail-Operational/Fail-Safe Systems.

Development Interface Agreement (DIA) between OEM and suppliers.

Case Study: Applying ISO 26262 to an ADAS feature like AEB.

Chapter 22: Safety of the Intended Functionality (SOTIF - ISO 21448)

Addressing Risks Due to Performance Limitations of Sensors or Algorithms in the Absence of Faults (e.g., AI model misclassification).

Identifying Triggering Conditions and Unsafe Scenarios within the ODD.

Verification and Validation of AI-based Functions and Machine Learning Models.

Known Unsafe Scenarios vs. Unknown Unsafe Scenarios (The "Unknown Unknowns").

Methodologies for identifying unknown unsafe scenarios (e.g., using generative adversarial networks for scenario generation, systematic fuzz testing).

Confidence Metrics for AI outputs.

Case Study: A SOTIF analysis of a perception system in adverse weather.

Chapter 23: Cybersecurity for Autonomous Vehicles (ISO/SAE 21434 and UNECE WP.29 R155)

Threat Modeling and Risk Assessment (TARA) methodologies (e.g., STRIDE, EVITA).

Attack Surfaces: Sensors (Spoofing, Jamming), ECUs, Communication Channels (CAN, Ethernet, V2X, Bluetooth, Wi-Fi), OTA Updates, Backend Servers, Mobile Apps.

Common Vulnerabilities and Attack Vectors.

Security Mechanisms: Secure Boot, Secure Communication (TLS, MACsec), Intrusion Detection/Prevention Systems (IDPS), Hardware Security Modules (HSMs), Security Operations Centers (VSOCs).

Security Throughout the Lifecycle: Secure Design, Secure Coding, Vulnerability Management, Incident Response.

Case Study: Notable AV cybersecurity research (e.g., Miller and Valasek's Jeep hack).

Chapter 24: Validation and Verification (V&V) for Autonomous Systems

Challenges in V&V for AVs: Complexity, Non-determinism of AI, Vastness of ODD ("Curse of Dimensionality"), Rare Events.

The "Billions of Miles" Problem and its limitations.

Simulation-Based Testing: Scenario-based testing, Parameter sweeping, Fuzz testing, Adversarial testing.

Closed-Course Testing (Proving Grounds): Replicating complex scenarios, testing system limits.

Public Road Testing: Safety Drivers, Disengagement Metrics, Data Collection for ODD coverage.

Scenario-Based Testing: Definition, Creation, and Management of Test Scenarios (OpenSCENARIO).

Formal Methods and Provable Safety (Aspirational but growing in specific areas).

Safety Cases and Argumentation (e.g., GSN - Goal Structuring Notation, CAE - Claims-Argument-Evidence).

Test Coverage Metrics for AVs.

Key Competitions/Challenges: Some tracks of AV-focused conferences or specific safety-related challenges.

Tools: Simulation platforms (as above), Test management tools, Data analysis tools.
