import { useState, useEffect } from "react";
import { fetchDataFromApi } from './apis/api.js';

function App() {

  useEffect(() => {
    
  }, []);

  const apiTest = async () => {
    try {
      const response = await fetchDataFromApi('/movie/popular');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
 
      <div className="App">
        <h1>APP</h1>
  </div>
  )
}

export default App;
