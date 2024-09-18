# ModCS.Profile

The **ModCS.Mod namespace** contains functions related to the save files of mods.

## ModCS.Profile.Save()

```lua
ModCS.Profile.Save("ProfileName.dat")
```

Saves the game when the function is called. The argument is optional, and will save as the standard Profile.dat if there is no string attached.

## ModCS.Profile.Load()

```lua
ModCS.Profile.Load("ProfileName.dat")
```

Loads the game when the function is called. The argument is optional, and will load the standard Profile.dat if there is no string attached.

## ModCS.Profile.DuringSave()

This function is called whenever the game is saved.

??? Example
	This example will print "Saving!" on every save.
	```lua linenums="1"
	function ModCS.Profile.DuringSave()
		print("Saving!")
	end
	```

## ModCS.Profile.DuringLoad()

This function is called whenever the game is loaded.

??? Example
	This example will print "Loading!" on every load.
	```lua linenums="1"
	function ModCS.Profile.DuringLoad()
		print("Loading!")
	end
	```