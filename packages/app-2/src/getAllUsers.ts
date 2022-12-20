import { Request, Response } from "express";

const GetAllUsersRequest = (_req: Request, res: Response) => {
  const users = [
    {
      name: "Dora",
      age: 30,
    },
    {
      name: "Emmanuel",
      age: 24,
    },
  ];

  return res.json({ users });
};

export default GetAllUsersRequest;
