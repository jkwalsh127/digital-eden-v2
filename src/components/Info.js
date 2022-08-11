import { ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import { Avatar, ListItem, ListItemAvatar, Typography } from '@mui/material';
import React from 'react';
import photo from '../images/btc-bot-results.png';
import Footer from './Footer';

function Info({trades}) {
  return (
    <div className="info-container">
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
      <Footer />
    </div>
  );
};

export default Info;
