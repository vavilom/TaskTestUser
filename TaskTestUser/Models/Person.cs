using System.ComponentModel.DataAnnotations;

namespace TaskTestUser.Models
{
    public class Person
    {
        [Required, Display(Name = "First name")]
        public string FirstName { get; set; }

        [Required, Display(Name = "Last name")]
        public string LastName { get; set; }

        [Required, Display(Name = "Middle name")]
        public string MiddleName { get; set; }
    }
}