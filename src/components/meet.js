import '../components/meet.css';

import React from 'react';
 
const Meet = () => {
    return (
       <div>
          <h2>Meet our Team</h2>

        <div class="row">
        <div className="column">
            <div className="card">
            <div className="container">
            <h2>Jeremie</h2>
            <p className="title">Title</p>
            <p><button className="button"></button></p> 
            </div>                    
            </div>
        </div>

            
        <div className="column">
            <div className="card">
            <div className="container">
            <h2>Nike</h2>
            <p className="title">Title</p>
            <p><button className="button"></button></p> 
            </div>                    
            </div>
        </div>




        <div className="column">
            <div className="card">
            <div className="container">
            <h2>Stephanie</h2>
            <p className="title">Title</p>
            <p><button className="button"></button></p> 
            </div>                    
            </div>
        </div>




          </div>
       </div>
    );
}
 
export default Meet;