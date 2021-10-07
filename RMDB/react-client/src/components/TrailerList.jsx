import React from 'react';


const TrailerList = (props) => (
  <div className="trailer">  
   
      {props.trailers.map((e,key)=>{
        return(
          <div key={key} className="item1"> <img id="poster"  src={e.poster} /> </div>
        )
      })}
  </div>

);

export default TrailerList;


