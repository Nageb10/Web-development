import { useEffect, useState, createContext, ReactNode } from "react";
import IGame from "../interfaces/IGame";
import IGameContext from "../interfaces/IGameContext";
import ElectricGamesService from "../services/ElectricGamesService";

export const GameContext = createContext<IGameContext | null>(null);

type Props = {
  children: ReactNode;
};

const GameProvider = ({ children }: Props) => {
  const [games, setGames] = useState<IGame[]>([]);
  const [search, setSearch] = useState<IGame[]>([]);

  useEffect(() => {
    getGamesFromService();
  }, []);

  const getGamesFromService = async () => {
    const gamesFromService = await ElectricGamesService.getAllGames();
    setGames(gamesFromService);
  };

  const deleteGameById = async (id: number) => {
    await ElectricGamesService.deleteById(id);
    const newArray = games.filter((game) => game.id !== id);
    setGames(newArray);
  };

  const getGameById = async (id: number) => {
    await ElectricGamesService.getById(id);
    const newArray = games.filter((game) => (game.id = id));
    setGames(newArray);
  };

  const getGameByTitle = async (title: string) => {
    const game = await ElectricGamesService.getByTitle(title);
    setGames(game);
  };
  const createNewGame = async (newGame: IGame) => {
    await ElectricGamesService.postGame(newGame);
  };
  const updateGame = async (game: IGame) => {
    const newGame = await ElectricGamesService.putElectricGame(game);
    setGames((games) =>
      games.filter((g) => g.id == newGame.Id).concat([newGame])
    );
  };

  return (
    <GameContext.Provider
      value={{
        games,
        search,
        getGamesFromService,
        getGameByTitle,
        deleteGameById,
        getGameById,
        updateGame,
        createNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
