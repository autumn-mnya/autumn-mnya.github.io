# Caret Manipulation Functions

## ModCS.Caret.SetRect()

```lua
ModCS.Caret.SetRect(crt, left, top, right, bottom)
ModCS.Caret.SetRect(crt, rect)
```

Sets the [Rect](/api/drawing/rect/) of `crt` to a Rect with `left`, `top`, `right`, `bottom`.

If a `rect` is specified, set the Rect of `crt` to that Rect instead.

## ModCS.Caret.GetRect()

```lua
ModCS.Caret.GetRect(crt)
```

Returns `crt`'s [Rect](/api/drawing/rect/).

## ModCS.Caret.OffsetRect()

```lua
ModCS.Caret.OffsetRect(crt, left, top, right, bottom)
```

Adds `left`, `top`, `right`, `bottom` to the the `left`, `top`, `right`, `bottom` values of the [Rect](/api/drawing/rect/) of `crt`.

`right` and `bottom` are optional parameters. If they are not specified, `left` and `top` will be used in their place instead.

## ModCS.Caret.ActCode()

```lua
ModCS.Caret.ActCode(crt, carettype)
```

`carettype` is an optional parameter. If not specified, it will be set to `caret`'s `id`.

Runs the action code for [Caret Type](/api/objects/caret/id/) `carettype` to `crt`.

!!! Note
	This will run the *vanilla* act code for `carettype`. To run any overwritten act functions, run functions from the `ModCS.Caret.Act` array instead.  

## ModCS.Caret.Delete()

```lua
ModCS.Caret.Delete(crt)
```

Deletes `crt`.

## ModCS.Caret.Move()

```lua
ModCS.Caret.Move(crt)
```

Adds `xm` and `ym` of `crt` to `crt`'s `x` and `y`. 
