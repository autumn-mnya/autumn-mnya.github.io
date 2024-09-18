# 2 - Text Scripting

[Text Script](api/tsc/) (Also known as TSC or T-Script) are the primary way to create and cause things to happen in your stage. TSC's abilities include displaying dialogue, controlling NPCs and making them perform specific actions, giving the player items, or modifying the tiles of your stage on the fly.

A typical text script for a stage looks like this:

```
#0101
<CMD...
<CMD...
<CMD...
<END

#0102
<CMD...
<CMD...
<CMD...
<END

#0103
<CMD...
<CMD...
<CMD...
<END
```

The preceding \# represents a four-digit [Event ID](/api/tsc/#events), and everything following it are [Commands](/api/tsc/#commands) that are run when that particular event occurs, up until the `<END`.

Commands in TSC begin with a `<` and always have three character names, such as `<MSG` or `<WAI`. A TSC command can also have additional numbers following it as parameters that affect its operation, like the following:

```
<AM+0002:0000
```

Here, two parameters are passed to the command `<AM+`: `2` and `0`. Parameters are padded with zeros to be exactly four digits long, and are separated by colons. The longest TSC commands can have four parameters, although many have none or only one.

In addition to text scripts specific to a given [Stage](/api/stage/), all Stages automatically share a script contained in `data/Head.tsc`. In vanilla Cave Story, this contains several events that are used throughout the game, like the "Do you want to save?" prompt or "You have died." These always take up the lowest event IDs, so it is generally good practice to start labelling your own events at `#0090` or `#0100`.
