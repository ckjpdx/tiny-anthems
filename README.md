# Tiny Anthems (static)
*by Chris Knight Johnson*
## Description
Created for local Portland musician Mike Long, this site will use persistent state via AWS, user sign in via OAuth, and host mp3 files via S3.

## [View App Planning Repo](https://github.com/ckjpdx/tiny-anthems-planning)
## Tech Used
* create-react-app.
* Material UI
* AWS S3
* AWS DynamoDB
* AWS Cognito
* AWS Lambda
* AWS API Gateway

## Install


## Goals
- [ ] Material UI is installed but still must be implemented: [Material UI](https://www.npmjs.com/package/material-ui)
- [ ] Display demo songs to play via portfolio
- [x] react-facebook npm is used to sign in users
- [ ] AWS S3 is used to static site files and store mp3 files
- [ ] AWS DynamoDB is used to put/get persistent state
- [ ] AWS Cognito is used to securely sign in users/admin

#### [Facebook SDK for React](https://medium.com/front-end-hacking/facebook-authorization-in-a-react-app-b7a9176aacb6)

#### AWS S3
S3 API??? https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html

aws s3 sync s3://wildrydes-us-east-1/WebApplication/1_StaticWebHosting/website s3://YOUR_BUCKET_NAME --region YOUR_BUCKET_REGION

## Resources
[Tutorial for building a Web Application with Amazon S3, Lambda, DynamoDB and API Gateway](https://codeburst.io/tutorial-for-building-a-web-application-with-amazon-s3-lambda-dynamodb-and-api-gateway-6d3ddf77f15a)
[Serverless Web Application Workshop](https://github.com/awslabs/aws-serverless-workshops/tree/master/WebApplication)
