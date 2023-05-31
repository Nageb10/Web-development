import IGame from "./IGame";

interface IGameContext {
  games: IGame[];
  search: IGame[];
  getGamesFromService: () => void;
  deleteGameById: (id: number) => void;
  getGameById: (id: number) => void;
  getGameByTitle: (title: string) => void;
  updateGame: (game: IGame) => void;
  createNewGame: (newGame: IGame) => void;
}

export default IGameContext;
