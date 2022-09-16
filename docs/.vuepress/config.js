const themeConfig = require("./themeConfig.js");
module.exports = {
	  base: '/vuepressdocs/',
    title: '越客软件系列 官方文档',
    description: 'JPress，一个专业的建站神器，已有超过10万+网站使用 JPress 搭建',
    // base:'/docs/',
    markdown: {
        lineNumbers: true
    },	
  theme: 'vuepress-theme-reco',
  themeConfig: themeConfig
}