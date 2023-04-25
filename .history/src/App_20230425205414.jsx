import { useState, useEffect } from "react";
import { fetchDataFromApi } from './apis/api.js';

function App() {

  const apiTest = () => {
    fetchDataFromApi('/movie/popular')
  .then((res)=>)
  }
  return (
 
      <div className="App">
        <h1>APP</h1>
  </div>
  )
}

export default App;
