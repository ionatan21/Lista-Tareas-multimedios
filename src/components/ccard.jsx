import React from "react";
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Ccard() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <Card />
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
        <div className='col-md-4'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Ccard;
