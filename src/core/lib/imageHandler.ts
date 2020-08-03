import * as AWS from 'aws-sdk';
import sharp from 'sharp';
import { IKendedesS3Metadata } from '@core/util/shared/IKendedesS3Metadata';
import { IKendedesCropArea } from '@core/util/shared/IKendedesCropArea';


interface IKendedesImageHandler {

  applyTransformation(
    imagepath: string,
    transform?: any): Promise<any>
  
  getOverlayImage(
    bucket: string,
    key: string,
    widthRatio?: number,
    heightRatio?: number,
    alpha?: number,
    imageMetaData?: IKendedesS3Metadata): Promise<any>
  
  getCropArea(
    boundingBox: IKendedesCropArea,
    options: any,
    metaData: IKendedesS3Metadata): Promise<any>;
  
  getBoundingBox(
    imageBuffer: any,
    faceIndex?: number): Promise<any>;
}

export class KendedesImageHandler implements IKendedesImageHandler { 
  constructor() { }

  getBoundingBox(
    imageBuffer: any,
    faceIndex?: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  getCropArea(
    boundingBox: IKendedesCropArea,
    options: any,
    metaData: IKendedesS3Metadata): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async getOverlayImage(
    bucket: string,
    key: string,
    widthRatio?: number,
    heightRatio?: number,
    alpha?: number,
    imageMetaData?: IKendedesS3Metadata): Promise<any> {
    throw new Error("Method not implemented.");
  }
  
  async applyTransformation(
    imagepath: string,
    transform?: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
export default KendedesImageHandler;