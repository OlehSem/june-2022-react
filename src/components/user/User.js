export default function User(props) {// диструктеруємо обєкт\
    let classNameUserDiv='user_div'
    let classnameUserH2='user_h2'
    let classNameButtononclick='button_onclick'
    let {item: user, lift} = props; // заміняємо назву компоненту усюди 1 раз, щоб не замінювати в усіх полях окремо
    return (
        <div className={classNameUserDiv}>
            <h2 className={classnameUserH2}> {user.id} - {user.name}</h2>
            <button className={classNameButtononclick} onClick={() => {
                lift(user)
            }}
            >Details
            </button>
        </div>
    );

}