import { Command } from 'commander'

const program = new Command()

program
    .name('test-string-utils')
    .description('Cli to some JavaScript string utilities by 何宇')
    .version('0.0.1')


program.command('split')
    .description('Split a string into substring and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
        console.log('===>', str, options)
        const limit = options.first ? 1 : undefined
        console.log(str.split(options.separator, limit))
    })


program.parse()