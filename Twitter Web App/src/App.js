import React from 'react';
import LeftUtilityBar from './components/leftutility';
import MainUserPanel from './components/mainpanel';
import Sidebar from './components/sidebar';
import './App.css';

function App() {
  return (
    <div>
     <div className = "app"> 
      <div className = "main">
        <LeftUtilityBar></LeftUtilityBar>
        <MainUserPanel></MainUserPanel>
        <Sidebar></Sidebar>
      </div>
     </div>
    </div>
  );
}

export default App;
