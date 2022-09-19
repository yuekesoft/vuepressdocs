const nav =  [
    // 嵌套 Group - 最大深度为 2
    { text: '主页', link: '/' },
    {
    text: 'Group',
    children: [
        {
        text: '/group/foo.md',
        link: '/group/foo',
        },
        {
            text: '/group/bar.md',
            link: '/group/bar',
        },            
    ],
    },
    // 控制元素何时被激活
    {
    text: 'Group 2',
    children: [
        {
        text: 'Always active',
        link: '/',
        // 该元素将一直处于激活状态
        //activeMatch: '/',
        },
        {
        text: 'Active on /foo/',
        link: '/foo/',
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        //activeMatch: '^/foo/',
        },
    ],
    },
]

module.exports = nav;