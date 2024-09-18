# 1.2 - Stage Table

At this point you are probably wondering "what is a stage table anyway".

The [Stage Table](/api/stage/#stage-table) is what Cave Story uses to transfer between different rooms. Usually when the player enters a door that transfers them to another room, the game is saying "Transfer to Stage Number X" and data from Stage Table entry No. X is loaded.

The Stage Table in ModCS is stored in the `stage.tbl` file. In the Freeware EXE it's hardcoded into the EXE.

You may create, edit and delete Stage Table entries in Cave Story editors.

!!! Note
	Contrary to popular belief making and deleting Stage Table entries in editors such as Booster's Lab  does not create or delete map files. Stage Table entries are just what they are - Some info which *points* to map files in their "Filename" section. The reason people believe deleting Stage Table entries in editors deletes the map files too is because when you click on a Stage Table entry which points to map files that do not eixst, Booster's Lab creates empty map files for you.

While you may delete and move Stage Table entries it's important to note that things such as Save Files, the Opening sequence and New Game may break if certain stages end up in the wrong order. [Scripting](/guide/lua/) allows you to change the Opening sequence and New Game stages, but more on that in the Scripting section. 