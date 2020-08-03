import sharp from 'sharp';
import { logger } from './core/util/logger';

const img = sharp('./test/imagesource/codercat.jpg');
img.metadata().then((meta: any) => {
  return img
    .resize(Math.round(meta.width / 2))
    .grayscale()
    .rotate(90)
    .withMetadata()
    .png()
    .toFile(`./test/result/${Date.now()/1000}.png`, (data: any) => {
      logger.info(data);
    });
}).catch((err: Error) => {
  logger.info(err);
});

img.metadata().then((meta: any) => {
  return img
    .resize(Math.round(meta.width / 4))
    .grayscale()
    .rotate(90)
    .withMetadata()
    .png()
    .toFile(`./test/result/${Date.now()/1000}.png`, (data: any) => {
      logger.info(data);
    });
}).catch((err: Error) => {
  logger.info(err);
});