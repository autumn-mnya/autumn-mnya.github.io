# 2.2 - Making a door

Doors in Cave Story are made using NPCs that run an event in your text script when interacted with.
A basic one can be made by placing a Null NPC and check its Interactable [NPC Bit](/api/objects/npc/bits/). Then, construct a TSC event like so:

```
#0100
<PRI<FAO0000<TRAarguments...
```

The `<PRI` command prevents the player (and anything else) from moving, and the `<FAO` command starts a fade out.
The `<TRA` command is then responsible for moving the player to a new [Stage](/api/modcsstage/), so its arguments are dependent on where you want to go. It takes the following:

```
<TRAnew stage ID:new event ID:starting x position:starting y position
```

So if you wanted to take a player to Stage #2 at position (2, 1), then it might look like

```
#0100
<PRI<FAO0000<TRA0002:0090:0002:0001<END
```

The "new Event ID" represents an event in the text script of the new stage, which is crucial: if you don't have some type of event set up in the other stage, then there will be nothing to perform the fade back in after the fade out! For this example, `#0090` in stage #2 might look like:

```
#0090
<MNA<CMU0008<FAI0000<END
```

Here, `<MNA` displays the new stage name, and `<CMU` sets the music track to be played. Then `<FAI` fades the game back in.
Once you have your events set up, you can set the event ID on your NPC to e.g. `100` to have your script fire on interaction.

If you want to make a closed door that visibly opens when interacted with, you can use a Door NPC rather than a Null NPC. Then, you can use the `<DNP` and `<SOU` commands in your event:

```
#0100
<PRI<SOU0011<DNP0100<FAO000<TRA0002:0090:0002:0001<END
```

The `<SOU` command plays sound 11, which the sound of opening a door.

The `<DNP` command deletes NPCs attached to the specified event, thus removing the door when interacted with.

