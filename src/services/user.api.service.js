

let _url='https://api.spacexdata.com/v3/launches?limit=86';

const getSpacex = () => {
    return fetch(_url)
        .then(value => value.json())

}

const getSpacexOne = (id)=>{
    return fetch(_url+'/'+id)
        .then(value => value.json())

}

export {getSpacex,getSpacexOne};

