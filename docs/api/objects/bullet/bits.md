# Bullet Bits

**Bullet Bits** (Also known as Bullet Flags) are toggles on Bullets that enable certain Bullet features. They can be turned on for individual [Bullet Types](/api/objects/bullet/id/).

!!! Note
	In the original game Bullet Bits are bit-wise. Because of this, many editors show bitwise information for them. For simplicity's sake ModCS uses normal decimal values.

| Value | Bitwise Value | Usage                             |
| ----- | ------------- | --------------------------------- |
| 2     | 0x0004        | Ignore tile collision.            |
| 3     | 0x0008        | Don't vanish when hitting a tile. |
| 4     | 0x0010        | Go trough invincible NPCs.        |
| 5     | 0x0020        | Be able to break Snack blocks.    |
| 6     | 0x0040        | Go trough Snack blocks.           |

## ModCS.Bullet.SetBit()

```lua
ModCS.Bullet.SetBit(bul, bit)
```

Sets the bit `bit` for `bul`.

## ModCS.Bullet.UnsetBit()

```lua
ModCS.Npc.UnsetBit(bul, bit)
```

Unsets the bit `bit` for `bul`.

## ModCS.Bullet.CheckBit()

```lua
ModCS.Npc.CheckBit(bul, bit)
```

Returns true if the bit `bit` for `bul` is set. Returns false otherwise.