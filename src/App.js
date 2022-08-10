import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "@aws-amplify/ui-react/styles.css";
import './indexMediaQueries.css';
import Header from './components/Header';
import Algorithms from './pages/Algorithms';
import Miners from './pages/Miners';
import { Authenticator } from "@aws-amplify/ui-react";

function App() {



  return (
    <Authenticator>
      {({ signOut }) => (
        <Router>
          <Header />
          <Routes>
            <Route
              path="/algorithms"
              element={<Algorithms signOut={signOut} />}
            />
            <Route
              path="/miners"
              element={<Miners signOut={signOut} />}
            />
            <Route
              path="*"
              element={<Algorithms signOut={signOut} />}
            />
          </Routes>
        </Router>
      )}
    </Authenticator>
  );
}

export default App;
