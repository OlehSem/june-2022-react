
import {mortys} from "../../data";
import Morty from "../morty/Morty";

export default function Mortys() {
    let className_Mortys = 'mortys_div'
    return (
        <div className={className_Mortys}>
            {mortys.map((morty, index) => (<Morty item={morty} key={index}/>))}

        </div>

    );

}
