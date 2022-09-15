
import './App.css';
import Users from "./components/users/Users";
//import {users} from "./data"; // деструктеризація
//import User from "./components/user/User"; // викликаємо по дефолту

function App() {


   return (
        <div>
            <h2>app component header</h2>
            <Users/>
        </div>);
}



export default App;


// використовуєм  метод map для ітерації масиву, бо він повертає значення;
// передаєм цілісний обєкт user, могли передавати поля, наприклад : User name = {user.name} id = {user.id} і так далі;
// треба добавляти key, щоб не було перебудови усіх елементів дом структури;