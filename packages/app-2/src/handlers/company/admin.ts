import { Handler } from "express";

export const profileHandler: Handler = async (_req, res) => {
  //const {db, log} = req;
  return res.status(200).send({ msg: "get company profile" });
};

export const profileUpdateHandler: Handler = async (_req, res) => {
  //const {db, log} = req;
  return res.status(200).send({ msg: "company profile update" });
};

export const settingsHandler: Handler = async (_req, res) => {
  //const {db, log} = req;
  return res.status(200).send({ msg: "Get company settings" });
};
