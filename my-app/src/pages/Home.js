import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Doughnut } from "react-chartjs-2";
import DonutPieChart from '../components/DonutPieChart';
import CreateProject from './CreateProject';
import RecentTicketUpdates from '../components/RecentTicketUpdates';
import Manage from './Manage'
export const TicketsByType = {
  labels: ['Bug', 'Issue', 'Feature Request'],
  datasets: [
    {
      label: '# of Tickets',
      data: [12, 19, 15],
      backgroundColor: [
        '#cd5c5c',
        '#00bfff',
        '#e1ad01',
        
      ],
     
    },
  ],
};
export const TicketsByPriority = {
  labels: [ 'High', 'Low','Medium'],
  datasets: [
    {
      label: '# of Tickets',
      data: [19, 15,12],
      backgroundColor: [
        '#cd5c5c',
        '#00bfff',
        '#e1ad01',
       
      ]
    },
  ],
};
export const TicketsByStatus = {
  labels: ['New', 'Resolved', 'In Progress'],
  datasets: [
    {
      label: '# of Tickets',
      data: [123, 19, 15],
      backgroundColor: [
        '#cd5c5c',
        '#00bfff',
        '#e1ad01',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};
function Home() {
  return (
    <div className="container-fluid" style={{backgroundColor:"#Ecf3f9"}}>
            
      <div className='row'>
        <div className='row'>
          <div className='col-1'></div>
        
          <div className='ticketcol col m-3 border shadow p-3 mb-5 bg-white rounded' >
            <div className='row d-flex justify-content-center'>
              <h4 className='ticketHeading d-flex justify-content-center'>
                Tickets by Type
              </h4>
            </div>
              <div className='row d-flex justify-content-center'>
                <div style={{position: "relative", height:"300px", width:"300px"}}>    
                  <DonutPieChart data={TicketsByType}/>
                </div>
              </div>
          </div>   

          <div className='ticketcol col m-3 border shadow p-3 mb-5 bg-white rounded' >
            <div className='row d-flex justify-content-center'>
              <h4 className='ticketHeading d-flex justify-content-center'>
                Tickets by Priority
              </h4>
            </div>
              <div className='row d-flex justify-content-center'>
                <div style={{position: "relative", height:"300px", width:"300px"}}>    
                  <DonutPieChart data={TicketsByPriority}/>
                </div>
              </div>
          </div>       
          
          <div className='ticketcol col m-3 border shadow p-3 mb-5 bg-white rounded' >
            <div className='row d-flex justify-content-center'>
              <h4 className='ticketHeading d-flex justify-content-center'>
                Tickets by Status
              </h4>
            </div>
              <div className='row d-flex justify-content-center'>
                <div style={{position: "relative", height:"300px", width:"300px"}}>    
                  <DonutPieChart data={TicketsByStatus}/>
                </div>
              </div>
          </div>
      </div>
      
      <div className='row '>
          <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
              <RecentTicketUpdates></RecentTicketUpdates>
            </div>
          </div>

          <div className='row'>
            <div className='col-1'></div>
            <div className='col-11'>
              <Manage></Manage>
            </div>
          </div>
          
      </div>
      </div>

    </div>
  );
}

export default Home;
