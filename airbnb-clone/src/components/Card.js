const Card = ({ card }) => {
    let badgeText;
    if (card.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (card.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../img/${card.img}`} className="card--image" alt="" />
            <div className="card--stats">
                <img src="../img/star.png" className="card--star" alt="" />
                <span>{card.rating}</span>
                <span className='gray'>({card.reviewCount}) • </span>
                <span className='gray'> {card.location}</span>
            </div>
            <p className="card--info">{card.title}</p>
            <p><span className='bold'>From ${card.price}</span> / person</p>
        </div>
    )
}

export default Card