import { CryptoHelper } from "./interfaces";

/**
 * Poseidon uses aes-256-cbc algorithm to encrypt/decrypt
 */
export default class Poseidon extends CryptoHelper {
  constructor(securityKey: string) {
    super("aes-256-cbc", Buffer.from(securityKey));
  }

  encrypt(data: string): string {
    const encryptedData = this.cipher.update(data, "utf-8", "hex");
    return super.encrypt(encryptedData);
  }

  decrypt(encrpytedData: string): string {
    const decryptedData = this.decipher.update(encrpytedData, "hex", "utf-8");
    return super.decrypt(decryptedData);
  }
}
