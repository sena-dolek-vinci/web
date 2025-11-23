
import RandomDog from './RandomDog'; 
import { useState } from 'react';

function App() {
  //sert juste à forcer React à re-render les composants enfants.
  const [refresh , setRefresh] = useState(false);
   



  //const [count, setCount] = useState(0)

  // pq 3 composants RandomDog ? parce que tu dois afficher 3 photos différentes → donc 3 composants séparés.
  // pq key ?  key dit a react : ceci est un composant distinct
  // si key change-> react recree le composant -> donc refait le fetch 

  return (
    <>
    <div style={{display: "flex" , flexDirection: "row" , gap: 10}}>
      <RandomDog key={`${refresh}1`}/>
      <RandomDog key={`${refresh}2`}/>
      <RandomDog key={`${refresh}3`}/>
    </div>


    <button 
    onClick={() => setRefresh(!refresh)}
    style={{
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1em",
      cursor: "pointer",
    }}
    >
      Refresh dogs
    </button>
    </>
  );
};

export default App;
