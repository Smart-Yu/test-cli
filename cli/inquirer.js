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

const promptList2 = [
    {
        type: 'confirm',
        message: '是否使用def创建项目',
        name: 'watch',
        prefix: '前缀'
    },
    {
        type: 'confirm',
        message: '是否初始化项目',
        name: 'filter',
        suffix: '前缀',
        when: function(answers) {
            return answers.watch
        }
    },
]

const promptList3 = [
    {
        type: 'rawlist',
        message: '请选择一种模板',
        name: 'template',
        choices: [
            'TNPM',
            'WEB',
            '小程序'
        ]
    }
]

const expandPromptList = [
    {
        type: 'expand',
        message: '请选择一种初始化模板',
        name: 'template',
        choices: [
            {
                key: 't',
                name: 'TNPM',
                value: 'tnpm'
            },
            {
                key: 'w',
                name: 'WEB',
                value: 'web'
            },
            {
                key: 'm',
                name: '小程序',
                value: 'miniapp'
            }
        ]
    }
]

const checkPromptList = [
    {
        type: 'checkbox',
        message: '选择模板',
        name: 'template',
        choices: [
            {
                name: 'tnpm',
            },
            new inquirer.Separator(),
            {
                name: 'Web',
                checked: true
            },
            {
                name: '小程序'
            },
            new inquirer.Separator("--- 分隔符 ---"), // 自定义分隔符
            {
                name: "Assets"
            }
        ]
    }
]

const passwordPrompTList = [
    {
        type: 'password',
        message: '请输入密码：',
        name: 'pwd'
    }
]

const editorList = [
    {
        type: 'editor',
        message: '请输入备注',
        name: 'editor'
    }
]

inquirer.prompt(editorList).then(answers => {
    console.log(answers)
})