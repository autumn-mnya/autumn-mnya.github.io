# NPC Manipulation Functions

## ModCS.Npc.SetRect()

```lua
ModCS.Npc.SetRect(npc, left, top, right, bottom)
ModCS.Npc.SetRect(npc, rect)
```

Sets the [Rect](/api/drawing/rect/) of `npc` to a Rect with `left`, `top`, `right`, `bottom`.

If a `rect` is specified, set the Rect of `npc` to that Rect instead.

## ModCS.Npc.GetRect()

```lua
ModCS.Npc.GetRect(npc)
```

Returns `npc`'s [Rect](/api/drawing/rect/).

## ModCS.Npc.OffsetRect()

```lua
ModCS.Npc.OffsetRect(npc, left, top, right, bottom)
```

Adds `left`, `top`, `right`, `bottom` to the the `left`, `top`, `right`, `bottom` values of the [Rect](/api/drawing/rect/) of `npc`.

`right` and `bottom` are optional parameters. If they are not specified, `left` and `top` will be used in their place instead.

## ModCS.Npc.SetHitbox()

```lua
ModCS.Npc.SetHitbox(npc, front, top, back, bottom)
ModCS.Npc.SetHitbox(npc, rangerect)
```

Sets the hitbox of `npc` to a [RangeRect](/api/objects/range/) with `front`, `top`, `back`, `bottom`.

If a `rangerect` is specified, set the hitbox of `npc` to that RangeRect instead.

!!! Warning
	When editing NPC hitboxes make sure that the front and back values of the hitbox are the same, otherwise you might get weird hitbox behavior.

## ModCS.Npc.GetHitbox()

```lua
ModCS.Npc.GetHitbox(npc)
```

Returns the hitbox [RangeRect](/api/objects/range/) of `npc`.

## ModCS.Npc.SetViewbox()

```lua
ModCS.Npc.SetViewbox(npc, front, top, back, bottom)
ModCS.Npc.SetViewbox(npc, rangerect)
```

Sets the sprite offset of `npc` to a [RangeRect](/api/objects/range/) with `front`, `top`, `back`, `bottom`.

If a `rangerect` is specified, set the sprite offset of `npc` to that RangeRect instead.

## ModCS.Npc.GetViewbox()

```lua
ModCS.Npc.GetViewbox(npc)
```

Returns the sprite offset [RangeRect](/api/objects/range/) of `npc`.

## ModCS.Npc.ActCode()

```lua
ModCS.Npc.ActCode(npc, npctype)
```

`npctype` is an optional parameter. If not specified, it will be set to `npc`'s `id`.

Runs the action code for [NPC Type](/api/objects/npc/id/) `npctype` to `npc`.

!!! Note
	This will run the *vanilla* act code for `npctype`. To run any overwritten act functions, run functions from the `ModCS.Npc.Act` array instead. 

## ModCS.Npc.IsHit()

```lua
ModCS.Npc.IsHit(npc)
```

Returns true if `npc` is being hit by a bullet. Returns false otherwise.

## ModCS.Npc.Delete()

```lua
ModCS.Npc.Delete(npc)
```

Deletes `npc`. Same effect as `<DNP`.

## ModCS.Npc.Kill()

```lua
ModCS.Npc.Kill(npc)
```

Kills `npc`.

## ModCS.Npc.KillOnNextFrame()

```lua
ModCS.Npc.KillOnNextFrame(npc)
```

Sets `npc` for deletion on the next frame.

## ModCS.Npc.Move()

```lua
ModCS.Npc.Move(npc)
```

Adds `xm` and `ym` of `npc` to `npc`'s `x` and `y`. 

## ModCS.Npc.Move2()

```lua
ModCS.Npc.Move2(npc)
```

Adds `xm2` and `ym2` of `npc` to `npc`'s `x` and `y`.

## ModCS.Npc.Move3()

```lua
ModCS.Npc.Move3(npc, xv, yv)
```

Adds `xv` and `yv` from the function argument to `npc`'s `x` and `y`.

## ModCS.Npc.TriggerBox()

```lua
ModCS.Npc.TriggerBox(npc, front, top, back, bottom)
ModCS.Npc.TriggerBox(npc, rangerect)
```

Returns true if the player is in a range of a [RangeRect](/api/objects/range/) with `front`, `top`, `back`, `bottom` to `npc`. Returns false otherwise.

If a `rangerect` is specified, set the range used will be the one of the RangeRect instead.