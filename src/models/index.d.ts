import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BtcTradeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BtcSummaryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EthTradeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EthSummaryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BtcTrade {
  readonly id: string;
  readonly position: string;
  readonly dateEntry?: string | null;
  readonly dateClose?: string | null;
  readonly priceEntry?: string | null;
  readonly priceClose?: string | null;
  readonly profitPrice?: string | null;
  readonly profitPercentage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BtcTrade, BtcTradeMetaData>);
  static copyOf(source: BtcTrade, mutator: (draft: MutableModel<BtcTrade, BtcTradeMetaData>) => MutableModel<BtcTrade, BtcTradeMetaData> | void): BtcTrade;
}

export declare class BtcSummary {
  readonly id: string;
  readonly netProfit?: string | null;
  readonly grossProfit?: string | null;
  readonly grossLoss?: string | null;
  readonly netLong?: string | null;
  readonly grossLong?: string | null;
  readonly lossLong?: string | null;
  readonly netShort?: string | null;
  readonly grossShort?: string | null;
  readonly lossShort?: string | null;
  readonly buyAndHold?: string | null;
  readonly totalTrades?: string | null;
  readonly winningTrades?: string | null;
  readonly losingTrades?: string | null;
  readonly avgTrade?: string | null;
  readonly avgWin?: string | null;
  readonly avgLoss?: string | null;
  readonly winLossRatio?: string | null;
  readonly largestWin?: string | null;
  readonly largestWinDate?: string | null;
  readonly largestLoss?: string | null;
  readonly largestLossDate?: string | null;
  readonly avgTime?: string | null;
  readonly avgTimeWin?: string | null;
  readonly avgTimeLoss?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BtcSummary, BtcSummaryMetaData>);
  static copyOf(source: BtcSummary, mutator: (draft: MutableModel<BtcSummary, BtcSummaryMetaData>) => MutableModel<BtcSummary, BtcSummaryMetaData> | void): BtcSummary;
}

export declare class EthTrade {
  readonly id: string;
  readonly position: string;
  readonly dateEntry?: string | null;
  readonly dateClose?: string | null;
  readonly priceEntry?: string | null;
  readonly priceClose?: string | null;
  readonly profitPrice?: string | null;
  readonly profitPercentage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EthTrade, EthTradeMetaData>);
  static copyOf(source: EthTrade, mutator: (draft: MutableModel<EthTrade, EthTradeMetaData>) => MutableModel<EthTrade, EthTradeMetaData> | void): EthTrade;
}

export declare class EthSummary {
  readonly id: string;
  readonly netProfit?: string | null;
  readonly grossProfit?: string | null;
  readonly grossLoss?: string | null;
  readonly netLong?: string | null;
  readonly grossLong?: string | null;
  readonly lossLong?: string | null;
  readonly netShort?: string | null;
  readonly grossShort?: string | null;
  readonly lossShort?: string | null;
  readonly buyAndHold?: string | null;
  readonly totalTrades?: string | null;
  readonly winningTrades?: string | null;
  readonly losingTrades?: string | null;
  readonly avgTrade?: string | null;
  readonly avgWin?: string | null;
  readonly avgLoss?: string | null;
  readonly winLossRatio?: string | null;
  readonly largestWin?: string | null;
  readonly largestWinDate?: string | null;
  readonly largestLoss?: string | null;
  readonly largestLossDate?: string | null;
  readonly avgTime?: string | null;
  readonly avgTimeWin?: string | null;
  readonly avgTimeLoss?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EthSummary, EthSummaryMetaData>);
  static copyOf(source: EthSummary, mutator: (draft: MutableModel<EthSummary, EthSummaryMetaData>) => MutableModel<EthSummary, EthSummaryMetaData> | void): EthSummary;
}