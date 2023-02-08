# Maternal Health (T20 Project)

## Introduction
Through the web application, we aim to help pregnant women track their maternal health and predict potential risk based on age, blood pressure, blood glucose and heart rate using a pre-trained classification machine learning model. The user data is collected through user inputs prompted through the app's UI. The dashboard is displayed for users to monitor the trend of their maternal health metrics and predicted risk level daily. Conceptually, alerts will be sent to users (through SMS) once an abnormal metric is detected.

## Architecture Overview
![MicrosoftTeams-image (2)1](diagrams/T20_ADS_V2.drawio.png)

## Final Presentation
[T20 Final Presentation](https://microsoft-my.sharepoint.com/:p:/p/aayushimehta/EeIL2VVQYJVFiYJBkvFOBV0BpFT7SJDiFGi-wazcyVO4BQ?e=YPrI0q)

## Application
[Our App's Site](https://red-desert-03c280310.2.azurestaticapps.net/)


## Project Plan
### Objectives
* Build supervised Machine Learning models to predict maternal risk for users based on the maternal health dataset
* Select and validate the optimal models based on the precision/recall rates
* Deploy the optimal models
* Configure data storage for data components
* Configure Azure Active Directory (AAD) for security components
* Configure Application Gateway and Web Application Firewall (WAF) for networking components
* Build web application UI

### About the data
* [Maternal Health Risk Dataset](https://www.kaggle.com/datasets/csafrit2/maternal-health-risk-data) (hosted on Kaggle) contains information of age, systolic blood pressure, diastolic blood pressure, blood glucose, heartrate, and risk level amongst 1,014 women. The data is collected from different hospitals and clinics. Experts classified the risk levels.
* Data from users for prediction and trend analysis is collected on a daily basis through the web app's UI.


## Specialties
- AI/ML: Melody
- Web App: Ana & Ashwin
- Data: Rachel & Melody
- Networking: Zach
- Security: Aayushi, Ana, & Zach


## Overall Concept:
- An IoT device is based upon maternal health data or users input data through the web app's UI
- The IoT device has sensors that ideally transmit data
- Data is stored
- Data is processed with AI to create predictions
- Users login to see their specific predictions or users manually input their data to see results


## Timeline
### First Sprint (October)
- Architecture Design
- Configure Database
- Create and Deploy Web App (i.e., frontend)
- Create and Deploy Security components (i.e., AAD B2C sign-in)
### Second Sprint (November)
- Create and Deploy Networking components (e.g., App Gateway, WAF, NSGs)
- Deploy new UI
- Create and Deploy ML Model
- Connect Database with Web App
### Third Sprint (December - January)
- Deploy Web App (i.e., backend)
- Fix & Deliver Final UI features
- Test UI and Configure Read-only Specific User Data
- Troubleshoot Deployment and B2C Issues
- Build and Finalize Presentation
### Future Considerations
- Implement IoT components


## Resources
[T20 Notebook](https://microsoft-my.sharepoint.com/:o:/p/ashwinse/EogkyHHf01BPg6eagl_1lB0BNoCmUrUQUJMD_Ev7TIAf5g?e=bfvpi3)

[Amanda's Project's Github Repo](https://github.com/wongamanda/image-captioning)

[Amanda's Project Write-Up](https://towardsdatascience.com/building-a-deep-learning-image-captioning-model-on-azure-b14ce4682fbf)

[Devanshi's Project Proposal](https://microsoft-my.sharepoint.com/:w:/p/dthakar/EeFrZf0ZpdlBlt4MBYVc_1gBspeGARu8fmS8PoOIv08JoA)

[Devanshi's Project Write-Up](https://devanshithakar.medium.com/create-your-own-vehicle-recognition-system-with-azure-custom-vision-7d3ad14fd43)
