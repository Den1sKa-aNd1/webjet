Local running of the application requires enabling of the Cross-origin resource sharing

Assumptions:
Redux state management is not used in the solution due to small size of the project and to reduce the complexity of the current solution.

Only the main error messages are handled:
 1. one of the cinema's end point didn't respond will ask for Refresh.
 2. price is nod loaded, will ask to try again.
The rest of the errors are handled by suppressing and showing in the console window: either throwing the error (like bad response/crash of the API call) or showing the message in the console(like timeout).

The main flow:
 1. Application should show only the movies that are returned by the APIs for both Cinemas.
 2. If one of the Cinemas end points did not respond or had a call longer than 10 seconds the application will ask to Refresh the page.
 3. By Clicking on the Poster of the movie, the pop up window will load the movie title and start loading the movie prices from both Cinemas.
 4. If the price is not loaded (either cinema API) the price will be equal to 'Try Again'. User need to press back button and load the movie again.
 5. If the prices are loaded, the better price will be highlighted with the green background.

INSTRUCTIONS

0. Open Command Terminal/command line/cmd.
1. Navigate to the folder containing packege.json file
2. a. If running in OSX run: sudo npm i
   b. If runnin in Windows: make sure that command line is running as Administrator
3. after successfull installation of the required packages run: npm start

The default browser will pop up and you can continue with the application