using System;
using System.Collections.Generic;
using WebApiWithSwagger.Logic;
using WebApiWithSwagger.Models;
using System.Net;
using Newtonsoft.Json;
using System.Linq;


namespace WebApiWithSwagger.Logic
{
    public class SqlGoogleSearchRepository : IGoogleSearchRepository
    {
       
        public List<SearchResult> GetGoogleResults(string searchTerm, int resultNumber)
        {
            var result = new List<SearchResult>();
            try
            {
            string url = $"https://app.zenserp.com/api/v2/search?apikey=24abb980-a4f4-11eb-a88a-bf3749759f1f&q={searchTerm}&num={resultNumber}";
            using (WebClient wc = new WebClient())
            {
                var jsonString = wc.DownloadString(url);

                if (jsonString != null )
                {
                    dynamic json = JsonConvert.DeserializeObject(jsonString);
                    foreach (var item in json.organic)
                    {
                        result.Add(new SearchResult { Title = item.title, Url = item.url});
                    }
                    
                }
                
            }
            }
            catch (Exception ex)
            {
                throw new Exception("Error Get Google search results", ex);
            }
            return result;
        }
        
        public int filterGoogleResults (string wantedValue, List<SearchResult> results){
            int resultNumber = 0;
            foreach (var item in results)
            {
                if (item.Url != null && item.Url.Contains(wantedValue))
                {
                    resultNumber++;
                }
            }
            return resultNumber;
        }

    }
}