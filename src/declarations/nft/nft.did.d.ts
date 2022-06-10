import type { Principal } from '@dfinity/principal';
export interface NFT {
  'getName' : () => Promise<string>,
  'getOnwer' : () => Promise<Principal>,
  'getimage' : () => Promise<Array<number>>,
}
export interface _SERVICE extends NFT {}
