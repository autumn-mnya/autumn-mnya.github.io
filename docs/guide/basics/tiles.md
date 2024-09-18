# 1.3 - Tile Editing

Tile Editing is the act of placing tiles. It's quite fascinating. Tile placement is stored in `.pxm` files that can be found in the `data/Stage/` folder. `PXM` stands for PixMap.

## 1.3.1 - Tilesets and Tile attributes

Tilesets are contained in two kinds of files: `.bmp` files stored in the `data/Stage/` folder with the prefix `Prt` (Example: `PrtCave.bmp`) which store the tileset's bitmap and `.pxa` files stored in the `data/Stage/` folder (Example `Cave.pxa`) which store the tileset's tile attributes.

Tile Attributes is a collection of data which represent how certain tiles act in-game (If they are slope tiles, water tiles, etc.).

In Booster's Lab you may edit the Attribute of a tile by right clicking it in the Tileset viewer.

![NPC Table window on Booster's Lab](/assets/images/guide/pxa.png)

Left clicking on any tile attribute will change it.

### 1.3.1.1 - Custom Tilesets

To use a custom tileset simply create a `PrtName.bmp` in your `data/Stage/` folder (Where `Name` is the name of your Tileset). Choosing it in editors' Stage Table entry editor will automatically create an empty `.pxa` file for you. The game will fail to load Tileset bitmaps over 256x256.
