The data is retrieved from this URL: https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
From the JSON data, we get the name of each Pokemon and store them in an array.
Sorted the array of Pokemon names alphabetically, in ascending order(A-Z).
Having a previous button, the current page number, and a next button
Clicking the previous button will decrement the page number
Clicking the next button will increment the page number
On each page, a list of 10 Pokemon are displayed corresponding to the nth set of 10 where n is equal to the current page number - 1
Example: if you are on page 1, Pokemon 0-9 are displayed
