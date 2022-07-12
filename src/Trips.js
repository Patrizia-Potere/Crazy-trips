import React from 'react';
import data from "./data";
import Journey from './Journey';


function Trips() {
      return (
        <section>
          <header>
              <h1 className="trip-title">Crazy Trips</h1>
              <div className="box">
              <h2>Do you love travelling and also an adrenaline seeker? Here is some ideas that will make your next trip more adventurous ...</h2>
              <h2 style={{fontStyle:'italic'}}>...would you dare?</h2>
              </div>
          </header>
          <div>
          {data.map((journey,index) => {
          return (
            <Journey {...journey} key={index}/>
          )
          })}
          </div>
         </section>
      )
    };

    export default Trips;