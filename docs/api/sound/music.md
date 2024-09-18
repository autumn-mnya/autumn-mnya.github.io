# ModCS.Music

The **ModCS.Music namespace** contains functions related to playing music.

## Music ID reference

| Music ID | Name              | Internal Name |
| -------- | ----------------- | ------------- |
| 0        | None              | XXXX          |
| 1        | Mischievous Robot | WANPAKU       |
| 2        | Safety            | ANZEN         |
| 3        | Game Over         | GAMEOVER      |
| 4        | Gravity           | GRAVITY       |
| 5        | On To Grasstown   | WEED          |
| 6        | Meltdown 2        | MDOWN2        |
| 7        | Eyes of Flame     | FIREEYE       |
| 8        | Gestation         | VIVI          |
| 9        | Mimiga Town       | MURA          |
| 10       | Get Item          | FANFALE1      |
| 11       | Balrog's Theme    | GINSUKE       |
| 12       | Cemetery          | CEMETERY      |
| 13       | Plant             | PLANT         |
| 14       | Pulse             | KODOU         |
| 15       | Victory           | FANFALE3      |
| 16       | Get Life Capsule  | FANFALE2      |
| 17       | Tyrant            | DR            |
| 18       | Run               | ESCAPE        |
| 19       | Jenka 1           | JENKA         |
| 20       | Labyrinth Fight   | MAZE          |
| 21       | Access            | ACCESS        |
| 22       | Oppression        | IRONH         |
| 23       | Geothermal        | GRAND         |
| 24       | Cave Story        | CURLY         |
| 25       | Moonsong          | OSIDE         |
| 26       | Hero's End        | REQUIEM       |
| 27       | Scorching Back    | WANPAK2       |
| 28       | Quiet             | QUIET         |
| 29       | Final Cave        | LASTCAVE      |
| 30       | Balcony           | BALCONY       |
| 31       | Charge            | LASTBTL       |
| 32       | Last Battle       | LASTBT3       |
| 33       | The Way Back Home | ENDING        |
| 34       | Zombie            | ZONBIE        |
| 35       | Break Down        | BDOWN         |
| 36       | Running Hell      | HELL          |
| 37       | Jenka 2           | JENKA2        |
| 38       | Living Waterway   | MARINE        |
| 39       | Seal Chamber      | BALLOS        |
| 40       | Toroko's Theme    | TOROKO        |
| 41       | White Stone Wall  | WHITE         |


## ModCS.Music.Play()

```lua
ModCS.Music.Play(id)
```

Changes the current music playing to music `id`.

## ModCS.Music.GetCurrent()

```lua
ModCS.Music.GetCurrent()
```

Returns the ID of the current track.

## ModCS.Music.GetOld()

```lua
ModCS.Music.GetOld()
```

Returns the ID of the last track played.

## ModCS.Music.GetPosition()

```lua
ModCS.Music.GetPosition()
```

Returns the position number of the current track.

## ModCS.Music.GetOldPosition()

```lua
ModCS.Music.GetOldPosition()
```

Returns the position number of the last track played.

## ModCS.Music.SetPosition()

```lua
ModCS.Music.SetPosition(x)
```

Sets the position number of the current track to `x`.

## ModCS.Music.SetVolume()

```lua
ModCS.Music.SetVolume(vol)
```

Sets the volume of the current track to `vol`. 