# ModCS.Key

The **ModCS.Key namespace** contains functions for checking key presses.

All ModCS.Key functions follow a similar format:

```lua
ModCS.Key.Button(hold)
```

Returns `true` if the button is being pressed.

`hold` is an optional parameter and a Boolean. If set to `true` the function will return true if the button is being held.

## List of functions

```lua
ModCS.Key.Jump(hold) -- Can be set to either Z or X in DoConfig
ModCS.Key.Shoot(hold) -- Can be set to either X or Z in DoConfig
ModCS.Key.Arms(hold) -- A key, Swapping weapons right, swapped if the file "s_reverse" exists
ModCS.Key.ArmsRev(hold) -- S key, Swapping weapons left, swapped if the file "s_reverse" exists
ModCS.Key.Item(hold) -- Q key, Inventory
ModCS.Key.Map(hold) -- W key, Map System if the player has equip "2"
ModCS.Key.Ok(hold) -- Can be either the Jump button or Shoot button in DoConfig
ModCS.Key.Cancel(hold) -- Can be either the Shoot button or Jump button in DoConfig
ModCS.Key.Left(hold) -- Can be either Left arrow key or < in DoConfig
ModCS.Key.Up(hold) -- Can be either Up arrow key or L in DoConfig
ModCS.Key.Right(hold) -- Can be either Right arrow key or ? in DoConfig
ModCS.Key.Down(hold) -- Can be either Down arrow key or > in DoConfig
ModCS.Key.Shift(hold) -- Shift key (Not used by gamepad)
```

## ModCS.Key.GetKey()

```lua
ModCS.Key.GetKey()
```

Returns the value of the games `gKey` value, used to know what keys are being held.

## ModCS.Key.GetKeyTrg()

```lua
ModCS.Key.GetKeyTrg()
```

Returns the value of the games `gKeyTrg` value, used to know what keys are being pressed.

## ModCS.Key.ClearKey()

```lua
ModCS.Key.ClearKey()
```

Clears the value of the games `gKey` value, setting it to 0.

## ModCS.Key.ClearKeyTrg()

```lua
ModCS.Key.ClearKeyTrg()
```

Clears the value of the games `gKeyTrg` value, setting it to 0.

## ModCS.Key.GetTrg()

```lua
ModCS.Key.GetTrg()
```

Run game input functions. Always gets run in the main gameplay loop, opening, and title loops, but should be run if you go out of that in your code.

## ModCS.Key.KeyDown()

```lua
ModCS.Key.KeyDown(kcode, kchar, krepeat)
```

Run code when the `kcode` (Win32 Keyboard Keycode) is pressed, with `kchar` being the character (if there is one). `krepeat` is true if its a repeated key press, holding down the key for a decent amount of time.

## ModCS.Key.KeyUp()

```lua
ModCS.Key.KeyUp(kcode, kchar)
```

Run code when the `kcode` (Win32 Keyboard Keycode) is released, with `kchar` being the character (if there is one).

