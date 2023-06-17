import{_ as p,H as s,o as i,c as T,J as t,E as n,a as e,C as l,V as o}from"./chunks/framework.92369faf.js";const S=JSON.parse('{"title":"HTTP 相关","description":"","frontmatter":{},"headers":[],"relativePath":"internet/http.md","filePath":"internet/http.md","lastUpdated":1686913266000}'),r={name:"internet/http.md"},c=o("",15),d=l("ul",null,[l("li",null,"2、队头阻塞与不成熟的 HTTP 管线化")],-1),P=l("strong",null,"队头阻塞",-1),u=l("blockquote",null,[l("p",null,"HTTP/1.1 试图通过管线化的技术来解决队头阻塞的问题。HTTP/1.1 中的管线化是指将多个 HTTP 请求整批提交给服务器的技术，虽然可以整批发送请求，不过服务器依然需要根据请求顺序来回复浏览器的请求。")],-1),h=l("ul",null,[l("li",null,"3、提供虚拟主机的支持（域名分片）")],-1),H=l("strong",null,"在 HTTP/1.1 中的请求头中增加了一个 Host 字段，用来表明当前的域名地址，这样服务器就可以根据不同的 Host 值做不同的处理。",-1),C=o("",14);function _(A,b,g,m,D,f){const a=s("font");return i(),T("div",null,[c,t(a,{color:"red"},{default:n(()=>[e("**持久连接在 HTTP/1.1 中是默认开启的，所以你不需要专门为了持久连接去 HTTP 请求头设置信息，如果你不想要采用持久连接，可以在 HTTP 请求头中加上 `Connection: close`。**")]),_:1}),e("目前"),t(a,{color:"LightSalmon"},{default:n(()=>[e("**浏览器中对于同一个域名，默认允许同时建立 6 个 TCP 持久连接。**")]),_:1}),d,l("p",null,[e("虽然 HTTP/1.1 增加了持久连接的能力，减少了 TCP 连接和断开的次数，但是它还是要等待前一个 HTTP 请求返回之后才能进行下一个 HTTP 请求。想象一下如果某个 HTTP 请求因为某些原因没有及时返回，那么这个请求之后的所有 HTTP 请求都会被堵住，这就是常说的"),t(a,{color:"red"},{default:n(()=>[P]),_:1}),e("问题。")]),u,h,l("p",null,[e("在 HTTP/1.0 中，每个域名都绑定了一个唯一的 IP 地址，因此一个服务器只能为一个域名服务。随着虚拟主机技术的发展，实现了在一台物理主机上绑定多个虚拟主机，每个虚拟主机对应一个单独的域名，这些域名共用一个 IP 地址。因此，"),t(a,{color:"LightSlateGray"},{default:n(()=>[H]),_:1})]),l("ul",null,[l("li",null,[e("4、对动态生成的内容提供了完美支持"),t(a,{color:"red"},{default:n(()=>[e("（Chunk transfer 机制）")]),_:1})])]),C])}const k=p(r,[["render",_]]);export{S as __pageData,k as default};