import { ParsedQs } from 'qs';
import { ParamsDictionary, Request, Response } from 'express-serve-static-core';

export namespace Controller {
  export function response(app: any) {}

  function doCommonResponse<ReqBody, ReqQs extends ParsedQs, Res = void>(
    app: any,
    path: string,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    callback: (req: Request<ParamsDictionary, any, ReqBody, ReqQs>, res: Response<Res>) => void,
  ) {
    app[method](`/api${path}`, async (req: Request<ParamsDictionary, any, ReqBody, ReqQs>, res: Response<Res>) => {
      console.log(`\nrequest: ${path}`);
      await callback(req, res);
    });
  }
}
