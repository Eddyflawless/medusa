import Poseidon from "./core";
import dotenv from "dotenv";

// import crypto from "crypto";

// console.log("-->", crypto.randomBytes(32).toString("utf-8"));

dotenv.config();
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("No string passed :(");
  process.exit(1);
}

const parsed = args[0].replace("'", "");
const algo = process.env.ENCRYPTION_DECRYPTION_KEY;

if (!algo) {
  throw new Error("Encryption key not found or provided in .env file");
}

const result = new Poseidon(algo).encrypt(parsed);

console.log("result: " + result);
