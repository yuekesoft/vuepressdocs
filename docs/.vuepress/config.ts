const nav = require("./nav.js");
const sidebar = require("./sidebar.js");

import { defaultTheme } from '@vuepress/theme-default'


export default {
    title: '越客软件 官方文档',
    description: '越客软件各个系列操作说明文档', 

    markdown: {
        headers: {
            level: [1, 2, 3]
            }
        },
    
    theme: defaultTheme({
        logo: 'https://vuejs.org/images/logo.png',//越客软件 官方文档 这里的图标 导航栏 Logo
        backToHome:'返回首页',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // 你也可以直接将它设置为一个 URL
        repo: 'yuekesoft/vuepressdocs',   
        docsDir: 'docs',      
        // 导航栏
        navbar: nav,
        // 侧边栏数组
        sidebar: sidebar,
        //sidebar:'auto',
        sidebarDepth:3
    })
}