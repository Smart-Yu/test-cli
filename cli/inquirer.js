import inquirer from "inquirer";

const promptList = [
    {
        type: 'input',
        message: '设置一个用户名',
        name: 'name',
        default: 'test_user',
    },
    {
        type: 'input',
        message: '请输入手机号',
        name: 'phone',
        validate: function(val) {
            if (val.match(/\d{11}/g)) {
                return val
            }
            return '请输入11位数字'
        }
    }
]

inquirer.prompt(promptList).then(answers => {
    console.log(answers)
})