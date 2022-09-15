//import {users} from "../../data";
import User from "../user/User";
import {useState} from "react";


export default function Users() {
    let [users,setUsers] = useState( []);   // [get()- в даному випадку [] ,set()] отримати дані і встановити нові;
    // або записати так:
    // let state = useState();
    // let users = state.users();
    // let setUsers = state.setUsers();

    fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

    return (
        <div>
            {
                users.map((user, index)=>(<User item={user} key={index}/>))
            }
        </div>

    );

}
