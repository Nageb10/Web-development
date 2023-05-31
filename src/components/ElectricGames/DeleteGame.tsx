import { ChangeEvent, useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import "../../css/global.css";
import IGame from "../../interfaces/IGame";
import GameItem from "./GameItem";

const DeleteGame = () => {
  const [id, setId] = useState<number>(0);
  const { games, deleteGameById } = useContext(GameContext) as IGameContext;
  const [electricGame] = useState<IGame>();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value));
  };

  const deleteGame = () => {
    deleteGameById(id);
  };
  return (
    <section>
      <h2 className="page-title">Delete Game</h2>
      <p> Amount of games: {games.length}</p>
      <div>
        <label>Type in the id of the game you want to delete: </label>
        <input onChange={changeHandler} type="number" value={id} className="delete-input"/>
      </div><br />
      <button onClick={deleteGame}>Delete</button>
      {electricGame && (
          <section>
            <GameItem
              id={electricGame.id}
              title={electricGame.title}
              platform={electricGame.platform}
              releaseYear={electricGame.releaseYear}
              image={electricGame.image}
            />
          </section>)}
    </section>
  );
};

export default DeleteGame;
