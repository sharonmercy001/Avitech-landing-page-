import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Properties from './components/Properties'
import iconImage from "./assets/two.png"
import Navbar from './components/Navbar'
import logo from "./assets/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import one from "./assets/one.png"
import two from "./assets/two.png"
import three from "./assets/three.png"
import four from "./assets/four.png"
import five from "./assets/five.png"
import six from "./assets/six.png"
import seven from "./assets/seven.png"
import eight from "./assets/twelve.png"
import nine from "./assets/nine.png"
import ten from "./assets/eleven.png"
import eleven from "./assets/ten.png"
import Consultancy from './components/Consultancy'
import network from "./assets/network.jpg"
import callcenter from "./assets/callcenter.jpg"
import survey from "./assets/sitesurvey.jpg"
import Footer from './components/Footer'
import Form from './components/Form'


function App() {
  useEffect(()=>{
    AOS.init()
  },[])
  const properties=[
    {prop:"Has PPPOE, Static and Hotspot functions.",icon:one},
    {prop:"Can have multiple Mikrotik routers in your one account.",icon:two},
    {prop:"Integrated with Mpesa, Airtel Money, MTN Momo, Stripe and Flutterwave",icon:three},
    {prop:"Payment transaction history.",icon:four},
    {prop:"Automatic disconnection and reconnection of client accounts.",icon:five},
    {prop:"Basic troubleshooting (view online clients, ping and view router logs,).",icon:six},
    {prop:"Automatic email and SMS reminders.",icon:seven},
    {prop:"Multi-user and Multi Accounts with different right.",icon:eight},
    {prop:"Integration with other systems.",icon:nine},
    {prop:"on-demand customer support.",icon:ten},
    {prop:"Software patches and updates.",icon:eleven},
    
  ]
  const consultancyServices=[
    {service:"Network Support",icon:network,descriptions:[
      "We specialize in diagnosing various connectivity issues, such as network outages, slow internet speeds, and router configurations, to promptly help clients facing internet problems."
    ]},
    {service:"Call Center",icon:callcenter,descriptions:["We offer multichannel support options, such as phone, email, and WhatsApp chats, to provide customers with convenient access to assistance whenever they need it."]},
    {service:"Site Survey",icon:survey,descriptions:["Evaluate site conditions, such as terrain, existing infrastructure, and environmental factors, to pinpoint obstacles that may impact the installation process.",
      "Conduct a Feasibility Analysis to assess the practicality and viability of fiber installation considering site-specific factors.",
      "Create detailed reports summarizing survey findings and recommendations for the installation project.",
    ]}
  ]
  return (
    <div className='main'>
      <Navbar/>
      <div className='landing'>
        
        <div className='content'> 
          <img src={logo}></img>
          <span> 
            <h1>Service Catalogue</h1>
            <h2>Avitech Solutions Ltd</h2>
          </span>
        </div>
      </div>

      <div className="parent-props">
        <h2>Billing System</h2>
        <div className="props">
          {properties.map((prop,i)=><Properties property={prop.prop} icon={prop.icon} key={i}/>)};
        </div>
     </div>

      <div className="parent-props">
        <h2>Consultancy Services</h2>
        <div className="consultancy-props">
          {consultancyServices.map((service,i)=><Consultancy title={service.service} descriptions={service.descriptions} icon={service.icon} key={i} />)}
        </div>
      </div>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
