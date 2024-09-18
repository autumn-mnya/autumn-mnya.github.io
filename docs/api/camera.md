# ModCS.Camera

The **ModCS.Camera namespace** contains functions related to the in-game camera.

## ModCS.Camera.SetTarget()

```lua
ModCS.Camera.SetTarget(obj)
```

Sets the camera target to Game object `obj` (Can be [ModCS.Player](/api/objects/player/), a [ModCS.Npc](/api/objects/npc/), a [ModCS.Caret](/api/objects/caret/) or a [ModCS.Bullet](/api/objects/bullet/))

## ModCS.Camera.SetDelay()

```lua
ModCS.Camera.SetDelay(x)
```

Sets the camera delay to `x` (Default is 16).

## ModCS.Camera.Reset()

```lua
ModCS.Camera.Reset()
```

Resets the camera position to the player.

## ModCS.Camera.GetXPos()

```lua
ModCS.Camera.GetXPos()
```

Returns the camera's X axis position in [Pixel Units](/api/objects/pixel/).

## ModCS.Camera.GetYPos()

```lua
ModCS.Camera.GetYPos()
```

Returns the camera's Y axis position in [Pixel Units](/api/objects/pixel/).

## ModCS.Camera.SetQuake()

```lua
ModCS.Camera.SetQuake(time)
```

Makes the camera shake for `time` ticks.