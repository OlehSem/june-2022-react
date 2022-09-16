export default function Simpson(props) {
    let classNameSimpson = 'simpson_div'
    let  classNameSimpsons = 'simpson_img';
    let {item:simpson}=props;
    return (
        <div className={classNameSimpson}>
            <h2>{simpson.name} {simpson.surname} <br/> Age : {simpson.age} </h2>
            <img className={classNameSimpsons} src={simpson.photo} alt="simpson"/>
        </div>

    );

}
