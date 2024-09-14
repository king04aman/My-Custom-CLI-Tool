#! /usr/bin/env node

// console.log("Hello CLI User!!")
// console.log(process.argv);

const arg = require('arg');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    // console.log(args);

    if (args['--start']) {
        console.log("starting the application");
    }
} catch (e) {
    console.log(e.message);
    console.log();
    usage();
}

function usage(){
    console.log(`tool [cmd]
        --start\tStarts the application
        --build\tBuilds the application`);
}