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
