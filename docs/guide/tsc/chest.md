# 2.3 - Making a chest

## 2.3.1 - Flags

In TSC, *flags* are the primary way of saving information and performing different commands based on that information. A flag has a number associated with it as an ID, and can either be set to ON or OFF. This status is saved to the player's savefile and persists across all stages.

Setting a flag to ON is done with the `<FL+` command -- e.g. `<FL+1000` sets flag number `1000`. Setting a flag to OFF is done with the `<FL-` command -- e.g. `<FL-1000` sets flag number `1000`.

Finally, to do different things based on the state of a flag, the `<FLJ` command is used to *jump* to different events. For instance:

```
#0100
<FLJ1000:0101
<MSGFlag 1000 is not set.<NOD<CLO<END

#0101
<MSGFlag 1000 is set.<NOD<CLO<END
```

If the flag `1000` is set, then rather than continuing to run the commands in event `100`, the game will stop and switch to running the commands in event `101` instead. In total, flags allows you to save permanently when some event occurs, and conditionally split two different possible actions to take into two separate events.

## 2.3.2 - A chest with a weapon

Cave Story does not have a particularly unified item system -- weapons, life capsules, and items all are given to the player through different TSC commands. For a weapon, the `<AM+` command is used, which takes the weapon ID and the amount of ammo to give (or 0 for infinite) as arguments. A simple event (attached to a Chest NPC) to give the player a Polar Star might look like:

```
#0100
<PRI<FLJ1000:0101<FL+1000<CNP0200:0021:0000
<MSGOpened the chest.<NOD<GIT0002<AM+0002:0000<CLR
Got the =Polar Star=!<WAI0160<NOD<CLO<END

#0101
<PRI<MSGEmpty.<NOD<CLO<END
```

Note the use of the flag `1000` here. Once the chest is opened for the first time, the flag will be set, and subsequent interactions will instead display "Empty." 
A few other new commands:

- `<CNP` functions similar to `<DNP`, but changes the type of the NPC instead. Here we change the associated Chest NPC (#15) to an Opened Chest NPC (#21).
- `<GIT` displays an image of an item above the textbox, separate from actually giving the item.
- `<WAI` simply waits the specified number of frames. This is used in vanilla Cave Story to wait for all the sounds to finish playing (although this chest does not include them).

Additionally, your Chest NPC should have flag `1000` set as its Flag ID. The code for the Chest NPC is set up to switch immediately to being opened if its Flag ID is set, so re-entering the room will leave it open.
