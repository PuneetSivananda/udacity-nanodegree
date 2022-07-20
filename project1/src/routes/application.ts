import path from 'path';
import { Request, Response, Router } from 'express';
import { existsSync } from 'fs';
import { IRequestItem } from '../models';
import { resizeImage } from '../controllers';
import urlParser from '../utils/urlParser';
const applicationRouter: Router = Router();

applicationRouter.get('/health', (req: Request, res: Response) => {
  return res.status(200).json({ ping: 'pong' });
});

applicationRouter.get(
  '/resize',
  urlParser,
  async (
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>> | void> => {
    // middle ware to parse url params
    // from params check if file exists
    // if exists return in response file
    // else call file creation
    // call generate and return the file from generate

    // search in cache
    const requestObj: IRequestItem = {
      name: res.locals.name,
      width: res.locals.width,
      height: res.locals.height
    };
    console.log(requestObj);
    // find file in path
    // exists send the file
    // does not exist generate and send file

    // handling a custom cache was expensive cause spaghetti code switching to reading from fs

    const filePath = path.resolve(
      `./upload/process/${requestObj.name}_${requestObj.width}_${requestObj.height}.jpg`
    );

    try {
      if (existsSync(filePath)) {
        return res.status(200).sendFile(filePath);
      } else {
        const fileDetail = await resizeImage(
          requestObj['name'] ? requestObj['name'] : '',
          parseInt(res.locals.width),
          parseInt(res.locals.height)
        );
        return res.status(200).sendFile(`${fileDetail?.destPath}`);
      }
    } catch (error) {
      if (!existsSync(filePath)) {
        const err = new Error('Unable to open file');
        return res.status(404).send({
          message: 'Error Processing Image',
          errorMessage: err.message
        });
      }
    }
  }
);

export default applicationRouter;
