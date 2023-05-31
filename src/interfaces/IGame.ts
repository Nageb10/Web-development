interface IGame{
    id?: number;
    title: string;
    platform: string;
    releaseYear: number;
    image: File | string;
}

export default IGame;