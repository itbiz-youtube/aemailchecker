import React from 'react';
// import './MainView.css';
import BootstrapNavbar from './BootstrapNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

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