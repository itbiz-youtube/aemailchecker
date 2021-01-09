import React from 'react';
// import './MainView.css';
import BootstrapNavbar from './BootstrapNavbar';

class MainView extends React.Component {

  render(){
      
      return (
        
        <div className = "MainScreen">
            <BootstrapNavbar></BootstrapNavbar>
        </div>
      );
    }
  }
  
export default MainView;