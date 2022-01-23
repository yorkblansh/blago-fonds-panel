import { Response as IResponse } from 'express';

export interface Ibuild_script {
   (obj: { res: IResponse; __dirname: string }): void;
}
