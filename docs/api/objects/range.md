# ModCS.RangeRect

The **ModCS.RangeRect class** represents Range Rects (Also known as Other Rects). Unlike [Drawing Rects](/api/drawing/rect/) Range Rects are centered rectangles. They are used for things such as [NPC hitboxes](/api/npc/hitbox/).

A ModCS.Rect is userdata. You may access and edit the following values from it:

| Value    | Type                              | Usage                                                        |
| -------- | --------------------------------- | ------------------------------------------------------------ |
| `front`  | [Pixel Unit](/api/objects/pixel/) | The radius from the center to the left side of the rectangle. |
| `top`    | [Pixel Unit](/api/objects/pixel/) | The radius from the center to the top side of the rectangle. |
| `back`   | [Pixel Unit](/api/objects/pixel/) | The radius from the center to the right side of the rectangle. |
| `bottom` | [Pixel Unit](/api/objects/pixel/) | The radius from the center to the bottom side of the rectangle. |

## ModCS.RangeRect.Create()

```lua
ModCS.RangeRect.Create(front, top, back, bottom)
```

Returns a ModCS.RangeRect.

All parameters are optional. If any parameters are given, the returned ModCS.RangeRect will use those parameters as Range Rect values.

## ModCS.RangeRect.Set()

```lua
ModCS.RangeRect.Set(rect, front, top, back, bottom)
```

Sets the ModCS.RangeRect given in the `rect` parameter to a ModCS.RangeRect with the following parameters.