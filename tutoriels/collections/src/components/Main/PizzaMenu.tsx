import "./PizzaMenu.css";


const pizzas = [
    {
      id: 1,
      title: "4 fromages",
      content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
    },
    {
      id: 2,
      title: "Vegan",
      content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
    },
    {
      id: 3,
      title: "Vegetarian",
      content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
    },
    {
      id: 4,
      title: "Alpage",
      content: "Gruyère, Mozarella, Lardons, Tomates",
    },
    {
      id: 5,
      title: "Diable",
      content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
    },
  ];
  
  const PizzaMenu = () => {
    return (
      <table className="pizza-menu">
        <thead>
          <tr>
            <th>Pizza</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => ( 
            <tr>
              <td>{pizza.title}</td>
              <td>{pizza.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  {pizzas.map((pizza) => (
    <tr key={pizza.id}>
      <td>{pizza.title}</td>
      <td>{pizza.content}</td>
    </tr>
  ))}

  // <tr> : table row , ligne de tableau , definit une ligne dans un tableau html 
  // <td> : table data : cellule de data dans un tabkeay , afficher une valeur a l'interieur d'une ligne du tableau 
  // map permet d'iterer sur chacun des objets pizzas et de generer un nouvel array 
  // d'elements React qui seront rendus par React le moment venu 
  export default PizzaMenu;
  