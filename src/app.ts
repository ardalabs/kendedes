import sharp from 'sharp';


const img = sharp('./sample.jpeg')
img.metadata().then((meta: any) => {
  console.info(meta);
  return img
    .resize(Math.round(meta.width / 2))
    .grayscale()
    .rotate(90)
    .withMetadata()
    .png()
    .toFile('sample-2.png', (data: any) => { 

    })
}).catch((err: Error) => {
  console.info(err);
})