import axios from "axios";
import IGame from "../interfaces/IGame";

const ElectricGamesService = (() => {
  const ElectricGamesApiEndpoints = {
    games: "http://localhost:5132/game",
  };

  const getAllGames = async () => {
    const result = await axios.get(ElectricGamesApiEndpoints.games);
    return result.data;
  };

  const deleteById = async (id: number) => {
    const result = await axios.delete(
      `${ElectricGamesApiEndpoints.games}/${id}`
    );
    return result;
  };

  const getById = async (id: number) => {
    const result = await axios.get(`${ElectricGamesApiEndpoints.games}/${id}`);
    return result.data;
  };

  const getByTitle = async (title: string) => {
    const result = await axios.get(
      `${ElectricGamesApiEndpoints.games}?title=${title}`
    );
    console.log(result.data);
    return result.data;
  };

  const postGame = async (createdGame: IGame) => {
    const result = await axios.post(
      ElectricGamesApiEndpoints.games,
      createdGame
    );
    return result.data;
  };

  const imageUpload = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);

    const result = await axios({
      url: ElectricGamesApiEndpoints.games,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    formData.delete("file");
    return result.data;
  };

  const putElectricGame = async (updatedElectricGame: IGame) => {
    const result = await axios.put(
      ElectricGamesApiEndpoints.games,
      updatedElectricGame
    );
    return result.data;
  };

  return {
    getAllGames,
    getById,
    deleteById,
    getByTitle,
    postGame,
    imageUpload,
    putElectricGame,
  };
})();

export default ElectricGamesService;
