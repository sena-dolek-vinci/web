interface Pizza {
  id: number;
  title: string;
  content: string;
}

interface PizzaToUpdate {
  title?: string;
  content?: string;
}
interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewPizza = Omit<Pizza, "id">;
type NewDrink = Omit<Drink, "id">;
/*
ces deux lignes precedents sert a creer une pizza ou fdrink car qd tu cree une pizza dans le post 
veut un id mais c la bd qui donne l'id et donc pour eviter qu'on demande l'id au user on va utiliser 
omit qui dit "Prends Pizza, mais enlève la clé id." et donc qd il faurda appeler le post on va utilise rle type newPizza*/ 

export type { Pizza, NewPizza, PizzaToUpdate, Drink, NewDrink };




