import React, {useState} from 'react';


function Button(props) {
  const [active, setActive] = useState(true)
    
  function handleClick() {
      setActive(!active)
    }
    return (
    <button onClick={handleClick}>
      {active ? 'active': 'inactive'}
      </button>

    )
  }

  export default Button