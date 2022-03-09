import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./Data"

export default function App() {
    let result = data.map(function (item) {
        return (
            <Card 
                key = {item['id']}
                image = {item['image']}
                rating = {item['rating']}
                count = {item['count']}
                lesson = {item['lesson']}
                price = {item['price']}
            />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card_container">
                {result}
            </section>
        </div>
    )
}