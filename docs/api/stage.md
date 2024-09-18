# ModCS.Stage

The **ModCS.Stage namespace** contains functions related to Stages.

## Stage Table

The stage table is where all of the game's stages are defined. A stage table entry has the following values:

| Value                  | Usage                                                        |
| ---------------------- | ------------------------------------------------------------ |
| Map Filename           | The filename used for loading map and TSC files.             |
| Stage Name             | The name of the stage that will be shown in the minimap and in `<MNA`. |
| Tileset                | The filename used for loading the tileset bitmap and PXA file. |
| NPC Sheet 1 Filename   | The filename used for loading a bitmap to the [NPC Spritesheet 1 surface](/api/drawing/surface/#surface-id-table). |
| NPC Sheet 2 Filename   | The filename used for loading a bitmap to the [NPC Spritesheet 2 surface](/api/drawing/surface/#surface-id-table). |
| Background Filename    | The filename used for loading a bitmap to the [Background surface](/api/drawing/surface/#surface-id-table). |
| Background Scroll Type | A number which represents how the background will act.       |
| Boss Number            | i am being forced to write these docs please send help       |

The Stage Table is stored in a `stage.tbl` file that can be found in the `data` folder. Usually Cave Story map editors heavily depend on the Stage Table to load the correct tilesets, backgrounds and NPC Sheets when the user wants to edit a map. Most editors also do not allow you to edit maps which do not have a defined stage.

!!! Note
    In the original game the Stage Table is not stored in a seperate file but hardcoded into the game executable instead.

## ModCS.Stage.Transfer()

```lua
ModCS.Stage.Transfer(no, x, y, eve)
```

Transfer to stage `no`.

If `x` and `y` are specified, change the player's [tile coordinates](/api/map/#tile-unit) to `x` and `y`.

If `eve` is specified, run [TSC Event](/api/tsc/#events) `eve` after transferring to the stage. Run Event 0 otherwise.

## ModCS.Stage.GetCurrentNo()

```lua
ModCS.Stage.GetCurrentNo()
```

Returns the current stage's number.

## ModCS.Stage.GetFilename()

```lua
ModCS.Stage.GetFilename(no)
```

`no` is an optional parameter. Returns the filename value of stage table entry `no`. If `no` is not specified, return the filename value of the current stage.

## ModCS.Stage.GetName()

```lua
ModCS.Stage.GetName(no)
```

`no` is an optional parameter. Returns the stage name value of stage table entry `no`. If `no` is not specified, return the stage name value of the current stage.

## ModCS.Stage.GetTileset()

```lua
ModCS.Stage.GetTileset(no)
```

`no` is an optional parameter. Returns the tileset filename value of stage table entry `no`. If `no` is not specified, return the tileset filename value of the current stage.

## ModCS.Stage.GetNpcSheet1()

```lua
ModCS.Stage.GetNpcSheet1(no)
```

`no` is an optional parameter. Returns the NPC Sheet 1 filename value of stage table entry `no`. If `no` is not specified, return the NPC Sheet 1 filename value of the current stage.

## ModCS.Stage.GetNpcSheet2()

```lua
ModCS.Stage.GetNpcSheet1(no)
```

`no` is an optional parameter. Returns the NPC Sheet 2 filename value of stage table entry `no`. If `no` is not specified, return the NPC Sheet 2 filename value of the current stage.

## ModCS.Stage.GetBackground()

```lua
ModCS.Stage.GetBackground(no)
```

`no` is an optional parameter. Returns the Background filename value of stage table entry `no`. If `no` is not specified, return the Background filename value of the current stage.

## ModCS.Stage.GetBackgroundMode()

```lua
ModCS.Stage.GetBackgroundMode(no)
```

`no` is an optional parameter. Returns the Background mode value of stage table entry `no`. If `no` is not specified, return the Background mode value of the current stage.

## ModCS.Stage.GetBossNo()

```lua
ModCS.Stage.GetBossNo(no)
```

`no` is an optional parameter. Returns the Boss value of stage table entry `no`. If `no` is not specified, return the Boss value of the current stage.

## ModCS.Stage.LoadTable()

```lua
ModCS.Stage.LoadTable("stage.tbl")
```

Loads a `stage.tbl` file from the argument given, using that instead of the internal exe table.

## ModCS.Stage.OnTransfer()

This function is called whenever a map is changed, via `<TRA` or `ModCS.Stage.Transfer()`.

??? Example
	This example will print "Transferring Stage!" on every map change.
	```lua linenums="1"
	function ModCS.Stage.OnTransfer()
		print("Transferring Stage!")
	end
	```