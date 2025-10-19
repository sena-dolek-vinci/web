import type { User } from "../types";
import UserCard from "./UserCard";


const users: User[] = [
  { name: "Alice",  age: 30, isOnline: true },
  { name: "Bob", age: 25, isOnline: false },
  { name: "Charlie", age: 35, isOnline: true },
]


const App = () => (
  <>
  <h1> Users </h1>
  {users.map((user, index) => (
    <UserCard key= {index} user = {user} />
  ))}
  </>
);

export default App

// <> ... </> : Grouper plusieurs éléments sans créer de balise inutile dans le DOM