# Tic Tac Pro

## I. Architecture Decision Records
### A. Issue 1: Development Framework
#### 1. Decision
Our app will utilize the React Native for development framework, alongside Bootstrap CSS for styling.
#### 2. Status
Decided. Open to complimentary libraries as it becomes necessary.
#### 3. Details
##### a) Assumptions: we have developers familiar with React, JavaScript and Bootstrap.
##### b) Constraints: the app needs to run on Android mobile devices.
##### c) Position: React Native allows for a single codebase for multiple platforms, allowing for future expansion of the app, saving development time and resources. We may consider additional libraries as needed for specific functionalities.
### B. Issue 2 : Navigation Strategy
#### 1. Decision
React Navigation.
#### 2. Status
Decided.
#### 3. Details
##### a) Assumptions: Users’ age may range from 3+ with large ranges in technical literacy.
##### b) Constraints: navigation must be user-friendly and intuitive.
##### c) Position: React Navigation library is compatible with the decided framework and the developers have expertise with it.
### C. Issue 3: Hardware
#### 1. Decision
Devices should have a minimum screen resolution of 720p or higher and must support an Android SDK version of 23 (Android 6.0) or newer. User’s will also require an internet connection to create an account and use online services, however offline play will be possible without requiring an internet connection.
#### 2. Status
Decided.
#### 3. Details
##### a) Assumptions The app will have individual account-linked progression and operate on Android mobile devices.
##### b) Constraints: React Native currently only supports Android SDK 23 and newer. For users to create accounts, and utilize online services, an internet connection will be required.
##### c) Position: Due to the scope of the project, device version/requirements are non-negotiable, and any device that does not meet the requirements will be unable to run the application. However, we want to give users the opportunity to play the way they want, which is why we have decided to include both online and offline play.

### D. Issue 4: Database Storage
#### 1. Decision
A database will be required to store user information and progression.
#### 2. Status
Open.
#### 3. Details
##### a) Assumptions: Tic Tac Pro is a turn-based game with no persistent data, a database isn't necessary for basic gameplay. However, we plan to implement customization options, and user-accounts, and therefore we will require a database to store information regarding users’ information, progression and setting choices.
##### b) Constraints: the database should be able to handle increasing data volume without impacting app performance.
##### c) Position: Database is not required for base app functionality but will be required for additional features.
