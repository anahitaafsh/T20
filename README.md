# Maternal Health (T20 Project)

## Introduction
Through the Web application, we aim to help pregnant women monitor their maternal health and predict potential risk based on age, blood pressure, blood glucose and heart rate. The data is collected through both IoT device and user inputs. Dashboard is displayed for users to monitor their daily health trend and predicted risk level. Alerts are sent to users (through email/SMS) once abnormal trend or high risk factor occurs. 

## Architecture Overview
TBD

## Project Plan
### Objectives
* Build supervised Machine Learning models to predict maternal risk for users, based on the input and IoT data 
* Deploy the optimal model based on the Precision/Recall rates of the training results
* Deploy anomaly detection model and configure alert trigger
* Connect IoT device to Azure IoT Central
* Configure data storage for different components
* Configure Azure Action Directory for the app and other security components


### About the data
* [Maternal Health Risk Dataset](https://www.kaggle.com/datasets/csafrit2/maternal-health-risk-data) (hosted on Kaggle) contains information of age, systolic blood pressure, diastolic blood pressure, blood glucose, heartrate and risk level from 1014 women. 
* The data is collected from different hospitals and clinics. Risk level is classified by the experts.


### Modeling techniques
* Classfication models: XGBoost, LightGBM, Random Forest models are tried out. Normalization tools including Standard Scaler, Sparse Normalizer, Max Abs Scaler are tested. Ensemble methods including voting and stacking are also used for improved accuracy.
* Anomaly Detection models: Support Vector Machine, Decision Trees, and K Nearest Neighbor models are examined to find the optimal result.


### Software Frameworks
TBD



## Application
[Our App's Site](https://t20-app.azurewebsites.net/)

## Notebook & Resources
[T20 Notebook](https://microsoft-my.sharepoint.com/:o:/p/ashwinse/EogkyHHf01BPg6eagl_1lB0BNoCmUrUQUJMD_Ev7TIAf5g?e=bfvpi3)

## Specialities
- AI/ML: Melody & Zach
- App: Ana & Ashwin
- Data: Aayushi, Rachel, & Melody
- IoT: Aayushi, Rachel, & Melody 
- Security: Aayushi, Ana, & Zach

## Overall Concept:
- An IoT device based upon (maternal/breast cancer TBD) data
- IoT device has sensors that ideally transmit data
- Data is stored
- Data is processed with AI to create predictions
- Users login to see their specific data
- Users use app via web
- Data is health-based app data (specifics are TBD dependent upon DB)

## Timeline
#### (needs updating)
- 10/3-10/7: First Sprint (architecture design: storage, IoT, security, web app)
- Second Sprint
- Third Sprint
- Fourth Sprint
- All development complete before December 

## Project Steps
##### (very, very rough draft)

#### Database
- [X] Find & cleanse DB
#### App
- [X] Create Skeleton App
- [ ] Create login permissions (e.g., create users)
- [ ] Add sign-in features
- [ ] Connect to DB
- [ ] Read from database / read-only specific user data
#### AI
- [ ] Train data
- [ ] Create predictions
#### IoT (Device TBD)
- [ ] IoT device setup
- [ ] Send data to database
- [ ] Connect user-specific data
#### Storage
- [ ] Create DB
- [ ] Connect to app
- [ ] Assign to various users
- [ ] Process & manage data

## Original Project Proposal
[Original T20 Proposal](https://microsoft-my.sharepoint.com/:w:/p/wanchenliu/EcsrYwyAj69AnhiXRGwDBh4BdOyCXd6ZhlzMOdW-g8Uldw?e=GXkAah)

## Resources
[Amanda's Project's Github Repo](https://github.com/wongamanda/image-captioning)

[Amanda's Project Write-Up](https://towardsdatascience.com/building-a-deep-learning-image-captioning-model-on-azure-b14ce4682fbf)

[Devanshi's Project Proposal](https://microsoft-my.sharepoint.com/:w:/p/dthakar/EeFrZf0ZpdlBlt4MBYVc_1gBspeGARu8fmS8PoOIv08JoA)

[Devanshi's Project Write-Up](https://devanshithakar.medium.com/create-your-own-vehicle-recognition-system-with-azure-custom-vision-7d3ad14fd43)
