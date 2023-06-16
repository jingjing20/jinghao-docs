import{_ as s,o as n,c as a,V as l}from"./chunks/framework.364d6ed5.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"interview/字节跳动-基础架构.md","filePath":"interview/字节跳动-基础架构.md","lastUpdated":1686842923000}'),p={name:"interview/字节跳动-基础架构.md"},e=l(`<ul><li>1、自我介绍</li><li>2、实习介绍</li><li>3、grpc 这个名词你能介绍一下吗？或者说有什么用？</li><li>4、tcp、udp 介绍一下，区别在哪里，分别有什么应用场景？（我把 UDP 面向报文答成了面向字节流、、、必挂了）</li><li>5、介绍一下 HTTP 和 HTTPS</li><li>6、HTTPS 是怎么保证安全性的</li><li>7、HTTPS 中的 S 代表着啥（SSL 证书）第一次发 HTTPS 请求的时候客户端带着 SSL 证书到服务端，服务端会解析 SSL 证书生成一个 CA、、、</li><li>8、flex 实现如下布局：</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">danc</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">point</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">point</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">point</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>9、跨域相关问题</li><li>10、项目中遇到的问题及解决方案</li><li>11、用什么方法实现懒加载（滚动懒加载)</li><li>12、event-loop 读代码说结果题</li><li>13、手撕代码题</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">数学黑洞：给一个四位数和计算的次数，将计算的结果进行输出。定义一次计算的规则：将输入数字转化为四位最大的数字和最小的数字，并二者求查获取一个数字。例如2134，一次的计算规则 为最大4321减最小1234，得出结果3087。</span></span>
<span class="line"><span style="color:#A6ACCD;">  期待输入：四位数字和计算次数</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">1.</span><span style="color:#A6ACCD;"> 例如 </span><span style="color:#F78C6C;">2134</span><span style="color:#A6ACCD;">， </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> 期望结果：</span><span style="color:#F78C6C;">3087</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">2.</span><span style="color:#A6ACCD;"> 例如 </span><span style="color:#F78C6C;">2134</span><span style="color:#A6ACCD;">， </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> 期望结果：</span><span style="color:#F78C6C;">8352</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,4),o=[e];function r(i,c,t,C,A,y){return n(),a("div",null,o)}const _=s(p,[["render",r]]);export{d as __pageData,_ as default};
