import chalk from "chalk";
const log = console.log

log(chalk.blue('hello world'))
log(chalk.blue('Hello') + 'World' + chalk.red('!'))
log(chalk.red('Hello'), chalk.underline.bgBlue('world') + '1')
log(chalk.green('I am a green line ' + chalk.blue.underline.bold('with a blue substring') + ' that becomes green again'))