# ModCS Object - Basics

All of ModCS's API is contained in the **ModCS global namespace**.

## ModCS.WriteLog()

```lua
ModCS.WriteLog(text, number1, number2, number3)
```

Write given data to a `error.log` file located in the same directory as the executable.

All number parameters are optional, and will be casted to integers.

## ModCS.PutText()

```lua
ModCS.PutText(text, x, y, color, surface)
```

Draw given text to screen at coordinates `x` and `y`.  `color` and `surface` parameters are optional. 

If a color is not specified the text will have the color `255, 255, 254` (`#FFFFFE`).

When a surface is specified, ModCS.PutText will draw to given surface instead.

## ModCS.PutNumber()

```lua
ModCS.PutNumber(number, x, y, zero, surface)
```

Draw given number to screen at coordinates `x` and `y`.  `zero` and `surface` parameters are optional. 

Number parameters over 9999 will display capped.

`zero` is a Boolean. If set to true a zero will be shown to the left of the number. This only applies to one-digit numbers.

When a surface is specified, ModCS.PutNumber will draw to given surface instead.

## ModCS.GetFullRect()

Returns a full [ModCS.Rect](/api/drawing/rect/).
This rect will usually equal to this:
```lua
{
	left = 0,
    top = 0,
    right = 320,
    bottom = 240
}
```

## ModCS.GetGameRect()

Returns the canvas [ModCS.Rect](/api/drawing/rect/) of the game.
This rect will usually equal to this:
```lua
{
	left = 0,
    top = 0,
    right = 320,
    bottom = 240
}
```
During the credits sequence the rect's `left` value will equal to 160.

!!! Note
	The main difference between ModCS.GetGameRect() and ModCS.GetFullRect() is how both values are used in the original game itself. The full Rect is often the default view limiting value for drawing a bitmap, while the game Rect is the view limiting value for game related objects (NPCs, player, map tiles, etc.). You can use these Rects with [ModCS.Rect.PutEx()](/api/drawing/rect/#modcsrectputex)

## ModCS.GetDataPath()

Returns the path of the data folder the game is using.

## ModCS.GetModulePath()

Returns the path of the folder the games executable is located in.

## ModCS.SetDataPath()

```lua
ModCS.SetDataPath("NewPathHere")
```

Set the data path of the game to the argument you give it. It is advised to use lua string functions with the Module Path to change the data path.

## ModCS.SetModulePath()

```lua
ModCS.SetModulePath("NewPathHere")
```

Set the module path of the game to the argument you give it. It is ill-advised to do this, unless you know what you're doing.

## ModCS.AddCaret()

```lua
ModCS.AddCaret("MyCaretName")
```

For AutPI compatibility, if you add new carets you should add them using this command first, so other dll mods or scripts dont interfere with what you're doing.
This simply adds a blank slot letting the game know its already being used.

## ModCS.AddEntity()

```lua
ModCS.AddEntity("MyEntityName")
```

For AutPI compatibility, if you add new entities you should add them using this command first, so other dll mods or scripts dont interfere with what you're doing.
This simply adds a blank slot letting the game know its already being used.

## ModCS.SystemTask()

Returns `true` if the game is currently running tasks, and runs its code.

This is for advanced users!

## ModCS.ShutDown()

Immediately shutdown the game.

## ModCS.CallEscape()

Brings up the Escape Menu.

## ModCS.SetMag()

```lua
ModCS.SetMag(number)
```

Set the games "magnification" factor to a different value. This is how the game decides to resize sprites in different window resolutions and scales them up properly.

```
Magnification 1 = 320x240
Magnification 2 = 640x480
```

This could be useful to advanced users who want to load a larger surface while the game size is higher than magnification 1.

## ModCS.GetMag()

Returns the current `mag` value the game is using.