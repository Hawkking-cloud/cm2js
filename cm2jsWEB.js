/*
your currently using CM2js v1.1

--
CM2JS SOURCE CODE
--
hey there!
why you looking at source code?
need help?
you can dm hawk at any time!
https://discord.com/users/586638458097893378
*/

// cm2js WEB is a version of cm2js contained in a dictionary
const cm2js= {
    Block: class {
        constructor(position, id) {
            this.position = position;
            this.id = id;
            this.on=false;
            this.specialValue='';
        }
    },
    Wire: class {
        constructor(block1, block2) {
            this.block1=block1;
            this.block2=block2;
        }
    },
    Save: class {
        blocks=[];
        wires=[];
        addBlock(block) {
            if (block instanceof cm2js.Block) {
                this.blocks.push(block);
            } else {
                console.log('CM2JS Error: Tried to use save.addBlock() when the instance isn\'t a Block');
            }
        }
        addBlockList(list) {
            for (let i = 0; i < list.length; i++) {
                const block = list[i]
                if (block instanceof cm2js.Block) {
                    this.blocks.push(block);
                } else {
                    console.log('CM2JS Error: Tried to use save.addBlock() when the instance isn\'t a Block');
                }
            }
        }
        findBlock(v){
            for (let i = 0; i < this.blocks.length; i++) {
                const p = this.blocks[i].position
                if(p.x==v.x&&p.y==v.y&&p.z==v.z){ 
                    return this.blocks[i]
                }
            }
            console.log('CM2JS Error: Tried to use save.findBlock(), Couldnt find block XYZ: '+v.x+', '+v.y+', '+v.z);
        }
        removeBlock(block) {
            if (block instanceof cm2js.Block) {
                const index = this.blocks.indexOf(block);
                if (index !== -1) {
                this.blocks.splice(index, 1);
                } else {
                console.log('CM2JS Error: Tried to call save.removeBlock() but couldn\'t find the block to remove');
                }
            } else {
                console.log('CM2JS Error: Tried to use save.removeBlock() when the instance isn\'t a Block');
            }
        }      
        addWire(wire) {
            if (wire instanceof cm2js.Wire) { 
                this.wires.push(wire);
            } else {
                console.log('CM2JS Error: Tried to use save.addWire() when the instance isn\'t a Wire');
            }
        }
        addWire2(block1,block2) {
                        
            if(block1 instanceof cm2js.Block){
                if(block2 instanceof cm2js.Block){
                    const newWire = new cm2js.Wire(block1,block2);
                    this.wires.push(newWire);
                } else {
                    console.log('CM2JS Error: Tried to use save.addWire2() when block2 isnt a Block');
                }
            } else {
                console.log('CM2JS Error: Tried to use save.addWire2() when block1 isnt a Block');
            }
        }
        removeWire(wire) {
            if (wire instanceof cm2js.Wire) {
                const index = this.wires.indexOf(wire);
                if (index !== -1) {
                this.wires.splice(index, 1);
                } else {
                console.log('CM2JS Error: Tried to call save.removeWire() but couldn\'t find the wire to remove');
                }
            } else {
                console.log('CM2JS Error: Tried to use save.removeWire() when the instance isn\'t a Wire');
            }
        }
        export(){
            let blockstring='';
            let wirestring='';
            let exportedString = '';
            for (let i = 0; i < this.blocks.length; i++) {
                const b = this.blocks[i]
                let on = b.on ? 1 : 0;
                blockstring += `${b.id},${on},${b.position.x},${b.position.y},${b.position.z},${b.specialValue};`;
            }
            blockstring = blockstring.slice(0, -1)
            for (let i = 0; i < this.wires.length; i++) {
                const w = this.wires[i]
                wirestring+=`${this.blocks.indexOf(w.block1)+1},${this.blocks.indexOf(w.block2)+1};`
            }
            wirestring = wirestring.slice(0, -1);
            exportedString=blockstring+'?'+wirestring+'??'
    
            return exportedString
        }
        import(string, offset){
            let newblocks = [];
            offset=offset||{x:0,y:0,z:0};
            const blocktext = string.split('?')[0];
            const wiretext = string.split('?')[1];
            const newindex = this.blocks.length;
            for (let i = 0; i < blocktext.split(';').length; i++) {
                const b = blocktext.split(';')[i]
                const params = b.split(',')
                const newblock = new cm2js.Block({x:parseFloat(params[2])+offset.x,y:parseFloat(params[3])+offset.y,z:parseFloat(params[4])+offset.z},params[0]);
                let on = params[1]==1 ? 1 : 0; 
                newblock.on=on;
                newblock.specialValue=params[5];
                newblocks.push(newblock)
            }
            this.blocks = this.blocks.concat(newblocks);
            for (let i = 0; i < wiretext.split(';').length; i++) {
                const b1 = wiretext.split(';')[i].split(',')[0];
                const b2 = wiretext.split(';')[i].split(',')[1]
                if(this.blocks[parseInt(b1)+newindex-1]&&this.blocks[parseInt(b2)+newindex-1]){
                    this.wires.push(new cm2js.Wire(this.blocks[parseInt(b1)+newindex-1],this.blocks[parseInt(b2)+newindex-1]))
                } else {
                    console.log('CM2JS Error: save.import() error - Wire ('+(parseInt(b1)+newindex)+','+(parseInt(b2)+newindex)+') Could not be found');
                }
            }
        }
    },
    v: function v(x,y,z){
        return {x:x,y:y,z:z}
    }
}
