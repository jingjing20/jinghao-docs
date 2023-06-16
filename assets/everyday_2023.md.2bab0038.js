import{_ as s,o as a,c as n,V as l}from"./chunks/framework.364d6ed5.js";const o="/assets/image-20230323181328457.db7cdf51.png",u=JSON.parse('{"title":"2023","description":"","frontmatter":{"title":"2023"},"headers":[],"relativePath":"everyday/2023.md","filePath":"everyday/2023.md","lastUpdated":1686842923000}'),p={name:"everyday/2023.md"},e=l(`<h2 id="_2023-1-3" tabindex="-1">2023-1-3 <a class="header-anchor" href="#_2023-1-3" aria-label="Permalink to &quot;2023-1-3&quot;">​</a></h2><h3 id="批量删除本地分支" tabindex="-1">批量删除本地分支 <a class="header-anchor" href="#批量删除本地分支" aria-label="Permalink to &quot;批量删除本地分支&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">feature/jing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="批量删除远程分支" tabindex="-1">批量删除远程分支 <a class="header-anchor" href="#批量删除远程分支" aria-label="Permalink to &quot;批量删除远程分支&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cluster_manage</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s/origin\\///g</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:{}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2023-1-12" tabindex="-1">2023-1-12 <a class="header-anchor" href="#_2023-1-12" aria-label="Permalink to &quot;2023-1-12&quot;">​</a></h2><h3 id="husky-新版差异" tabindex="-1">husky 新版差异 <a class="header-anchor" href="#husky-新版差异" aria-label="Permalink to &quot;husky  新版差异&quot;">​</a></h3><p><strong>.husky 4.x 版本之前支持在 package.json 中配置</strong></p><p><strong>.husky 4.x 版本之后不支持在 package.json 中配置了，新版操作如下：</strong></p><ul><li>需要在 scripts 标签中加入如下命令：</li></ul><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">prepare</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">husky install</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>然后执行下这个脚本</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">prepare</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>执行完会在根目录下生成一个 .husky 文件夹</li><li>之后就是你需要添加什么钩子函数自己加就行，比如：</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.husky/commit-msg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pnpm commitlint --edit &quot;$1&quot;</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2023-2-20" tabindex="-1">2023-2-20 <a class="header-anchor" href="#_2023-2-20" aria-label="Permalink to &quot;2023-2-20&quot;">​</a></h2><h3 id="git-配置别名" tabindex="-1">git 配置别名 <a class="header-anchor" href="#git-配置别名" aria-label="Permalink to &quot;git 配置别名&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.co</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.br</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">branch</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.ci</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias.st</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="git-查看别名" tabindex="-1">git 查看别名 <a class="header-anchor" href="#git-查看别名" aria-label="Permalink to &quot;git 查看别名&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--list</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alias</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2023-3-1" tabindex="-1">2023-3-1 <a class="header-anchor" href="#_2023-3-1" aria-label="Permalink to &quot;2023-3-1&quot;">​</a></h2><ul><li>打开新页面</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 打开新页面</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">String</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">url</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">openNewPage</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">link</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">href</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setAttribute</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">target</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">_blank</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">display</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">none</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 触发点击</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">link</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">link</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">click</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 然后移除</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">link</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="_2023-3-8" tabindex="-1">2023-3-8 <a class="header-anchor" href="#_2023-3-8" aria-label="Permalink to &quot;2023-3-8&quot;">​</a></h2><h3 id="reactive-定义的数组响应式失效问题" tabindex="-1">reactive 定义的数组响应式失效问题？ <a class="header-anchor" href="#reactive-定义的数组响应式失效问题" aria-label="Permalink to &quot;reactive 定义的数组响应式失效问题？&quot;">​</a></h3><ul><li><a href="https://blog.csdn.net/Star_ZXT/article/details/122919797" target="_blank" rel="noreferrer">https://blog.csdn.net/Star_ZXT/article/details/122919797</a></li></ul><h2 id="_2023-3-11" tabindex="-1">2023-3-11 <a class="header-anchor" href="#_2023-3-11" aria-label="Permalink to &quot;2023-3-11&quot;">​</a></h2><h3 id="mysql-忘记-root-密码怎么修改" tabindex="-1">MySQL 忘记 root 密码怎么修改 <a class="header-anchor" href="#mysql-忘记-root-密码怎么修改" aria-label="Permalink to &quot;MySQL 忘记 root 密码怎么修改&quot;">​</a></h3><ul><li><a href="https://cloud.tencent.com/developer/article/1970134" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1970134</a></li></ul><h2 id="_2023-3-23" tabindex="-1">2023-3-23 <a class="header-anchor" href="#_2023-3-23" aria-label="Permalink to &quot;2023-3-23&quot;">​</a></h2><h3 id="给终端设置代理" tabindex="-1">给终端设置代理 <a class="header-anchor" href="#给终端设置代理" aria-label="Permalink to &quot;给终端设置代理&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> https_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:7890</span><span style="color:#A6ACCD;"> http_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:7890</span><span style="color:#A6ACCD;"> all_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">socks5://127.0.0.1:7890</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="跑-flutter-项目遇到的问题" tabindex="-1">跑 flutter 项目遇到的问题 <a class="header-anchor" href="#跑-flutter-项目遇到的问题" aria-label="Permalink to &quot;跑 flutter 项目遇到的问题&quot;">​</a></h3><ul><li><p><code>brew install cocoapods</code> 问题，只能硬装试了好多次，后面发现可能是终端网络有问题。</p></li><li><p>装完 <code>cocoapods</code> 之后，进到 ios 目录下，执行 <code>pod install 报错</code></p></li></ul><img src="`+o+'"><ul><li>看着是访问不了 github 但是终端又能拉代码，真的奇怪。最后请教了 皓哥 说可能是网络的问题，先在终端设置网络代理，如下：，这样可以让终端走我们的 vpn 代理。</li></ul><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> https_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:7890</span><span style="color:#A6ACCD;"> http_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:7890</span><span style="color:#A6ACCD;"> all_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">socks5://127.0.0.1:7890</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>设置完还是报错，还需要在 <code>Podfile</code> 文件最顶部加一行设置【设置装包的源，我猜的】，最后再执行 <code>pod install</code> 就能把包装好了。</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">source </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://github.com/CocoaPods/Specs.git</span><span style="color:#89DDFF;">&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>pod 终端出现这个 [!] CocoaPods did not set the base configuration of your project because your project already has a custom config set. In order for CocoaPods integration to work at all, please either set the base configurations of the target <code>Runner</code> to <code>Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig</code> or include the <code>Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig</code> in your build configuration (<code>Flutter/Release.xcconfig</code>). 提示代表啥意思？</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">这个提示意味着 CocoaPods 没有设置您的项目的基本配置，因为您的项目已经有了自定义配置。这可能会导致 CocoaPods 集成无法正常工作。解决这个问题的方法有两种：</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F78C6C;">1.</span><span style="color:#A6ACCD;"> 将 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 设置为 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Runner</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 目标的基本配置。您可以通过打开 Xcode，选择 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Runner</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 目标，然后选择 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Build Settings</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 标签，在 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">User-Defined</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 部分中找到 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">COCOAPODS_PARALLEL_CODE_SIGN</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 和 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">OTHER_LDFLAGS</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 等选项，将它们设置为 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">$(inherited)</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">。</span></span>\n<span class="line"><span style="color:#F78C6C;">2.</span><span style="color:#A6ACCD;"> 将 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 包含在您的构建配置中。您可以在 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">Flutter/Release.xcconfig</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> 文件中添加以下内容：</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">#include &quot;Target Support Files/Pods-Runner/Pods-Runner.profile.xcconfig&quot;</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">。</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">完成其中一种解决方法后，再次运行 </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">pod install</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;">，然后重新构建您的项目即可。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',41),t=[e];function r(c,i,y,D,C,F){return a(),n("div",null,t)}const A=s(p,[["render",r]]);export{u as __pageData,A as default};
