import { useState, ChangeEvent, useContext } from "react";
import IGame from "../../interfaces/IGame";
import ElectricGamesService from "../../services/ElectricGamesService";
import GameItem from "./GameItem";

const GetGameByTitle = () => {
  const [title, setTitle] = useState<string>("");
  const [electricGame, setElectricGame] = useState<IGame>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const getElectricGameFromService = async () => {
    if (title) {
      const electricGame = await ElectricGamesService.getByTitle(title);
      setElectricGame(electricGame[0]);
    }
  };

  return (
    <section>
      <div>
        <h2 className="page-title">Title</h2>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          value={title}
        ></input>
        <button onClick={getElectricGameFromService}>Get Game</button>
        {electricGame && (
          <section>
            <GameItem
              id={electricGame.id}
              title={electricGame.title}
              platform={electricGame.platform}
              releaseYear={electricGame.releaseYear}
              image={electricGame.image}
            />
          </section>
        )}
      </div>
    </section>
  );
};

export default GetGameByTitle;
