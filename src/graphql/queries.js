/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBtcTrade = /* GraphQL */ `
  query GetBtcTrade($id: ID!) {
    getBtcTrade(id: $id) {
      id
      position
      dateEntry
      dateClose
      priceEntry
      priceClose
      profitPrice
      profitPercentage
      createdAt
      updatedAt
    }
  }
`;
export const listBtcTrades = /* GraphQL */ `
  query ListBtcTrades(
    $filter: ModelBtcTradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBtcTrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        dateEntry
        dateClose
        priceEntry
        priceClose
        profitPrice
        profitPercentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBtcSummary = /* GraphQL */ `
  query GetBtcSummary($id: ID!) {
    getBtcSummary(id: $id) {
      id
      netProfit
      grossProfit
      grossLoss
      netLong
      grossLong
      lossLong
      netShort
      grossShort
      lossShort
      buyAndHold
      totalTrades
      winningTrades
      losingTrades
      avgTrade
      avgWin
      avgLoss
      winLossRatio
      largestWin
      largestWinDate
      largestLoss
      largestLossDate
      avgTime
      avgTimeWin
      avgTimeLoss
      createdAt
      updatedAt
    }
  }
`;
export const listBtcSummaries = /* GraphQL */ `
  query ListBtcSummaries(
    $filter: ModelBtcSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBtcSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        netProfit
        grossProfit
        grossLoss
        netLong
        grossLong
        lossLong
        netShort
        grossShort
        lossShort
        buyAndHold
        totalTrades
        winningTrades
        losingTrades
        avgTrade
        avgWin
        avgLoss
        winLossRatio
        largestWin
        largestWinDate
        largestLoss
        largestLossDate
        avgTime
        avgTimeWin
        avgTimeLoss
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEthTrade = /* GraphQL */ `
  query GetEthTrade($id: ID!) {
    getEthTrade(id: $id) {
      id
      position
      dateEntry
      dateClose
      priceEntry
      priceClose
      profitPrice
      profitPercentage
      createdAt
      updatedAt
    }
  }
`;
export const listEthTrades = /* GraphQL */ `
  query ListEthTrades(
    $filter: ModelEthTradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEthTrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        position
        dateEntry
        dateClose
        priceEntry
        priceClose
        profitPrice
        profitPercentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEthSummary = /* GraphQL */ `
  query GetEthSummary($id: ID!) {
    getEthSummary(id: $id) {
      id
      netProfit
      grossProfit
      grossLoss
      netLong
      grossLong
      lossLong
      netShort
      grossShort
      lossShort
      buyAndHold
      totalTrades
      winningTrades
      losingTrades
      avgTrade
      avgWin
      avgLoss
      winLossRatio
      largestWin
      largestWinDate
      largestLoss
      largestLossDate
      avgTime
      avgTimeWin
      avgTimeLoss
      createdAt
      updatedAt
    }
  }
`;
export const listEthSummaries = /* GraphQL */ `
  query ListEthSummaries(
    $filter: ModelEthSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEthSummaries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        netProfit
        grossProfit
        grossLoss
        netLong
        grossLong
        lossLong
        netShort
        grossShort
        lossShort
        buyAndHold
        totalTrades
        winningTrades
        losingTrades
        avgTrade
        avgWin
        avgLoss
        winLossRatio
        largestWin
        largestWinDate
        largestLoss
        largestLossDate
        avgTime
        avgTimeWin
        avgTimeLoss
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
