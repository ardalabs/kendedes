import { logger } from './logger';
import * as AWS from 'aws-sdk';

interface IArdaS3Helper {
  validateBuckets(name: string): Promise<any>;
}
class ArdaS3Helper {

  constructor() { }
  async validateBuckets(name: string): Promise<any> {
    const formattedBucket: string = name.replace(/\s/g, '');
    logger.info(`trying to validate bucket with format ${formattedBucket}`);

    const buckets = formattedBucket.split(',');
    const errorBuckets = []
    return new Promise(async (resolve, reject) => {

      for (let i = 0; i < buckets.length; i++) {

        const s3 = new AWS.S3({ signatureVersion: 'v4' });
        const params = { Bucket: buckets[i] };

        try {
          await s3.headBucket(params).promise();
          logger.info(`Found bucket: ${buckets[i]}`);
        } catch (err) {
          logger.error(`Could not find bucket: ${buckets[i]}`);
          errorBuckets.push(buckets[i]);
        }
      }
      if (errorBuckets.length > 0) { 
        return reject(errorBuckets);
      }
      resolve(`${formattedBucket} is valid bucket name`);
    })
  }
}