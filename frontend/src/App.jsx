import { useState } from 'react'
import axiosInstance from '../axios'
import './App.css'

function App() {
  const [Connection, setConnection] = useState(null)
  const [error, setError] = useState(null)
  function handleclick() {
    axiosInstance.get('/')
    .then(res =>{
        console.log(res.data);
        setConnection(res.data);
        setError(null);
    }).catch(err =>{console.log(err);
      setError('Something went wrong');
      setConnection(null);})
  }
  return (
    <>
      <div>
     
     
      
        <button onClick={handleclick}>
        Check Connection
        </button>
        <br/>   
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          Connection && <p> {Connection}</p>
        )}
      </div>
    
    </>
  )
}

export default App
