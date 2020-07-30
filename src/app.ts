import sharp from 'sharp';
import { logger } from './core/util/logger';

const img = sharp('./sample.jpeg');
img.metadata().then((meta: any) => {
  logger.info(meta);
  return img
    .resize(Math.round(meta.width / 2))
    .grayscale()
    .rotate(90)
    .withMetadata()
    .png()
    .toFile('sample-2.png', (data: any) => {
      logger.info(data);
    });
}).catch((err: Error) => {
  logger.info(err);
});
