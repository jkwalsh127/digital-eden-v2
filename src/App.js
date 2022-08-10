import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/AppMediaQuery.css';
import Header from './components/Header';
import Algorithms from './pages/Algorithms';
import Miners from './pages/Miners';

function App() {



  return (
    <Authenticator>
      {({ signOut }) => (
        <Router>
          <Header poster={poster}/>
          <Routes>
            <Route
              path="/algorithms"
              element={<Algorithms />}
            />
            <Route
              path="/miners"
              element={<Miners />}
            />
            <Route
              path="*"
              element={<Algorithms />}
            />
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;
