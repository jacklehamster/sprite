# sprite
Research on using sprites in JavaScript

https://jacklehamster.github.io/sprite/

This library helps to create animatable sprite. The example in the demo uses assets from http://www.meatlyjam.com/gameassets. Once you create a sprite, you can set its animation.

## Usage:

First, include the library file sprite.js:
```
<script src="sprite.js"></script>
```
or link directly:
```
<script src="https://jacklehamster.github.io/sprite/sprite.js"></script>
```

Then create the sprite, passing json data:
```
sprite = createSprite(jsonData);
```
If you just want to experiment with the asset provided, simply include `asset.js` and create the sprite as follow:
```
sprite = getMeatlyAsset();
```
You will get a sprite with a walk cycle for both direction, a standing position with different facial expressions, and various objects. Simply check out the [demo](https://jacklehamster.github.io/sprite/) to see what you can do with the sprite.


The json data is in the form:
```
{
  "animation": {
      "label1": [
        {"src":src, "source-crop":[x1,y1,width,height],  "hotspot":[xspot1,yspot1]},
        {"src":src, "source-crop":[x2,y2,width,height],  "hotspot":[xspot2,yspot2]},
        ...
      ],
      "label2": [
        ...      
      ]
      ...
  }
}
```
For each frame of animation, you must define the following properties:
* **label** is a string that you choose. It can be used later to go to an animation sequence using `gotoAndPlay(label)`.
* **src** is the url of your spritesheet image. It can be a data-uri.
* **source-crop** is a rectangle that defines which piece of the sprite sheet we're cropping out.
* **hotspot** is a point within the frame of animation that's fixed for all frame. Usually it's best to aim the hotspot at the feet of a character, or what you consider to be the ground.


## Available functions
* `sprite.moveTo(x,y)`: Moves the sprite at x,y position. x and y are relative to the screen. The sprite is moved using css `transform = "translate(x,y)"`. The read-only property for the position is `sprite.pos`.
* `sprite.setScale(scale) / sprite.setScale(scaleX,scaleY)`: Resize the sprite by a factor of scale. Note that you can pass one parameter to scale both X and Y axis, or you can pass two parameters to change scaleX and scaleY separately. The read-only property is `sprite.scale`.
* `sprite.gotoAndPlay(label)`: Goes to a defined animation. The read-only property is `sprite.label`.
* `sprite.setAnimated(true/false)`: Starts or stops the animation while keeping the current label. The read-only property is `sprite.animated`.
* `sprite.fps = frameRate`: Sets the framerate of the animation, in frame-per-second.
* `sprite.setHotspotVisible(true/false)`: Show or hide the hotspot within the image. This is mostly for debugging purposes. The read-only property for this is `sprite.hotspotVisible`.
