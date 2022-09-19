

let _url='https://api.spacexdata.com/v3/launches/';

const getUsers = () => {
    return fetch(_url)
        .then(value => value.json())

} //return promise

const getUser = (id)=>{
    return fetch(_url+'/'+id)
        .then(value => value.json())

}

export {getUsers,getUser};

