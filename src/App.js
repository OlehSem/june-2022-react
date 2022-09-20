
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
