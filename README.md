<h1 align="center">TypeRight</h1> 
<!-- ![alt text](app/assets/images/Twitch-logo-reverse.png?raw=true "Switch") -->
<p align="center"><img ="center" src="frontend/src/assets/images/typeright-logo.svg?raw=true"  width="200" height="200" /></p>
<a href="https://typerighter.herokuapp.com/">TypeRight</a> is a platform for users to practice their typing and upload their own texts/articles, which allows users to cultivate a library of texts as they watch their typing speed and accuracy improve. TypeRight has a data dashboard where users can see their improvement over time. 

## Features
* Landing page with newest typing challenges
<img src="frontend/src/assets/images/landing-page.png?raw=true" width="700">
* Take tests and see immediate results and leaderboard/stats
<img src="frontend/src/assets/images/test-show.png?raw=true" width="700">
* Profile page with user stats and personal library
<img src="frontend/src/assets/images/profile.png?raw=true" width="700">
* Upload your own typing challenges
<img src="frontend/src/assets/images/create-test.png?raw=true" width="700">
* Delete and Edit challenges that you uploaded
<img src="frontend/src/assets/images/edit-delete-test.png?raw=true" width="700">

## Code
* For displaying stats via the leaderboard and graphs, test attempts needed to be fetched according to the user and/or test they belong to. In order to filter
tests attempts in such a way, multiple GET requests were written with express router.
<img src="frontend/src/assets/images/backend_snippet.png?raw=true" width="700">

* Recharts was used to construct graphs displaying a user's words per minute over time, as well as other information such as accuracy through a customized tooltip.
<img src="frontend/src/assets/images/recharts-snippet.png?raw=true" width="700">
<img src="frontend/src/assets/images/tooltip-snippet.png?raw=true" width="700">

## Technologies
* MongoDB
* Express
* React, Redux
* Node
* Webpack
## Todo
* Add social features, allowing users to friend one another
