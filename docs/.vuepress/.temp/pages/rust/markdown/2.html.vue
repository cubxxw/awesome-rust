<template><div><ul>
<li><a href="https://github.com/3293172751/awesome-rust" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第2节-rust基本语法" tabindex="-1"><a class="header-anchor" href="#第2节-rust基本语法" aria-hidden="true">#</a> 第2节 rust基本语法</h1>
<div><a href = '1.md' style='float:left'>⬆️上一节🔗</a><a href = '3.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕🔥一个rust的编程指南，你将以docs形式阅读它Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="hello-word" tabindex="-1"><a class="header-anchor" href="#hello-word" aria-hidden="true">#</a> hello word</h2>
<p>💡简单的一个案例如下：</p>
<div class="language-rust ext-rs line-numbers-mode"><pre v-pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">"Hello, world!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>🚀 编译结果如下：</p>
<blockquote>
<p>编译命令：<code v-pre>rustc 文件名</code></p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>.<span class="token punctuation">\</span>main.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="程序解刨" tabindex="-1"><a class="header-anchor" href="#程序解刨" aria-hidden="true">#</a> 程序解刨</h2>
<ul>
<li>main函数很特别，它是每个rust可执行程序最先运行的代码</li>
</ul>
<blockquote>
<p>不通于go、python的<code v-pre>init</code>函数</p>
</blockquote>
<ul>
<li><code v-pre>println!</code>是一个Rust macro(宏)</li>
</ul>
<p>⚡其他都是类似的，四个空格，<code v-pre>;</code>结束</p>
<ul>
<li>编译后生成一个二进制文件</li>
</ul>
<blockquote>
<p>在Windows上还会生成一个<code v-pre>.pdb</code>文件，里面包含调试信息</p>
</blockquote>
<h2 id="包管理工具-cargo" tabindex="-1"><a class="header-anchor" href="#包管理工具-cargo" aria-hidden="true">#</a> 包管理工具 Cargo</h2>
<p><code v-pre>cargo</code>是Rust的构建系统和包管理工具</p>
<ul>
<li>构建代码</li>
<li>下载依赖库</li>
<li>构建库</li>
</ul>
<blockquote>
<p>我们在安装rust的时候就会安装<code v-pre>cargo</code></p>
<p>验证：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cargo</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h2 id="cargo创建项目" tabindex="-1"><a class="header-anchor" href="#cargo创建项目" aria-hidden="true">#</a> cargo创建项目</h2>
<blockquote>
<p>创建项目<code v-pre>hello_cargo</code>，目录也是<code v-pre>hello_cargo</code></p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cargo new hello_cargo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>[pacakge]</code>,是一个包的声明，它告诉Rust编译器这个源文件是一个包的一部分。</p>
<ul>
<li><code v-pre>name</code>：包的名称，这个名称必须是唯一的。</li>
<li><code v-pre>version</code>：包的版本号，这个版本号必须是有效的语义版本号。</li>
<li><code v-pre>authors</code>：包的作者列表，这个列表是一个字符串数组。</li>
<li><code v-pre>license</code>：包的许可证，这个许可证必须是有效的SPDX许可证标识符。</li>
<li><code v-pre>edition</code>：包的版本，这个版本必须是有效的Rust版本号。</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '1.md' style='float:left'>⬆️上一节🔗</a><a href = '3.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
<ul>
<li>
<p><RouterLink to="/rust/">Ⓜ️回到目录🏠</RouterLink></p>
</li>
<li>
<p><a href="https://nsddd.top/archives/contributors" target="_blank" rel="noopener noreferrer"><strong>🫵参与贡献💞❤️‍🔥💖</strong><ExternalLinkIcon/></a>)</p>
</li>
<li>
<p>✴️版权声明 © :本书所有内容遵循<a href="http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0%E5%8D%8F%E8%AE%AE%E6%96%87%E6%9C%AC" target="_blank" rel="noopener noreferrer">CC-BY-SA 3.0协议（署名-相同方式共享）©<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>


