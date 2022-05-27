import { Transaction } from "./transaction";

export interface MappingData {
  [key: string]: number;
}

export interface Block {
  previousHash: string;
  nonce: number;
  difficulty: number;
  transactions: Transaction[];
  miner: string;
  currentHash: string;
  mappingData: MappingData;
  timestamp?: number;
}
