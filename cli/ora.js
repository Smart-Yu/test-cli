import ora from 'ora'
import chalk from 'chalk'

const spinner = ora(`Loading ${chalk.red('模板')}`).start()

setTimeout(() => {
    spinner.color = 'red'
    spinner.text = 'Loading'
    spinner.prefixText = '前缀'
    spinner.spinner = {
        'interval': 70,
        'frames': [
            '*'
        ]
    }
}, 1000)