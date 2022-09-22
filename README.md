# Notes 
[Our App's Site](https://t20-app.azurewebsites.net/)

## General Technologies
(roughly speaking)
- IoT: Rachel, Aayushi
- AI: Melody, Zach
- Security: Ana, Aayushi, Zach
- App: Ana, Ashwin
- Data: Rachel, Melody, Aayushi

## Basic idea:
- there is an IoT device (most likely a fitness device)
- IoT device has sensor that sends data (most likely heart rate/step/health data)
- Data is stored somewhere
- Data is processed with AI to create recommendations and predictions
- Users login to see their specific data and predictions based on their data
- Users use app via web

## Timeline
- Find usable dataset
- Clean and trim data
- Connect data to web app
- Create web app frontend
- Create web app login page
- Secure web app (AAD and user access/permissions)
- Connect to IoT device 
- Gather data from IoT device 

## Project Steps
##### (very, very roughly speaking, more to be added)
###### (question marks are when I have 0 idea of what I am talking about, and haven't done research to know what actual steps are)
1. App
    1. Create Skeleton App (deploy to App Service and create basic frontend)
    2. Create login permissions (aka create users)
    3. Connect to database
    4. Read from database / read only specific user data
2. AI
    1. Process data (trimming and cleaning)
    2. Train data (?)
    3. Create predictions (?)
3. IoT
    1. IoT device setup (?)
    2. Send data to database (?)
    3. Connect user-specific data (?)
4. Storage
    1. Create database
    2. Connect to app
    3. Assign to various users (?)
    4. Process/manage data (?)

## Resources
[Amanda's Project's Github Repo](https://github.com/wongamanda/image-captioning)

[Amanda's Project Write-Up](https://towardsdatascience.com/building-a-deep-learning-image-captioning-model-on-azure-b14ce4682fbf)

[Devanshi's Project Proposal](https://microsoft-my.sharepoint.com/:w:/p/dthakar/EeFrZf0ZpdlBlt4MBYVc_1gBspeGARu8fmS8PoOIv08JoA)

[Devanshi's Project Write-Up](https://devanshithakar.medium.com/create-your-own-vehicle-recognition-system-with-azure-custom-vision-7d3ad14fd43)