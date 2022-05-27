export interface Transaction {
  toStorage: number;
  randomBytes: string;
  previousBlock: string;
  sender: string;
  receiver: string;
  value: number;
  reason: string;
  currentHash: string;
  signature: string;
}
