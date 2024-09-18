# ModCS.Sound

The **ModCS.Sound namespace** contains functions related to playing different sound effects.

## Sound Effects ID reference

... Here I would put my own sound effects table but I'm currently too lazy. Please refer to your map editor's sound effects list.

## ModCS.Sound.Play()

```lua
ModCS.Sound.Play(id, loop)
```

Plays sound effect `id`.

`loop` is an optional parameter and a Boolean. If set to true the given sound effect will play on loop.

## ModCS.Sound.Stop()

```lua
ModCS.Npc.Stop(id)
```

Stop playing sound effect `id`.

## ModCS.Sound.ChangeFrequency

```lua
ModCS.Sound.ChangeFrequency(id, freq)
```

Change the frequency of sound effect `id` to `freq`.

## ModCS.Sound.ChangeVolume

```lua
ModCS.Sound.ChangeFrequency(id, volume)
```

Change the volume of sound effect `id` to `volume`.

## ModCS.Sound.ChangePan

```lua
ModCS.Sound.ChangePan(id, pan)
```

Change the panning of sound effect `id` to `pan`.