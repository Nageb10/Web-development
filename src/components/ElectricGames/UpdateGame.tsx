import ElectricGamesService from "../../services/ElectricGamesService";
import { ChangeEvent, useState } from "react";

const UpdateGame = () => {
    const [id, setId] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [platform, setPlatform] = useState<string>("")
    const [releaseYear, setReleaseyear] = useState<number>(0)
    const [image, setImage] = useState<string>("")

    const getElectricGameFromService = async () => {
        const electricGame = await ElectricGamesService.getById(parseInt(id));
        setTitle(electricGame.title);
        setPlatform(electricGame.platform);
        setReleaseyear(electricGame.releaseYear);
        setImage(electricGame.image);
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;

        switch(name){
            case "id":
                setId(value)
            break;
            case "title":
                setTitle(value)
            break;
            case "platform":
                setPlatform(value)
            break;
            case "releaseYear":
                setReleaseyear(parseInt(value))
            break;
            case "image":
                setImage(value)
        }
    }

    const editGame = () => {
        const editedGame = {
            id: parseInt(id),
            title: title,
            platform: platform,
            releaseYear: releaseYear,
            image: image
        }
        ElectricGamesService.putElectricGame(editedGame);   
    }

    return (

        <section className="section-update">
            <h2 className="page-title">Update Game</h2>
        <div className="div-update">
            <label>Id: </label><br />
            <input name='id' onChange={changeHandler} type="text" value={id} placeholder="Set ID"></input>
            <button onClick={getElectricGameFromService}>Get Game</button>
        </div>
        <div className="div-update">
            <label>Title: </label><br />
            <input name= 'title' onChange={changeHandler} type="text" value={title}></input>
        </div>
        <div className="div-update">
            <label>Platform: </label><br />
            <input name='platform' onChange={changeHandler} type="text" value={platform}></input>
        </div>
        <div className="div-update">
            <label>Releaseyear: </label><br />
            <input name='releaseYear' onChange={changeHandler} type="text" value={releaseYear}></input>
        </div>
        <button onClick={editGame}>Save changes</button>
    </section>
    )
}

export default UpdateGame;

