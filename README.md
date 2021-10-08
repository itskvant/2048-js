# 2048 JS
## Introduction
Hello there. This repo is being develop and updated by a bored fella who got challenged to entirely recreate a 2048 game in JS asap. So basically I am planning to do this in about 3-4 days (or less, idk, I started learning JS less then a month ago), and here's my plan and some game logic. 

## Plan
So the plan is... I don't have a plan yet. And I'm gonna write in right here.
**In theory**, the game would start with 2 tiles in random locations. There would be a 4x4 field and every "round", or "move" (including?) the starting position, a tile of 2 will spawn with a 90% chance, and a tile of 4 will spawn with a 10% chance. A player could swipe (I ain't implementing that for mobiles) in 1 of 4 directions - up, down, left and right, and if some tiles collide, the game checks if they are equal and replaces them with one tile of `tile1 + tile2`. So if two tiles of 8 collided, a tile of 16 would appear instead. A move can't be done when the field is full and there are no "equal collisions" possible.
(I got too bored now so I just copied this from wiki)
> If a move causes three consecutive tiles of the same value to slide together, only the two tiles farthest along the direction of motion will combine. If all four spaces in a row or column are filled with tiles of the same value, a move parallel to that row/column will combine the first two and last two.[8] A scoreboard on the upper-right keeps track of the user's score. The user's score starts at zero, and is increased whenever two tiles combine, by the value of the new tile.[4]
The game is won when a tile with a value of 2048 appears on the board. Players can continue beyond that to reach higher scores.[9][10][11] When the player has no legal moves (there are no empty spaces and no adjacent tiles with the same value), the game ends.[2][12]

So the code would look something like...

```js
function start () {
    while (alive) {
        if (!moves_available) {
            alive = false;
        }
        if (beginning) {
            gen_beginning();
            continue;
        } else {
            gen_not_beginnig();
        }
        if (swiped) {
            let blocks_to_merge = get_blocks_to_merge();
            merge_blocks(blocks_to_merge);
        }
    }
```

But personally I reckon that there's very little possibility in this. I will be posting updates here asap. Wish me good luck, cuz I already spent a flippin' hour working on this.
