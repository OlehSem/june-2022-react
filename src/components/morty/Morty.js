export default function Morty(props) {
    let classNameMorty = 'morty_div'
    let  classNameMortyImg = 'morty_img';
    let {item:morty}=props;
    return (
        <div className={classNameMorty}>
            <img className={classNameMortyImg} src={morty.image} alt="rick"/>
            <h2>{morty.id} - {morty.name}</h2>
            <p>{morty.status} <br/> {morty.species} - {morty.gender}</p>
        </div>
    );
}