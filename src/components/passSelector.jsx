import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import ParkingPassType from './parkingPassType';

class PassSelector extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    const { currentPass, onPassSelect } = this.props;
    
    return (
      <Dropdown>
        <Dropdown.Toggle id="passSelector" className="container-fluid h-100 w-100 d-flex align-items-center">
          <span className={"sticker " + currentPass}></span>
          <span className="ml-1">{ParkingPassType[currentPass].name}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            Object.entries(ParkingPassType).sort((x, y) => x[1].value - y[1].value)
              .map(x => (
                <Dropdown.Item key={x[0]} className="container-fluid h-100 w-100 d-flex align-items-center" onClick={() => onPassSelect(x[0])}>
                  <span className={"sticker " + x[0]}></span>
                  <span className="ml-1">{x[1].name}</span>
                </Dropdown.Item>
              ))
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default PassSelector;