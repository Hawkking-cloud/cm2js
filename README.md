# CM2js v1.1
CM2js is a javascript registry manipulator for the roblox game Circuit Maker 2

[Classes](#classes)

[Hawks Discord](https://discord.com/users/586638458097893378)

[Functions](#functions)


# Classes
[Block](#block)

[Wire](#wire)

[Save](#save)

[Vector](#v)

## Block
This defines a block that the save class can add
```js
import * as cm2js from './cm2js.js';
//Creates a AND gate
const newBlock = cm2js.Block(cm2js.v(0,0,0),1);
```

Easy parameter customizability
```js
import * as cm2js from './cm2js.js';
//Defines a LED
const newBlock = cm2js.Block(cm2js.v(0,0,0),6);

// Sets the default toggle to on
newBlock.on=true;
// Sets the LED's color to the rgb 150,15,150
newBlock.specialValue='150+15+150';

//Returns the newBlock's position in {x:x,y:y,z:z} format
//NOT READONLY
console.log(newBlock.position);

//Returns the newBlock's block id in number format
//NOT READONLY
console.log(newBlock.id);
```
## Wire
This defines a wire/connection that the save class can add
```js
import * as cm2js from './cm2js.js';
//Defines a Save
const newSave = new cm2js.Save;

//Defines a Flip Flop
const toggleBlock = new cm2js.Block(cm2js.v(0,0,0),5);
//Makes the default toggle to ON
toggleBlock.on=true;

//Defines a LED 
const newLED = new cm2js.Block(cm2js.v(2,0,0),6)

//Adds the blocks to the save
newSave.addBlock(toggleBlock); 
newSave.addBlock(newLED);

//Defines the new wire
const newWire = new cm2js.Wire(toggleBlock,newLED);
//Adds the new wire to the save
newSave.addWire(newWire);

//Prints the output
console.log(newSave.export());
```
## Save
[addBlock](#addBlock)

[addBlockList](#addBlockList)

[findBlock](#findBlock)

[addWire2](#addWire2)

[removeBlock](#removeBlock)

[addWire](#addWire)

[removeWire](#removeWire)

[export](#export)

[import](#import)

This defines a save that you can pick from a variety of functions to do
### addBlock()
Adds a block to the save
```js
import * as cm2js from './cm2js.js';
//Defines a Save
const newSave = new cm2js.Save;

//Defines a new LED
const newLED = new cm2js.Block(cm2js.v(2,0,0),6)

//Adds the LED to the save
newSave.addBlock(newLED);

//Prints the exported save
console.log(newSave.export());
```
### addBlockList()
Adds a list of Blocks to the save
```js
import * as cm2js from './cm2js.js';

//Defines a Save
const newSave = new cm2js.Save;

//Define 2 LEDS
const newLED = new Block(v(0,0,0),6);
const newLED2 = new Block(v(0,0,1),6);

//Add both of the LEDS in one line
newSave.addBlockList([newLED,newLED2]);

//Prints the exported save
console.log(newSave.export());
```
### findBlock()
Checks for a block in a save based on a vector
```js
import * as cm2js from './cm2js.js';

//Defines a Save
const newSave = new cm2js.Save;

//Define 2 LEDS
const newLED = new Block(v(0,0,0),6);
const newLED2 = new Block(v(0,0,1),6);


//Define a wire that wires 2 LEDs together using findBlock()
const newWire = new Wire(newSave.findBlock(v(0,0,0)),newSave.findBlock(v(0,0,1)))

//Add the wire
newSave.addWire(newWire);

//Prints the exported save
console.log(newSave.export());
```
### addWire2()
Adds a wire to the save based on 2 block inputs 
```js
import * as cm2js from './cm2js.js';

//Defines a Save
const newSave = new cm2js.Save;

//Define 2 LEDS
const newLED = new Block(v(0,0,0),6);
const newLED2 = new Block(v(0,0,1),6);

//Add the wire
newSave.addWire2(newLED,newLED2);

//Prints the exported save
console.log(newSave.export());
```
### removeBlock()
Removes a block from the save
```js
import * as cm2js from './cm2js.js';
//Defines a Save
const newSave = new cm2js.Save;

//Defines a new LED
const newLED = new cm2js.Block(cm2js.v(2,0,0),6)

//Defines a new flip flop
const newToggle = new cm2js.Block(cm2js.v(2,0,0),5)

//Adds the blocks to the save
newSave.addBlock(newLED);
newSave.addBlock(newToggle);

//Removes the LED from the save
newSave.removeBlock(newLED);

//Prints the exported save
console.log(newSave.export());
```
### addWire()
Adds a wire to the save
```js
import * as cm2js from './cm2js.js';
//Defines a Save
const newSave = new cm2js.Save;

//Defines a new LED
const newLED = new cm2js.Block(cm2js.v(2,0,0),6)

//Defines a new flip flop
const newToggle = new cm2js.Block(cm2js.v(2,0,0),5)

//Adds the blocks to the save
newSave.addBlock(newLED);
newSave.addBlock(newToggle);

//Defines the new wire
const newWire = new cm2js.Wire(newLED,newToggle);

//Adds the new wire
newSave.addWire(newWire)

//Prints the exported save
console.log(newSave.export());
```
### removeWire()
Removes a wire from the save
```js
import * as cm2js from './cm2js.js';
//Defines a Save
const newSave = new cm2js.Save;

//Defines a new LED
const newLED = new cm2js.Block(cm2js.v(2,0,0),6)

//Defines a new flip flop
const newToggle = new cm2js.Block(cm2js.v(2,0,0),5)

//Adds the blocks to the save
newSave.addBlock(newLED);
newSave.addBlock(newToggle);

//Defines the new wire
const newWire = new cm2js.Wire(newLED,newToggle);

//Adds the new wire
newSave.addWire(newWire)

//Removes the wire
newSave.removeWire(newWire)

//Prints the exported save
console.log(newSave.export());
```
### export()
Returns the formatted save file that you can enter into cm2
```js
import * as cm2js from './cm2js.js';
//Defines a Save
const newSave = new cm2js.Save;

//Defines a new LED
const newLED = new cm2js.Block(cm2js.v(2,0,0),6)

//Defines a new flip flop
const newToggle = new cm2js.Block(cm2js.v(2,0,0),5)

//Adds the blocks to the save
newSave.addBlock(newLED);
newSave.addBlock(newToggle);

//Adds a wire from newLED to newToggle 
cm2js.addWire( new cm2js.Wire(newLED,newToggle) )

//Prints the exported save
console.log(newSave.export());
```
### import()
Imports the inputted save file into the save
```js
import * as cm2js from './cm2js.js';

//Defines a Save
const newSave = new cm2js.Save;

//Adds a Toggle wired to a LED
newSave.import('6,0,2,0,0,;5,0,2,0,0,?1,2??')

//Prints the exported save
console.log(newSave.export());
```

# Functions

### v()
This returns a {x:x,y:y,z:z}, Used for defining positions in cm2js
```js
import * as cm2js from './cm2js.js';

//Defines a Save
const newSave = new cm2js.Save;

//Defines a position
const Position = cm2js.v(2,0,0);

//Defines a new Toggle block
const newToggle = new cm2js.Block(Position,5)

//Adds the block to the save
newSave.addBlock(newToggle);

//Prints the exported save
console.log(newSave);
```
