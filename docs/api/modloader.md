# ModCS.ModLoader

The **ModCS.ModLoader namespace** contains functions related to the Cave Story Mod Loader, developed by Clownacy.

## ModCS.ModLoader.WriteByte()

```lua
ModCS.ModLoader.WriteByte(address, number)
```

Replace the byte at `address` with the `number` given.

## ModCS.ModLoader.WriteWord()

```lua
ModCS.ModLoader.WriteWord(address, number)
```

Replace the word (2 bytes) at `address` with the `number` given.

## ModCS.ModLoader.WriteLong()

```lua
ModCS.ModLoader.WriteLong(address, number)
```

Replace the long (4 bytes) at `address` with the `number` given.

## ModCS.ModLoader.WriteWordBE()

```lua
ModCS.ModLoader.WriteWordBE(address, number)
```

Replace the word (2 bytes) at `address` with the `number` given, in Big Endian format (reversed byte order).

## ModCS.ModLoader.WriteLongBE()

```lua
ModCS.ModLoader.WriteLongBE(address, number)
```

Replace the long (4 bytes) at `address` with the `number` given, in Big Endian format (reversed byte order).

## ModCS.ModLoader.GetByte()

```lua
ModCS.ModLoader.GetByte(address)
```

Returns the byte found at `address`.

## ModCS.ModLoader.GetWord()

```lua
ModCS.ModLoader.GetWord(address)
```

Returns the word found at `address`.

## ModCS.ModLoader.GetLong()

```lua
ModCS.ModLoader.GetLong(address)
```

Returns the long found at `address`.