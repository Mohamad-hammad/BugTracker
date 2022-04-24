import React from 'react';

import { Link } from 'react-router-dom';

import Manage from './Manage';
import AdminProjects from '../components/AdminProjects';
import AdminEmployees from '../components/AdminEmployees';
function Administration() {
    return (
        <div className='row'>
            <div className='row'>
                <AdminEmployees></AdminEmployees>
            </div>
            <div className='row'>
                <AdminProjects></AdminProjects>
            </div>
        </div>
    
    );
}

export default Administration;
