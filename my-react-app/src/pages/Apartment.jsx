import { useNavigate, useParams } from "react-router-dom";
import apartmentsDatas from "../datas/apartmentsDatas.json"  with { type: "json" }
import Slideshow from "../components/Slideshow";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Equipments from "../components/Equipments";
import { useEffect } from "react";

function Apartment() {
    const { id } = useParams()
    const navigate = useNavigate()
    const apartment = apartmentsDatas.find(apartment => apartment.id === id);

    useEffect(() => {
        if (!apartment) {
            navigate("/")
        }
    }, [apartment, navigate])

    if (!apartment) return null

    return (
        <div className="apartment">  
            <Slideshow pictures={apartment.pictures} />
            <div className="apartment-informations">
                <div>
                    <h1 className="apartment-title">{apartment.title}</h1>
                    <p className="apartment-location">{apartment.location}</p>
                    <Tags tags={apartment.tags} />
                </div>
                <div className="host-and-rating">
                    <Host name={apartment.host.name} picture={apartment.host.picture} />
                    <Rating rating={apartment.rating} />
                </div>
            </div>
            <div className="collapse-apartment">
                <Collapse title="Description">
                <p>{apartment.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                <Equipments equipments={apartment.equipments} />
                </Collapse>
            </div>
        </div>   
    )
}

export default Apartment