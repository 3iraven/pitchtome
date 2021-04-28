import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './timeUntil';

const Featured = () => {
    return(

     <div className="container">
<div class="row bck_brand_blue">
  <div class="column">
  </div>
  <div class="column">
  <div className="featured_container">
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Pitch coach
                </div>
            </div>
            <TimeUntil/>
        </div>
  </div>
</div>
        </div>

    )
}

export default Featured;