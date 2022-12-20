import { Handler } from "express";

export const callbackHandler: Handler = async (_req, res) => {
  //const {db, log} = req;
  return res.status(200).send();
};
