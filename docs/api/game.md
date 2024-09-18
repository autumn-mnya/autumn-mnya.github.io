# ModCS.Game

Functions related to the main game loop. Stored in the **ModCS.Game** object.

!!! Warning
	The main game loop does not include:

	- The inventory screen
	- The stage select screen
	- Minimap screen
	- Credits
	- Pause screen
	
	Functions such as [ModCS.Game.Act()](/api/game/#modcsgameact) and [ModCS.Game.Draw()](/api/game/#modcsgamedraw) will not run during these screens.

## ModCS.Game.GetMode()

```lua
ModCS.Game.GetMode()
```

Return a number that represents the current game mode.

| Value | Game mode         |
| ----- | ----------------- |
| 1     | Opening sequence. |
| 2     | Title screen.     |
| 3     | Action.           |

## ModCS.Game.IsNew()

```lua
ModCS.Game.IsNew()
```

Returns true if the 'New' option in the title screen was selected. Returns false otherwise.

## ModCS.Game.Init()

This function is called whenever a game mode is started.

??? Example
	This example will clear a variable `foo` on every game mode start.
	```lua linenums="1"
	function ModCS.Game.Init()
		-- Clear our foo variable
		foo = 0
	end
	```

## ModCS.Game.CanControl()

```lua
ModCS.Game.CanControl()
```

Returns false during a `<KEY` or `<PRI`. Returns true otherwise.

## ModCS.Game.CanAct()

```lua
ModCS.Game.CanAct()
```

Returns false during a `<PRI`. Returns true otherwise.

## ModCS.Game.Act()

This function is called every frame before anything is updated or drawn in the main game loop.

??? Example
	This example will add 1 to a variable `foo` every frame.
	```lua linenums="1"
	function ModCS.Game.Act()
		-- Add 1 to our foo variable every frame
		foo = foo + 1
	end
	```

## ModCS.Game.Update()

This function is called every frame before anything is drawn in the main game loop. It differentiates from ModCS.Game.Act only on when exactly it's ran.

## ModCS.Game.Draw()

This function is called every frame after everything is drawn in the main game loop.

??? Example
	This example will draw the value of the variable `foo` using [ModCS.PutNumber](/api/modcs/#modcsputnumber).
	```lua linenums="1"
	function ModCS.Game.Draw()
		-- Draw the value of our variable
		ModCS.PutNumber(foo, 0, 0)
	end
	```

!!! Note
	ModCS.Game.Draw() will draw over **everything**. If you're planning on using it for custom HUD it's recommended to draw to the custom HUD [Surface](/api/drawing/surface/) instead.