# 1.5 - NPC Placement

[NPCs](/api/objects/npc/) (Also known as Entities) are in-game objects used for cutscenes and as enemies. NPCs can be stored in maps. Individual map NPC placement is stored in `.pxe` files that can be found in the `data/Stage/` folder. NPCs use [Tile Unit](/api/map/#tile-unit) coordinates when stored in `PXE` files, but in-game they use [Pixel Unit](/api/objects/pixel/) coordinates.

## 1.5.1 - PXE Entry Parameters

Individual entries in `PXE` files can have unique parameters such as Event ID and Flag ID. These parameters are used with [TextScript](/api/tsc/). Individual entries can also have unique [NPC Bits](/api/objects/npc/bits/) set.

## 1.5.2 - NPC Sprites

NPCs' sprites will be taken from specific parts of either the NPC Spritesheet 1 or 2 specified per Stage Table entry or from global spritesheets. From where NPC sprites are taken is usually specified in an NPC type's [NPC Table](/api/objects/npc/id/#npc-table) entry.
