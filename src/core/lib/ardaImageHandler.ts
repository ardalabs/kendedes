import * as AWS from 'aws-sdk';
import sharp from 'sharp';
import { IS3Metadata } from '@core/util/shared/IS3Metadata';
import { IArdaCropArea } from '@core/util/shared/ICropArea';


interface IArdaImageHandler {

  applyTransformation(
    imagepath: string,
    transform?: any): Promise<any>
  
  getOverlayImage(
    bucket: string,
    key: string,
    widthRatio?: number,
    heightRatio?: number,
    alpha?: number,
    imageMetaData?: IS3Metadata): Promise<any>
  
  getCropArea(
    boundingBox: IArdaCropArea,
    options: any,
    metaData: IS3Metadata): Promise<any>;
  
  getBoundingBox(
    imageBuffer: any,
    faceIndex?: number): Promise<any>;
}
export class ArdaImageHandler implements IArdaImageHandler { 
  constructor() { }

  getBoundingBox(imageBuffer: any, faceIndex?: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  getCropArea(boundingBox: IArdaCropArea, options: any, metaData: IS3Metadata): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getOverlayImage(bucket: string, key: string, widthRatio?: number, heightRatio?: number, alpha?: number, imageMetaData?: IS3Metadata): Promise<any> {
    throw new Error("Method not implemented.");
  }
  
  async applyTransformation(imagepath: string, transform?: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
export default ArdaImageHandler;