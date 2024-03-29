import React from 'react';
import admin from '../img/favicon.ico';
import '../style/main.css'

const Navbar = () => {
    return (
        <div className='row nav'>
            <div className='col fat'>
               
                <img src={admin} alt="" className='col-3 me-2 stf' /><h3 className='col-9'>Fastra<span className='sui'>suite</span></h3>
                
            </div>
            <div className='col'>
                
            </div>

        </div>

    );

}

export default Navbar;