import React from 'react';
import admin from '../img/favicon.ico';
import '../style/main.css'

const Employee = () => {
    return (
        <div className='row staff mb-3'>
            <img src={admin} alt="" className='col-3' /><span className='col-9'><h5>Aslam Dhikrullah</h5>
            <p>Admin</p></span>
        
        </div>

    );

}

export default Employee;