# ModCS.Npc

The **ModCS.Npc class** represents NPCs (Also known as Entities). NPCs are game objects used for enemies, cutscenes, enemy projectiles and (some) bosses. Examples are Toroko, First Cave Critter, Puu Black, etc.

A ModCS.Npc is userdata. You may access and edit the following values from it:

| Value           | Type                                 | Usage                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------ |
| `x`             | [Pixel Unit](/api/objects/pixel/)    | X position of the NPC.                                       |
| `y`             | [Pixel Unit](/api/objects/pixel/)    | Y position of the NPC.                                       |
| `xm`            | [Pixel Unit](/api/objects/pixel/)    | X velocity of the NPC. This value does nothing by itself, but can be used with [ModCS.Npc.Move()](/api/objects/npc/functions/#modcsnpcmove). |
| `ym`            | [Pixel Unit](/api/objects/pixel/)    | Y velocity of the NPC. This value does nothing by itself, but can be used with [ModCS.Npc.Move()](/api/objects/npc/functions/#modcsnpcmove). |
| `xm2`           | [Pixel Unit](/api/objects/pixel/)    | Alternative X velocity of the NPC. This value does nothing by itself, but can be used with [ModCS.Npc.Move2()](/api/objects/npc/functions/#modcsnpcmove2). |
| `ym2`         | [Pixel Unit](/api/objects/pixel/)    | Alternative Y velocity of the NPC. This value does nothing by itself, but can be used with [ModCS.Npc.Move2()](/api/objects/npc/functions/#modcsnpcmove2). |
| `tgt_x`    | [Pixel Unit](/api/objects/pixel/)    | Target X value. This variable does nothing by itself. |
| `tgt_y`   | [Pixel Unit](/api/objects/pixel/)    | Target Y value. This variable does nothing by itself. |
| `id`            | [NPC Type ID](/api/objects/npc/id/)    | ID of the NPC.                                               |
| `flag`          | [Flag](/api/flags/flag/) | Flag of the NPC.                                             |
| `event`         | [Event](/api/tsc/#events)            | [TSC Event](/api/tsc/#events) of the NPC.                    |
| `surf`          | [Surface](/api/drawing/surface/)     | The surface that the NPC will draw from.                     |
| `hit_voice`     | [Sound ID](/api/sound/sound/#sound-effects-id-reference) | The sound effect that will play when the NPC gets hit.       |
| `destroy_voice` | [Sound ID](/api/sound/sound/#sound-effects-id-reference) | The sound effect that will play when the NPC dies.           |
| `life`          | Number (Casted to integer)           | The health points of the NPC.                                |
| `damage`        | Number (Casted to integer)           | The amount of damage the NPC deals to the player upon touching. |
| `exp`           | Number (Casted to integer)           | The XP worth of the NPC.                                     |
| `smoke_size`    | Number (Casted to integer)           | The amount of smoke the NPC will spawn after dying. Can be from 0 to 3 (0 being no smoke being spawned upon death). |
| `direct`        | [Direction](/api/objects/direction/) | Direction of the NPC.                                        |
| `ani_no`        | Number (Casted to integer)           | Animation frame value. This variable does nothing by itself, but can be used to switch between animation frames. |
| `ani_wait`      | Number (Casted to integer)           | Animation timer value. This variable does nothing by itself, but can be used as a timer between animation frames. |
| `act_no`        | Number (Casted to integer)           | Act state value. This variable does nothing by itself, but can be changed with the `<ANP` TSC command. |
| `act_wait`      | Number (Casted to integer)           | Act state timer value. This variable does nothing by itself, but can be used as a timer between act states. |
| `count1`   | Number (Casted to integer)           | Counter value. This variable does nothing by itself. |
| `count2` | Number (Casted to integer)           | Counter value. This variable does nothing by itself. |
| `pNpc`          | [NPC](/api/objects/npc/)             | Parent NPC value.                                            |

## The NPC Buffer
Spawned NPCs in Cave Story are stored in a buffer (or list) of 512 entries. Although the NPC buffer size is 512, the game starts spawning NPCs at different positions in the buffer in different places. Examples include:

- NPCs loaded from a PXE file start from 170.

- NPCs spawned by `<SNP` start from 256.

- Water splash entities start from 0.

When the game spawns NPCs it checks trough the NPC buffer and finds a spot that's not currently occupied by an alive NPC and replaces that spot with the NPC it's spawning. When the NPC in that spot dies, the spot is freed out for when the game decides to spawn another NPC again.

!!! Warning
	If you will be using any of the following functions for actively updating an NPC you will have to actively retrieve the NPC as well.

## ModCS.Npc.GetByEvent()

```lua
ModCS.Npc.GetByEvent(event)
```

Searches the current buffer of spawned NPCs for one with an [Event](/api/tsc/#events) number `event` and returns a ModCS.Npc of that NPC. Returns a nil otherwise.

## ModCS.Npc.Spawn()

```lua
ModCS.Npc.Spawn(npctype, x, y, start_index)
```

Spawns an NPC of [NPC Type](/api/objects/npc/id/) `npctype` on [Pixel Unit](/api/objects/pixel/) coordinates `x` and `y`. If `start_index` is specified the NPC buffer start position for the NPC summon will be `start_index`. Otherwise the NPC buffer start position will be 256.

Returns a ModCS.Npc of the spawned NPC. 

## ModCS.Npc.Spawn2()

```lua
ModCS.Npc.Spawn2(npctype, x, y, xm, ym, direction, start_index)
```

Spawns an NPC of [NPC Type](/api/objects/npc/id/) `npctype` on [Pixel Unit](/api/objects/pixel/) coordinates `x` and `y`, with `xm`, `ym`, and `direction` specified. If `start_index` is specified the NPC buffer start position for the NPC summon will be `start_index`. Otherwise the NPC buffer start position will be 256.

Returns a ModCS.Npc of the spawned NPC. 

## ModCS.Npc.GetByBufferIndex()

```lua
ModCS.Npc.GetByBufferIndex(index)
```

Directly gets `index` NPC from the NPC buffer.