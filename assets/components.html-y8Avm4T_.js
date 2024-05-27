import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as o,a as n,d as i,w as c,e as a,b as s}from"./app-5nSivCWm.js";const u={},d=a(`<h1 id="内置组件" tabindex="-1"><a class="header-anchor" href="#内置组件"><span>内置组件</span></a></h1><h2 id="autolink" tabindex="-1"><a class="header-anchor" href="#autolink"><span>AutoLink</span></a></h2><ul><li><p>Props:</p><ul><li>config <ul><li>类型：<code>AutoLinkConfig</code></li><li>是否必须：<code>true</code></li></ul></li></ul></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">AutoLinkConfig</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 判断该链接是否被激活的模式，优先级高于 \`exact\`</span>
<span class="line">   */</span></span>
<span class="line">  activeMatch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> RegExp</span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * \`aria-label\` 属性</span>
<span class="line">   */</span></span>
<span class="line">  ariaLabel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 该链接是否只有在 URL 完全匹配时才激活</span>
<span class="line">   */</span></span>
<span class="line">  exact<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 自动链接的 URL</span>
<span class="line">   */</span></span>
<span class="line">  link<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * \`rel\` 属性</span>
<span class="line">   */</span></span>
<span class="line">  rel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * \`target\` 属性</span>
<span class="line">   */</span></span>
<span class="line">  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * 自动链接的文本</span>
<span class="line">   */</span></span>
<span class="line">  text<span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用：</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoLink</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoLinkConfig<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoLink</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoLinkConfig<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  default 插槽</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoLink</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoLink</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoLinkConfig<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#before</span><span class="token punctuation">&gt;</span></span>before 插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#after</span><span class="token punctuation">&gt;</span></span>after 插槽<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoLink</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoLink</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoLinkConfig<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>config<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ config.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoLink</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AutoLink</span> <span class="token attr-name">:config</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>autoLinkConfig<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#before</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>config<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ config.text }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AutoLink</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>该组件将会自动将内部链接渲染为 <code>&lt;RouteLink&gt;</code> ，将外部链接渲染为 <code>&lt;a&gt;</code> ，并添加必要的属性。</p><p>你可以通过 <code>before</code> 和 <code>after</code> 插槽，在文本之前和之后渲染内容。也可以通过 <code>default</code> 插槽，直接渲染文本（默认文本是 <code>config.text</code>）。</p><p>该组件主要是为了开发主题时使用，普通用户在绝大多数情况下并不会用到它。对于主题作者来说，我们建议你在不确定链接是内部链接还是外部链接时，尽量使用这个组件。</p></li></ul><h2 id="clientonly" tabindex="-1"><a class="header-anchor" href="#clientonly"><span>ClientOnly</span></a></h2><ul><li>使用：</li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ClientOnly</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NonSsrFriendlyComponent</span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ClientOnly</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>该组件和它的子元素只会在客户端被渲染。也就是说，它不会在构建 (SSR) 过程中被渲染到 HTML 内。</p><p>如果一个组件在 <code>setup()</code> 中直接使用 浏览器 / DOM API ，它会导致构建过程报错，因为这些 API 在 Node.js 的环境中是无法使用的。在这种情况下，你可以选择一种方式：</p><ul><li>修改这个组件，只在 <code>onBeforeMount()</code> 或 <code>onMounted()</code> Hook 中使用 浏览器 / DOM API 。</li><li>使用 <code>&lt;ClientOnly&gt;</code> 包裹这个组件。</li></ul></li></ul><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><ul><li><p>Props:</p><ul><li>path <ul><li>类型： <code>string</code></li><li>是否必须： <code>false</code></li></ul></li></ul></li><li><p>使用：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/page.md<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,14),r=n("li",null,[n("p",null,"详情："),n("p",null,"该组件会渲染页面的 Markdown 内容。"),n("p",null,[s("如果没有传入 "),n("code",null,"path"),s(" Prop ，它会渲染当前路由下的页面内容。")]),n("p",null,"该组件主要是为了开发主题时使用。在绝大多数情况下你不会用到它。")],-1),k=n("p",null,"参考：",-1),m=a(`<h2 id="routelink" tabindex="-1"><a class="header-anchor" href="#routelink"><span>RouteLink</span></a></h2><ul><li><p>Props:</p><ul><li>to <ul><li>类型： <code>string</code></li><li>是否必须： <code>true</code></li></ul></li><li>active <ul><li>类型： <code>boolean</code></li><li>是否必须： <code>false</code></li><li>默认值： <code>false</code></li></ul></li><li>activeClass <ul><li>类型： <code>string</code></li><li>是否必须： <code>false</code></li><li>默认值： <code>&#39;route-link-active&#39;</code></li></ul></li></ul></li><li><p>使用：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/target-page.md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>目标页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RouteLink</span> <span class="token attr-name">active</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/path/to/current-page.md<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>当前页面<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RouteLink</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>该组件会渲染一个链接，用于跳转到指定页面。</p><p>如果 <code>active</code> Prop 被设置为 <code>true</code> ，那么这个链接会被额外添加一个 <code>activeClass</code> 类名。需要注意的是，这里的 active 状态并不会根据当前路由自动更新。</p><p>该组件主要是为了开发主题时使用，普通用户在绝大多数情况下并不会用到它。对于主题作者来说，我们建议你在渲染内部链接时尽量使用这个组件，而不是使用 <code>vue-router</code> 的 <code>&lt;RouterLink&gt;</code> 组件。</p></li></ul>`,4);function v(g,b){const t=l("RouteLink");return p(),o("div",null,[d,n("ul",null,[r,n("li",null,[k,n("ul",null,[n("li",null,[i(t,{to:"/zh/reference/node-api.html#path"},{default:c(()=>[s("Node API > Page 属性 > path")]),_:1})])])])]),m])}const L=e(u,[["render",v],["__file","components.html.vue"]]),q=JSON.parse('{"path":"/zh/reference/components.html","title":"内置组件","lang":"zh-CN","frontmatter":{"icon":"fa6-solid:puzzle-piece","description":"内置组件 AutoLink Props: config 类型：AutoLinkConfig 是否必须：true 使用： 详情： 该组件将会自动将内部链接渲染为 <RouteLink> ，将外部链接渲染为 <a> ，并添加必要的属性。 你可以通过 before 和 after 插槽，在文本之前和之后渲染内容。也可以通过 default 插槽，直接渲染文本...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vuejs.press/reference/components.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/zh/reference/components.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"内置组件"}],["meta",{"property":"og:description","content":"内置组件 AutoLink Props: config 类型：AutoLinkConfig 是否必须：true 使用： 详情： 该组件将会自动将内部链接渲染为 <RouteLink> ，将外部链接渲染为 <a> ，并添加必要的属性。 你可以通过 before 和 after 插槽，在文本之前和之后渲染内容。也可以通过 default 插槽，直接渲染文本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-27T07:59:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-27T07:59:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"内置组件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T07:59:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"AutoLink","slug":"autolink","link":"#autolink","children":[]},{"level":2,"title":"ClientOnly","slug":"clientonly","link":"#clientonly","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[]},{"level":2,"title":"RouteLink","slug":"routelink","link":"#routelink","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1716796744000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":3},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"张怀文","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.49,"words":748},"filePathRelative":"zh/reference/components.md","localizedDate":"2023年12月3日","autoDesc":true}');export{L as comp,q as data};
