# Deprecated Features

These features have been deprecated and it's recommended not to use them.

## ModCS.Organya

ModCS.Organya was the namespace for playing music before [ModCS 0.2.1.0](/releases/#modcs-0210). It was renamed to comply with the planned feature of playing WAV/OGG files as music.

## ModCS.Rect.Put2Surface()

```lua
ModCS.Rect.Put2Surface(rect, x, y, surfacefrom, surfaceto)
```

Draw the given Rect from the [surface](/api/drawing/surface/) with ID `surfacefrom` to the surface with ID `surfaceto`.

This has been deprecated in favor of [ModCS.Rect.Put()](/api/drawing/rect/#modcsrectput)  being able to draw to a [Surface](/api/drawing/surface/) since [ModCS 0.2.0.0](/releases/#modcs-0200).

## Old way of defining game object Act functions. 

Before [ModCS 0.2.0.0](/releases/#modcs-0200) the default way to define custom Act functions of NPCs was `ModCS.Npc.ActX` or `ModCS.Caret.ActX` where X was the Game object type ID.

This was deprecated in favor of an `Act` array contained in the game objects' class namespaces.
