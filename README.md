# Tiny Anthems (static)
*by Chris Knight Johnson*
## Description
Created for local Portland musician Mike Long, this site will use persistent state via AWS, user sign in via OAuth, and host mp3 files via S3.

## [View App Planning Repo](https://github.com/ckjpdx/tiny-anthems-planning)
## Tech Used
* create-react-app.
* Material UI
* AWS S3, Cognito, User Database

## Install


## Goals
- [ ] Material UI is installed but still must be implemented: [Material UI](https://www.npmjs.com/package/material-ui)
- [ ] Display demo songs to play via portfolio
- [x] react-facebook npm is used to sign in users
- [ ] AWS user database is used to put/get persistent state
- [ ] AWS S3 is used to store mp3 files
- [ ] AWS Cognito is used to securely sign in users/admin

## Resources

### [AWS Mobile](https://aws.amazon.com/mobile/)
> AWS Mobile gives you the tools to rapidly configure and integrate the cloud backend your mobile app needs.

#### [AWS Mobile > AWS Amplify](https://github.com/aws/aws-amplify)
> AWS Amplify is an open source JavaScript library for frontend and mobile developers building cloud-enabled applications. The AWS Mobile CLI, built on AWS Mobile Hub, provides a command line interface for frontend JavaScript developers to seamlessly enable and configure AWS services into their apps.

#### [Adding User Data Storage](https://docs.aws.amazon.com/aws-mobile/latest/developerguide/web-add-storage.html)

#### AWS Mobile Hub
> Sets up backend. Gives you a single place to easily configure AWS services. It generates a cloud configuration file, which stores information about configured services. AWS Mobile SDK to connect to your backend.

#### AWS Cognito
> Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0.

#### [Facebook SDK for React](https://medium.com/front-end-hacking/facebook-authorization-in-a-react-app-b7a9176aacb6)

#### AWS S3
S3 API??? https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html

## Structure
![Components](./tiny-anthems-components4.png)
![Interface](./tiny-anthems-interface3.png)
