const sidebar =  {

    '/manual/': [
                    {
                        title: '语言基础',
                        // sidebarDepth: 3,
                        collapsable: false,
                        children: [
                            {title: 'ECMAScript', path: '/manual/1'},
                        ]
                    },
                    {
                        title: '开发框架',
                        collapsable: false,
                        children: [
                            {title: 'vue', path: '/manual/1'},
                            {title: 'vue-cli', path: '/manual/2'},
                            {title: 'vue-router', path: '/manual/3'},
                            {title: 'vue-vuex', path: '/manual/4'},
                        ]
                    },
                ]
}

module.exports = sidebar;