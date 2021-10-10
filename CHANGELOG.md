# Changelog

### To-do list (for the next update):
+ Add some nice styling
+ Add swiping to all directions
+ Add score
+ Make css more flexible so the values aren't hard-coded in pixels
+ I also realized I can just copy CSS styling from the [original 2048](https://play2048.co/), and I'll do it a bit later

## 10 Sep 2021 (Alpha 0.1.1)
+ index.js rewritten
    + Added TileContainer class to make CSS and HTML prettier
    + I also rewrote a bunch of functions for this to work with TileContainer
    + Fixed bugs with randomTiles function - now it can't add tiles to where they already are
    + Added a function to check if there are any spaces left
    + Modified HTML

## 09 Sep 2021 (Alpha 0.1.0)
+ Added a bunch of ugly code
+ Added grid & tiles
    + Added tiles
    + Added tile class (and docstrings idk why just added ok)
    + Added matrix generation
    + Added grid drawing using a matrix
    + Added random tile generation at the start of the game (round)
    + Added a function that generates 2 new tiles on spacebar press (just for testing purposes)
+ Added useless node.js that I'm too lazy to delete
+ Added useless files cuz I wanted to separate the functions but I didn't figure out how to
+ Added CHANGELOG.md
+ Added keydown event listener that generates new tiles (why???)
+ I know that some tiles can generate "on top" of others, I'm just too lazy to fix that rn, I also just copypasted the code to check whether the idxs are the same or not and I don't have a foggiest idea how it works, therefore I'll have to rewrite that. Cool, isn't it?