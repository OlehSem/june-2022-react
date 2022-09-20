import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsersAxios} from "../../services/user.api.axios.service";
import {getSpacex} from "../../services/user.api.service";
import Spacex from "../spacex/SpaceX";


export default function Users() {
    let classNameUsers = 'homework2_div'
    let classNameUsersAll = 'homework2_div_all'
    let classNameUsersbutton = 'button_info'
    let classNameSpacexAll = 'spacex_div_all'
    let classNameSpacexAllh2 = 'spacex_all_h2'

    let [users, setUsers] = useState([]);
    let [spacex, setSpacex] = useState([]);
    let [user, setUser] = useState(null);


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

        <div className={classNameUsers}>
            <hr/>
            <div className={classNameUsersbutton}>
                <span> {user ? <p>Id: {user?.id} Username: {user?.username}</p> : <p></p>}</span>
                <span> {user ? <p>Email: {user?.email}</p> : <p></p>}</span>
                <span> {user ? <p>Phone : {user?.phone}</p> : <p></p>}</span>
            </div>
            <hr/>
            <div className={classNameUsersAll}>{users.map((user, index) => (
                <User item={user} key={index} lift={lift}/>))}</div>
            <h2 className={classNameSpacexAllh2}>SpaceX : </h2>
            <div className={classNameSpacexAll}> {spacex.map((spacex, index) => (
                <Spacex item1={spacex} key={index}/>))}</div>
        </div>

    );

}


