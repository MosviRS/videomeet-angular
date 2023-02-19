import { Response } from "express";
export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.log("error "+errorRaw);
    res.status(500).json({error});
};
  