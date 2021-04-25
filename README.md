
Backend:
press F5 to start the api, opening 
http://localhost:5000/swagger/index.html to see the swagger page.

Frontend:
npm snstall  then  npm start, page will automatically open http://localhost:8080/.

For the Extension question1:

Can use an Azure logic app to make the api call once an hour then store in a commos db or sending throught email.

For the Extension question2:

Just need to add the other search engines' api addresses in the envirenment of API and make the url as an array to make multiple API calls for different search engines.

For the Extension question3:

If the API is down, for example the google api is returning errors when tring to get the results, we can add App Insights to track the error information, if necessary we can even add Pagerduty when the App Insights are keeping getting errors so we can ensure that this system is always working.