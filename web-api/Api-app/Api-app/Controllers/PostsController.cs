
using Microsoft.AspNetCore.Mvc;
using Api_app.Data;
using Microsoft.EntityFrameworkCore;
using Api_app.Models;
using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;

namespace Api_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly DataContext _context;

        public PostsController(DataContext context)
        {
            _context = context;
        }
        // GET: api/Posts
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            return new OkObjectResult(await _context.Posts.ToListAsync());
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult>CreatePost(PostRequest post)
        {
            try
            {
                var postEntity = new PostEntity
                {
                    Title = post.Title,
                    Body = post.Body,
                };
                _context.Posts.Add(postEntity); 
                await _context.SaveChangesAsync();
                return new CreatedResult("post plats", postEntity);

            }catch(Exception ex)
            {
                Debug.WriteLine(ex.Message);
            }
            return new BadRequestResult();
        }
    }
}
