import{_ as s,o as a,c as n,V as e}from"./chunks/framework.364d6ed5.js";const u=JSON.parse('{"title":"Vue 必知必会","description":"","frontmatter":{},"headers":[],"relativePath":"Vue/vuequestions.md","filePath":"Vue/vuequestions.md","lastUpdated":1686880555000}'),l={name:"Vue/vuequestions.md"},o=e(`<h1 id="vue-必知必会" tabindex="-1">Vue 必知必会 <a class="header-anchor" href="#vue-必知必会" aria-label="Permalink to &quot;Vue 必知必会&quot;">​</a></h1><h2 id="_1、v-if-和-v-show-区别" tabindex="-1">1、v-if 和 v-show 区别 <a class="header-anchor" href="#_1、v-if-和-v-show-区别" aria-label="Permalink to &quot;1、v-if 和 v-show 区别&quot;">​</a></h2><ul><li>v-show 通过 CSS display 控制显示隐藏。</li><li>v-if 组件真正的渲染和销毁，而不是显示的隐藏。</li><li>频繁切换显示状态用 v-show，否则就用 v-if。</li></ul><h2 id="_2、为何在-v-for-中要用-key" tabindex="-1">2、为何在 v-for 中要用 key <a class="header-anchor" href="#_2、为何在-v-for-中要用-key" aria-label="Permalink to &quot;2、为何在 v-for 中要用 key&quot;">​</a></h2><ul><li>必须用 key ，而且不能是 index 和 random。</li><li>diff 算法中通过 tag 和 key 来判断是否是 sameNode（同一个节点）。</li><li>减少渲染次数，提升渲染性能。</li></ul><h2 id="_3、常见-vue-组件通讯" tabindex="-1">3、常见 Vue 组件通讯 <a class="header-anchor" href="#_3、常见-vue-组件通讯" aria-label="Permalink to &quot;3、常见 Vue 组件通讯&quot;">​</a></h2><ul><li>父子组件用 <code>props</code> 和 <code>this.$emit</code></li><li>自定义事件 <code>event.$on</code> <code>event.$off</code> <code>event.$emit</code></li><li><code>vuex</code></li></ul><h2 id="_4、生命周期函数" tabindex="-1">4、生命周期函数 <a class="header-anchor" href="#_4、生命周期函数" aria-label="Permalink to &quot;4、生命周期函数&quot;">​</a></h2><ul><li><p><strong>beforeCreate</strong>：在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。</p></li><li><p><strong>created</strong>：实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据监视(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。</p></li><li><p><strong>beforeMount</strong>：在挂载开始之前被调用相关的 render 函数首次被调用。</p></li><li><p><strong>mounted</strong>：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用此钩子函数，如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。</p></li><li><p><strong>beforeUpdate</strong>：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。</p></li><li><p><strong>updated</strong>：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。</p></li><li><p><strong>activated</strong>：keep-alive 组件激活时调用。</p></li><li><p><strong>deactivated</strong>：keep-alive 组件停用时调用。</p></li><li><p><strong>beforeDestroy</strong>：实例销毁之前调用。在这一步，实例仍然完全可用。</p></li><li><p><strong>destroyed</strong>：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。</p></li></ul><h2 id="_5、在哪个生命周期内调用异步请求" tabindex="-1">5、在哪个生命周期内调用异步请求？ <a class="header-anchor" href="#_5、在哪个生命周期内调用异步请求" aria-label="Permalink to &quot;5、在哪个生命周期内调用异步请求？&quot;">​</a></h2><p>可以在钩子函数 <code>created</code>、<code>beforeMount</code>、<code>mounted</code> 中进行调用，因为在这三个钩子函数中，<code>data</code> 已经创建，可以将服务端端返回的数据进行赋值。但是本人推荐在 <code>created</code> 钩子函数中调用异步请求，因为在 <code>created</code> 钩子函数中调用异步请求有以下优点：</p><ul><li>能更快获取到服务端数据，减少页面 loading 时间。</li><li>ssr 不支持 <code>beforeMount</code> 、<code>mounted</code> 钩子函数，所以放在 created 中有助于一致性。</li></ul><h2 id="_6、computed-和-watch-的区别和运用的场景" tabindex="-1">6、computed 和 watch 的区别和运用的场景？ <a class="header-anchor" href="#_6、computed-和-watch-的区别和运用的场景" aria-label="Permalink to &quot;6、computed 和 watch 的区别和运用的场景？&quot;">​</a></h2><p><strong>computed：</strong> 是计算属性，依赖其它属性值，并且 <strong>computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值。</strong></p><p><strong>watch：</strong> 更多的是<strong>观察</strong>的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作。</p><p><strong>运用场景：</strong></p><ul><li><p>当我们需要进行数值计算，并且依赖于其它数据时，应该使用 <code>computed</code>，因为可以利用 <code>computed</code> 的缓存特性，避免每次获取值时，都要重新计算。</p></li><li><p>当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 <code>watch</code>，使用 <code>watch</code> 选项允许我们执行异步操作 ( 访问一个 <code>API</code> )，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。</p></li></ul><h2 id="_7、vue-的父子组件生命周期执行顺序" tabindex="-1">7、Vue 的父子组件生命周期执行顺序？ <a class="header-anchor" href="#_7、vue-的父子组件生命周期执行顺序" aria-label="Permalink to &quot;7、Vue 的父子组件生命周期执行顺序？&quot;">​</a></h2><p>Vue 的父组件和子组件生命周期钩子函数执行顺序可以归类为以下 4 部分：</p><ul><li><p>加载渲染过程 父 <code>beforeCreate</code> -&gt; 父 <code>created</code> -&gt; 父 <code>beforeMount</code> -&gt; 子 <code>beforeCreate</code> -&gt; 子 <code>created</code> -&gt; 子 <code>beforeMount</code> -&gt; 子 <code>mounted</code> -&gt; 父 <code>mounted</code></p></li><li><p>子组件更新过程 父 <code>beforeUpdate</code> -&gt; 子 <code>beforeUpdate</code> -&gt; 子 <code>updated</code> -&gt; 父 <code>updated</code></p></li><li><p>父组件更新过程 父 <code>beforeUpdate</code> -&gt; 父 <code>updated</code></p></li><li><p>销毁过程 父 <code>beforeDestroy</code> -&gt; 子 <code>beforeDestroy</code> -&gt; 子 <code>destroyed</code> -&gt; 父 <code>destroyed</code></p></li></ul><h2 id="_8、何时需要使用-beforedestory" tabindex="-1">8、何时需要使用 beforeDestory <a class="header-anchor" href="#_8、何时需要使用-beforedestory" aria-label="Permalink to &quot;8、何时需要使用 beforeDestory&quot;">​</a></h2><ul><li>解绑自定义事件 <code>event.$off</code></li><li>清除定时器</li><li>解绑自定义的 <code>DOM</code> 事件，如 <code>addEventListener(&#39;scroll&#39;)</code></li></ul><p><strong>上面三个如果不做的话，都有可能造成内存泄漏</strong></p><h2 id="为什么组件里的-date-是个函数" tabindex="-1">为什么组件里的 date 是个函数？ <a class="header-anchor" href="#为什么组件里的-date-是个函数" aria-label="Permalink to &quot;为什么组件里的 date 是个函数？&quot;">​</a></h2><ul><li>因为对象是一个引用数据类型，如果 <code>data</code> 是一个对象的情况下会造成所有组件共用一个 <code>data</code>。</li><li>当 <code>data</code> 是一个函数的情况下，每次函数执行完毕后都会返回一个新的对象，这样的话每个组件都会维护一份独立的对象<code>data</code></li></ul><h2 id="vue-为何是异步渲染" tabindex="-1">Vue 为何是异步渲染？ <a class="header-anchor" href="#vue-为何是异步渲染" aria-label="Permalink to &quot;Vue 为何是异步渲染？&quot;">​</a></h2><p>只要侦听到数据变化， <code>Vue</code> 将开启一个队列，并缓冲在<strong>同一事件循环中</strong>发生的所有数据变更。如果同一个 <code>watcher</code> 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 <code>DOM</code> 操作是非常重要的。可以提高渲染性能。</p><h2 id="nexttick-有什么用" tabindex="-1">nextTick() 有什么用？ <a class="header-anchor" href="#nexttick-有什么用" aria-label="Permalink to &quot;nextTick() 有什么用？&quot;">​</a></h2><p>为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> vm </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#example</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 更改数据</span></span>
<span class="line"><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new message</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="vue-的组件怎么做到样式不覆盖" tabindex="-1">vue 的组件怎么做到样式不覆盖 <a class="header-anchor" href="#vue-的组件怎么做到样式不覆盖" aria-label="Permalink to &quot;vue 的组件怎么做到样式不覆盖&quot;">​</a></h2><h3 id="实现方法" tabindex="-1">实现方法 <a class="header-anchor" href="#实现方法" aria-label="Permalink to &quot;实现方法&quot;">​</a></h3><ul><li>在 <code>&lt;style&gt;</code> 标签中加上 scoped 属性 在vue文件中的style标签上，有一个特殊的属性：scoped。当一个style标签拥有scoped属性时，它的CSS样式就只能作用于当前的组件，也就是说，该样式只能适用于当前组件元素。通过该属性，可以使得组件之间的样式不互相污染。如果一个项目中的所有style标签全部加上了scoped，相当于实现了样式的模块化。</li></ul><h3 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h3><p>vue 中的 scoped 通过在 DOM 结构以及 css 样式上加唯一不重复的标记:data-v-hash的方式，以保证唯一（而这个工作是由过 PostCSS转译实现的），达到样式私有化模块化的目的。</p><p>总结一下 scoped 三条渲染规则：</p><ul><li><p>给HTML的DOM节点加一个不重复 data 属性(形如：data-v-19fca230)来表示他的唯一性</p></li><li><p>在每句css选择器的末尾（编译后的生成的 css 语句）加一个当前组件的data属性选择器（如[data-v-19fca230]）来私有化样式</p></li><li><p>如果组件内部包含有其他组件，只会给其他组件的最外层标签加上当前组件的data属性</p></li></ul><p>给个例子：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scss</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">span</span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">			</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hello world !</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>转义后如下：</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-v-ff86ae42</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">span</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-v-ff86ae42</span><span style="color:#89DDFF;">]{</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-v-ff86ae42</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">		</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">data-v-ff86ae42</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">hello world !</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="scoped-的穿透" tabindex="-1">scoped 的穿透 <a class="header-anchor" href="#scoped-的穿透" aria-label="Permalink to &quot;scoped 的穿透&quot;">​</a></h3><ul><li><p>有时候在一个项目中引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不能不用 scoped 属性造成组件之间的样式污染。</p></li><li><p>此时就需要穿透<code>scoped</code>。</p></li><li><p>尤大大说 <code>scope</code> 的功能是为了让 <code>css</code> 更规范，能更简单让<code>css</code> 仅对本组件的内容起到作用而不影响其他组件，这样也是为了减少各组件之间的样式黏性，可以避免修改单组件样式而影响到整个项目众多组件的问题。反正能用外联 <code>css</code> 或公共 <code>css</code> 文件建立共有的 <code>css</code>，所以我是非常建议使用 <code>scope</code> 但别穿透它。</p></li></ul>`,43),p=[o];function t(c,r,i,d,D,y){return a(),n("div",null,p)}const C=s(l,[["render",t]]);export{u as __pageData,C as default};
