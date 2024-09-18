# 3.3 - NPCs

One of ModCS's Lua API main features is its [NPC API](/api/objects/npc/). In this section of the guide we will be going over basic NPC editing.

To begin editing an NPC Type you simply have to define a function in the `ModCS.Npc.Act` with an index of the [NPC Type ID](/api/objects/npc/id/) you would like to edit. This function will run every frame an NPC of this type exists. The first argument given to this function will be the NPC for which this function is running.

Using [ModCS.Npc.ActCode()](/api/objects/npc/functions/#modcsnpcactcode) you may run vanilla NPC code for the NPC given in the function.

!!! Example
	```lua linenums="1"
	--[[
	For every NPC with type 64 (First Cave Critter)
	this function will run, and the NPC will be
	passed to the function as `npc`
	--]]
	ModCS.Npc.Act[64] = function(npc)
		--[[
		Run the vanilla game code for NPC ID 64
		(First Cave Critter) for `npc`
		--]]
		npc:ActCode()
	end
	```

Doing this will now allow us to inject custom code in the code of NPC type 64, which is the First Cave Critter.

The First Cave Critter, like many vanilla NPCs, uses Act States to differentiate between how the NPC should act in certain scenarios.

!!! Example
	```lua linenums="1"
	ModCS.Npc.Act[64] = function(npc)
		npc:ActCode()
		print(npc.act_no)
	end
	```

Using this code while there is a single NPC of type 64 on screen will allow you to find out what different Act States of the NPC do.

With this method you can find out the Act States of the First Cave Critter NPC:

- Act State 1 - Idle

- Act State 2 - Jumped

- Act State 3 - Falling

This information can help us do certain modifications to the NPC in our code. For example, we can make First Cave Critters spawn smoke once they land on the floor after a fall:

!!! Example
	```lua linenums="1"
	ModCS.Npc.Act[64] = function(npc)
		if (npc.act_no == 3 and npc:TouchFloor()) then
			ModCS.Npc.Spawn(4, npc.x, npc.y)
		end
	
		npc:ActCode()
	end
	```

## 3.3.1 - Editing NPC Rects

!!! Note
	This part of the guide is for advanced Rect changing. While it's still recommended to read it, if you simply wish to offset the sprites of an NPC from a spritesheet use [ModCS.Npc.OffsetRect()](/api/objects/npc/functions/#modcsnpcoffsetrect).

Similarly to Act States, most NPCs also have **Animation States**. These define what sprite the NPC should be currently using. 

You can find out Animation States using a similar method as the one for finding out Act States:

!!! Example
	```lua linenums="1"
	ModCS.Npc.Act[64] = function(npc)
		npc:ActCode()
		print(npc.ani_no)
	end
	```
	

- Animation State 1- Closed eyes
- Animation State 2 - Opened eyes
- Animation State 3 - Jumping

Using this information and [`ModCS.Npc.SetRect()`](/api/objects/npc/functions/#modcsnpcsetrect) we can change the Rects of the NPC.

!!! Example
	```lua linenums="1"
	ModCS.Npc.Act[64] = function(npc)
		npc:ActCode()
	
		local rcLeft = {
			ModCS.Rect.Create(0, 0, 16, 16),
			ModCS.Rect.Create(16, 0, 32, 16),
			ModCS.Rect.Create(32, 0, 48, 16)
		}
	
		local rcRight = {
			ModCS.Rect.Create(0, 16, 16, 32),
			ModCS.Rect.Create(16, 16, 32, 32),
			ModCS.Rect.Create(32, 16, 48, 32)
		}
	
		--[[
		The game doesn't do flipped sprites
		automatically, but we can do them
		ourselves using npc.direct
		--]]
		if (npc.direct == 0) then
			--[[
			Lua table indexes start at 1 and animation
			states start at 0, so we add +1 to the table
			access index
			--]]
			npc:SetRect(rcLeft[npc.ani_no+1])
		elseif (npc.direct == 2) then
			npc:SetRect(rcRight[npc.ani_no+1])
		end
	end
	```

For a better table syntax, you might want to do regular number tables rather than a table with Rect variables:

!!! Example
	```lua linenums="1"
	ModCS.Npc.Act[64] = function(npc)
		npc:ActCode()
	
		local rcLeft = {
			{0, 0, 16, 16},
			{16, 0, 32, 16},
			{32, 0, 48, 16}
		}
	
		local rcRight = {
			{0, 16, 16, 32},
			{16, 16, 32, 32},
			{32, 16, 48, 32}
		}
	
		if (npc.direct == 0) then
			npc:SetRect(rcLeft[npc.ani_no+1][1], rcLeft[npc.ani_no+1][2], rcLeft[npc.ani_no+1][3], rcLeft[npc.ani_no+1][4])
		elseif (npc.direct == 2) then
			npc:SetRect(rcRight[npc.ani_no+1][1], rcRight[npc.ani_no+1][2], rcRight[npc.ani_no+1][3], rcRight[npc.ani_no+1][4])
		end
	end
	```

## 3.3.2 - Making NPCs from scratch

NPC Act functions do not have to contain `ModCS.Npc.ActCode()`, which allows you to create NPC Types entirely from scratch. This can be done in several ways, so this guide won't go over a definitive way to make NPCs. Instead I recommend checking out examples, reading the documentation or reading NPC code of other people.