import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material';
import React from 'react';
import photo from '../images/btc-bot-results.png';
import imageLeft from '../images/left.png';
import imageRight from '../images/right.png';

function Info({trades}) {
  return (
    <div className="info-container">

      <div style={{backgroundColor: "#061000", opacity: ".8"}}></div>
      <div className='info-left-container' style={{backgroundImage: `url(${imageLeft})`}}></div>

      <div className='info-wrapper'>
        <div className='backtest-wrapper'>
          <img className="backtest-results" src={photo} alt="backtest results" /> 
        </div>
        {
          trades.map(trade => (
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
