const AWS = require('aws-sdk');
require('dotenv').config();

const accessKey = process.env.S3_ACCESS_KEY_ID
const secretKey = process.env.S3_SECRET_ACCESS_KEY

const s3 = new AWS.S3({
    region: 'us-west-1',
    // accessKeyId: accessKey,
    // secretAccessKey: secretKey

});

// Creating a bucket on AWS S3
// s3.createBucket({
//     Bucket: 'nofreetoes2'
// }, (error, success) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(success);
//     }
// });


// Test adding a file to the bucket
// s3.putObject({
//     Bucket: 'nofreetoes2',
//     Key: 'test.txt',
//     Body: 'Hello World!'
// }, (error, success) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(success);
//     }
// });


// Test deleting a file from the bucket
s3.deleteObject({
    Bucket: 'nofreetoes2',
    Key: 'test.txt'
}, (error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log(success);
    }
});


