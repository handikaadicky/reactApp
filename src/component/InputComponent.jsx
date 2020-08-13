import React, {useState} from 'react';
import axios from 'axios'


function InputComponent(props) {

    const [name, setName] = useState('')
    const [address, setAddress] = useState ('')

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleAddressChange(e) {
        setAddress(e.target.value)
    }
    
    const handleClick = (e) => {
        // alert(`Nama: ${value} Alamat: ${Address}`)
        const data = { 
            name, 
            address
        }

        axios.post ('http://192.168.100.224:4000/', data) 

    }

    return (
        <div>
            
            Nama:
            <input 
            style={{margin: '10px'}}
            onChange={handleChange}
            value={name}
            type="text"/>
            <p> {name} </p>
            
            Alamat:
            <input 
            style={{margin: '10px'}}
            onChange={handleAddressChange}
            value={address}
            type="text"/>
            <p> {address} </p>

            <button onClick={handleClick}> Kirim</button>
        </div>

        
    )
  }

  export default InputComponent