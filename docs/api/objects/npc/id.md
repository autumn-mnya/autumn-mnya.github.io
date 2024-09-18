# NPC Type IDs

An **NPC Type ID** (Also known as Act ID or character code) is a number that defines an NPC's type.

## NPC Table

A table of default NPC properties are stored in a `npc.tbl` file in the data folder. You may edit this table with your favorite Cave Story editor. When NPCs of a set type are spawned they will initially use properties from their NPC Table entry, although these properties can be changed for NPCs with scripting at any time.

!!! Note
	Some vanilla NPCs change their damage or other features gotten from the NPC Table dynamically. Changing the NPC Table properties on these NPCs will most likely have little effect. 

??? Info "NPC Table parameters on different editors"
	Different Cave Story editors use different terminology on NPC Table parameters. This section translates all of them to ModCS API equivalents.

	??? Info "Booster's Lab"

		![NPC Table window on Booster's Lab](/assets/images/npc/bl.png)

	??? Info "The King's Table"

		![NPC Table window on The King's Table](/assets/images/npc/tkt.png)

	??? Info "Cave Editor"

		![NPC Table window on Cave Editor](/assets/images/npc/ce.png)

	1. `life` parameter of a ModCS.Npc
	2. `damage` parameter of a ModCS.Npc
	3. `exp` parameter of a ModCS.Npc
	4. NPC Bits
	5. NPC Hitbox
	6. NPC Viewbox
	7. `surf` parameter of a ModCS.Npc
	8. `hit_voice` parameter of a ModCS.Npc
	9. `destroy_voice` parameter of a ModCS.Npc
	10. `smoke_size` parameter of a ModCS.Npc

## NPC Type reference

... Here I would put my own NPC Type reference table but I'm currently too lazy. Please refer to your map editor's NPC list or this [Cave Story NPC Spreadsheet](https://docs.google.com/spreadsheets/d/12iC9uRGNZ2MnrhpS4s_KvIRYHhC56mPXCnCcsDjxit0/edit#gid=0) instead.

## Overriding NPCs

ModCS allows you to override an NPC type's act code. If a function in the `ModCS.Npc.Act` array is defined with the index `X` (where `X` is the NPC Type ID of the NPC Type you want to override) in your Lua script the game will run that function instead of the built-in NPC act code. A [ModCS.Npc](/api/objects/npc/) will be passed as the first argument of the function when it's called.

??? Example
	This example will set the [Rect](/api/drawing/rect/) of NPC Type 0 (The Null NPC) to 16,0,32,16.
	```lua linenums="1"
	ModCS.Npc.Act[0] = function(npc)
		npc:SetRect(16,0,32,16)
	end
	```