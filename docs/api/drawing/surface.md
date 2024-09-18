# ModCS.Surface

The **ModCS.Surface class** represents drawing surfaces. Surfaces are image data types which contain pixels of an image.

## Surface ID Table

Surfaces are represented by an ID. This table contains all vanilla game surfaces.

| Value | Description                    | Additional Info                                              |
| ----- | ------------------------------ | ------------------------------------------------------------ |
| 0     | Title screen                   | This surface is created from the bitmap file `/data/Title.bmp`. |
| 1     | Studio Pixel logo              | This surface is created from the bitmap file `/data/pixel.bmp`. |
| 2     | Level tileset                  | This surface is used by the game to draw tiles. The game loads the tileset bitmap file specified in the [Stage Table](/api/stage/#stage-table) entry for each map to this surface when the player transfers to that map. This surface's size is 256x256. |
| 6     | Fade effect                    | This surface is created from the bitmap file `/data/Fade.bmp`. |
| 7     | HUD                            | This surface is exclusive to ModCS. The game draws all HUD elements to this surface. |
| 8     | Items                          | This surface is created from the bitmap file `/data/ItemImage.bmp`. |
| 9     | Minimap                        | This surface is used by the game to draw the Minimap. Its size is 320x240. |
| 10    | Screenshot                     | This surface is used by the game to display game loops in other game loops. For example, when the player enters the inventory screen, the game screenshots itself and draws this screenshot to this surface. When the inventory screen is drawn the game first draws the screenshot surface as a background and then draws the inventory screen itself. This surface's size is 320x240. |
| 11    | Arms                           | This surface is created from the bitmap file `/data/Arms.bmp`. |
| 12    | Arms Image                     | This surface is created from the bitmap file `/data/ArmsImage.bmp`. |
| 13    | Room name                      | This surface is used by the game for drawing the room name to. This surface's size is 160x16. |
| 14    | Stage item                     | This surface is created from the bitmap file `/data/StageImage.bmp`. |
| 15    | Loading                        | This surface is created from the bitmap file `/data/Loading.bmp`. |
| 16    | Player                         | This surface is created from the bitmap file `/data/MyChar.bmp`. |
| 17    | Bullet                         | This surface is created from the bitmap file `/data/Bullet.bmp`. |
| 19    | Caret                          | This surface is created from the bitmap file `/data/Caret.bmp`. |
| 20    | NPC System                     | This surface is created from the bitmap file `/data/Npc/NpcSym.bmp`. |
| 21    | NPC Spritesheet 1              | The game loads the NPC Spritesheet 1 bitmap file specified in the [Stage Table](/api/stage/#stage-table) entry for each map to this surface when the player transfers to that map. This surface's size is 320x240. |
| 22    | NPC Spritesheet 2              | The game loads the NPC Spritesheet 2 bitmap file specified in the [Stage Table](/api/stage/#stage-table) entry for each map to this surface when the player transfers to that map. This surface's size is 320x240. |
| 23    | NPC Regular                    | This surface is created from the bitmap file `/data/Npc/NpcRegu.bmp`. |
| 26    | Textbox                        | This surface is created from the bitmap file `/data/TextBox.bmp`. |
| 27    | Face                           | This surface is created from the bitmap file `/data/Face.bmp`. |
| 28    | Level background               | The game loads the Background bitmap file specified in the [Stage Table](/api/stage/#stage-table) entry for each map to this surface when the player transfers to that map. This surface's size is 320x240. |
| 29    | Value view                     | The game draws damage and XP indicators to this surface. This surface's size is 40x240. |
| 30-34 | Text line surfaces from 1 to 5 | These surfaces are used by the game for drawing TSC text to. These surfaces are only initialized when TSC starts. Their size is 216x16. The game needs 5 of these for the text scrolling effect. |
| 35    | Credits text                   | This surface is used by the game for drawing the credits text to. Its height varies on the credits TSC, but its width is 320. |
| 36    | Credits image                  | This surface is created from the bitmap file `/data/Credits/Credit01.bmp`. It can be swapped with other `Credit` bitmaps during the credits TSC. |
| 37    | Casts                          | This surface is created from the bitmap file `/data/Npc/casts.bmp` when the credits start. |

!!! Note
	In the original game, more than 40 surfaces could not be created. In ModCS this number has been increased to 50 to allow for more custom surfaces.

## ModCS.Surface.Create()

```lua
ModCS.Surface.Create(id, width, height)
ModCS.Surface.Create(id, path)
```

Create a surface. Returns a ModCS.Surface which contains the ID of the surface.

If `width` and `height` are specified, create a generic surface with those sizes.

If a `path` is specified, create a surface with the bitmap given in that path. The path's root is always the game's data folder. Do not add a `.bmp` file extension to the path. Surfaces created from bitmap files use the specified bitmap file's size.

??? Example
	This example will create two surfaces, one basic and one from a file.
	```lua linenums="1"
	BarSurface = ModCS.Surface.Create(41, 320, 240) -- Create a surface with ID 41 with size 320x240
	FooSurface = ModCS.Surface.Create(42, "Foo") -- Create a surface with ID 42 using /data/Foo.bmp
	```

!!! Note
	When creating custom surfaces, it's reccomended to use surface IDs over 40, as it's possible in the future for ModCS to add new custom surfaces below this number.

## ModCS.Surface.LoadBitmap()

```lua
ModCS.Surface.LoadBitmap(id, path)
```

Draw the bitmap file specified in `path` to a surface with ID `id`. The path's root is always the game's data folder. Do not add a `.bmp` file extension to the path.

## ModCS.Surface.Screenshot()

```lua
ModCS.Surface.Screenshot(id, rect)
```

Draw a screenshot of the current state of the game to Surface with ID `id`.

`rect` is an optional parameter. If specified only `rect` of the screen will be drawn to the Surface. 