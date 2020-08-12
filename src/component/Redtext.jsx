import React from 'react';


function Redtext({children}) {
    
    const gaya = {color: 'red'};
    
    return (
        <span style={gaya}>
            {children}
        </span>
    )
  }

  export default Redtext