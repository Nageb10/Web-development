#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectricGamesApi.Contexts;
using ElectricGamesApi.Models;

namespace ElectricGamesApi.Controllers;

[ApiController]
[Route("[controller]")]

public class GameController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;

    private readonly GameContext context;

    public GameController(GameContext _context, IWebHostEnvironment _hosting)
    {
        context = _context;
        hosting = _hosting;
    }

    [HttpGet]
    public async Task<ActionResult<List<Game>>> Get(string title)
    {
        try
        {
            List<Game> games;

            if(title is not null)
            {
                games = await context.Games.Where(game => game.Title.ToLower() == title.ToLower()).ToListAsync();    
            }else
            {
                games = await context.Games.ToListAsync();
            }

            return Ok(games);
            
        }
        catch{
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Game>> Get (int id)
    {
        Game game = await context.Games.FindAsync(id);
        if(game != null)
        {
            return Ok(game);
        }
        else
        {
            return NotFound();
        }
    }

/*[HttpGet]
[Route("[action]/{title}")]
public async Task<ActionResult<List<Game>>> GetGameByTitle(string title)
{
      try
        {
            List<Game> games;

            if(title is not null)
            {
                games = await context.Games.Where(game => game.Title.ToLower() == title.ToLower()).ToListAsync();    
            }else
            {
                games = await context.Games.ToListAsync();
            }

            return Ok(games);
            
        }
        catch{
            return StatusCode(500);
        }
}
*/

    [HttpPost]
    public async Task<ActionResult<Game>> Post(Game newGame)
    {
        {
            context.Games.Add(newGame);
            await context.SaveChangesAsync();
            return CreatedAtAction("Get", new {id = newGame.Id}, newGame);
        }
    }

    [HttpPost]
    [Route ("[action]/{uploadimage}")]
    public async Task<IActionResult> SaveImage(IFormFile file)
    {
        string wwwrootPath = hosting.WebRootPath;
        string absolutePath = Path.Combine($"{wwwrootPath}/images/{file.FileName}");

        await using (var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }

        return Ok();
    }

    [HttpPut]
    public IActionResult Put(Game editedGame)
    {
        context.Entry(editedGame).State = EntityState.Modified;
        context.SaveChanges();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id){
        Game gameToDelete = context.Games.Find(id);

        if(gameToDelete != null)
        {
            context.Games.Remove(gameToDelete);
            context.SaveChanges();
            return NoContent();
        }
        else
        {
            return NotFound(404);
        }
    }

}
