export default function User(props) {  // диструктеруємо обєкт
    let classNameUserDiv= 'user_div'
    let  classNameImage = 'rickandmorty_img'
    let {item: user} = props; // заміняємо назву компоненту усюди 1 раз, щоб не замінювати в усіх полях окремо
    return (
        <div className={classNameUserDiv}>
            <img className={classNameImage} src={user.image} alt="rick"/>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.status} <br/> {user.species} - {user.gender}</p>
        </div>
    );

}


