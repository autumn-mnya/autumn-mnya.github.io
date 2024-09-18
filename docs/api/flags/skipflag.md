# ModCS.SkipFlag

The **ModCS.SkipFlag namespace** contains functions related to Skipflags.

Unlike [Flags](/api/flags/flag/) Skipflags do not save to the save file and will reset if the player closes the game. They are used if the player dies after viewing a long cutscene and would have to rewatch a cutscene if a skipflag was not used for it. The maximum skipflag is 64.

## ModCS.SkipFlag.Set()

```lua
ModCS.SkipFlag.Set(no)
```

Sets (Or "Switches on") the skipflag `no`.

## ModCS.SkipFlag.Unset()

```lua
ModCS.SkipFlag.UnSet(no)
```

Unsets (Or "Switches off") the skipflag `no`.

## ModCS.SkipFlag.Get()

```lua
ModCS.SkipFlag.Get(no)
```

Returns true if the skipflag `no` is set. Returns false otherwise.
