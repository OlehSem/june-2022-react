export default function User(props) {  // диструктеруємо обєкт
    let {item: user, lift} = props; // заміняємо назву компоненту усюди 1 раз, щоб не замінювати в усіх полях окремо
    return (
        <div>
            <h2> Id : {user.id} - {user.name}</h2>
            <button onClick={() => {
                lift(user)
            }}
            >details
            </button>
        </div>
    );

}


