# Tiny Anthems (static)
*by Chris Knight Johnson*
## Description
Created for local Portland musician Mike Long. AWS services are used to gather questionnaires from customers in need of a personalized song about their life, allow the musician to retrieve the questionnaires for music making, and then post their song securely for downloading.

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
- [ ] Material UI is installed, but still must be implemented
- [ ] Display demo songs to play via portfolio
- [x] react-facebook npm is used to sign in users (may be removed)
- [ ] AWS S3 is used to static site files and store mp3 files
- [ ] AWS DynamoDB is used to put/get persistent state
- [ ] AWS Cognito is used to securely sign in users/admin

#### AWS S3
S3 API??? https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html

aws s3 sync s3://wildrydes-us-east-1/WebApplication/1_StaticWebHosting/website s3://YOUR_BUCKET_NAME --region YOUR_BUCKET_REGION

## Resources
* [Tutorial for building a Web Application with Amazon S3, Lambda, DynamoDB and API Gateway](https://codeburst.io/tutorial-for-building-a-web-application-with-amazon-s3-lambda-dynamodb-and-api-gateway-6d3ddf77f15a)
* [Serverless Web Application Workshop](https://github.com/awslabs/aws-serverless-workshops/tree/master/WebApplication)
* [Material UI](https://www.npmjs.com/package/material-ui)

## Structure
![components tree](tiny-anthems-components4.png)
![interface tree](tiny-anthems-interface3.png)
