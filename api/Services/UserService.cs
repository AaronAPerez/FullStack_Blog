using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models.DTO;
using api.Services.Context;

namespace api.Services;

    public class UserService
    {
        private readonly DataContext _context;

        public UserService(DataContext context)
        {
            _context = context;
        }

        // Helper functions to help us check if the user exist
        // DoesUserExist

        public bool DoesUserExist(string username)
        {
            
        }


        // Adding user logic
        public bool AddUser(CreateAccountDTO userToAdd)
        {
            // If the user already exist

        }
        
    }
