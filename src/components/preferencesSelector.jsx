import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import Preferences from './preferences';

class PreferencesSelector extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  
  render()
  {
    const { currentPreference, onPreferenceSelect } = this.props;
    
    return (
      <Dropdown>
        <Dropdown.Toggle id="preferenceSelector" className="container-fluid h-100 d-flex align-items-center">
          <span>{Preferences[currentPreference].abbreviation}</span>
          <span className="ml-1 d-none d-lg-block">{"(" + Preferences[currentPreference].name + ")"}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {
            Object.entries(Preferences).sort((x, y) => x[1].value - y[1].value)
              .map(x => (
                <Dropdown.Item key={x[0]} className="container-fluid h-100 d-flex align-items-center" onClick={() => onPreferenceSelect(x[0])}>
                  <span>{x[1].abbreviation}</span>
                  <span className="ml-1">{"(" + x[1].name + ")"}</span>
                </Dropdown.Item>
              ))
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default PreferencesSelector;