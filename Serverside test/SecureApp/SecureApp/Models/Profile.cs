﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SecureApp.Models
{
    public class ProfileModel
    {
        public string Authenticated { get; set; }
        public string AccountPlan { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Zip { get; set; }
        public string Phone { get; set; }
    }
}