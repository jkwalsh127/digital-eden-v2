import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listBtcTrades } from '../graphql/queries';
import Hero from '../components/Hero/Hero';
import Info from '../components/Info';


export default function Landing() {

    const [poster, setPoster] = useState(false);

    const [trades, setTrades] = useState([]);

    useEffect(() => {
      fetchTrades();
    }, []);
  
    async function fetchTrades() {
      const apiData = await API.graphql({ query: listBtcTrades });
      setTrades(apiData.data.listBtcTrades.items);
    }

    return (
        <div>

            <Hero setPoster={setPoster} poster={poster} />
            <Info trades={trades} />


        </div>
    );
}