import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material';
import React, { useEffect, useState  } from 'react';
import photo from '../images/btc-bot-results.png';
import imageLeft from '../images/left.png';
import imageRight from '../images/right.png';
import { DataStore } from '@aws-amplify/datastore';
import { BtcTrade, BtcSummary } from '../models';
// import { API } from 'aws-amplify';
// import { listBtcTrades } from '../graphql/queries';

function Info() {
  const [arrayBtcTrades, setBtcTrades] = useState([]);
  const [arrayBtcSummary, setBtcSummary] = useState([]);

  useEffect(() => {
    fetchBtcTrades();
    fetchBtcSummary();
  }, []);

  async function fetchBtcTrades() {
    const models = await DataStore.query(BtcTrade);
    console.log(models);
    setBtcTrades(models);
    // console.log(arrayBtcTrades);
    // const apiData = await API.graphql({ query: listBtcTrades });
    // setBtcTrades(apiData.data.listBtcTrades.items);
    // console.log(arrayBtcTrades);
  }
  async function fetchBtcSummary() {
    const models = await DataStore.query(BtcSummary);
    console.log(models);
    setBtcSummary(models);
    // console.log(arrayBtcTrades);
    // const apiData = await API.graphql({ query: listBtcTrades });
    // setBtcTrades(apiData.data.listBtcTrades.items);
    // console.log(arrayBtcTrades);
  }

  return (
    <div className="info-container">

      <div style={{backgroundColor: "#061000", opacity: ".8"}}></div>
      <div className='info-left-container' style={{backgroundImage: `url(${imageLeft})`}}></div>

      <div className='info-wrapper'>
        <div className='backtest-wrapper'>
          <img className="backtest-results" src={photo} alt="backtest results" /> 
        </div>
        {
          arrayBtcTrades.map(trade => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {
                    trade.position === "long" || "Long" ? <ArrowCircleUp /> : <ArrowCircleDown />
                  }
                </Avatar>
              </ListItemAvatar>
              <Typography>
                {trade.dateEntry} to {trade.dateClose}
              </Typography>
              <Typography>
                {trade.PriceEntry} to {trade.PriceClose} total {trade.profitPrice} {trade.profitPercentage}
              </Typography>
            </ListItem>
          ))
        }
        {
          arrayBtcSummary.map(summary => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                </Avatar>
              </ListItemAvatar>
              <Typography>
              </Typography>
              <Typography>
                {summary.netProfit}{summary.grossProfit}{summary.grossLoss}{summary.netLong}{summary.grossLong}{summary.lossLong}{summary.netShort}{summary.grossShort}{summary.lossShort}{summary.buyAndHold}{summary.totalTrades}{summary.winningTrades}{summary.losingTrades}{summary.avgTrade}{summary.avgWin}{summary.avgLoss}{summary.winLossRatio}{summary.largestWin}{summary.largestWinDate}{summary.largestLoss}{summary.largestLossDate}{summary.avgTime}{summary.avgTimeWin}{summary.avgTimeLoss}{summary.createdAt}{summary.updatedAt}
              </Typography>
            </ListItem>
          ))
        }
      </div>

      <div className='info-right-container' style={{backgroundImage: `url(${imageRight})`}}></div>
      <div style={{backgroundColor: "#061000", opacity: ".8"}}></div>
    </div>
  );
};

export default Info;
