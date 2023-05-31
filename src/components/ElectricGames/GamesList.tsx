import { useState, useEffect } from "react";
import IGame from "../../interfaces/IGame";
import ElectricGamesService from "../../services/ElectricGamesService";
import GameItem from "./GameItem";

const ElectricGamesList = () => {
  const [electricGames, setElectricGames] = useState<IGame[]>([]);

  useEffect(() => {
    getElectricGamesFromService();
  }, []);

  const getElectricGamesFromService = async () => {
    const electricGames = await ElectricGamesService.getAllGames();
    setElectricGames(electricGames);
  };

  const getElectricGameItems = () => {
    return electricGames.map((game, i) => (
      <GameItem
        key={`game-${i}`}
        id={game.id}
        title={game.title}
        platform={game.platform}
        releaseYear={game.releaseYear}
        image={game.image}
      />
    ));
  };

  return (
    <section>
      <h2 className="gameslist-title shadow-lg">All Games in the inventory</h2>
      <section className="games-list">{getElectricGameItems()}</section>
    </section>
  );
};

export default ElectricGamesList;
