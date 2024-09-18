# Player Equip

**Player Equip Values** are toggles that enable certain features for the player. They are mostly used in Cave Story for checking equipped items.

!!! Note
	Equip values are bit-wise. This means if you checked for "3", that would be like 1 *and* 2.
	
| Value | Bitwise Value | Usage                                      |
| ----- | ------------- | ------------------------------------------ |
| 0     | 0x0001        | Booster v0.8 (Ignored if v2.0 is equipped) |
| 1     | 0x0002        | Map System                                 |
| 2     | 0x0004        | Arms Barrier                               |
| 3     | 0x0008        | Turbocharge                                |
| 4     | 0x0010        | Air Tank                                   |
| 5     | 0x0020        | Booster v2.0                               |
| 6     | 0x0040        | Mimiga Mask                                |
| 7     | 0x0080        | Whimsical Star                             |
| 8     | 0x0100        | Nikumaru Counter                           |

## ModCS.Player.Equip()

```lua
ModCS.Player.Equip(value)
```

Sets the equip value `value`.

## ModCS.Player.Unequip()

```lua
ModCS.Player.Unequip(value)
```

Unsets the equip value `value`.

## ModCS.Player.HasEquipped()

```lua
ModCS.Player.HasEquipped(value)
```

Returns true if the equip value `value` is set. Returns false otherwise.
