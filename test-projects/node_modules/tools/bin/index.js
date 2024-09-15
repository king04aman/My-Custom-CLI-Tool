#! /usr/bin/env node

// console.log("Hello CLI User!!")
// console.log(process.argv);

const arg = require('arg');
const chalk = require('chalk');
// const path = require('path');
const pkgUp = require('pkg-up');

try {
    const args = arg({
        '--start': Boolean,
        '--build': Boolean,
    });

    // console.log(args);

    if (args['--start']) {
        // console.log("starting the application");
        // const pkg = require('./package.json'); // <-- won't work

        // const pkg = require(path.join(process.cwd(), 'package.json'));
        // TODO: do something with pkg        

        const pkgPath = pkgUp.sync({cwd: process.cwd()});
        const pkg = require(pkgPath);
    
        if (pkg.tool) {
          console.log('Found configuration', pkg.tool);
          // TODO: do something with configuration
        } else {
          console.log(chalk.yellow('Could not find configuration, using default'));
          // TODO: get default configuration
        }
        
        console.log(chalk.bgCyanBright('Starting the application'));
    }
} catch (e) {
    // console.log(e.message);
    console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage(){
    // console.log(`tool [cmd]
    //     --start\tStarts the application
    //     --build\tBuilds the application`);
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the app
    ${chalk.greenBright('--build')}\tBuilds the app`);
}
