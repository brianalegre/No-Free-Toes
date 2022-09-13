const AWS = require('aws-sdk');
require('dotenv').config();

// const accessKeyId = process.env.S3_ACCESS_KEY_ID
// const secretAccessKey = process.env.S3_ACCESS_KEY_ID

const s3 = new AWS.S3({
    region: 'us-west-1',
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_ACCESS_KEY_ID
});

// Creating a bucket on AWS S3
s3.createBucket({
    Bucket: 'nofreetoes2'
}, (error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
});
