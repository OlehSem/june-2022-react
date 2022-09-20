//import {users} from "../../data";
import User from "../user/User";
import {useEffect, useState} from "react";
//import {getUsers} from "../../services/user.api.service";
import {getUsersAxios} from "../../services/user.api.axios.service";
import {getSpacex} from "../../services/user.api.service";
import Spacex from "../spacex/SpaceX";


export default function Users() {
    let classNameUsers = 'homework2_div'
    let classNameUsersAll = 'homework2_div_all'
    let classNameUsersbutton = 'button_info'
    let classNameSpacexAll = 'spacex_div_all'
    // useEffect  1 єдиний раз,  використовуються, для того щоб не було перезавантаження, щоб запит виконався тільки 1 раз.
    //Зазвичай всі запити будемо виконувати всередині useEffect;

    let [users, setUsers] = useState([]);// [get()- в даному випадку [] ,set()] отримати дані і встановити нові;
    let [spacex, setSpacex] = useState([]);
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
        getSpacex().then(value => setSpacex(value));
        getUsersAxios().then(value => setUsers(value.data));

    }, [])


    return (
        // робимо перевірку тру фолс в 2 способи , які наведені нижче , null завжди кастується до false,
        // а обєкт - {} - завжди буде true, бо під нього уже виділяється память

        <div className={classNameUsers}>
            <hr/>
            {/*<div>{JSON.stringify(user?.address)}</div>*/}
            {/*{user? <div>aaaaaaa</div>:<div>bbbbbbbb</div>}*/}
            <div className={classNameUsersbutton}>
                <span> {user ? <p>Id: {user?.id} Username: {user?.username}</p> : <p></p>}</span>
                <span> {user ? <p>Email: {user?.email}</p> : <p></p>}</span>
                <span> {user ? <p>Phone : {user?.phone}</p> : <p></p>}</span>
            </div>
            <hr/>
            <div className={classNameUsersAll}>{users.map((user, index) => (
                <User item={user} key={index} lift={lift}/>))}</div>
            <div className={classNameSpacexAll}> {spacex.map((spacex, index) => (
                <Spacex item1={spacex} key={index}/>))}</div>
        </div>

    );

}


// - {JSON.stringify(user)}  - або можна пробігтийсь форічом,  рекурсивною функцією