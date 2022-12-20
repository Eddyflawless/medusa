import { Request, Response } from "express";
import GetAllUsersRequest from "../../src/getAllUsers";

describe("Get all users request", () => {
  test("returns with all users", async () => {
    let responseObject = {};

    const response: Partial<Response> = {
      json: jest.fn().mockImplementation((result) => {
        responseObject = result;
      }),
    };

    const request = {};

    const expectedUsers = [
      {
        name: "Dora",
        age: 30,
      },
      {
        name: "Emmanuel",
        age: 24,
      },
    ];

    GetAllUsersRequest(request as Request, response as Response);

    expect(responseObject).toEqual({ users: expectedUsers });
  });
});
