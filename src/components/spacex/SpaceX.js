export default function Spacex(props) {
    let classNameSpacexDiv='spacex_div'
    let classnameSpacexH2='spacex_h2'
    let classnameSpacexImg='spacex_img'
    let {item1: spacex} = props;
    return (
        <div className={classNameSpacexDiv}>
            <img className={classnameSpacexImg} src={spacex.links.mission_patch_small} alt="spacex"/>
            <h2 className={classnameSpacexH2}> {spacex.mission_name} - {spacex.launch_year}</h2>
        </div>
    );

}