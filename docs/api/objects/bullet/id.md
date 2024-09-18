# Bullet Type IDs

An **Bullet Type ID** (Also known as Act ID or bullet code) is a number that defines an Bullet's type.

## Bullet Table

A table of default Bullet properties are stored in a `bullet.tbl` file in the data folder. You may edit this table with your favorite Cave Story editor. When Bullets of a set type are spawned they will initially use properties from their Bullet Table entry, although these properties can be changed for Bullets with scripting at any time.

!!! Note
	Some vanilla Bullets change their damage or other features gotten from the Bullet Table dynamically. Changing the Bullet Table properties on these Bullet will most likely have little effect. 

## Bullet Type reference

| Bullet Type ID | Bullet                             |
| -------------- | ---------------------------------- |
| 0              | Null                               |
| 1-3            | Snake                              |
| 4-6            | Polar Star                         |
| 7-9            | Fireball                           |
| 10-12          | Machine Gun                        |
| 13-15          | Missile Launcher Rocket            |
| 16-18          | Missile Launcher Explosion         |
| 19-21          | Bubbline                           |
| 22             | Bubbline Level 3 Thorns            |
| 23             | Blade Level 3 Slashes              |
| 24             | Falling Spike (In "Egg Corridor?") |
| 25-27          | Blade                              |
| 28-30          | Super Missile Launcher Rocket      |
| 31-33          | Super Missile Launcher Explosion   |
| 34-36          | Nemesis                            |
| 37-39          | Spur                               |
| 40-42          | Spur Trail                         |
| 42             | Curly's Nemesis                    |
| 44             | Screen Nuke                        |
| 45             | Whimsical Star                     |


## Overriding Bullets

ModCS allows you to override an Bullet type's act code. If a function in the `ModCS.Bullet.Act` array is defined with the index `X` (where `X` is the Bullet Type ID of the Bullet Type you want to override) in your Lua script the game will run that function instead of the built-in Bullet act code. A [ModCS.Bullet](/api/objects/bullet/) will be passed as the first argument of the function when it's called.

??? Example
	This example will set the [Rect](/api/drawing/rect/) of Bullet Type 1 (The Snake Level 1 Bullet) to 16,0,32,16.
	```lua linenums="1"
	ModCS.Bullet.Act[0] = function(bul)
		bul:SetRect(16,0,32,16)
	end
	```