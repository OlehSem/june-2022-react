//import {users} from "../../data";
import User from "../user/User";
import {useEffect, useState} from "react";
//import {getUsers} from "../../services/user.api.service";
import {getUsersAxios} from "../../services/user.api.axios.service";


export default function Users() {

    // useEffect  1 єдиний раз,  використовуються, для того щоб не було перезавантаження, щоб запит виконався тільки 1 раз.
    //Зазвичай всі запити будемо виконувати всередині useEffect;

    let [users, setUsers] = useState([]);   // [get()- в даному випадку [] ,set()] отримати дані і встановити нові;
    let [user, setUser] = useState(null);  // стейтліфтінг, бо ми піднімаємо стан компонента юзер на рівень вище.
    //Тобто беремо функцію ліфт, за посиланням наповнюємо обєктом юзер, який знаходиться на рівень вище, і вона його виводить


    const lift = (something) => {
        console.log(something);
        setUser(something);
    }

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers(value);
    //             console.log(value)
    //         });
    // }, [])

    useEffect(() => {
     // getUsers().then(value => setUsers(value));
      getUsersAxios().then(value => setUsers(value.data))

    }, [])



    return (
        // робимо перевірку тру фолс в 2 способи , які наведені нижче , null завжди кастується до false,
        // а обєкт - {} - завжди буде true, бо під нього уже виділяється память

        <div>
            <hr/>
            <div>{JSON.stringify(user?.address)}</div>
            {/*user? <div>aaaaaaa</div>:<div>bbbbbbbb</div>*/}
            <h3>{ user?.username}</h3>
            <h3>{ user?.address.street}</h3>
            <hr/>

            {
                users.map((user, index) => (<User item={user} key={index} lift={lift}/>))
            }
        </div>

    );

}


// - {JSON.stringify(user)}  - або можна пробігтийсь форічом,  рекурсивною функцією