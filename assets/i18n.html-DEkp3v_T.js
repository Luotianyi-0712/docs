import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o,c,a as s,b as n,d as t,w as i,e}from"./app-5nSivCWm.js";const r={},d=e(`<h1 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n"><span>I18n</span></a></h1><h2 id="site-i18n-config" tabindex="-1"><a class="header-anchor" href="#site-i18n-config"><span>Site I18n Config</span></a></h2><p>To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">docs</span>
<span class="line">├─ README.md</span>
<span class="line">├─ foo.md</span>
<span class="line">├─ nested</span>
<span class="line">│  └─ README.md</span>
<span class="line">└─ zh</span>
<span class="line">   ├─ README.md</span>
<span class="line">   ├─ foo.md</span>
<span class="line">   └─ nested</span>
<span class="line">      └─ README.md</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=s("code",null,"locales",-1),m=e(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// The key is the path for the locale to be nested under.</span></span>
<span class="line">    <span class="token comment">// As a special case, the default locale can use &#39;/&#39; as its path.</span></span>
<span class="line">    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      description<span class="token operator">:</span> <span class="token string">&#39;Vue-powered Static Site Generator&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      lang<span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      title<span class="token operator">:</span> <span class="token string">&#39;VuePress&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      description<span class="token operator">:</span> <span class="token string">&#39;Vue 驱动的静态网站生成器&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a locale does not have a <code>lang</code>, <code>title</code>, <code>description</code> or <code>head</code>, VuePress will fallback to the root-level values. You can omit the root level config as long as they are provided in each locale.</p>`,2),v={class:"hint-container tip"},h=s("p",{class:"hint-container-title"},"Tips",-1),g=e(`<h2 id="theme-i18n-config" tabindex="-1"><a class="header-anchor" href="#theme-i18n-config"><span>Theme I18n Config</span></a></h2><p>VuePress does not restrict how themes provide multi-language support, so each theme may have different way to handle i18n, and some themes may not provide multi-language support at all. You&#39;d better refer to the theme documentation for detailed guide.</p><p>If you are using default theme, the multi-language support is the same as above:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    locales<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;English&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        selectLanguageName<span class="token operator">:</span> <span class="token string">&#39;简体中文&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Config reference:</p><ul><li><a href="https://ecosystem.vuejs.press/themes/default/config.html" target="_blank" rel="noopener noreferrer">Default Theme &gt; Config</a></li><li><a href="https://ecosystem.vuejs.press/themes/default/locale.html" target="_blank" rel="noopener noreferrer">Default Theme &gt; Locale config</a></li></ul></div>`,5);function k(f,b){const a=l("RouteLink");return o(),c("div",null,[d,s("p",null,[n("Then, specify the "),u,n(" option in your "),t(a,{to:"/guide/configuration.html#config-file"},{default:i(()=>[n("config file")]),_:1}),n(":")]),m,s("div",v,[h,s("p",null,[n("Config reference: "),t(a,{to:"/reference/config.html#locales"},{default:i(()=>[n("locales")]),_:1})])]),g])}const T=p(r,[["render",k],["__file","i18n.html.vue"]]),x=JSON.parse('{"path":"/guide/i18n.html","title":"I18n","lang":"en-US","frontmatter":{"icon":"fa6-solid:language","description":"I18n Site I18n Config To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure: Then, specify the locales option...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vuejs.press/zh/guide/i18n.html"}],["meta",{"property":"og:url","content":"https://vuejs.press/guide/i18n.html"}],["meta",{"property":"og:site_name","content":"VuePress"}],["meta",{"property":"og:title","content":"I18n"}],["meta",{"property":"og:description","content":"I18n Site I18n Config To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure: Then, specify the locales option..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T14:23:03.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T14:23:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"I18n\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T14:23:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Site I18n Config","slug":"site-i18n-config","link":"#site-i18n-config","children":[]},{"level":2,"title":"Theme I18n Config","slug":"theme-i18n-config","link":"#theme-i18n-config","children":[]}],"git":{"createdTime":1701614677000,"updatedTime":1706883783000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":2}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"guide/i18n.md","localizedDate":"December 3, 2023","autoDesc":true}');export{T as comp,x as data};
