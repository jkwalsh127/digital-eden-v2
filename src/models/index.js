// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BtcTrade, BtcSummary } = initSchema(schema);

export {
  BtcTrade,
  BtcSummary
};