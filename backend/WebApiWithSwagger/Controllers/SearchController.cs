using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApiWithSwagger.Models;
using WebApiWithSwagger.Logic;

namespace WebApiWithSwagger.Controllers
{
    [Route( "api/[controller]" )]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly IGoogleSearchRepository _repo;


        public SearchController(Logic.IGoogleSearchRepository repo) : base()
        {
             _repo = repo;
        }
    
        // [HttpGet("{searchTerm}", Name = "GetGoogleResults")]
        [HttpGet( "{searchTerm}" )]

        public int GetGoogleResults( string searchTerm, string wantedValue,int resultNumber)
        {
            List<SearchResult> totalResults = _repo.GetGoogleResults(searchTerm,resultNumber);
            int resultsNumber =  _repo.filterGoogleResults(wantedValue, totalResults);
            return resultsNumber;

        }

    }
}