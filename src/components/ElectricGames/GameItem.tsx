import IGame from "../../interfaces/IGame";

const GameItem = ({id, title, platform, releaseYear, image} : IGame) =>{
    return (
        <article>
            <h3>{title} {`ID: ${id}`}</h3>
            <h5>{platform}</h5>
            <p>{(`Releaseyear: ${releaseYear}`)}</p>
            <img src={`https://localhost:7012/images/${image}`} alt="" />
        </article>
    )
}

export default GameItem;