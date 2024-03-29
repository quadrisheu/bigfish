import React from 'react';
import admin from '../img/favicon.ico';
import '../style/main_right.css'

const Activities = (props) => {
    return (
        <div className='row staff mb-3'>
            {/* <img src={admin} alt="" className='col-3 rounded' style={{width: '70px', height: '60px'}} /><h5 className='col-9'>Employee<span className='act'> Admin</span></h5> */}
            <span className='col-2 circle'></span><h5 className='col-10'>{props.name1}<span className='act'> {props.name2}</span>{props.name3}</h5>
           
        </div>

    );

}

export default Activities;