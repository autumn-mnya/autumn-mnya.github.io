# Direction

**Directions** in Cave Story are represented by numbers.

| Value | Direction |
| ----- | --------- |
| 0     | Left      |
| 1     | Up        |
| 2     | Right     |
| 3     | Down      |
| 4     | Auto      |

Different objects interpret their direction parameter differently, although most of them follow this pattern. The [Player](/api/objects/player/) and most [NPCs](/api/objects/npc/) only use the left and right directions.