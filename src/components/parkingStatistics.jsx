import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import ParkingPassType from './parkingPassType';

class ParkingStatistics extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    const { currentPass } = this.props;
    
    return (
      <div className="container-fluid border rounded">
        <div className="row">
          <div className="col-12">
            <small>Compatible Parking Spots</small>
          </div>
        </div>
        <div className="row">
          {
            ParkingPassType[currentPass].compatiblePasses.map(x => (
              <div className="col-6" key={x}>
                <span className={"sticker sm " + x}></span>
                <small className="ml-1">???</small>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ParkingStatistics;