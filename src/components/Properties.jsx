
export default function Properties({icon,property}){

    return (
        <div  data-aos="fade-up" className={"property"}>
            <div className={"icon-div"}>
                <img src={icon} alt="icon"/>
            </div>
            <div className={"text "}> 
                <p>{property}</p>
            </div>
        </div>
    )
}
