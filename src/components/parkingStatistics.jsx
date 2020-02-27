import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import ParkingPassType from './parkingPassType';

class ParkingStatistics extends React.Component
{
  render()
  {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>
              <small>Compatible Parking Spots</small>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className={"sticker sm purple"}></span>
              <small>???</small>
            </td>
          </tr>
          {
            ParkingPassType["purple"].compatiblePasses.map(x => (
              <tr key={x}>
                <td>
                  <span className={"sticker sm " + x}></span>
                  <small>???</small>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default ParkingStatistics;