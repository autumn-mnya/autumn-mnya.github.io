# ModCS.Tsc

The **ModCS.Tsc namespace** contains functions related to TextScript (Also known as T-Script).

TextScript is vanilla Cave Story's scripting language. Combined with [Flags](/api/flags/flag/) it's used for textboxes, animations, cutscenes, etc.

## Commands

TextScript's syntax is composed of commands (or "codes") that do certain actions. When the TSC parser reaches a `<` symbol it checks the next 3 symbols and compares them to its list of commands. If no command is found an error will occur.

... Here I would put my own TSC command list but I'm currently too lazy. Please refer to your map editor's TSC list or [this TXT list](https://www.cavestory.org/guides/tsc_r2.txt) instead.

## Events

TextScript scripts are seperated into **Events**, which are runnable sets of actions and text.

Events are a defined with a `#` and 4 following digits, which together represent the Event number. Events are usually ended with `<END`.

??? Example
	This is a basic TSC example event which opens a textbox.
	```tsc
	#0100
	<KEY<MSGHello World<NOD<CLO<END
	```

## ModCS.Tsc.IsRunning()

Returns true if a TextScript event is running. Returns false otherwise.

## ModCS.Tsc.Run()

```lua
ModCS.Tsc.Run(event)
```

Run TextScript Event `event`.

!!! Warning
	It's recommended to only use `ModCS.Tsc.Run()` when a TextScript event isn't running.

	If you want to run a different Event during another Event please use [ModCS.Tsc.Jump()](/api/tsc/#modcstscjump) instead.

## ModCS.Tsc.Jump()

```lua
ModCS.Tsc.Jump(event)
```

Jump to TextScript Event `event` while another Event is running.

## ModCS.Tsc.Wait()

```lua
ModCS.Tsc.Wait(ticks)
```

During a TextScript event, wait `ticks` ticks before running the next command.

## ModCS.Tsc.GetArgument()

```lua
ModCS.Tsc.GetArgument(no)
```

During a custom TextScript command, get the `no` argument of the running command. Calling this function will also 'skip' the argument from the TSC parser.

## ModCS.Tsc.GetString()

```lua
ModCS.Tsc.GetString("String")
```

During a custom TextScript command, get the `string` argument of the running command. Calling this function will also 'skip' the argument from the TSC parser.

??? Example
	This is an example of a string used in tsc, if we had 1 string argument and wanted to use "Test" as our string in the TSC:
	```linenums="1"
	<STRTest$
	```

## Custom Commands

ModCS allows you to overwrite TextScript commands and to have custom ones as well. If a function `ModCS.Tsc.Command.XXX` is defined (where XXX is the custom command) the function will run when the TextScript parser reaches command `<XXX`.

??? Example
	This is an example function for a TextScript command that will print its first argument to the debug console.
	```lua linenums="1"
	function ModCS.Tsc.Command.FOO()
		local no = ModCS.Tsc.GetArgument(1) -- Get the first argument of the running command
		print(no)
	end
	```

	```tsc
	#0100
	<FOO0002<END
	```
	
	Console output:
	```
	2
	```