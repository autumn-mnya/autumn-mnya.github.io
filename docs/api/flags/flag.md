# ModCS.Flag

The **ModCS.Flag namespace** contains functions related to Flags.

Flags are in-game "switches" that are used to record the player's progress, and are saved to the save file when the player saves the game. The maximum flag is 8000.

## Hardcoded flags

There are two flags that change game properties outside of TSC:

- If flag `4000` is set, when the player drowns, instead of the normal drown event, event 1100 will start. This is used in the vanilla game for the after Core boss cutscene.

- If flag `563` is not set, the Curly AI NPC will not shoot bullets. *(Citation needed)*

## ModCS.Flag.Set()

```lua
ModCS.Flag.Set(no)
```

Sets (Or "Switches on") the flag `no`.

## ModCS.Flag.Unset()

```lua
ModCS.Flag.UnSet(no)
```

Unsets (Or "Switches off") the flag `no`.

## ModCS.Flag.Get()

```lua
ModCS.Flag.Get(no)
```

Returns true if the flag `no` is set. Returns false otherwise.
