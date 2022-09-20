export default function User(props) {
    let classNameUserDiv='user_div'
    let classnameUserH2='user_h2'
    let classNameButtononclick='button_onclick'
    let {item: user, lift} = props;
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