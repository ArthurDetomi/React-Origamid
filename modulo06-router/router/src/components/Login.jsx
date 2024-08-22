import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate =  useNavigate();

  function handleClick() {
    alert("Fez login");
    navigate("/sobre")
  }

  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
