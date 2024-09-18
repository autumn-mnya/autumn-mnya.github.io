# ModCS.Color

The **ModCS.Color class** represents colors. They are stored in a RGB format.

A ModCS.Color is userdata. You may access and edit the following values from it:

| Value   | Type                       | Usage                                |
| ------- | -------------------------- | ------------------------------------ |
| `red`   | Number (Casted to integer) | Red value of an RGB color (0-255).   |
| `green` | Number (Casted to integer) | Green value of an RGB color (0-255). |
| `blue`  | Number (Casted to integer) | Blue value of an RGB color (0-255).  |

## ModCS.Color.Create()

```lua
ModCS.Color.Create(red, green, blue)
```

Returns a ModCS.Color.

All parameters are optional. If any parameters are given, the returned ModCS.Color will use those parameters as RGB values.

## ModCS.Color.Set()

```lua
ModCS.Color.Set(color, red, green, blue)
```

Sets the ModCS.Color given in the `color` parameter to a ModCS.Color with the following parameters.

## ModCS.Color.Box()

```lua
ModCS.Color.Box(color, x, y, width, height, surface)
ModCS.Color.Box(color, rect, surface)
```

Draw a colored box to the screen at coordinates `x` and `y` with width `width` and height `height`.

The `surface` parameter is optional. If it's specified, draw a colored box to surface with ID `surface` instead.

!!! Note
	For a more traditional CortBox usage you may specify a `rect` instead of coordinates and size.