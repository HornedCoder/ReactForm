import React, { useState } from 'react'
import './Form.css';

const Form = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const [formData, setformData] = useState({
        name:'',
        email:'',
        password:''
    })

    const handleInput = (e) =>{
        const {name,value} = e.target;
        setformData({...formData,[name]:value
        })
    }

  return (
    <form  onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' name='name' value={formData.name} onChange={handleInput}></input>
        </label>
        <label>
            Email:
            <input type='email' name='email' value={formData.email} onChange={handleInput}></input>
        </label>
        <label>
            Password:
            <input type='password' name='password' value={formData.password} onChange={handleInput}></input>
        </label>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form