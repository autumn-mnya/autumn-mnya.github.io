# 2.1 - Making a dialog box appear

The most common use of TSC by far is in making dialog boxes. The most basic text script is:

```
#0100
<MSGYour text here!<NOD<CLO<END
```

A few different commands go into making this script work:

- `<MSG` -- make the empty dialog box appear
- `<NOD` -- wait for the player to press a key before continuing
- `<CLO` -- close the dialog box

Additionally, note that any non-command text in the script is instead written to the dialog box, provided it is open.

Longer dialog will want to use multiple `<NOD` commands like so:

```
#0100
<MSGWhen they left, the fans turned
off permanently.<NOD
But recently they started spinning
again. I wonder what's making
them run...<NOD<CLO
```

Even if there are no explicit breaks in the text itself, it is important to place pauses in an ergonomic way. Since only three lines can be properly on screen at any given time,
 a well-placed `<NOD` allows the player to read each set of lines at an appropriate pace.

Other commands can be placed in the middle of non-command text, causing them to trigger when that text is displayed:

```
#0100
<MSGAre you ready for a funny noise?<NOD
Be<SOU0005eep!<NOD<CLO
```

Here, a sound will be played by the `<SOU` command right in the middle of the word.
