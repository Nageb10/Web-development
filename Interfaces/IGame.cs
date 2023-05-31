namespace ElectricGamesApi.Interface;

interface IGame
{
    int Id{get; set;}
    string Title{get; set;}
    string Platform{get; set;}
    int ReleaseYear{get; set;}
    string Image{get; set;}
}