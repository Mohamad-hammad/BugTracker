import React, { Component }  from 'react';
import Sidebar from './Sidebar/Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
class Home extends React.Component {
    render() {
      return (

        <div>
            <div className='row'>
                <div className='row border'>
                    this is top row
                </div>
                <div className='col-3 border '>
                 
                    <Sidebar></Sidebar>
                                     
                </div>

            </div>
        </div>
      )
    }
  }

export default Home;
