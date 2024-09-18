# ModCS.Bullet

The **ModCS.Bullet class** represents Bullets. Bullets are game objects usually shot by the player to damage Ememy [NPCs](/api/objects/npc/). Bullets will always damage [vulnerable NPCs](/api/objects/npc/bits/) after being shot. Unlike [NPCs](/api/objects/npc/) Bullets only draw from the Bullet [Surface](/api/drawing/surface/).

A ModCS.Bullet is userdata. You may access and edit the following values from it:

| Value           | Type                                 | Usage                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------ |
| `x`             | [Pixel Unit](/api/objects/pixel/)    | X position of the Bullet.                                  |
| `y`             | [Pixel Unit](/api/objects/pixel/)    | Y position of the Bullet.                                 |
| `xm`            | [Pixel Unit](/api/objects/pixel/)    | X velocity of the Bullet. This value does nothing by itself, but can be used with [ModCS.Bullet.Move()](/api/objects/bullet/functions/#modcsbulletmove). |
| `ym`            | [Pixel Unit](/api/objects/pixel/)    | Y velocity of the Bullet. This value does nothing by itself, but can be used with [ModCS.Bullet.Move()](/api/objects/bullet/functions/#modcsbulletmove). |
| `tgt_x`    | [Pixel Unit](/api/objects/pixel/)    | Target X value. This variable does nothing by itself. |
| `tgt_y`   | [Pixel Unit](/api/objects/pixel/)    | Target Y value. This variable does nothing by itself. |
| `id`            | [Bullet Type ID](/api/objects/bullet/id/) | ID of the Bullet.                                         |
| `life`      | Number (Casted to integer) | How many frames the Bullet will stay on screen after hitting an Enemy. |
| `life_count` | Number (Casted to integer) | Range of the Bullet. This value does nothing by itself but can be used to determine how long the Bullet will last on screen after being spawned. |
| `damage`    | Number (Casted to integer) | How much damage the bullet will do to an Enemy for one frame. |
| `enemyhit_x` | [Pixel Unit](/api/objects/pixel/) | The range of the Bullet's hitbox on the X axis. Affects enemies. |
| `enemyhit_y` | [Pixel Unit](/api/objects/pixel/) | The range of the Bullet's hitbox on the Y axis. Affects enemies. |
| `blockhit_x` | [Pixel Unit](/api/objects/pixel/) | The range of the Bullet's hitbox on the X axis. Affects [map](/api/map/) tiles. |
| `blockhit_y` | [Pixel Unit](/api/objects/pixel/) | The range of the Bullet's hitbox on the Y axis. Affects [map](/api/map/) tiles. |
| `direct`        | [Direction](/api/objects/direction/) | Direction of the Bullet.                                |
| `ani_no`        | Number (Casted to integer)           | Animation frame value. This variable does nothing by itself, but can be used to switch between animation frames. |
| `ani_wait`      | Number (Casted to integer)           | Animation timer value. This variable does nothing by itself, but can be used as a timer between animation frames. |
| `act_no`        | Number (Casted to integer)           | Act state value. This variable does nothing by itself, but can be used to switch between act states. |
| `act_wait`      | Number (Casted to integer)           | Act state timer value. This variable does nothing by itself, but can be used as a timer between act states. |
| `count1`   | Number (Casted to integer)           | Counter value. This variable does nothing by itself. |
| `count2` | Number (Casted to integer)           | Counter value. This variable does nothing by itself. |

## The Bullet Buffer
Spawned Bullet in Cave Story are stored in a buffer (or list) of 64 entries.

When the game spawns Bullet it checks trough the Bullet buffer and finds a spot that's not currently occupied by an alive Bullet and replaces that spot with the Bullet it's spawning. When the Bullet in that spot dies, the spot is freed out for when the game decides to spawn another Bullet again.

!!! Warning
	If you will be using any of the following functions for actively updating an Bullet you will have to actively retrieve the Bullet as well.

## ModCS.Bullet.Spawn()

```lua
ModCS.Bullet.Spawn(bullettype, x, y, direct)
```

Spawns a Bullet of [Bullet Type](/api/objects/bullet/id/) `bullettype` on [Pixel Unit](/api/objects/pixel/) coordinates `x` and `y`.

`direct` is an optional parameter and the [Direction](/api/objects/direction/) with which the Bullet will spawn.

Returns a ModCS.Bullet of the spawned Bullet. 

## ModCS.Bullet.GetByBufferIndex()

```lua
ModCS.Bullet.GetByBufferIndex(index)
```

Directly gets `index` Bullet from the Bullet buffer.