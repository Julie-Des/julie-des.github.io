import CardsContainer from "../components/CardsContainer"
import Banner from "../components/Banner"

function Home() {
    return (
        <div>
            <Banner className="banner-home" title={<><span className="mobile-break">Chez vous, </span>partout et ailleurs</>} />
            <CardsContainer />
        </div>
    )
}

export default Home