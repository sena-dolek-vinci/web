import { useState, SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./AddPizzaPage.css";
import { PizzeriaContext } from "../../types";

const AddPizzaPage = () => {
  // TODO : Get the addPizza function
  const { addPizza }: PizzeriaContext = useOutletContext();

    
  const navigate = useNavigate();
  // focntion qui permet de faire de la naviation programmatique
  const [pizza, setPizza] = useState("");
  const [description, setDescription] = useState("");

  //fonction déclenchée quand on soumet le formulaire
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault(); //empêche le rechargement normal de la page
    addPizza({ title: pizza, content: description }); //ajoute la pizza
    navigate("/"); // retour à l'accueil après ajout
  };
  // Donc cette fonction sert à créer une pizza puis retourner à la page principale

  const handlePizzaChange = (e: SyntheticEvent) => {
    const pizzaInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", pizzaInput.value);
    setPizza(pizzaInput.value);
  };
  //Chaque fois que tu écris dans l’input, l’état pizza se met à jour.

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };
  //Pareil, mais pour la description.

  return (
    <div>
      <h1>Ajoutez une pizza</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pizza">Pizza</label>
        <input
          value={pizza}
          type="text"
          id="pizza"
          name="pizza"
          onChange={handlePizzaChange}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddPizzaPage;

/*function addPizza(arg0: { title: string; content: string; }) {
  throw new Error("Function not implemented.");
};*/
