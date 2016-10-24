using System.ComponentModel.DataAnnotations;

namespace TaskTestUser.Models
{
    public class Person
    {
        [Required, StringLength(100), Display(Name = "First name")]
        public string FirstName { get; set; }

        [Required, StringLength(100), Display(Name = "Last name")]
        public string LastName { get; set; }

        [Required, StringLength(100), Display(Name = "Middle name")]
        public string MiddleName { get; set; }
    }
}