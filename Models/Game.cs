using System.ComponentModel.DataAnnotations;
using ElectricGamesApi.Interface;

namespace ElectricGamesApi.Models;

public class Game : IGame
{
    [Key]
    public int Id { get; set; }
    public string Title{get; set;} = "";
    public string Platform{get; set;} = "";
    public int ReleaseYear{get; set;}
    public string Image{get; set;} = null!;

}