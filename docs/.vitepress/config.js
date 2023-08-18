const head = [['link', { rel: 'icon', href: '/jingjing.jpg' }]];

// markdown 配置
const markdown = {
  // 是否开启行号
  lineNumbers: true,
  theme: 'material-theme-palenight'
};

// gitee logo svg icon
// import gitee from '.././images/gitee.txt';

// 社交链接
const socialLinks = [
  // 默认支持 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'youtube'
  { icon: 'github', link: 'https://github.com/jingjing20' }
  // 或者导入svg图片
  // { icon: { svg: gitee }, link: 'https://gitee.com/maddragon' },
];
// 页脚配置
const footer = {
  // 消息
  message: 'MIT Licensed',
  // 版权
  copyright:
    '版权声明：本中文文档内容版权为 <a href="https://github.com/jingjing20" target="_black" >jingjing20</a> 所有，保留所有权利。'
};

// 上一个和下一个链接上方显示的文本
const docFooter = {
  prev: '上一篇',
  next: '下一篇'
};

// 顶部导航
const nav = [
  { text: '首页', link: '/' },
  {
    text: 'everyday',
    activeMatch: '/everyday/',
    items: [
      { text: '2020', link: '/everyday/2020' },
      { text: '2021', link: '/everyday/2021' },
      { text: '2022', link: '/everyday/2022' },
      { text: '2023', link: '/everyday/2023' }
    ]
  }
];

