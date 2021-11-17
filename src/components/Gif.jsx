import React from 'react';
const Gif = ({gifProp}) => {
    return (
        <div>
            <img src={gifProp[0]} className="card-img-top" alt=""></img>
            <p>{gifProp[1]}</p>
        </div>
      );
}
 
export default Gif;