# 3.2 - Drawing

**Drawing** is the act of putting a sprite on the screen. When the game draws directly to the screen it does it in a loop. Most of the time drawing directly to the screen in a single will result in the next frame drawing over it.

ModCS will run on loop things put in a globally defined [`ModCS.Game.Draw()`](/api/game/#modcsgamedraw) function. The difference between `ModCS.Game.Act()` and `ModCS.Game.Draw()` is when they're called in-game. `ModCS.Game.Act()` is ran before anything is drawn on the screen, therefore anything drawn in it will not appear because it will be 'overdrawn' by the things that draw after it. On the other hand `ModCS.Game.Draw()` runs after *everything* has been drawn on the screen, and anything drawn on it will appear over everything drawn so far.

!!! Note
	Similarly to `ModCS.Game.Act()`, `ModCS.Game.Draw()` only runs during the main game loop.

As an example of drawing we will continue off the example number addition code from the previous page. [`ModCS.PutNumber()`](/api/modcs/#modcsputnumber) will draw a number sprite of a given number to specific screen coordinates.

!!! Example
	```lua linenums="1"
	local number = 0 -- Define local variable number
	

	function ModCS.Game.Act()
		if (ModCS.Key.Map()) then -- If map key is pressed...
			number = number + 1 -- Add 1 to number
			print(number) -- Print the result
		end
	end
	
	function ModCS.Game.Draw()
		ModCS.PutNumber(number, 0, 0) -- Draw the number to the screen
	end
	```

The two numbers after `number` represent X and Y coordinates. For example if you wanted to draw the number in the center of the screen you would do `ModCS.PutNumber(number, 160, 120)` (Please note that `ModCS.PutNumber()` offsets the coordinates a little so it can contain up to 4 digit numbers. If you would like to experiment with exact coordinates you may use [`ModCS.PutText`](/api/modcs/#modcsputtext)).

## 3.2.1 - Surfaces

[Surfaces](/api/drawing/surface/) are image data types which contain pixels of an image. They are used in-game to have sprites drawn from. For example the player sprites are contained in Surface with ID `16`. Some Surfaces are simply loaded from a `.bmp` image when the game launches (Surface `16` is taken from `data/MyChar.bmp`). Others are more complicated, such as the Tileset Surface (Surface `2`), which is used by the game to load the tileset `.bmp` file specified in a [Stage Table](/api/stage/#stage-table) entry to, and from where any tiles are drawn from.

After Surfaces are created their sizes cannot be changed. Surfaces loaded from `.bmp` files take their sizes from the `.bmp` files they were created with. Other surfaces have to be created with specified sizes. This is why things such as per-Stage NPC Sheets (Surfaces `21` and `22`) are limited to 320x240.

## 3.2.2 - Rects

[Rects](/api/drawing/rect/) are a pair of X and Y coordinates which represent a part of a Surface. They are usually used for displaying different sprites from a Surface. You may create a Rect variable with [`ModCS.Rect.Create()`](/api/drawing/rect/#modcsrectcreate).

!!! Example
	```lua linenums="1"
	local ExampleRect = ModCS.Rect.Create()
	```

Rect variables contain the following values:

| Value    | Usage                                              |
| -------- | -------------------------------------------------- |
| `left`   | X coordinate of the upper-left corner of the Rect. |
| `top`    | Y coordinate of the upper-left corner of the Rect. |
| `right`  | X coordinate of the down-right corner of the Rect. |
| `bottom` | Y coordinate of the down-right corner of the Rect. |

As an example we can try to get the Rect of the number 4 sprite from `data/TextBox.bmp`.

![TextBox 4 Rect example](/assets/images/drawing/Rect.png)

The coordinates of the upper-left corner are 32, 56. The coordinates of the down-right corner are 40, 64. Therefore we may set our Example Rect variable to the Rect of the number 4 like this:

!!! Example
	```lua linenums="1"
	local ExampleRect = ModCS.Rect.Create()
	
	ExampleRect.left = 32
	ExampleRect.top = 56
	ExampleRect.right = 40
	ExampleRect.bottom = 64
	```

A cleaner way would be using [`ModCS.Rect.Set()`](/api/drawing/rect/#modcsrectset):

!!! Example
	```lua linenums="1"
	local ExampleRect = ModCS.Rect.Create()
	
	ExampleRect:Set(32, 56, 40, 64)
	```
	
An *even cleaner* way would be creating the Rect variable by giving the `left`, `top`, `right` and `bottom` values straight to `ModCS.Rect.Create()`:

!!! Example
	```lua linenums="1"
	local ExampleRect = ModCS.Rect.Create(32, 56, 40, 64)
	```

Rects can be drawn to the screen using [`ModCS.Rect.Put()`](/api/drawing/rect/#modcsrectput). For example, if we wanted to draw our example rect from earlier to the center of the screen we would do this:

!!! Example
	```lua linenums="1"
	local ExampleRect = ModCS.Rect.Create(32, 56, 40, 64)
	
	function ModCS.Game.Draw()
		ExampleRect:Put(160, 120, 26)
	end
	```
	
`26` is the ID of the Surface we will be drawing from (Surface `26` is the Surface to where `data/TextBox.bmp` is loaded to).