function Equipments({equipments}) {
    return (
        <ul className="equipments">
            {equipments.map((equipment, id) => (<li key={id} className="equipment">{equipment}</li>))}
        </ul>
    )
}

export default Equipments