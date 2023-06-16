import{_ as p,H as c,o as r,c as t,C as s,a as n,J as e,E as l,V as o}from"./chunks/framework.364d6ed5.js";const I=JSON.parse('{"title":"vue实现小程序后台","description":"","frontmatter":{"title":"vue实现小程序后台"},"headers":[],"relativePath":"Vue/vueadmin.md","filePath":"Vue/vueadmin.md","lastUpdated":1686887724000}'),i={name:"Vue/vueadmin.md"},d=s("h2",{id:"基于vue-admin-template-koa实现你的小程序后台管理系统",tabindex:"-1"},[n("基于vue-admin-template+Koa实现你的小程序后台管理系统 "),s("a",{class:"header-anchor",href:"#基于vue-admin-template-koa实现你的小程序后台管理系统","aria-label":'Permalink to "基于vue-admin-template+Koa实现你的小程序后台管理系统"'},"​")],-1),u=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"前言"),s("p",null,"本文作者：婧婧 本文共 3920 字，读完需要15分钟。 希望你看完能学到一点点东西！✨✨")],-1),b={id:"请花一些时间安静的读完本文-相信我-你一定可以实现属于自己的小程序后台管理系统。-对有需要的小伙伴还是有点意思的😊😊😊",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#请花一些时间安静的读完本文-相信我-你一定可以实现属于自己的小程序后台管理系统。-对有需要的小伙伴还是有点意思的😊😊😊","aria-label":'Permalink to "**<font face="楷体" color=Tomato>请花一些时间安静的读完本文，相信我，你一定可以实现属于自己的小程序后台管理系统。（对有需要的小伙伴还是有点意思的😊😊😊）</font>**"'},"​",-1),C=s("code",null,"vue-admin-template",-1),A=s("code",null,"Koa2",-1),h=o("",5),_=o("",3),y=s("li",null,[s("p",null,[n("5、最后一步了，我们在"),s("code",null,"src"),n("下的"),s("code",null,"api"),n("文件夹中为每一个前端页面封装一个"),s("code",null,".js"),n("文件，在里面写获取后端数据的方法，然后在 "),s("code",null,"views"),n(" 文件夹里的视图页面中引入获取后端返回的数据。")])],-1),D=s("hr",null,null,-1),g=s("blockquote",null,[s("p",null,"下图为初始克隆下来的项目文件目录，注意图中标注的地方。")],-1),f=o("",10),k={id:"这里我把本项目中一个页面数据获取的完整流程走一遍-便于大家理解。就用第一个页面-歌单列表的获取为例。开始吧",tabindex:"-1"},q=s("a",{class:"header-anchor",href:"#这里我把本项目中一个页面数据获取的完整流程走一遍-便于大家理解。就用第一个页面-歌单列表的获取为例。开始吧","aria-label":'Permalink to "<font color="red">这里我把本项目中一个页面数据获取的完整流程走一遍，便于大家理解。就用第一个页面，歌单列表的获取为例。开始吧！！！</font>"'},"​",-1),T=o("",18),v={id:"让我们简单从头再理一遍思路。",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#让我们简单从头再理一遍思路。","aria-label":'Permalink to "<font color="red" size="3">让我们简单从头再理一遍思路。</font>"'},"​",-1),S=o("",2),P=o("",16);function j(E,N,w,V,O,R){const a=c("font");return r(),t("div",null,[d,s("p",null,[n("属于你的微信小程序后台管理系统来了！！！"),e(a,{color:"red"},{default:l(()=>[n("(仅仅指云开发的小程序哦。😁)")]),_:1}),n("如果你自己已经做好了一个采用云开发的微信小程序，但是还没有给它配上一个后台管理系统，那就赶快行动起来吧！！！本文将会很详细的带你实现,包括过程中的一些bug解决方式（可能对大佬来说不是bug的bug🤣）")]),u,s("h4",b,[s("strong",null,[e(a,{face:"楷体",color:"Tomato"},{default:l(()=>[n("请花一些时间安静的读完本文，相信我，你一定可以实现属于自己的小程序后台管理系统。（对有需要的小伙伴还是有点意思的😊😊😊）")]),_:1})]),n(),m]),s("p",null,[n("本文是主要是基于开源项目 "),s("strong",null,[e(a,{face:"宋体",size:"2",color:"FireBrick"},{default:l(()=>[n(" vue-admin-template + koa + element-ui + 微信云开发HTTP API ")]),_:1})]),n(" 实现一个微信小程序后台管理系统。采用前后端分离架构，以 "),C,n(" 实现管理系统的前端界面，后端我们这里采用 "),A,n("来实现，当然你也可以换其他框架来实现。")]),h,s("ul",null,[_,s("li",null,[s("p",null,[n("4、想好数据怎么显示，需要做什么操作 "),s("strong",null,[e(a,{face:"宋体",color:"OrangeRed",size:"1"},{default:l(()=>[n("（因为此模板已经集成了element-ui，即想好用 element-ui 的什么组件来显示界面，本文中写的项目比较简单，所以只用到 table、button、dialog、form 这几个组件） ")]),_:1})])])]),y]),D,s("blockquote",null,[s("p",null,[s("strong",null,[e(a,{face:"楷体",size:"3",color:"Tomato"},{default:l(()=>[n("这里我以本项目目录和克隆下来的项目目录来一个对照应该会更清楚一点。")]),_:1})])])]),g,s("blockquote",null,[e(a,{color:"Tomato",size:"3",face:"黑体"},{default:l(()=>[n("下图为本项目文件目录。注意标注的地方你会发现只有两个地方有改变。")]),_:1})]),f,s("h4",k,[e(a,{color:"red"},{default:l(()=>[n("这里我把本项目中一个页面数据获取的完整流程走一遍，便于大家理解。就用第一个页面，歌单列表的获取为例。开始吧！！！")]),_:1}),n(),q]),T,s("h4",v,[e(a,{color:"red",size:"3"},{default:l(()=>[n("让我们简单从头再理一遍思路。")]),_:1}),n(),x]),S,e(a,{color:"red"},{default:l(()=>[n("整个流程大概就是这样，其他页面也是完全一样的流程。还有一些细节我接下来会继续讲讲，也有些细节没有详细去讲。可能我写的不够好、难以理解，又或许小伙伴哪里没看太懂，欢迎评论区讨论交流。有需要可以联系作者共同探讨哦。😁")]),_:1}),P])}const K=p(i,[["render",j]]);export{I as __pageData,K as default};
