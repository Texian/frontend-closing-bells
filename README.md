# _Closing Bells_
You’ve got a new island in Animal Crossing: New Horizons with all sorts of plants, animals, and furniture to acquire. But who knows how much it’s worth? The Nooks will pay their price, sure, but what’s the going rate for butterflies with everyone else? With Closing Bells you can see player-reported prices for various goods over time and see when they’re trending up, or about to bottom out.
- - - -
## Wireframe

Given the narrow focus of the site, there’s not much to it. The user will create an account , or log in with Apple, Google, or Facebook. On the home page there will be an item selection bar where a visitor - even one not logged in - can select an item from the game and the line graph below will update with the past month’s price history, including the current going rate as well as the highest rate in the past month. Days that have multiple entries will be averaged out for the day’s rate and overlaid with a bar showing the range of that day’s submissions.

On their profile page, they can update their avatar, email, Switch ID and password. They can add a new item value record of their own based on their transactions in the game, as well as see a list of past records that can be modified or deleted if errors were made.

If the user decides to leave the site, their profile will be deleted, but the item data they contributed will remain, though updated to be attributed to a deleted user.

- - - -
## Heroku
Back End: [Heroku](https://dashboard.heroku.com/apps/fathomless-eyrie-28091)
Front End: [Heroku](https://dashboard.heroku.com/apps/secret-wildwood-70580)
- - - -
## Tech
This is a MERN stack at its core, but also pulls in JWTs  and Axios for authentication, Materialize and Sass for the visual styling, and amCharts for the interactive graph.
- - - -
## Wishlist
* A more full-featured graph
* Styling refinements
* The full item library
* The ability for users to see each other’s profiles and connect in the game
- - - -
## Contributors
Christian Walters
[cwalters · GitHub](https://git.generalassemb.ly/cwalters)