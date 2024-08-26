
export default function Consultancy({icon,descriptions}){

    return (
        <div  data-aos="fade-up" className={"Consultancy"}>
            <div className={"icon-div"}>
                <img src={icon} alt="icon"/>
            </div>
            <div className={"text "}> 
                <ul>
                    {descriptions.map((description,i)=>
                    <li key={i}>{description}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
