import React from 'react';
import '../style/main.css'
import Employee from './Employee';
import admin from '../img/favicon.ico';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, container, row, col } from 'react-bootstrap'
import Activities from './Activities';


const Main = () => {

    return (
        <div className='row ain'>

            <div className='col-md-9 left'>
                <div className='row admin mb-5 mt-5'>
                    <h3 className='col' style={{textAlign:'left'}}>Overview</h3>
                </div>

               
                

                <div className='row over mb-5'>
                    <div className='col-3 me-2'>
                        <div className='revenue'>
                            <p>Revenue</p>
                            <h3>N20,000,000</h3>
                            <p>March <span> 10%</span></p>
                        </div>
                        
                        
                    </div>
                    <div className='col-2'>
                        <div className='rec'>
                            <p>Total Sales</p>
                            <h3>42</h3>
                            <p>March <span> 10%</span></p>
                        </div>
                       
                        
                    </div>

                    <div className='col-2'>
                        <div className='rec1'>
                            <p>Employee</p>
                            <h3>21</h3>
                            <p>March <span> 10%</span></p>
                        </div>
                       
                        
                    </div>

                    <div className='col-2'>
                        <div className='rec2'>
                            <p>Client</p>
                            <h3>24</h3>
                            <p>March <span> 10%</span></p>
                        </div>
                       
                        
                    </div>
                    
                    
                    
                    
                    
                </div>

                <div className='row employee mb-5'>
                    <div className='col emp mb-2 mt-5'>
                        <h4>Latest Activities</h4>
                    </div>
                    <div className='col-12'>
                        <Activities name1='one' name2='two' name3='three' />
                        <Activities name1='one' name2='two' name3='three' />
                        <Activities name1='one' name2='two' name3='three' />
                        <Activities name1='one' name2='two' name3='three' />
                        <Activities name1='one' name2='two' name3='three' />
                        <Activities name1='one' name2='two' name3='three' />
                    </div>
                    
                    
                </div>
        
            </div>

            <div className='col-md-3 right'>
               
                    <div className='row admin mb-5 mt-5'>
                        <img src={admin} alt="" className='col-3 stf' /><h3 className='col-9'>Administrator</h3>
                    </div>

               
                

                <div className='row employee mb-5'>
                    <div className='col emp mb-2 mt-5'>
                        <h4>Employees</h4><Button className='btn-sm ms-3'>21</Button>
                    </div>
                    <div className='col-12'>
                        <Employee />
                        <Employee />
                        <Employee />
                        <Employee />
                    </div>
                    
                    
                </div>

                <div className='row contact mb-5'>
                    <div className='col con mb-2 mt-5'>
                        <h4>Contacts</h4><Button className='btn-sm ms-3'>21</Button>
                    </div>
                    
                    <div className='col-12'>
                        <Employee />
                        <Employee />
                        <Employee />
                        <Employee />
                        <Employee />
                        <Employee />
                        <Employee />
                    </div>
                </div>


                

                
        
             </div>

        
        </div>

    );

}

export default Main;