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
    const { currentPass, stats } = this.props;
    
    return (
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-12">
            <small>Compatible Parking Spots</small>
          </div>
        </div>
        <div className="row">
          {
            ParkingPassType[currentPass].compatiblePasses.map(x => (
              <div className="text-left col-3" key={x}>
                <span className={"sticker sm " + x}></span>
                <small className="ml-1">{stats === null ? "???" : stats[ParkingPassType[x].name] === undefined ? 0 : stats[ParkingPassType[x].name]}</small>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ParkingStatistics;