
import RandomDog from './RandomDog'; 
import { useState } from 'react';

const App = () => {
  //sert juste à forcer React à re-render les composants enfants.
  //const [refresh , setRefresh] = useState(false);
   



  //const [count, setCount] = useState(0)

  // pq 3 composants RandomDog ? parce que tu dois afficher 3 photos différentes → donc 3 composants séparés.
  // pq key ?  key dit a react : ceci est un composant distinct
  // si key change-> react recree le composant -> donc refait le fetch 
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog />
        <RandomDog />
        <RandomDog />
      </div>
    </>
  );
};

export default App; 
