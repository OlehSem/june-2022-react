export default function User(props) {  // диструктеруємо обєкт
    let {item: user} = props; // заміняємо назву компоненту усюди 1 раз, щоб не замінювати в усіх полях окремо
    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <p>{user.address.city} <br/> {user.email}</p>
        </div>
    );

}


