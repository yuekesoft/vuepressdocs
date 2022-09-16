const nav = require("./nav.js");
const sidebar = require("./sidebar.js");
const themeConfig = {
    //腾讯 404 公益配置
    noFoundPageByTencent: false,

    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示

    // if your docs are in a different repo from your main project:
    docsRepo: 'yuekesoft/vuepressdocs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    // if your docs are not at the root of the repo:
    //docsDir: 'doc',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: '编辑此页面',

    /**
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow',
            lastUpdated: '更新时间', // string | boolean
            subSidebar: 'auto',//在所有页面中启用自动生成 子侧边栏，原 sidebar 仍然兼容
            
    nav: nav,
            
    sidebar: sidebar,
    sidebarDepth: 1		
    
}

module.exports = themeConfig;