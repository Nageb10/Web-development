import { useState, ChangeEvent } from "react";
import IGame from "../../interfaces/IGame";
import ElectricGamesService from "../../services/ElectricGamesService";
import GameItem from "./GameItem";

const GetGameById = () => {
  const [id, setId] = useState<number>(0);
  const [electricGame, setElectricGame] = useState<IGame>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value));
  };

  const getElectricGameFromService = async () => {
    if (id) {
      const electricGame = await ElectricGamesService.getById(id);
      setElectricGame(electricGame);
    }
  };


  return (
    <section>
      <div>
        <h2 className="page-title">Id</h2>
        <input name="id" type="number" onChange={handleChange} value={id}></input>
        <button onClick={getElectricGameFromService}> Get Game</button>
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

export default GetGameById;
