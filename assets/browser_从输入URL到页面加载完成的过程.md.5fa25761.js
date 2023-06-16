import{_ as i,H as p,o as t,c,C as l,a as e,J as o,E as s,V as n}from"./chunks/framework.364d6ed5.js";const r="/assets/DNS01.62bdf10a.jpg",d="/assets/DNS02.ccce4c80.jpg",h="/assets/渲染流程.1e23ebd4.png",u="/assets/构建DOM树.ab7c89b8.png",D="/assets/css标准化.5dd178d6.png",H=JSON.parse('{"title":"从输入URL到页面加载","description":"","frontmatter":{"title":"从输入URL到页面加载"},"headers":[],"relativePath":"browser/从输入URL到页面加载完成的过程.md","filePath":"browser/从输入URL到页面加载完成的过程.md","lastUpdated":1686842923000}'),_={name:"browser/从输入URL到页面加载完成的过程.md"},b=l("h2",{id:"声明一下",tabindex:"-1"},[e("声明一下 "),l("a",{class:"header-anchor",href:"#声明一下","aria-label":'Permalink to "声明一下"'},"​")],-1),m=l("p",null,[l("strong",null,"此篇文档非原创，参考网上几篇文章和极客时间李兵老师的浏览器工作原理专栏写的。相当于学习笔记。")],-1),y=l("hr",null,null,-1),C=l("p",null,"这个过程浏览器有三个进程一起完成的。分别是浏览器进程、网络进程、渲染进程。先来了解下它们的主要职责。",-1),S=l("li",null,[l("p",null,"浏览器进程主要负责用户交互、子进程管理和文件储存等功能。")],-1),F=l("li",null,[l("p",null,"网络进程是面向渲染进程和浏览器进程等提供网络下载功能。")],-1),g=n('<h2 id="一、用户输入" tabindex="-1">一、用户输入 <a class="header-anchor" href="#一、用户输入" aria-label="Permalink to &quot;一、用户输入&quot;">​</a></h2><p>当用户在浏览器地址栏中输入一个查询关键字时，<strong>浏览器会判断输入的关键字是搜索内容，还是请求的 URL。</strong></p><ul><li><p>如果是搜索内容，地址栏会使用浏览器默认的搜索引擎，来合成新的带搜索关键字的 URL。</p></li><li><p>如果判断输入内容符合 URL 规则，比如输入的是 <code>jinghao.xyz</code> ，那么地址栏会根据规则，把这段内容加上协议，合成为完整的 URL，如 <code>https://jinghao.xyz</code>。</p></li><li><p>当浏览器刚开始加载一个地址之后，标签页上的图标便进入了加载状态。但此时页面显示的依然会是之前的页面内容，并没有立即替换为目标地址的页面。这是因为浏览器需要等待<strong>提交文档这个阶段之后，页面内容才会被替换</strong>。</p></li></ul><h2 id="二、url-请求过程" tabindex="-1">二、URL 请求过程 <a class="header-anchor" href="#二、url-请求过程" aria-label="Permalink to &quot;二、URL 请求过程&quot;">​</a></h2><p>在用户输入完成并按下回车键之后，浏览器就进入了页面资源的请求过程。这时候<strong>浏览器进程会通过进程间通信（IPC）将用户输入后产生的 URL 请求发送到网络进程，再由网络进程发起真正的 URL 请求流程</strong>。流程如下：</p><h3 id="_1、查找强缓存" tabindex="-1">1、查找强缓存 <a class="header-anchor" href="#_1、查找强缓存" aria-label="Permalink to &quot;1、查找强缓存&quot;">​</a></h3><ul><li>网络进程会查找本地缓存中（强缓存）是否缓存了该资源。如果有缓存资源，那么直接返回资源给浏览器进程。</li></ul><h3 id="_2、dns-域名解析" tabindex="-1">2、DNS 域名解析 <a class="header-anchor" href="#_2、dns-域名解析" aria-label="Permalink to &quot;2、DNS 域名解析&quot;">​</a></h3><ul><li>如果在缓存中没有查找到资源，那么直接进入网络请求流程。这请求前的第一步是要进行 DNS 解析，以获取请求域名的服务器 IP 地址。如果请求协议是 HTTPS，那么还需要建立 TLS 连接。</li></ul><h4 id="什么是-dns-域名解析" tabindex="-1">什么是 DNS 域名解析？ <a class="header-anchor" href="#什么是-dns-域名解析" aria-label="Permalink to &quot;什么是 DNS 域名解析？&quot;">​</a></h4><ul><li>DNS（Domain Name System，域名系统），因特网上作为域名和 IP 地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的 IP 数串。通过主机名，最终得到该主机名对应的 IP 地址的过程叫做域名解析（或主机名解析）</li></ul><h4 id="dns-查询的两种方式-递归查询和迭代查询" tabindex="-1">DNS 查询的两种方式：递归查询和迭代查询 <a class="header-anchor" href="#dns-查询的两种方式-递归查询和迭代查询" aria-label="Permalink to &quot;DNS 查询的两种方式：递归查询和迭代查询&quot;">​</a></h4><ul><li>递归查询</li></ul><p>当局部 <code>DNS</code> 服务器自己不能回答客户机的 <code>DNS</code> 查询时，它就需要向其他 <code>DNS</code> 服务器进行查询。此时有两种方式，如图所示的是递归方式。局部 <code>DNS</code> 服务器自己负责向其他 <code>DNS</code> 服务器进行查询，一般是先向该域名的根域服务器查询，再由根域名服务器一级级向下查询。最后得到的查询结果返回给局部 <code>DNS</code> 服务器，再由局部 <code>DNS</code> 服务器返回给客户端。</p><img src="'+r+'"><ul><li>迭代查询</li></ul><p>当局部 <code>DNS</code> 服务器自己不能回答客户机的 <code>DNS</code> 查询时，也可以通过迭代查询的方式进行解析，如图所示。局部 <code>DNS</code> 服务器不是自己向其他 <code>DNS</code> 服务器进行查询，而是把能解析该域名的其他 <code>DNS</code> 服务器的 IP 地址返回给客户端 <code>DNS</code> 程序，客户端 <code>DNS</code> 程序再继续向这些 <code>DNS</code> 服务器进行查询，直到得到查询结果为止。也就是说，迭代解析只是帮你找到相关的服务器而已，而不会帮你去查。比如说：<code>http://baidu.com</code>的服务器 ip 地址在 <code>192.168.4.5</code> 这里，你自己去查吧，本人比较忙，只能帮你到这里了。</p><img src="'+d+`"><h3 id="_3、建立连接" tabindex="-1">3、建立连接 <a class="header-anchor" href="#_3、建立连接" aria-label="Permalink to &quot;3、建立连接&quot;">​</a></h3><ul><li><p>基于 <code>DNS</code> 找到目标 <code>IP</code> 地址后，就是利用 <code>IP</code> 地址和服务器建立 <code>TCP</code> 连接。连接建立之后，浏览器端会构建请求行、请求头等信息，并把和该域名相关的 <code>Cookie</code> 等数据附加到请求头中，然后向服务器发送构建的请求信息。</p></li><li><p>服务器接收到请求信息后，会根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程。等网络进程接收了响应行和响应头之后，就开始解析响应头的内容了。</p></li></ul><h4 id="重定向" tabindex="-1">重定向 <a class="header-anchor" href="#重定向" aria-label="Permalink to &quot;重定向&quot;">​</a></h4><ul><li><p>在接收到服务器返回的响应头后，网络进程开始解析响应头，如果发现返回的状态码是 301 或者 302，那么说明服务器需要浏览器重定向到其他 <code>URL</code>。这时网络进程会从响应头的 <code>Location</code> 字段里面读取重定向的地址，然后再发起新的 <code>HTTP</code> 或者 <code>HTTPS</code> 请求，一切又重头开始了。</p></li><li><p>在导航过程中，如果服务器响应行的状态码包含了 301、302 一类的跳转信息，浏览器会跳转到新的地址继续导航；如果响应行是 200，那么表示浏览器可以继续处理该请求。</p></li></ul><h4 id="响应数据类型处理" tabindex="-1">响应数据类型处理 <a class="header-anchor" href="#响应数据类型处理" aria-label="Permalink to &quot;响应数据类型处理&quot;">​</a></h4><ul><li><p>在处理了跳转信息之后，我们继续导航流程的分析。<code>URL</code> 请求的数据类型，有时候是一个下载类型，有时候是正常的 <code>HTML</code> 页面，那么浏览器是如何区分它们呢？</p></li><li><p>答案是 <code>Content-Type</code>。Content-Type 是 <code>HTTP</code> 头中一个非常重要的字段， 它告诉浏览器服务器返回的响应体数据是什么类型，然后浏览器会根据 <code>Content-Type</code> 的值来决定如何显示响应体的内容。</p></li><li><p>如果响应头中的 Content-type 字段的值是 <code>text/html</code>，这就是告诉浏览器，服务器返回的数据是 <code>HTML</code> 格式。如果 <code>Content-Type</code> 的值是 <code>application/octet-stream</code>，显示数据是字节流类型的，通常情况下，浏览器会按照下载类型来处理该请求。</p></li><li><p>不同 <code>Content-Type</code> 的后续处理流程也截然不同。如果 <code>Content-Type</code> 字段的值被浏览器判断为下载类型，那么该请求会被提交给浏览器的下载管理器，同时该 <code>URL</code> 请求的导航流程就此结束。但如果是 HTML，那么浏览器则会继续进行导航流程。由于 <code>Chrome</code> 的页面渲染是运行在渲染进程中的，所以接下来就需要准备渲染进程了。</p></li></ul><h2 id="三、准备渲染进程" tabindex="-1">三、准备渲染进程 <a class="header-anchor" href="#三、准备渲染进程" aria-label="Permalink to &quot;三、准备渲染进程&quot;">​</a></h2><ul><li><p>默认情况下，<code>Chrome</code> 会为每个页面分配一个渲染进程，也就是说，每打开一个新页面就会配套创建一个新的渲染进程。但是，如果多个页面属于同一站点的话，浏览器会让多个页面直接运行在同一个渲染进程中。</p></li><li><p>“同一站点”定义为根域名（例如，jinghao.xyz）加上协议（例如，https:// 或者 http://），还包含了该根域名下的所有子域名和不同的端口，比如下面这三个：</p></li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//blog.jinghao.xyz</span></span>
<span class="line"><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//www.jinghao.xyz</span></span>
<span class="line"><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//www.jinghao.xyz:8080</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>它们都是属于同一站点，因为它们的协议都是 <code>HTTPS</code>，而且根域名也都是 <code>jinghao.xyz</code>。</p><ul><li><p><code>Chrome</code> 的默认策略是，每个标签对应一个渲染进程。但如果从一个页面打开了另一个新页面，而新页面和当前页面属于同一站点的话，那么新页面会复用父页面的渲染进程。官方把这个默认策略叫 <code>process-per-site-instance</code>。</p></li><li><p>渲染进程准备好之后，还不能立即进入文档解析状态，因为此时的文档数据还在网络进程中，并没有提交给渲染进程，所以下一步就进入了提交文档阶段。</p></li></ul><h2 id="四、提交文档" tabindex="-1">四、提交文档 <a class="header-anchor" href="#四、提交文档" aria-label="Permalink to &quot;四、提交文档&quot;">​</a></h2><p><strong>首先要明确一点，这里的“文档”是指 URL 请求的响应体数据。</strong></p><ul><li><p>“提交文档”的消息是由浏览器进程发出的，渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”。</p></li><li><p>等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程。</p></li><li><p>浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 <code>Web</code> 页面。</p></li><li><p>这也就解释了为什么在浏览器的地址栏里面输入了一个地址后，之前的页面没有立马消失，而是要加载一会儿才会更新页面。</p></li></ul><p>到这里，一个完整的导航流程就“走”完了，这之后就要进入渲染阶段了。</p><h2 id="五、渲染过程" tabindex="-1">五、渲染过程 <a class="header-anchor" href="#五、渲染过程" aria-label="Permalink to &quot;五、渲染过程&quot;">​</a></h2><p>由于渲染机制过于复杂，所以渲染模块在执行过程中会被划分为很多子阶段，输入的 <code>HTML</code> 经过这些子阶段，最后输出像素。我们把这样的一个处理流程叫做渲染流水线，其大致流程如下图所示：</p><img src="`+h+'"><p>按照渲染的时间顺序，流水线可分为如下几个子阶段：</p><ul><li>构建 DOM 树。</li><li>样式计算。</li><li>布局阶段。</li><li>分层。</li><li>绘制。</li><li>分块。</li><li>光栅化。</li><li>合成。</li></ul><p>现在就开始一个一个阶段分析吧。</p><ul><li><p>开始每个子阶段都有其输入的内容。</p></li><li><p>然后每个子阶段有其处理过程。</p></li><li><p>最终每个子阶段会生成输出内容。</p></li></ul><h3 id="_1、构建-dom-树-html-文件-dom-树" tabindex="-1">1、构建 DOM 树（HTML 文件 -&gt; DOM 树） <a class="header-anchor" href="#_1、构建-dom-树-html-文件-dom-树" aria-label="Permalink to &quot;1、构建 DOM 树（HTML 文件 -&gt; DOM 树）&quot;">​</a></h3><ul><li><p>为什么要构建 <code>DOM</code> 树呢？这是因为浏览器无法直接理解和使用 <code>HTML</code>，所以需要将 <code>HTML</code> 转换为浏览器能够理解的结构——<code>DOM</code> 树。</p></li><li><p>构建 <code>DOM</code> 树的过程如下图。</p></li></ul><img src="'+u+'">',43),P=l("li",null,[l("p",null,[e("构建 "),l("code",null,"DOM"),e(" 树得输入内容是一个非常简单的 "),l("code",null,"HTML"),e(" 文件，然后经由 "),l("code",null,"HTML"),e(" 解析器解析之后输出树状结构的 "),l("code",null,"DOM"),e("，即 "),l("code",null,"DOM"),e(" 树。")])],-1),M=l("li",null,[l("p",null,"DOM 树解析的过程是一个深度优先遍历。即先构建当前节点的所有子节点，再构建下一个兄弟节点。")],-1),q=l("li",null,[l("p",null,"在读取 HTML 文档，构建 DOM 树的过程中，若遇到 script 标签，则 DOM 树的构建会暂停，直至脚本执行完毕。")],-1),T=n(`<p>这一步我们用网络进程提供的 HTML 文件经过 HTML 解析器解析之后我们得到了 DOM 树。但是 DOM 节点的样式我们依然不知道，所以接下来就需要样式计算了。</p><h3 id="_2、样式计算-css-文本-computedstyle" tabindex="-1">2、样式计算（css 文本 -&gt; ComputedStyle） <a class="header-anchor" href="#_2、样式计算-css-文本-computedstyle" aria-label="Permalink to &quot;2、样式计算（css 文本 -&gt; ComputedStyle）&quot;">​</a></h3><p><strong>样式计算的目的是为了计算出 DOM 节点中每个元素的具体样式，这个阶段大体可分为三步来完成。</strong></p><h4 id="第一步——把-css-转换为浏览器能够理解的结构" tabindex="-1">第一步——把 <code>CSS</code> 转换为浏览器能够理解的结构 <a class="header-anchor" href="#第一步——把-css-转换为浏览器能够理解的结构" aria-label="Permalink to &quot;第一步——把 \`CSS\` 转换为浏览器能够理解的结构&quot;">​</a></h4><p><code>CSS</code> 样式来源主要有三种：</p><ul><li>通过 <code>link</code> 引用的外部 <code>CSS</code> 文件</li><li>style 标签内的 <code>CSS</code></li><li>元素的 <code>style</code> 属性内嵌的 <code>CSS</code></li></ul><p>和 HTML 文件一样，浏览器也是无法直接理解这些纯文本的 <code>CSS</code> 样式，所以当渲染引擎接收到 <code>CSS</code> 文本时，会执行一个转换操作，将 <code>CSS</code> 文本转换为浏览器可以理解的结构——styleSheets。转换出来的 <code>styleSheets</code> 同时具备了查询和修改功能，这会为后面的样式操作提供基础。</p><h4 id="第二步——将样式表中的属性值标椎化" tabindex="-1">第二步——将样式表中的属性值标椎化 <a class="header-anchor" href="#第二步——将样式表中的属性值标椎化" aria-label="Permalink to &quot;第二步——将样式表中的属性值标椎化&quot;">​</a></h4><p>要理解什么是属性值标准化，你可以看下面这样一段 CSS 文本：</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">body </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">font</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">size</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> 2</span><span style="color:#A6ACCD;">em</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">p </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">blue</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">span  </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">display</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">div </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">font</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">weight</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">bold</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">div  p </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">green</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#A6ACCD;">div </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可以看到上面的 css 文本中有很多属性值，如 2em、blue、bold，<strong>这些类型数值不容易被渲染引擎理解，所以需要将所有值转换为渲染引擎容易理解的、标准化的计算值，这个过程就是属性值标准化。</strong></p><p>标椎化后的属性值如图所示：</p><img src="`+D+'"><p>从图中可以看到，2em 被解析成了 32px，red 被解析成了 rgb(255,0,0)，bold 被解析成了 700。</p><h4 id="第三步——计算出-dom-树中每个节点的具体样式" tabindex="-1">第三步——计算出 DOM 树中每个节点的具体样式 <a class="header-anchor" href="#第三步——计算出-dom-树中每个节点的具体样式" aria-label="Permalink to &quot;第三步——计算出 DOM 树中每个节点的具体样式&quot;">​</a></h4><ul><li>通过 css 的继承规则和层叠规则计算出每个节点的样式具体值。</li><li>CSS 继承就是每个 DOM 节点都包含有父节点的样式。</li><li>层叠是 CSS 的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法。它在 CSS 处于核心地位，CSS 的全称“层叠样式表”正是强调了这一点。</li><li>这个阶段最终输出的内容是每个 DOM 节点的样式，并被保存在 ComputedStyle 的结构内。</li></ul><h3 id="_3、布局阶段-dom-树-css-样式表-布局树" tabindex="-1">3、布局阶段（DOM 树 + CSS 样式表 -&gt; 布局树） <a class="header-anchor" href="#_3、布局阶段-dom-树-css-样式表-布局树" aria-label="Permalink to &quot;3、布局阶段（DOM 树 + CSS 样式表 -&gt; 布局树）&quot;">​</a></h3><p>现在，我们有 DOM 树和 DOM 树中元素的样式，但这还不足以显示页面，因为我们还不知道 DOM 元素的几何位置信息。那么接下来就需要计算出 DOM 树中可见元素的几何位置，我们把这个计算过程叫做布局。</p><p>Chrome 在布局阶段需要完成两个任务：<strong>创建布局树和布局计算。</strong></p><h4 id="第一步——创建布局树" tabindex="-1">第一步——创建布局树 <a class="header-anchor" href="#第一步——创建布局树" aria-label="Permalink to &quot;第一步——创建布局树&quot;">​</a></h4><p>因为 DOM 树包含了很多不需要在页面上展示的元素，比如 head 标签，还有使用了 css 样式 display: none 的元素。所以在渲染页面之前，还需要构建一颗只包含可见元素的布局树 🌲。大致流程有一下两步：</p><ul><li>1、遍历 DOM 树中的所有可见节点，并把这些节点加到布局中。</li><li>而不可见的节点会被丢掉，比如上面说的 head 标签下的全部内容，还有属性包含 display: none 的节点。</li></ul><h4 id="第二步——布局计算" tabindex="-1">第二步——布局计算 <a class="header-anchor" href="#第二步——布局计算" aria-label="Permalink to &quot;第二步——布局计算&quot;">​</a></h4><ul><li><p>现在我们有了一棵完整的布局树。那么接下来，就要计算布局树节点的坐标位置了。</p></li><li><p>在执行布局操作的时候，会把布局运算的结果重新写回布局树中，所以<strong>布局树既是输入内容也是输出内容</strong>，这是布局阶段一个不合理的地方，因为在布局阶段并没有清晰地将输入内容和输出内容区分开来。针对这个问题，Chrome 团队正在重构布局代码，下一代布局系统叫 LayoutNG，试图更清晰地分离输入和输出，从而让新设计的布局算法更加简单。</p></li></ul><h3 id="_4、分层-布局树-图层树" tabindex="-1">4、分层（布局树 -&gt; 图层树） <a class="header-anchor" href="#_4、分层-布局树-图层树" aria-label="Permalink to &quot;4、分层（布局树 -&gt; 图层树）&quot;">​</a></h3><ul><li><p>我们有了布局树，而且每个元素的具体位置信息都计算出来了，那么接下来是不是就要开始着手绘制页面了？答案依然是否定的。</p></li><li><p>因为页面中有很多复杂的效果，如一些复杂的 3D 变换、页面滚动，或者使用 z-indexing 做 z 轴排序等，为了更加方便地实现这些效果，渲染引擎还需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree）。</p></li><li><p>并不是布局树的每个节点都包含一个图层，<strong>如果一个节点没有对应的层，那么这个节点就从属于父节点的图层</strong>。</p></li><li><p>瞒足以下两点中的任意一点的元素就会被浏览器提升为单独的一层。</p><ul><li><p>1、拥有层叠上下文属性的元素。</p></li><li><p>2、需要剪裁（clip）的地方也会被创建为图层。（比如 div 大小写死了，里面的内容超出了父元素的大小。出现了滚动条也是单独的图层。）</p></li></ul></li></ul><h3 id="_5、图层绘制-图层树-待绘制列表" tabindex="-1">5、图层绘制（图层树 -&gt; 待绘制列表） <a class="header-anchor" href="#_5、图层绘制-图层树-待绘制列表" aria-label="Permalink to &quot;5、图层绘制（图层树 -&gt; 待绘制列表）&quot;">​</a></h3><ul><li><p>在完成图层树的构建之后，渲染引擎会对图层树中的每个图层进行绘制。</p></li><li><p>渲染引擎实现图层的绘制会把一个图层的绘制拆分成很多小的绘制指令，然后再把这些指令按照顺序组成一个待绘制列表。</p></li></ul><h3 id="_6、图层分块" tabindex="-1">6、图层分块 <a class="header-anchor" href="#_6、图层分块" aria-label="Permalink to &quot;6、图层分块&quot;">​</a></h3><ul><li><p>因为用户正常情况下看到的东西只是屏幕的大小（视口）。所以刚开始没有必要绘制出图层的所有内容。</p></li><li><p>基于这个原因，合成线程会将图层划分为图块（tile），这些图块的大小通常是 256x256 或者 512x512。</p></li><li><p>然后合成线程会按照视口附近的图块来优先生成位图，实际生成位图的操作是由栅格化来执行的。所谓栅格化，是指将图块转换为位图。而图块是栅格化执行的最小单位。渲染进程维护了一个栅格化的线程池，所有的图块栅格化都是在线程池内执行的。</p></li></ul><h3 id="_7、光栅化" tabindex="-1">7、光栅化 <a class="header-anchor" href="#_7、光栅化" aria-label="Permalink to &quot;7、光栅化&quot;">​</a></h3><ul><li><p>通常，栅格化过程都会使用 GPU 来加速生成，使用 GPU 生成位图的过程叫快速栅格化，或者 GPU 栅格化，生成的位图被保存在 GPU 内存中。</p></li><li><p>GPU 操作是运行在 GPU 进程中，如果栅格化操作使用了 GPU，那么最终生成位图的操作是在 GPU 中完成的，这就涉及到了跨进程操作（IPC）。</p></li></ul><h3 id="_8、合成与显示" tabindex="-1">8、合成与显示 <a class="header-anchor" href="#_8、合成与显示" aria-label="Permalink to &quot;8、合成与显示&quot;">​</a></h3><ul><li><p>一旦所有图块都被光栅化，合成线程就会生成一个绘制图块的命令——“DrawQuad”，然后将该命令提交给浏览器进程。</p></li><li><p>浏览器进程里面有一个叫 viz 的组件，用来接收合成线程发过来的 DrawQuad 命令，然后根据 DrawQuad 命令，将其页面内容绘制到内存中，最后再将内存显示在屏幕上。</p></li><li><p>到这里，经过这一系列的阶段，编写好的 HTML、CSS、JavaScript 等文件，经过浏览器就会显示出漂亮的页面了。</p></li></ul><h3 id="渲染流程总结" tabindex="-1">渲染流程总结 <a class="header-anchor" href="#渲染流程总结" aria-label="Permalink to &quot;渲染流程总结&quot;">​</a></h3><ul><li><p>1、渲染进程用 HTML 解析器将 HTML 文本内容解析为 DOM 树 🌲。</p></li><li><p>2、渲染引擎将 CSS 样式表转换为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。</p></li><li><p>3、创建布局树，并计算元素的布局信息。</p></li><li><p>4、对布局树进行分层，得到图层树。</p></li><li><p>5、为每个图层生成绘制列表，并提交给合成线程。</p></li><li><p>6、合成线程将图层分为图块，并在光栅化线程池中将图块转换成位图。</p></li><li><p>7、合成线程发送绘制图块命令 DrawQuad 给浏览器。</p></li><li><p>8、浏览器进程根据 DrawQuad 消息生成页面，并显示到页面上。</p></li></ul>',36);function f(x,L,N,O,A,k){const a=p("font");return t(),c("div",null,[b,m,y,C,l("ul",null,[S,F,l("li",null,[l("p",null,[e("渲染进程的主要职责是把从网络下载的 HTML、JavaScript、CSS、图片等资源解析为可以显示和交互的页面。因为渲染进程所有的内容都是通过网络获取的，会存在一些恶意代码利用浏览器漏洞对系统进行攻击，所以运行在渲染进程里面的代码是不被信任的。"),l("strong",null,[o(a,{color:"red"},{default:s(()=>[e("这也是为什么 Chrome 会让渲染进程运行在安全沙箱里，就是为了保证系统的安全。")]),_:1})])])])]),g,l("ul",null,[P,l("li",null,[l("p",null,[e("DOM 和 HTML 内容几乎是一样的，但是"),o(a,{color:"red"},{default:s(()=>[e("和 HTML 不同的是，DOM 是保存在内存中树状结构，可以通过 JavaScript 来查询或修改其内容")]),_:1}),e("。")])]),M,q]),T])}const B=i(_,[["render",f]]);export{H as __pageData,B as default};
