# Maternal Health (T20 Project)

## Introduction
Through the web application, we aim to help pregnant women track their maternal health and predict potential risk based on age, blood pressure, blood glucose and heart rate using a pre-trained classification machine learning model. The user data is collected through user inputs prompted through the app's UI. The dashboard is displayed for users to monitor the trend of their maternal health metrics and predicted risk level on a daily basis. Alerts are sent to users (through SMS) once an abnormal metric is detected.

## Architecture Overview
![MicrosoftTeams-image (2)1](diagrams/T20_ADS_V2.drawio.png)


## Final Presentation
[T20 Final Presentation](https://microsoft-my.sharepoint.com/:p:/p/aayushimehta/EeIL2VVQYJVFiYJBkvFOBV0BpFT7SJDiFGi-wazcyVO4BQ?e=YPrI0q)


## Project Plan
### Objectives
* Build supervised Machine Learning models to predict maternal risk for users based on the maternal health dataset
* Select and validate the optimal models based on the Precision/Recall rates
* Deploy the optimal models for new data from the web app's inputs
* Configure data storage for data components
* Configure Azure Active Directory (AAD) for security components
* Configure Application Gateway and Web Application Firewall (WAF) for networking componets
* Build web application UI

### About the data
* [Maternal Health Risk Dataset](https://www.kaggle.com/datasets/csafrit2/maternal-health-risk-data) (hosted on Kaggle) contains information of age, systolic blood pressure, diastolic blood pressure, blood glucose, heartrate and risk level from 1014 women. The data is collected from different hospitals and clinics. Risk level is classified by the experts.
* Data from users for prediction and trend analysis is collected on a daily basis through the web app's UI.


## Application
[Our App's Site](https://red-desert-03c280310.2.azurestaticapps.net/)


## Specialities
- AI/ML: Melody
- Web App: Ana & Ashwin
- Data: Rachel & Melody
- Networking: Zach
- Security: Aayushi, Ana, & Zach


## Overall Concept:
- An IoT device is based upon maternal health data or users input data through the web app's UI
- IoT device has sensors that ideally transmit data
- Data is stored
- Data is processed with AI to create predictions
- Users login to see their specific predictions or users manually input their data to see results


## Timeline
### First Sprint (10/3 - 10/7)
- Architecture Design
- Database
- Deploy Web App (i.e., front-end)
- Security (i.e., AAD B2C sign-in)
### Second Sprint (11/10 - 11/21)
- Network Security (e.g., Application Gateway, WAF, NSGs)
- Deploy new UI
- Deploy ML Model   
- Connect Database with Web App
### Third Sprint (11/30 - 2/6)
- Fix & Deliver Final UI Features
- Troubleshoot Deployment and B2C Issues
- Test UI and Model Endpoints
- Build and Finalize Presentation


## Project Steps

#### Database
- [X] Find & cleanse DB
#### App & Security
- [X] Create Skeleton App
- [X] Create login permissions (e.g., create users)
- [X] Add sign-in features
- [X] Connect to DB
- [X] Read from database / read-only specific user data
- [X] Display user data on UI
- [X] Configure Web App Gateway
- [X] Configure network security features (e.g., NSGs, WAF)
#### AI
- [X] Train data
- [X] Find optimal models
- [X] Create predictions
- [X] Deploy & test models
#### Storage
- [X] Create DB
- [X] Connect to app
- [X] Process & manage data
#### Future Considerations
- Implement IoT componets

## Original Project Proposal
[Original T20 Proposal](https://microsoft-my.sharepoint.com/:w:/p/wanchenliu/EcsrYwyAj69AnhiXRGwDBh4BdOyCXd6ZhlzMOdW-g8Uldw?e=GXkAah)

## Resources
[T20 Notebook](https://microsoft-my.sharepoint.com/:o:/p/ashwinse/EogkyHHf01BPg6eagl_1lB0BNoCmUrUQUJMD_Ev7TIAf5g?e=bfvpi3)

[Amanda's Project's Github Repo](https://github.com/wongamanda/image-captioning)

[Amanda's Project Write-Up](https://towardsdatascience.com/building-a-deep-learning-image-captioning-model-on-azure-b14ce4682fbf)

[Devanshi's Project Proposal](https://microsoft-my.sharepoint.com/:w:/p/dthakar/EeFrZf0ZpdlBlt4MBYVc_1gBspeGARu8fmS8PoOIv08JoA)

[Devanshi's Project Write-Up](https://devanshithakar.medium.com/create-your-own-vehicle-recognition-system-with-azure-custom-vision-7d3ad14fd43)
