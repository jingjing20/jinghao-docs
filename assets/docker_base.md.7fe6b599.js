import{_ as s,o as a,c as n,V as l}from"./chunks/framework.92369faf.js";const e="/jinghao-docs/assets/image.6cb3291c.png",p="/jinghao-docs/assets/image-1.98c8502d.png",b=JSON.parse('{"title":"docker 基础","description":"","frontmatter":{},"headers":[],"relativePath":"docker/base.md","filePath":"docker/base.md","lastUpdated":1688742179000}'),o={name:"docker/base.md"},c=l('<h1 id="docker-基础" tabindex="-1">docker 基础 <a class="header-anchor" href="#docker-基础" aria-label="Permalink to &quot;docker 基础&quot;">​</a></h1><ul><li><code>Docker</code> 是一种容器技术，它可以在操作系统上创建多个相互隔离的容器。容器内可以独立安装软件、运行服务。</li></ul><p><img src="'+e+'" alt="Alt text"></p><ul><li>但是，这个容器和宿主机还是有关联的，比如可以把宿主机的端口映射到容器内的端口、宿主机某个目录挂载到容器内的目录。</li></ul><p><img src="'+p+`" alt="Alt text"></p><h2 id="dockerfile-解释" tabindex="-1">dockerfile 解释 <a class="header-anchor" href="#dockerfile-解释" aria-label="Permalink to &quot;dockerfile 解释&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:18</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">WORKDIR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.lock</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">COPY</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">RUN</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">EXPOSE</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">CMD</span><span style="color:#A6ACCD;"> [ </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/main.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li><p>FROM <code>node:18</code> 是继承 <code>node:18</code> 基础镜像。</p></li><li><p><code>WORKDIR /app</code> 是指定当前目录为 <code>/app</code></p></li><li><p><code>COPY</code> 复制宿主机的 <code>package.json</code> 和 <code>lock</code> 文件到容器的当前目录，也就是 <code>/app</code> 下</p></li><li><p><code>RUN</code> 是执行命令，这里执行了 <code>npm install</code>。</p></li><li><p>然后再复制其余的文件到容器内。</p></li><li><p><code>EXPOSE</code> 指定容器需要暴露的端口是 <code>3000</code></p></li><li><p><code>CMD</code> 指定容器跑起来时执行的命令是 <code>node ./dist/main.js</code></p></li></ul><h2 id="构建镜像命令" tabindex="-1">构建镜像命令 <a class="header-anchor" href="#构建镜像命令" aria-label="Permalink to &quot;构建镜像命令&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockerfile-test:first</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>-t</code> 是指定名字和标签，这里镜像名为 <code>dockerfile-test</code> 标签为 <code>first</code></li><li>最后面的 <code>.</code> 指的是构建路径为当前根目录，默认会在当前目录下找 <code>dockerfile</code> 文件，如果不是当前目录，可以指定 <code>dockerfile</code> 文件的路径。</li></ul><h3 id="运行容器命令" tabindex="-1">运行容器命令 <a class="header-anchor" href="#运行容器命令" aria-label="Permalink to &quot;运行容器命令&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2333</span><span style="color:#C3E88D;">:3000</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jingjing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockerfile-test:first</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>-d 是后台运行。</p></li><li><p>-p 指定端口映射，映射宿主机的 2333 端口到容器的 3000 端口。</p></li><li><p>--name 指定容器名</p></li></ul><h3 id="技巧一-使用-alpine-镜像-而不是默认的-linux-镜像【减小体积】" tabindex="-1">技巧一：使用 alpine 镜像，而不是默认的 linux 镜像【减小体积】 <a class="header-anchor" href="#技巧一-使用-alpine-镜像-而不是默认的-linux-镜像【减小体积】" aria-label="Permalink to &quot;技巧一：使用 alpine 镜像，而不是默认的 linux 镜像【减小体积】&quot;">​</a></h3><ul><li>修改一下上述 dockerfile 内容</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:18</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">改成</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">FROM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:18-alpine3.14</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>重新build一下镜像【换个名字】</li></ul><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dockerfile-test:second</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>可以打开 docker desktop 看到 second 这个镜像会比 first 这个镜像体积减少大约 900M</li></ul><h3 id="技巧二-使用多阶段构建" tabindex="-1">技巧二：使用多阶段构建 <a class="header-anchor" href="#技巧二-使用多阶段构建" aria-label="Permalink to &quot;技巧二：使用多阶段构建&quot;">​</a></h3>`,21),r=[c];function t(i,d,C,y,u,D){return a(),n("div",null,r)}const m=s(o,[["render",t]]);export{b as __pageData,m as default};