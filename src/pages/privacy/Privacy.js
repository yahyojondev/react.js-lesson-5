import React from 'react'
import { useNavigate } from 'react-router-dom'

function Privacy() {
let navigate = useNavigate();
  return (
    <div>
        <button  onClick={()=> navigate("/")}>Asosiy sahifaga o'tish</button>
    </div>
  )
}

export default Privacy