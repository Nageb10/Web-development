import { ChangeEvent, useContext, useState } from "react";
import { GameContext } from "../../contexts/GameContext";
import IGameContext from "../../interfaces/IGameContext";
import UploadImageService from "../../services/UploadImageService";

const CreateGame = () => {
  const [title, setTitle] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [releaseYear, setReleaseyear] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<string>("");

  const { createNewGame } = useContext(GameContext) as IGameContext;

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "platform":
        setPlatform(value);
        break;
      case "releaseYear":
        setReleaseyear(parseInt(value));
        break;
    }
  };

  const setImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files != null) {
      const file = files[0];
      setImage(file);
      setImageFile(file.name);
    }
  };

  const imageUpload = () => {
    if (image != null) {
      UploadImageService.uploadImage(image);
    }
  };

  const create = () => {
    imageUpload();
    const newGame = {
      title: title,
      platform: platform,
      releaseYear: releaseYear,
      image: imageFile,
    };
    createNewGame(newGame);
  };

  return (
    <section>
      <h2 className="page-title">Create Game</h2>
      <div className="div-create">
        <label>Title: </label>
        <br />
        <input
          name="title"
          onChange={changeHandler}
          type="text"
          value={title}
        ></input>
      </div>
      <div className="div-create">
        <label>Platform: </label>
        <br />
        <input
          name="platform"
          onChange={changeHandler}
          type="text"
          value={platform}
        ></input>
      </div>
      <div className="div-create">
        <label>Releaseyear</label>
        <br />
        <input
          name="releaseYear"
          onChange={changeHandler}
          type="number"
          value={releaseYear}
        ></input>
      </div>
      <div className="div-create">
        <label>Upload image</label>
        <input name="image" onChange={setImageHandler} type="file"></input>
      </div>
      <button onClick={create}>Create Game</button>
    </section>
  );
};

export default CreateGame;
