//import {users} from "../../data";
import User from "../user/User";
import {useState} from "react";


export default function Users() {
    let classNameUsersDiv = 'users_div'
    let [users,setUsers] = useState( []);   // [get()- в даному випадку [] ,set()] отримати дані і встановити нові;
    // або записати так:
    // let state = useState();
    // let users = state.users();
    // let setUsers = state.setUsers();

    fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setUsers(value.results);
            });

    return (
        <div className={classNameUsersDiv}>
            {
                users.map((user, index)=>(<User item={user} key={index}/>))
            }
        </div>

    );

}
