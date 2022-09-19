export default function Spacex(props) {// диструктеруємо обєкт\
    let classNameSpacexDiv='spacex_div'
    let classnameSpacexH2='spacex_h2'
    let {item1: spacex} = props; // заміняємо назву компоненту усюди 1 раз, щоб не замінювати в усіх полях окремо
    return (
        <div className={classNameSpacexDiv}>
            <h2 className={classnameSpacexH2}> {spacex.mission_name} - {spacex.launch_year}</h2>
        </div>
    );

}