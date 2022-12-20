// import { NextFunction, Request, Response } from "express";

// export interface ActionToFunctionMap {
//     count: any;
//     // create: CreateQuery;
//     // find: FindQuery;
//     // findOne: FindQuery;
//     // findById: FindByIdQuery;
//     // update: UpdateQuery;
//     // updateMany: UpdateQuery;
//     // findOneAndUpdate: FindOneAndUpdateQuery;
//     // deleteOne: DeleteOneQuery;
//     // deleteMany: DeleteQuery;
//     // aggregate: AggregateQuery;
//     // Queries: QueriesQuery;
// }

// const mockHasRole = () => {
//     return jest.fn();
// }

// const mockActionToFunctionMap = () => {
//     return {
//         count: jest.fn() as jest.MockedFunction<ActionToFunctionMap["count"]>,
//         create: jest.fn() as jest.MockedFunction<ActionToFunctionMap["count"]>
//     }
// }

// const mockDb = () => {

//     return  {
//         Account: mockActionToFunctionMap()
//     }
// }

// export type MockedHasRole = ReturnType<typeof mockHasRole>;

// // MockedResponse type
// export type MockedResponse = Response & {
//     status: jest.MockedFunction<Response["status"]>;
//     send: jest.MockedFunction<Response["send"]>;
// }

// export const mockResponse = (): MockedResponse => {
//     const res = {} as Response;
//     res.status = jest.fn().mockReturnValue(res);
//     res.send = jest.fn().mockReturnValue(res);
//     res.json = jest.fn().mockReturnValue(res);

//     return res as MockedResponse;
// }

// // MockedRequest type
// export type MockedRequest = Request & {
//     db: any;
//     logger: any;
//     user?: any;
// }

// export const mockRequest = (mocks?: Partial<Request>): MockedRequest => {
//     const req = {} as Request;
//     //req.db = mockDb();
//     // req.hasRole = mockHasRole();

//     return { ...req, ...mocks } as MockedRequest;
// }

// export const mockNext = (): NextFunction => jest.fn()

export {};
