# 0.1 - Installation and getting ready

Now, obviously, you would have to download ModCS.

[:material-download: Download Latest ModCS](/assets/releases/modcs0211.zip){ .md-button .md-button--primary }

The downloaded ZIP will need to be extracted before usage, you can do that with a program like [7-Zip](https://www.7-zip.org).

This download contains:

- The ModCS EXE
- A DoConfig EXE
- A vanilla `data` folder containing all vanilla `data` folder assets, with PBMs renamed to BMPs.
- Extra files necessary for ModCS to function (`data/stage.tbl`, `data/bullet.tbl`, `data/caret.tbl`, `data/music.tbl`, `data/Scripts/main.lua`)

## 0.1.1 - Migrating a mod to ModCS

If you simply want to **switch engines** from another engine (Original Freeware EXE, CSE2, etc.) to ModCS then you are probably not willing to start with the vanilla data folder. This section will cover how to migrate from Freeware and from CSE2 Enhanced.

!!! Important
	Please note that this section only focuses on migrating **data folders**, not modifications to the EXE. Any source code edits or Assembly hacks you wish to migrate will have to be recreated with the Lua scripting API manually. Depending on the edits you wish to migrate this might be an easy process.

### 0.1.1.1 - Migrating from Freeware

The following guide will show you how to migrate a Freeware `data` folder to ModCS.

1. Make sure all bitmaps in your data folder have a `.bmp` extension.
2. Create a `Scripts` folder in `data` and create an empty `main.lua` file there. (Make sure you edit the file extension).
3. From a vanilla ModCS install copy the `data/bullet.tbl` file (Or from a PC Cave Story+ install copy the `data/base/bullet.tbl` file) to your mod's `data` folder.
4. From a vanilla ModCS install copy the `data/arms_level.tbl` file (Or from a PC Cave Story+ install copy the `data/base/arms_level.tbl` file) to your mod's `data` folder.
5. From a vanilla ModCS install copy the `data/caret.tbl` and `data/music.tbl` files to your mod's `data` folder.
6. Move all ORG files from Resources to a `data/Org` folder using Resource Hacker (Make sure they have a `.org` file extension).
7. Move all Credit bitmaps from Resources to a `data/Credits` folder using Resource Hacker (Make sure they have a `.bmp` file extension).
8. Move the PIXEL bitmap from Resources to the `data` folder using Resource Hacker (Make sure it has a `.bmp` file extension).
9. Using [The King's Table](/guide/intro/editors/#022-the-kings-table) convert your Stage Table to a `stage.tbl` and place it in your `data` folder. 
10. Replace your mod EXE with the ModCS EXE.

### 0.1.1.2 - Migrating from CSE2 Enhanced

The following guide will show you how to migrate a CSE2 Enhanced `data` folder to ModCS.

!!! Note
	This guide only focuses on the most common CSE2 Enhanced `data` folder format. (.png files + mrmap.bin). For anything else, you're on your own.

1. Replace all transparent pixels in your `.png` files with pure black pixels (RGB 0, 0, 0; HEX #000000) in an image editing tool.
2. Save them all as 24-bit `.bmp`s in your image editing tool and delete all of the original `.png`s. This is done because ModCS does not support the PNG format. 
3. Move the `data/PixTone` folder to somewhere else, as its not used by ModCS.
4. Move all Credit images from `data/Resource/BITMAP` to `data/Credits`.
5. Move `Pixel.bmp` from `data/Resource/BITMAP` to `data`.
6. Move all ORG files from `data/Resource/ORG` to `data/Org`.
7. Create a `Scripts` folder in `data` and create an empty `main.lua` file there. (Make sure you edit the file extension).
8. From a vanilla ModCS install copy the `data/bullet.tbl` file (Or from a PC Cave Story+ install copy the `data/base/bullet.tbl` file) to your mod's `data` folder.
9. From a vanilla ModCS install copy the `data/arms_level.tbl` file (Or from a PC Cave Story+ install copy the `data/base/arms_level.tbl` file) to your mod's `data` folder.
10. From a vanilla ModCS install copy the `data/caret.tbl` and `data/music.tbl` files to your mod's `data` folder.
11. Using [The King's Table](/guide/intro/editors/#022-the-kings-table) convert your `data/mrmap.bin` file to a `stage.tbl`. 
12. Replace your mod EXE with the ModCS EXE.
