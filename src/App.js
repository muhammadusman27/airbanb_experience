import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import swim from './images/swimmer.png';
import wedding from './images/wedding.png';
import bike from './images/bike.png';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="card_container">

                <Card 
                    image={swim} 
                    lesson="Life lessons with Katie Zaferes" 
                    rating="5.0" 
                    count="6" 
                    price="136" 
                />
                
                <Card 
                    image={wedding} 
                    lesson="Learn wedding photography" 
                    rating="5.0" 
                    count="30" 
                    price="125" 
                />
                
                <Card 
                    image={bike} 
                    lesson="Group Mountain Biking" 
                    rating="4.8" 
                    count="2" 
                    price="50" 
                />
            </div>
        </div>
    )
}