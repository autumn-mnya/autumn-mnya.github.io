# Caret Type IDs

A **Caret Type ID** (Also known as Act ID or character code) is a number that defines an Caret's type.

## Caret Table

A table of default Caret sprite offsets are stored in a `caret.tbl` file in the data folder. When Carets of a set type are spawned they will initially use sprite offsets from their Caret Table entry, although these offsets can be changed for Carets with scripting at any time.

## Caret Type reference

| Caret Type ID | Caret                                                        |
| ------------- | ------------------------------------------------------------ |
| 0             | Null                                                         |
| 1             | Bubble                                                       |
| 2             | Projectile dissipation                                       |
| 3             | Shoot Particle                                               |
| 4             | Snake Afterimage (Unused)                                    |
| 5             | Zzz Sleeping Particles                                       |
| 6             | Snake Afterimage (Duplicate)                                 |
| 7             | Booster Particle                                             |
| 8             | Drowned Player                                               |
| 9             | Interact Question mark                                       |
| 10            | 'Level Up!'                                                  |
| 11            | Red hurt particles                                           |
| 12            | Explosion flash                                              |
| 13            | White circle particles (Used by Demon Crown and when the player bumps onto a ceiling) |
| 14            | Broken caret                                                 |
| 15            | Small projectile dissipation                                 |
| 16            | 'Empty!'                                                     |
| 17            | 'PUSH JUMP KEY!' (Unused)                                    |

## Overriding Carets

ModCS allows you to override a Caret type's act code.  If a function in the `ModCS.Caret.Act` array is defined with the index `X` (where `X` is the Caret Type ID of the Caret Type you want to override) in your Lua script the game will run that function instead of the built-in Caret act code. A [ModCS.Caret](/api/objects/caret/) will be passed as the first argument of the function when it's called.

??? Example
	This example will set the [Rect](/api/drawing/rect/) of Caret Type 1 to 0,0,8,8.
	```lua linenums="1"
	ModCS.Caret.Act[1] = function(crt)
		crt:SetRect(0,0,8,8)
	end
	```