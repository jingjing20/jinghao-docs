import{_ as t,H as p,o as c,c as r,C as s,a,J as e,E as o,V as n}from"./chunks/framework.364d6ed5.js";const x=JSON.parse('{"title":"mysql 必知必会","description":"","frontmatter":{},"headers":[],"relativePath":"mysql/mysql-bizhibihui.md","filePath":"mysql/mysql-bizhibihui.md","lastUpdated":1692978539000}'),d={name:"mysql/mysql-bizhibihui.md"},C=n("",66),i=s("code",null,"%",-1),y=s("code",null,"%",-1),A=s("strong",null,[s("em",null,"任何字符")],-1),u=s("strong",null,[s("em",null,"任意次数")],-1),D=s("li",null,[s("p",null,[a("为了找出所有以词 "),s("code",null,"jet"),a(" 起头的产品，可使用以下 "),s("code",null,"SELECT"),a(" 语句：")])],-1),h=n("",4),F=s("strong",null,[s("em",null,"0 个、1 个或多个字符")],-1),b=n("",3),m=s("strong",null,[s("em",null,"单个字符")],-1),E=s("li",null,"与 % 能匹配 0 个字符不一样，_总是匹配一个字符，不能多也不能少。",-1),v=n("",12),_={class:"warning custom-block"},R=s("p",{class:"custom-block-title"},"！匹配不区分大小写",-1),g=s("li",null,"MySQL 中的正则表达式匹配（自版本 3.23.4 后）不区分大小写（即，大写和小写都匹配）。",-1),q=s("strong",null,[s("em",null,"BINARY")],-1),k=n("",57);function T(S,L,N,O,P,f){const l=p("font");return c(),r("div",null,[C,s("ul",null,[s("li",null,[s("p",null,[a("最常使用的通配符是百分号 "),i,a("。在搜索串中，"),y,a(" 表示"),e(l,{color:"#32CD32"},{default:o(()=>[A]),_:1}),a("出现"),e(l,{color:"#32CD32"},{default:o(()=>[u]),_:1})])]),D]),h,s("ul",null,[s("li",null,[a("除了一个或多个字符外，% 还能匹配 0 个字符。% 代表搜索模式中给定位置的"),e(l,{color:"#32CD32"},{default:o(()=>[F]),_:1}),a("。")])]),b,s("ul",null,[s("li",null,[a("另一个有用的通配符是下划线 _ 。下划线的用途与%一样，但下划线只匹配"),e(l,{color:"#32CD32"},{default:o(()=>[m]),_:1}),a("。")]),E]),v,s("div",_,[R,s("ul",null,[g,s("li",null,[a("为区分大小写，可使用 "),e(l,{color:"#32CD32"},{default:o(()=>[q]),_:1}),a(" 关键字，如 WHERE prod_name REGEXP BINARY 'JetPack .000'。")])])]),k])}const M=t(d,[["render",T]]);export{x as __pageData,M as default};