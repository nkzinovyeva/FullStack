import React from 'react';

const Filter = (props) => {
    return (
        <div>
        search for: 
            <input
                value={props.search}
                onChange={props.handleSearch}
            /> 
      </div>
    )
  }

  export default Filter;