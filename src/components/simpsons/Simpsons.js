import {simpsons} from "../../data";
import Simpson from "../simpson/Simpson";

export default function Simpsons() {
    let className_Simpsons = 'simpsons_div'
    return (
        <div className={className_Simpsons}>
            {simpsons.map((simpson, index) => (<Simpson item={simpson} key={index}/>))}

        </div>

    );

}
