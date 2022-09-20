
import './App.css';
import Users from "./components/users/Users";
function App() {
 let classNameUsersInfo='users_info'

   return (
        <div>
            <h2 className={classNameUsersInfo}>Users info : </h2>
            <Users/>
            {/*<UserChoser/>*/}
        </div>);
}



export default App;


// використовуєм  метод map для ітерації масиву, бо він повертає значення;
// передаєм цілісний обєкт user, могли передавати поля, наприклад : User name = {user.name} id = {user.id} і так далі;
// треба добавляти key, щоб не було перебудови усіх елементів дом структури;