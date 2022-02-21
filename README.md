# Poppa Bagel (Dot Game)

Poppa Bagel is my version of the Dot Game exercise. 

* The game starts when a player touches or clicks the Play button; at that point, the Play button changes to a Pause button, which should pause the game until the button is touched or clicked again.
* Bagels fall at a constant rate. A player should be able to use a slider to control the rate at which bagels fall; at the slider's left-most position, bagels should fall at a speed of 10px per second, and at the slider's right-most position, should fall at a speed of 100px per second.
* A new bagel appears at a random horizontal position at the top of the box every second. A bagel should not "hang" off the left or right edge of the screen.
* Bagels should vary randomly in size from 10px in diameter to 100px in diameter.
* A bagel's value is inversely proportional to its size, with the smallest dots worth 10 points, and the largest bagels worth 1 point.
* When a player touches or clicks a bagel, the bagel should disappear from the box, and the score should be increased based on the bagel's value.
* A new bagel should also appear every 1000ms.

This project is built with vanilla JS and SCSS. It currently only works in Chrome and Safari. On mobile, it works best with iPhone SE/8, but isn't perfect. 