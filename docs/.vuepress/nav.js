const nav =  [
    {text: '首页', link: '/'},
    {
        text: '软件系统',
        //ariaLabel: 'Language Menu',
        children: [
            {
                text: '签到系列',
                children: [
                    {text: '越客签到管理软件', link: '/signsoft/start'},
                    { text: '人脸识别签到软件', link: '/facesign/start'},
                    { text: '租用版签到软件', link: '/rentalsign/start'}
                ]
            },
            {
                text: '会员系列', 
                children: [
                    { text: '越客会员管理软件', link: '/member/start' },
                    { text: '汽车美容管理软件', link: '/car/start' }
                ]
            }
]
},
{text: '淘宝店', link: 'http://1378.taobao.com/'},
{text: '越客官网', link: 'http://www.yuekesoft.com/'}
]

module.exports = nav;