import React from 'react';
import './App.css';
import DashBoard from './components/DashBoard'
import Store from './components/Store'

function App() {
  return (
    <div className="App">
      <Store>
        <DashBoard/>
      </Store>
    </div>
  );
}

export default App;
