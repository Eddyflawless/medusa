import crypto from "crypto";
export interface ICryptoHelper {
  encrypt(message: string): string;
  decrypt(message: string): string;
}

export abstract class CryptoHelper implements ICryptoHelper {
  cipher: crypto.Cipher;
  decipher: crypto.Decipher;

  securityKey = crypto.randomBytes(32);

  constructor(
    algorithm: string,
    securityKey: Buffer = crypto.randomBytes(32),
    initVector: Buffer = crypto.randomBytes(16)
  ) {
    this.cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
    this.decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
  }

  encrypt(data: any): string {
    return data + this.cipher.final("hex");
  }

  decrypt(decrpytedData: string): string {
    return decrpytedData + this.decipher.final("utf8");
  }
}
