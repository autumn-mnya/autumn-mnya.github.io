# 3.1 - Basics

To get started with Lua scripting you may want to create a blank `debug` file without a file extension in the same folder as the ModCS `EXE`. This will enable various debug features and most importantly a debug console, which can be used for printing values to using `print()`.

The main Lua file that is ran when ModCS runs is stored in the `data/Scripts/` folder as `main.lua`. Additional files stored in `data/Scripts/` may be included using [`require`](https://www.tutorialspoint.com/lua/lua_modules.htm).

You may test that `main.lua` is executing correctly simply by opening it with a text editor and putting a `print()` with a string or number. `print("Hello World!")` should print a `Hello World!` to the debug console once the game is launched.

## 3.1.1 - Game Modes

The main game loop of Cave Story is separated into 3 modes:

| Value | Game mode         |
| ----- | ----------------- |
| 1     | Opening sequence. |
| 2     | Title screen.     |
| 3     | Action.           |

You can 'get' the number of the current game mode using [`ModCS.Game.GetMode()`](/api/game/#modcsgamegetmode).

Putting `print(ModCS.Game.GetMode())` in the `main.lua` file will print the game mode to the debug console once the game launches. However, this isn't very practical as this `print()` will only run when the game launches and the game starts with the opening sequence, meaning that the result of the `print()` will always be `1.0` being printed to the debug console.

To have a piece of code run every time the game switches game modes you can put it in a globally defined [`ModCS.Game.Init()`](/api/game/#modcsgameinit) function.

!!! Example
	```lua linenums="1"
	-- Define ModCS.Game.Init()
	function ModCS.Game.Init()
		--[[
		Every time a new game mode starts print
		"New game mode started" and the ID of
		the game mode
		--]]
		print("New game mode started: " .. ModCS.Game.GetMode())
	end
	```

This should print out `New game mode started: 1.0`, `New game mode started: 2.0` or `New game mode started: 3.0` depending on the initialized game mode.

## 3.1.2 - Key checking and ModCS.Game.Act()

For things you might want to actively check, something that runs once will not be suited. Instead, you might want to put code meant for an active loop into a globally defined [`ModCS.Game.Act()`](/api/game/#modcsgameact) function.

!!! Example
	```lua linenums="1"
	-- Define ModCS.Game.Act()
	function ModCS.Game.Act()
		--[[
		Infinitely print "This is an active loop"
		into the debug console.
		--]]
		print("This is an active loop")
	end
	```

Something you might want to actively check is **key presses**. You can use functions contained in the [ModCS.Key](/api/key/) namespace to check for pressed keys.

As an example of use of key presses we are going to make the game add 1 to a variable and print that variable to the debug console every time the player presses the Minimap button (W).


!!! Example
	```lua linenums="1"
	local number = 0 -- Define local variable number
	
	function ModCS.Game.Act()
		if (ModCS.Key.Map()) then -- If map key is pressed...
			number = number + 1 -- Add 1 to number
			print(number) -- Print the result
		end
	end
	```

The game will now count the number of times the Minimap button (W) has been pressed and print it to the debug console for us.