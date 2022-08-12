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
  readonly priceEntry?: number | null;
  readonly priceClose?: number | null;
  readonly profitPrice?: number | null;
  readonly profitPercentage?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BtcTrade, BtcTradeMetaData>);
  static copyOf(source: BtcTrade, mutator: (draft: MutableModel<BtcTrade, BtcTradeMetaData>) => MutableModel<BtcTrade, BtcTradeMetaData> | void): BtcTrade;
}

export declare class BtcSummary {
  readonly id: string;
  readonly netProfitValue?: number | null;
  readonly netProfitPercent?: number | null;
  readonly grossProfit?: number | null;
  readonly grossLoss?: number | null;
  readonly netLong?: number | null;
  readonly grossLong?: number | null;
  readonly lossLong?: number | null;
  readonly netShort?: number | null;
  readonly grossShort?: number | null;
  readonly lossShort?: number | null;
  readonly buyAndHold?: number | null;
  readonly totalTrades?: number | null;
  readonly winningTrades?: number | null;
  readonly losingTrades?: number | null;
  readonly avgTrade?: number | null;
  readonly avgWin?: number | null;
  readonly avgLoss?: number | null;
  readonly winLossRatio?: number | null;
  readonly largestWinValue?: number | null;
  readonly largestWinPercent?: number | null;
  readonly largestWinDate?: string | null;
  readonly largestLossValue?: number | null;
  readonly largestLossPercent?: number | null;
  readonly largestLossDate?: string | null;
  readonly avgTime?: number | null;
  readonly avgTimeLoss?: number | null;
  readonly avgTimeWin?: number | null;
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
  readonly priceEntry?: number | null;
  readonly priceClose?: number | null;
  readonly profitPrice?: number | null;
  readonly profitPercentage?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EthTrade, EthTradeMetaData>);
  static copyOf(source: EthTrade, mutator: (draft: MutableModel<EthTrade, EthTradeMetaData>) => MutableModel<EthTrade, EthTradeMetaData> | void): EthTrade;
}

export declare class EthSummary {
  readonly id: string;
  readonly netProfitValue?: number | null;
  readonly net?: number | null;
  readonly grossProfit?: number | null;
  readonly grossLoss?: number | null;
  readonly netLong?: number | null;
  readonly grossLong?: number | null;
  readonly lossLong?: number | null;
  readonly netShort?: number | null;
  readonly grossShort?: number | null;
  readonly lossShort?: number | null;
  readonly buyAndHold?: number | null;
  readonly totalTrades?: number | null;
  readonly winningTrades?: number | null;
  readonly losingTrades?: number | null;
  readonly avgTrade?: number | null;
  readonly avgWin?: number | null;
  readonly avgLoss?: number | null;
  readonly winLossRatio?: number | null;
  readonly largestWinValue?: number | null;
  readonly largestWinPercent?: number | null;
  readonly largestWinDate?: string | null;
  readonly largestLossValue?: number | null;
  readonly largestLossPercent?: number | null;
  readonly largestLossDate?: string | null;
  readonly avgTime?: number | null;
  readonly avgTimeWin?: number | null;
  readonly avgTimeLoss?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EthSummary, EthSummaryMetaData>);
  static copyOf(source: EthSummary, mutator: (draft: MutableModel<EthSummary, EthSummaryMetaData>) => MutableModel<EthSummary, EthSummaryMetaData> | void): EthSummary;
}