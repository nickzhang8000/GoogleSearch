using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApiWithSwagger.Models;


namespace WebApiWithSwagger.Logic
{
    public interface IGoogleSearchRepository
    {

        List<SearchResult> GetGoogleResults(string searchTerm, int resultNumber);
        int filterGoogleResults (string wantedValue, List<SearchResult> results);
    }
}