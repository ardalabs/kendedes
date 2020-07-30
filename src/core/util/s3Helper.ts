import { logger } from './logger';
import * as AWS from 'aws-sdk';

interface IArdaS3Helper {
  validateBuckets(name: string): Promise<any>;
}
export class ArdaS3Helper implements IArdaS3Helper {

  // constructor() { }
  async validateBuckets(name: string): Promise<any> {
    const formattedBucket: string = name.replace(/\s/g, '');
    logger.info(`trying to validate bucket with format ${formattedBucket}`);

    const buckets = formattedBucket.split(',');
    const errorBuckets: any[] = [];
    return new Promise(async (resolve, reject) => {
      for (const bucket of buckets) {
        const s3 = new AWS.S3({ signatureVersion: 'v4' });
        const params = { Bucket: bucket };
        try {
          await s3.headBucket(params).promise();
          logger.info(`Found bucket: ${bucket}`);
        } catch (err) {
          logger.error(`Could not find bucket: ${bucket}`);
          errorBuckets.push(bucket);
        }
      }

      if (errorBuckets.length > 0) {
        return reject(errorBuckets);
      }
      resolve(`${formattedBucket} is valid bucket name`);
    });
  }
}
