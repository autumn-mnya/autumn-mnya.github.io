# Bullet Manipulation Functions

## ModCS.Bullet.SetRect()

```lua
ModCS.Bullet.SetRect(bul, left, top, right, bottom)
ModCS.Bullet.SetRect(bul, rect)
```

Sets the [Rect](/api/drawing/rect/) of `bul` to a Rect with `left`, `top`, `right`, `bottom`.

If a `rect` is specified, set the Rect of `bul` to that Rect instead.

## ModCS.Bullet.GetRect()

```lua
ModCS.Bullet.GetRect(bul)
```

Returns `bul`'s [Rect](/api/drawing/rect/).

## ModCS.Bullet.OffsetRect()

```lua
ModCS.Bullet.OffsetRect(bul, left, top, right, bottom)
```

Adds `left`, `top`, `right`, `bottom` to the the `left`, `top`, `right`, `bottom` values of the [Rect](/api/drawing/rect/) of `bul`.

`right` and `bottom` are optional parameters. If they are not specified, `left` and `top` will be used in their place instead.

## ModCS.Bullet.SetViewbox()

```lua
ModCS.Bullet.SetViewbox(bul, front, top, back, bottom)
ModCS.Bullet.SetViewbox(bul, rangerect)
```

Sets the sprite offset of `bul` to a [RangeRect](/api/objects/range/) with `front`, `top`, `back`, `bottom`.

If a `rangerect` is specified, set the sprite offset of `bul` to that RangeRect instead.

## ModCS.Bullet.GetViewbox()

```lua
ModCS.Bullet.GetViewbox(bul)
```

Returns the sprite offset [RangeRect](/api/objects/range/) of `bul`.

## ModCS.Bullet.ActCode()

```lua
ModCS.Bullet.ActCode(bul, bultype)
```

`bultype` is an optional parameter. If not specified, it will be set to `bul`'s `id`.

Runs the action code for [Bullet Type](/api/objects/bullet/id/) `bultype` to `bul`.

!!! Note
	This will run the *vanilla* act code for `bultype`. To run any overwritten act functions, run functions from the `ModCS.Bullet.Act` array instead. 

## ModCS.Bullet.Delete()

```lua
ModCS.Bullet.Delete(bul)
```

Deletes `bul`.

## ModCS.Bullet.CountByID()

```lua
ModCS.Bullet.CountByID(id)
```

Counts how many Bullets of [Bullet Type](/api/objects/bullet/id/) `id` are alive on the screen.

## ModCS.Bullet.Move()

```lua
ModCS.Bullet.Move(bul)
```

Adds `xm` and `ym` of `bul` to `bul`'s `x` and `y`. 
