# ClearPath
AI-Enhanced Urban Traffic Control for Emergency Response

## Problem Statement
The increasing number of vehicles in cities can cause high volumes of traffic, exacerbating traffic congestion and leading to critical delays for emergency vehicles such as ambulances and fire brigades. Ensuring swift passage for emergency vehicles amidst traffic congestion is a pressing issue that needs to be addressed urgently.

## Objective
The objective of the proposed solution is to improve the efficiency of the existing traffic signaling system. By automating the traffic signal system and providing real-time monitoring capabilities to the traffic police department, the project aims to streamline traffic flow and prioritize the passage of emergency vehicles.

## Solution
The proposed solution consists of implementing Dynamic Traffic Signaling and Emergency Vehicle Detection using both audio and video cues. This approach utilizes the power of AI & ML to make strategic adjustments to the existing infrastructure while keeping the same infrastructure intact.

### Dynamic Traffic Signaling
Dynamic Traffic Signaling dynamically adjusts signal lights based on the density of traffic in each lane of a multi-lane system. It allocates less time to lanes with lower traffic density and redistributes the saved time to lanes with higher traffic density, optimizing traffic flow.

- Object detection algorithm: Single Shot Detector (trained on COCO dataset)
- Tech Stack: Python, PyQT, OpenCV, Streamlit

### Emergency Vehicle Detection
Emergency Vehicle Detection employs both audio and video cues to ensure the certainty of the presence of an emergency vehicle. Video processing analyzes frames to detect emergency vehicles, while audio processing uses a CNN model to detect emergency vehicle sounds. Ensemble learning combines the probability scores from both methods to determine the presence of an emergency vehicle.

- Image Classification algorithm: DenseNet-169
- Tech Stack: Python, PyQT, OpenCV, Streamlit

### Frontend Development
The frontend of the ClearPath project will be developed using React.js to provide a user-friendly interface for interacting with the traffic management system.

## Team Members
- **Samarth Asthana** [LinkedIn](https://www.linkedin.com/in/samarth-asthana/)

- **Arihant Bharadwaj** [LinkedIn](https://www.linkedin.com/in/arihant-bharadwaj-434b22226/)

- **Ayush Patil** [LinkedIn](https://www.linkedin.com/in/ayushp2948/)

- **Kartik Agarwal** [LinkedIn](https://www.linkedin.com/in/kartikhustles/)
