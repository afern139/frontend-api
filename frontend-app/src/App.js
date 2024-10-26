import logo from './logo.svg';
import './App.css';
import Welcome from'./Welcome';
import React, { useState, useEffect } from 'react';


function App() {
  const [dog, setDogPic] = useState('');
  const fetchDogPic = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogPic(data.message);

    } catch(error){
      console.error('Fix error in dog api');
    }
  };

  useEffect(() =>{
    fetchDogPic();
  }, []);

  

  return (
    <div>

      <h1>Click for random dog</h1>
      <img id="dog" src={dog} alt ="Click for ranom dog" style={{
        maxWidth: '300px'

      }}/>
      <button id="fetchButton" onClick={(fetchDogPic)} > Fetch Dog Image </button>

      <Welcome />
      
    </div>


    

    
    );

  
}



export default App;
