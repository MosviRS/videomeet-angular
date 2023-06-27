import { Response } from "express";
export const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    console.error("Error: ", error);
    res.status(500).json({error});
};
  