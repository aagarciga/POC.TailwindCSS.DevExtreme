using System.ComponentModel.DataAnnotations;

namespace POC.MPA.Tailwind.Models
{
    public class ContactViewModel
    {
        [Required, StringLength(30, MinimumLength = 2)]
        public string Subject { get; set; }

        [Required(ErrorMessage = "Please enter a message")]
        public string Message { get; set; }
    }
}