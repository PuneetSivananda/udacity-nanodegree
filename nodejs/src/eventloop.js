const fs = require("fs")

console.log("Main thread")

// end main thread / pre timer phase 1
process.nextTick(()=>{
    console.log('nextTick ----- before event loop')
})

// timers phase 1
setTimeout(() => {
    console.log("timeout - 0s ------ Timers 1")
}, 0);

// timers phase 1
setImmediate(()=>{
    console.log("Immmediate ---- Timers")
})

// timers phase 1
setTimeout(() => {
    console.log("timeout - 0s ------ Timers 1")
}, 0);


fs.readFile(__filename, ()=>{
    // end poll phase
    process.nextTick(()=>{
        console.log("nexttick i/o ----- After polling")
    })
    // check phase
    setImmediate(() => {
        console.log("immediate i/o --- Check")
    });
    // timers phase 2
    setTimeout(() => {
        console.log("timeout i/o 0s --- Timers 2")
    }, 0);
    // timers phase 3
    setTimeout(() => {
        console.log("timeout i/o 3s --- Timers 3")
    }, 3000);
})

// timers phase 4
setTimeout(() => {
    console.log("timeout i/o 5s --- Timers 4")
}, 5000);

process.on('beforeExit', ()=>{
    console.log("process.on ----- beforeExit")
})
