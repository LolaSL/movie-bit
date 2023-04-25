import { useState, useEffect } from "react";
import { fetchDataFromApi } from './apis/api.js';

function App() {

  const apiTest = () => {
    fetchDataFromApi('/movie/popular')
  .then((response) => console.log(response))
  }
  return (
 
      <div className="App">
        <h1>APP</h1>
  </div>
  )
}

export default App;
