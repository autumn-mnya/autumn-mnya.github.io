# 1.6 - NPC Table

[The NPC Table](/api/objects/npc/id/#npc-table) is a table of default properties for each NPC type. It'ss stored in the `data/npc.tbl` file. Editing the NPC Table can be used to change basic properties such as HP, damage, exp price, hitbox, spritesheet or default [bits](/api/objects/npc/bits/). Some NPCs dynamically change such values, which would mean that changing these NPCs' NPC Table entry values may have little effect. For such NPCs [Scripting](/guide/lua/) should be used instead.

!!! Warning
	When editing NPC hitboxes make sure that the front and back (left and right) values of the hitbox are the same, otherwise you might get weird hitbox behavior.

