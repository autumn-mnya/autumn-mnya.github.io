# ModCS.Caret

The **ModCS.Caret class** represents Carets. Carets are game objects used for particles. They have no collision and draw over tiles. Unlike [NPCs](/api/objects/npc/) Carets only draw from the Caret [Surface](/api/drawing/surface/).

A ModCS.Caret is userdata. You may access and edit the following values from it:

| Value           | Type                                 | Usage                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------ |
| `x`             | [Pixel Unit](/api/objects/pixel/)    | X position of the Caret.                                   |
| `y`             | [Pixel Unit](/api/objects/pixel/)    | Y position of the Caret.               |
| `xm`            | [Pixel Unit](/api/objects/pixel/)    | X velocity of the Caret. This value does nothing by itself, but can be used with [ModCS.Caret.Move()](/api/objects/caret/functions/#modcscaretmove). |
| `ym`            | [Pixel Unit](/api/objects/pixel/)    | Y velocity of the Caret. This value does nothing by itself, but can be used with [ModCS.Caret.Move()](/api/objects/caret/functions/#modcscaretmove). |
| `id`            | [Caret Type ID](/api/objects/caret/id/) | ID of the Caret.                                           |
| `direct`        | [Direction](/api/objects/direction/) | Direction of the Caret. This mostly does nothing by itself, but is used by different vanilla Carets as a parameter. |
| `ani_no`        | Number (Casted to integer)           | Animation frame value. This variable does nothing by itself, but can be used to switch between animation frames. |
| `ani_wait`      | Number (Casted to integer)           | Animation timer value. This variable does nothing by itself, but can be used as a timer between animation frames. |
| `act_no`        | Number (Casted to integer)           | Act state value. This variable does nothing by itself, but can be used to switch between act states. |
| `act_wait`      | Number (Casted to integer)           | Act state timer value. This variable does nothing by itself, but can be used as a timer between act states. |
| `view_x` | [Pixel Unit](/api/objects/pixel/) | X offset of the Caret sprite. |
| `view_y` | [Pixel Unit](/api/objects/pixel/) | Y offset of the Caret sprite. |

## The Caret Buffer
Spawned Carets in Cave Story are stored in a buffer (or list) of 64 entries.

When the game spawns Carets it checks trough the Carets buffer and finds a spot that's not currently occupied by an alive Caret and replaces that spot with the Caret it's spawning. When the Caret in that spot dies, the spot is freed out for when the game decides to spawn another Caret again.

!!! Warning
	If you will be using any of the following functions for actively updating an Caret you will have to actively retrieve the Caret as well.

## ModCS.Caret.Spawn()

```lua
ModCS.Caret.Spawn(carettype, x, y, direct)
```

Spawns a Caret of [Caret Type](/api/objects/caret/id/) `carettype` on [Pixel Unit](/api/objects/pixel/) coordinates `x` and `y`.

`direct` is an optional parameter and the [Direction](/api/objects/direction/) with which the Caret will spawn.

Returns a ModCS.Caret of the spawned Caret. 

## ModCS.Caret.GetByBufferIndex()

```lua
ModCS.Caret.GetByBufferIndex(index)
```

Directly gets `index` Caret from the Caret buffer.