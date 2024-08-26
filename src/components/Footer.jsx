


export default function Footer(){
    const FAQ=[
        {
            question:"How long does the internet installation process take??",
            answer:"Typically, for residential installations, the process may take anywhere from a few hours to a full day. However, for more complex installations or in areas with infrastructure challenges, it may take longer."
        },
        {
            question:"What equipment is needed for internet installation??",
            answer:"Generally, for a standard installation, you will need a modem, router (if not provided by the internet service provider), cables, and any necessary adapters. Our installation team will assess your requirements during the pre-installation survey and ensure that all necessary equipment is provided and properly configured."
        },
    ]
    return (
        <footer>
            <div>
                <h2>FAQ</h2>
                <div className="Faq">
                    {FAQ.map((f,i)=><span>
                        <h3>{f.question}</h3>
                        <i>{f.answer}</i>
                    </span>)}
                </div>
            </div>
            <div>
                <p>&copy;2024  Avitech solutions limited</p>
            </div>
        </footer>
    )
}