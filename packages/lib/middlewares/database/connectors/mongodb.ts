import * as mongoose from "mongoose";

const init = async () => {
  await mongoose.connect("mongodb://localhost:27017/dogsDB");
};

await init();

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface thirdParties {
  host: string;
  isAllowed: boolean;
}

//define schemas here
export const company = new mongoose.Schema({
  name: String,
  description: String,
  logo: String,
  allowedIps: Array,
  thirdParties: Array<thirdParties>,
  createdAt: Date,
});

export const companyParties = new mongoose.Schema({
  companyId: String,
});

export const hooks = new mongoose.Schema({
  companyId: String,
  retryCount: Number,
  message: String,
  from: String,
  isRead: Boolean,
  isReadTimes: Number,
  createdAt: Date,
});

export {};
