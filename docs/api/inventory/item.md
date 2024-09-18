# ModCS.Item

The **ModCS.Item class** represents non-weapon items that can be accessed from the inventory. The game has enough memory for 32 different items to be stored in the inventory.

A ModCS.Item is userdata. You may access and edit the following values from it:

| Value           | Type                                 | Usage                                                        |
| --------------- | ------------------------------------ | ------------------------------------------------------------ |
| `id`           | Number (Casted to integer) | Type ID of the item.           |

## ModCS.Item.Add()

```lua
ModCS.Item.Add(id)
```

Adds item of type `id` to the inventory.

## ModCS.Item.Remove()

```lua
ModCS.Item.Remove(id)
```

 Removes item of type `id` from the inventory.

## ModCS.Item.GetByID()

```lua
ModCS.Item.GetByID(id)
```

Searched the inventory for an item with type ID `id`. If found, return a ModCS.Item of that item. Otherwise return a nil value.

## ModCS.Item.GetByInvPos()

```lua
ModCS.Item.GetByInvPos(pos)
```

Return a ModCS.Item of the item at inventory position `pos`.
