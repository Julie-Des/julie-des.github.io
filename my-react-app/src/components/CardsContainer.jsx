import apartmentsDatas from "../datas/apartmentsDatas.json"  with { type: "json" }
import Card from "./Card"

function CardsContainer() {
    return (
        <div className="cards-container">
            {apartmentsDatas.map((apartment) => (<Card key={apartment.id} id={apartment.id} title={apartment.title} cover={apartment.cover} />))}
        </div>
    )
}

export default CardsContainer