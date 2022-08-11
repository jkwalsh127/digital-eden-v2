// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BtcTrade, BtcSummary, EthTrade, EthSummary } = initSchema(schema);

export {
  BtcTrade,
  BtcSummary,
  EthTrade,
  EthSummary
};