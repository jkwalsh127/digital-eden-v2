import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BtcTradeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BtcSummaryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BtcTrade {
  readonly id: string;
  readonly position: string;
  readonly entryDate?: string | null;
  readonly closeDate?: string | null;
  readonly entryPrice?: number | null;
  readonly closePrice?: number | null;
  readonly profitValue?: number | null;
  readonly profitPercentage?: number | null;
  readonly runUpValue?: number | null;
  readonly runUpPercentage?: number | null;
  readonly drawDownValue?: number | null;
  readonly drawDownPercentage?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BtcTrade, BtcTradeMetaData>);
  static copyOf(source: BtcTrade, mutator: (draft: MutableModel<BtcTrade, BtcTradeMetaData>) => MutableModel<BtcTrade, BtcTradeMetaData> | void): BtcTrade;
}

export declare class BtcSummary {
  readonly id: string;
  readonly netProfitValue?: number | null;
  readonly netProfitPercentage?: number | null;
  readonly grossProfitPercentage?: number | null;
  readonly grossLossPercentage?: number | null;
  readonly netLongPercentage?: number | null;
  readonly grossLongPercentage?: number | null;
  readonly lossLongPercentage?: number | null;
  readonly netShortPercentage?: number | null;
  readonly grossShortPercentage?: number | null;
  readonly lossShortPercentage?: number | null;
  readonly buyAndHoldPercentage?: number | null;
  readonly totalTrades?: number | null;
  readonly totalTradesLong?: number | null;
  readonly totalTradesShort?: number | null;
  readonly totalWins?: number | null;
  readonly totalWinsLong?: number | null;
  readonly totalWinsShort?: number | null;
  readonly totalLosses?: number | null;
  readonly totalLossesLong?: number | null;
  readonly totalLossesShort?: number | null;
  readonly percentProfitable?: number | null;
  readonly percentProfitableLongs?: number | null;
  readonly percentProfitableShorts?: number | null;
  readonly avgTradePercentage?: number | null;
  readonly avgTradePercentageLong?: number | null;
  readonly avgTradePercentageShort?: number | null;
  readonly avgWinPercentage?: number | null;
  readonly avgWinPercentageLong?: number | null;
  readonly avgWinPercentageShort?: number | null;
  readonly averageLossPercentage?: number | null;
  readonly averageLossPercentageLong?: number | null;
  readonly averageLossPercentageShort?: number | null;
  readonly winRatio?: number | null;
  readonly winRatioLong?: number | null;
  readonly winRatioShort?: number | null;
  readonly largestWinValueLong?: number | null;
  readonly largestWinPercentageLong?: number | null;
  readonly largestLossValueShort?: number | null;
  readonly largestWinPercentageShort?: number | null;
  readonly avgBarsInTrade?: number | null;
  readonly avgBarsInTradeLong?: number | null;
  readonly avgBarsInTradeShort?: number | null;
  readonly avgBarsInWin?: number | null;
  readonly avgBarsInWinLong?: number | null;
  readonly avgBarsInWinShort?: number | null;
  readonly avgBarsInLoss?: number | null;
  readonly avgBarsInLossLong?: number | null;
  readonly avgBarsInLossShort?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<BtcSummary, BtcSummaryMetaData>);
  static copyOf(source: BtcSummary, mutator: (draft: MutableModel<BtcSummary, BtcSummaryMetaData>) => MutableModel<BtcSummary, BtcSummaryMetaData> | void): BtcSummary;
}