// 全局左侧菜单
const sidebar = [
  {
    text: 'HTML',
    // 是否折叠
    collapsed: false,
    items: [{ text: 'HTML集合', link: '/HTML/HTML集合.md' }]
  },
  {
    text: 'CSS',
    // 是否折叠
    collapsed: false,
    items: [
      { text: '水平垂直居中', link: '/css/水平垂直居中.md' },
      { text: 'flex', link: '/css/flex.md' },
      { text: 'css包含块', link: '/css/css包含块.md' }
    ]
  },
  {
    text: 'JavaScript',
    // 是否折叠
    collapsed: false,
    items: [
      { text: 'JS大杂烩', link: '/JavaScript/JS大杂烩.md' },
      { text: '数组相关', link: '/JavaScript/数组相关.md' },
      { text: '数组去重', link: '/JavaScript/数组去重.md' },
      { text: '深浅拷贝', link: '/JavaScript/深浅拷贝.md' },
      { text: '继承', link: '/JavaScript/继承.md' },
      { text: 'event-loop', link: '/JavaScript/event-loop.md' },
      { text: '异步总结', link: '/JavaScript/异步总结.md' },
      { text: '闭包', link: '/JavaScript/闭包.md' },
      { text: 'this', link: '/JavaScript/this.md' },
      { text: 'someques', link: '/JavaScript/someques.md' },
      { text: '无敌手写秘籍', link: '/JavaScript/无敌手写秘籍.md' }
    ]
  },
  {
    text: 'typescript',
    // 是否折叠
    collapsed: false,
    items: [
      { text: 'tsconfig', link: '/typescript/tsconfig.md' },
      { text: 'decorator', link: '/typescript/decorator.md' }
    ]
  },
  {
    text: 'Vue',
    // 是否折叠
    collapsed: false,
    items: [
      { text: 'vuejichu', link: '/Vue/vuejichu.md' },
      { text: 'vuecomponent', link: '/Vue/vuecomponent.md' },
      { text: 'vuelife', link: '/Vue/vuelife.md' },
      { text: 'vueadmin', link: '/Vue/vueadmin.md' },
      { text: 'vuequestions', link: '/Vue/vuequestions.md' },
      { text: 'vue响应式原理', link: '/Vue/vue响应式原理.md' }
    ]
  },
  {
    text: 'React',
    // 是否折叠
    collapsed: false,
    items: [
      { text: 'jichu', link: '/React/jichu.md' },
      { text: 'setState', link: '/React/setState.md' },
      { text: 'react-hooks', link: '/React/react-hooks.md' },
      { text: 'React-17新特性', link: '/React/React-17新特性.md' }
    ]
  },
  {
    text: '构建工具',
    // 是否折叠
    collapsed: false,
    items: [{ text: 'webpack', link: '/build_tools/webpack.md' }]
  },
  {
    text: '正则表达式',
    // 是否折叠
    collapsed: false,
    items: [
      { text: '元字符', link: '/regular/元字符.md' },
      { text: '常用正则存档', link: '/regular/常用正则存档.md' }
    ]
  },
  {
    text: '浏览器相关',
    // 是否折叠
    collapsed: false,
    items: [
      { text: '跨域相关', link: '/browser/跨域相关.md' },
      { text: '浏览器缓存', link: '/browser/浏览器缓存.md' },
      { text: '浏览器的本地存储', link: '/browser/浏览器的本地存储.md' },
      { text: '从输入URL到页面加载完成', link: '/browser/从输入URL到页面加载完成的过程.md' }
    ]
  },
  {
    text: '玩转Git',
    // 是否折叠
    collapsed: false,
    items: [{ text: 'git基础', link: '/Git/git基础.md' }]
  },
  {
    text: '网络相关',
    // 是否折叠
    collapsed: false,
    items: [
      { text: 'http', link: '/internet/http.md' },
      { text: 'tcp', link: '/internet/tcp.md' }
    ]
  },
  {
    text: 'LeetCode',
    // 是否折叠
    collapsed: false,
    items: [
      {
        text: '链表相关',
        collapsed: false,
        items: [{ text: '24、两两交换链表中的节点', link: '/leetcode/链表/24.两两交换链表中的节点.md' }]
      },
      { text: '3、无重复字符的最长子串', link: '/leetcode/3.无重复字符的最长子串.md' },
      { text: '20、有效的括号', link: '/leetcode/20.有效的括号.md' },
      { text: '66、加一', link: '/leetcode/66.加一.md' },
      { text: '70、爬楼梯', link: '/leetcode/70.爬楼梯.md' },
      { text: '101、对称二叉树', link: '/leetcode/101.对称二叉树.md' },
      { text: '125、验证回文串', link: '/leetcode/125.验证回文串.md' },
      { text: '1556、千位分隔数', link: '/leetcode/1556.千位分隔数.md' }
    ]
  },
  {
    text: 'node',
    // 是否折叠
    collapsed: false,
    items: [
      { text: '常用内置模块', link: '/node/常用内置模块.md' },
      { text: '模块化相关', link: '/node/模块化相关.md' },
      { text: '包管理工具', link: '/node/package-manage.md' }
    ]
  },
  {
    text: 'nest',
    // 是否折叠
    collapsed: false,
    items: [{ text: 'nest基础', link: '/nest/base.md' }]
  },
  {
    text: 'mysql',
    // 是否折叠
    collapsed: false,
    items: [{ text: 'mysql必知必会阅读笔记', link: '/mysql/mysql-bizhibihui.md' }]
  },
  {
    text: 'docker',
    // 是否折叠
    collapsed: false,
    items: [{ text: 'docker 基础', link: '/docker/base.md' }]
  },
  {
    text: 'nginx',
    // 是否折叠
    collapsed: false,
    items: [
      { text: 'nginx 静态文件托管', link: '/nginx/static-file-manage/index.md' },
      { text: 'nginx 反向代理', link: '/nginx/reverse-proxy/index.md' }
    ]
  },
  {
    text: '代码风格',
    // 是否折叠
    collapsed: false,
    items: [{ text: '风格统一方案', link: '/CodeStyle/风格统一方案.md' }]
  }
];

// 主题配置
const themeConfig = {
  search: {
    provider: 'local'
  },
  // 全局左侧菜单
  sidebar,
  outline: [2, 4],
  // 顶部导航
  nav,
  // 站点标题
  siteTitle: 'russ',
  // 最后跟新时间标题
  lastUpdatedText: '上次更新',
  // logo
  logo: '/home.png',
  // 社交链接
  socialLinks,
  // 页脚配置
  footer,
  // 上一个和下一个链接上方显示的文本
  docFooter,
  // 右侧目录标题
  outlineTitle: '本页目录',
  darkModeSwitchLabel: '外观',
  returnToTopLabel: '返回顶部'
};

// APP配置
module.exports = {
  // 主题配置
  themeConfig,
  // markdown 配置
  markdown,
  // 站点标题
  title: 'Cobweb Docs',
  // 站点说明
  description: '婧婧的成长之路，包含前端常用知识、源码阅读笔记、、日常问题汇总和提效工具等',
  // base URL
  base: '/jinghao-docs/',
  // 站点lang
  lang: 'zh-CN',
  // 是否显示更新时间
  lastUpdated: true,
  // 当设置为true时，VitePress不会因死链接而导致构建失败。
  // ignoreDeadLinks: true,
  head
};
