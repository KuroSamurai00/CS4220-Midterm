const yargs = require('yargs/yargs');

const app = require('./app.js');

yargs(process.argv.slice(2))
    // $ 0 auto match file name
    // <> matches with .command
    // [] will match to .options
.usage('$0: Usage <cmd> [options]')
.command(
        //command
        'search <name>', 
        //description
        'Search for a subclass',
        //builder
        (yargs) => { 
            return yargs
                .option('s',{
                    alias: 'name',
                    describe: 'search for subclass in D&D',
                    type: 'string'
         });
        
    },
    //handler
    (args) => {
        app.search(args);
    }

)
.help().argv;
