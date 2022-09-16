//import {users} from "./data"; // деструктеризація
//import User from "./components/user/User"; // викликаємо по дефолту
//import {simpsons} from "./data";
//import Simpson from "./components/simpson/Simpson";

import './App.css';
import Users from "./components/users/Users";
import Simpsons from "./components/simpsons/Simpsons";
import Mortys from "./components/mortys/Mortys";
let class_homework1 = 'homework1'
function App() {

    return (
        <div className={class_homework1}>
            <h2>The Simpsons </h2>
            <Simpsons/>
            <h2>The Rick and Morty</h2>
            <Users/>
            <h2>The Rick and Morty 5 persons</h2>
            <Mortys/>
        </div>);
}


export default App;


// використовуєм  метод map для ітерації масиву, бо він повертає значення;
// передаєм цілісний обєкт user, могли передавати поля, наприклад : User name = {user.name} id = {user.id} і так далі;
// треба добавляти key, щоб не було перебудови усіх елементів дом структури;