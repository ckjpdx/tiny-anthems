# Tiny Anthems (static)
*by Chris Knight Johnson*
## Description
Created for local Portland musician Mike Long, this site will use persistent state via AWS, user sign in via OAuth, and host mp3 files via S3.

## [View App Planning Repo](https://github.com/ckjpdx/tiny-anthems-planning)
## Tech Used
* create-react-app.
* Material UI
* AWS S3
* AWS Cognito

## Install


## Goals
- [ ] Material UI is installed but still must be implemented: [Material UI](https://www.npmjs.com/package/material-ui)
- [ ] Display demo songs to play via portfolio
- [ ] AWS user database is used to put/get persistent state
- [ ] AWS S3 is used to store mp3 files
- [ ] Auth0 is used to securely sign in users/admin

## Resources

### [AWS Mobile](https://aws.amazon.com/mobile/)
> AWS Mobile gives you the tools to rapidly configure and integrate the cloud backend your mobile app needs.

#### [AWS Amplify](https://github.com/aws/aws-amplify)
> AWS Amplify is an open source JavaScript library for frontend and mobile developers building cloud-enabled applications. The AWS Mobile CLI, built on AWS Mobile Hub, provides a command line interface for frontend JavaScript developers to seamlessly enable and configure AWS services into their apps.

[Adding User Data Storage](https://docs.aws.amazon.com/aws-mobile/latest/developerguide/web-add-storage.html)

#### AWS Mobile Hub
> Sets up backend. Gives you a single place to easily configure AWS services. It generates a cloud configuration file, which stores information about configured services. AWS Mobile SDK to connect to your backend.

#### AWS Cognito

#### AWS S3

S3 API??? https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html

Questions for the TEACH:
am i building a "cloud" app?
combine AWS Cognito + AWS S3?
where does the persistent state live? S3 or cognito or elsewhere?
redux?
