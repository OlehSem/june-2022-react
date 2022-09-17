import {useEffect, useState} from "react";
import {getUserAxios} from "../../services/user.api.axios.service";

export default function UserChoser() {
    let [user, setUser] = useState(null)
    let [id,setID]=useState(1)
    const increment = () => {
        id++
       setID(id);
    }
    const decrement = () => {
        id--;
       setID(id);
    }
    useEffect(() => {
        console.log('effect')
        getUserAxios(id).then(({data}) => {
            setUser(data)
        })
    }, [id])
    return (
        <div>
            <div>{JSON.stringify(user)}</div>
            <button onClick={() => {
                decrement(id);
            }}>prev
            </button>
            <button onClick={() => {
                increment(id);
            }}> next
            </button>


        </div>

    );

}
