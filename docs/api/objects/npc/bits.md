# NPC Bits

**NPC Bits** (Also known as NPC Flags) are toggles on NPCs that enable certain NPC features. They can be turned on for individual [NPC Types](/api/objects/npc/id/) as well as for individual NPCs in a PXE file.

!!! Note
	In the original game NPC Bits are bit-wise. Because of this, many editors show bitwise information for them. For simplicity's sake ModCS uses normal decimal values.

| Value | Bitwise Value | Usage                                                        |
| ----- | ------------- | ------------------------------------------------------------ |
| 0     | 0x0001        | Collision against player - Pushes player out.                |
| 1     | 0x0002        | Ignore tile attribute 44.                                    |
| 2     | 0x0004        | Cannot be hurt and has a different hit effect when hit by a bullet. |
| 3     | 0x0008        | Ignore tile collision.                                       |
| 4     | 0x0010        | The top of the NPC is bouncy.                                |
| 5     | 0x0020        | The NPC is shootable.                                        |
| 6     | 0x0040        | Collision against player.                                    |
| 7     | 0x0080        | Rear and top of the NPC does not hurt the player.            |
| 8     | 0x0100        | The [TSC Event](/api/tsc/#events) specified in the `event` parameter of the ModCS.Npc will run when the player touches the NPC. |
| 9     | 0x0200        | The [TSC Event](/api/tsc/#events) specified in the `event` parameter of the ModCS.Npc will run when the NPC dies. |
| 11    | 0x0800        | The NPC will not spawn unless the [Flag](/api/flags/flag/) specified in the `flag` parameter of ModCS.Npc is set. |
| 12    | 0x1000        | The NPC will spawn with the `direct` parameter of the ModCS.Npc being set to 2. |
| 13    | 0x2000        | If the player interacts with the NPC the [TSC Event](/api/tsc/#events) specified in the `event` parameter of the ModCS.Npc will run. |
| 14    | 0x4000        | The NPC will not spawn if the [Flag](/api/flags/flag/) specified in the `flag` parameter of ModCS.Npc is set. |
| 15    | 0x8000        | Damage dealt to the NPC will show in a damage indicator.     |

## ModCS.Npc.SetBit()

```lua
ModCS.Npc.SetBit(npc, bit)
```

Sets the bit `bit` for `npc`.

## ModCS.Npc.UnsetBit()

```lua
ModCS.Npc.UnsetBit(npc, bit)
```

Unsets the bit `bit` for `npc`.

## ModCS.Npc.CheckBit()

```lua
ModCS.Npc.CheckBit(npc, bit)
```

Returns true if the bit `bit` for `npc` is set. Returns false otherwise.