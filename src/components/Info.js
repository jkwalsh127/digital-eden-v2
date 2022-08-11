import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material';
import { API } from 'aws-amplify';
import React, { useEffect, useState  } from 'react';
import { listBtcTrades } from '../graphql/queries';
import photo from '../images/btc-bot-results.png';
import imageLeft from '../images/left.png';
import imageRight from '../images/right.png';

function Info() {
  const [btcTrades, setBtcTrades] = useState([]);

  useEffect(() => {
    fetchBtcTrades();
  }, []);

  async function fetchBtcTrades() {
    const apiData = await API.graphql({ query: listBtcTrades });
    setBtcTrades(apiData.data.listBtcTrades.items);
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
          btcTrades.map(trade => (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {
                    trade.position === "long" ? <ArrowCircleUp /> : <ArrowCircleDown />
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
      </div>

      <div className='info-right-container' style={{backgroundImage: `url(${imageRight})`}}></div>
      <div style={{backgroundColor: "#061000", opacity: ".8"}}></div>
    </div>
  );
};

export default Info;
