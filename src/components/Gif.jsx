import React from 'react';
const Gif = ({gifProp}) => {
    return (
        <div>
            <img src={gifProp[0]} className="card-img-top" alt=""></img>
            <h3>{gifProp[1]}</h3>
        </div>
      );
}
 
export default Gif;