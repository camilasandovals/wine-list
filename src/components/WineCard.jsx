export default function WineCard({wine}) {
    return(
            <div className="wine-card">
                <img src={wine.image} alt=""></img>
                <h2>{wine.wine}</h2>
            </div>
    )
}

