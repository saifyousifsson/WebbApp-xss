using System.ComponentModel.DataAnnotations;

namespace Api_app.Models
{
    public class PostEntity
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = null!;
        [Required]
        public string Body { get; set; } = null!;
    }
}
