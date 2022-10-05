<template><div><ul>
<li><a href="https://github.com/3293172751/awesome-rust" target="_blank" rel="noopener noreferrer">author<ExternalLinkIcon/></a></li>
</ul>
<h1 id="第1节" tabindex="-1"><a class="header-anchor" href="#第1节" aria-hidden="true">#</a> 第1节</h1>
<div><a href = '0.md' style='float:left'>⬆️上一节🔗</a><a href = '2.md' style='float: right'>⬇️下一节🔗</a></div>
<br>
<blockquote>
<p>❤️💕💕🔥一个rust的编程指南，你将以docs形式阅读它Myblog:<a href="http://nsddd.top/" target="_blank" rel="noopener noreferrer">http://nsddd.top<ExternalLinkIcon/></a></p>
</blockquote>
<hr>
<p>[TOC]</p>
<h2 id="window安装rust" tabindex="-1"><a class="header-anchor" href="#window安装rust" aria-hidden="true">#</a> window安装rust</h2>
<h1 id="rust-for-windows" tabindex="-1"><a class="header-anchor" href="#rust-for-windows" aria-hidden="true">#</a> Rust for Windows</h1>
<p>Rust 支持主流的操作系统，Linux,Mac和 Windows。</p>
<p>Rust在Windows上的安装和你在windows上安装其它软件一样。</p>
<h3 id="_1、下载安装包" tabindex="-1"><a class="header-anchor" href="#_1、下载安装包" aria-hidden="true">#</a> 1、下载安装包：</h3>
<p><a href="https://www.rust-lang.org/zh-CN/other-installers.html" target="_blank" rel="noopener noreferrer">下载地址<ExternalLinkIcon/></a></p>
<p>Rust提供了多个版本和多个平台的安装包，下载对应的即可，此处我们以<a href="https://static.rust-lang.org/dist/rust-1.6.0-x86_64-pc-windows-gnu.msi" target="_blank" rel="noopener noreferrer">1.6.0<ExternalLinkIcon/></a>的稳定版为例。</p>
<h3 id="_2、安装" tabindex="-1"><a class="header-anchor" href="#_2、安装" aria-hidden="true">#</a> 2、安装：</h3>
<p>双击下载到的安装包，如下图所示：</p>
<p>默认，rust将安装到所有用户下，选择“Advanced”，可以指定安装用户和安装路径。然后点击”install”等待几分钟即可（中间可能会有安全提示，点击允许即可，如果你装了360之类的，需要小心360阻止写入注册表）。</p>
<h3 id="_3-验证安装" tabindex="-1"><a class="header-anchor" href="#_3-验证安装" aria-hidden="true">#</a> 3.验证安装：</h3>
<p>安装完成后，运行windows命令行，然后输入:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>rustc --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>看到 以 <strong>rustc 1.6.0</strong> 开头，说明你安装成功了。</p>
<p><strong>注意</strong></p>
<p>中国科学技术大学镜像源包含 <a href="http://mirrors.ustc.edu.cn/rust-static/" target="_blank" rel="noopener noreferrer">rust-static<ExternalLinkIcon/></a>，梯子暂时出问题的同学可以尝试从这里下载编译器；除此之外。还有 Crates 源，详见<a href="https://servers.ustclug.org/2016/01/mirrors-add-rust-crates/" target="_blank" rel="noopener noreferrer">这里的说明<ExternalLinkIcon/></a>。</p>
<h2 id="版本管理工具–rustup" tabindex="-1"><a class="header-anchor" href="#版本管理工具–rustup" aria-hidden="true">#</a> 版本管理工具–rustup</h2>
<p>rustup 是rust官方的版本管理工具。应当作为安装 Rust 的首选。</p>
<p>项目主页是: https://github.com/rust-lang-nursery/rustup.rs</p>
<p><img src="@source/rust/markdown/images/image-20221005171659197.png" alt="image-20221005171659197"></p>
<p><code v-pre>rustup</code>在 Windows 上的工作方式与在 Unix 上的工作方式相同，但对于 Windows 上的 Rust 开发人员有一些特殊的考虑。如<a href="https://www.rust-lang.org/tools/install?platform_override=win" target="_blank" rel="noopener noreferrer">Rust 下载页面所述<ExternalLinkIcon/></a>，Windows 上使用了两种<a href="https://en.wikipedia.org/wiki/Application_binary_interface" target="_blank" rel="noopener noreferrer">ABI ： <ExternalLinkIcon/></a><a href="https://visualstudio.microsoft.com/visual-cpp-build-tools/" target="_blank" rel="noopener noreferrer">Visual Studio<ExternalLinkIcon/></a>使用的本机 (MSVC) ABI和<a href="https://gcc.gnu.org/" target="_blank" rel="noopener noreferrer">GCC 工具链<ExternalLinkIcon/></a>使用的 GNU ABI 。您需要哪个版本的 Rust 在很大程度上取决于您想要与之互操作的 C/C++ 库：对于与 Visual Studio 生成的软件的互操作，请使用 Rust 的 MSVC 构建；<a href="https://msys2.github.io/" target="_blank" rel="noopener noreferrer">要与使用MinGW/MSYS2 工具链<ExternalLinkIcon/></a>构建的 GNU 软件互操作，请使用 GNU 构建。</p>
<p>以 MSVC ABI 为目标时，Rust 还需要<a href="https://visualstudio.microsoft.com/downloads/" target="_blank" rel="noopener noreferrer">安装 Visual Studio 2013（或更高版本）或 Visual C++ Build Tools 2019<ExternalLinkIcon/></a>，以便 <code v-pre>rustc</code>使用其链接器和库。Visual C++ 构建工具需要 Visual Studio 许可证（社区版、专业版或企业版）。</p>
<p>对于 Visual Studio，请务必选中“C++ 工具”和“Windows 10 SDK”选项。基本使用 GNU 构建不需要额外的软件安装。</p>
<p>默认情况下，在 Windows 上将 Rust 配置为以 MSVC ABI 为目标，<code v-pre>rustup</code>即目标三元组<code v-pre>i686-pc-windows-msvc</code>， 取决于主机 Windows 操作系统的 CPU 架构。除非通过工具链规范另有说明，否则选择安装的工具 <a href="https://rust-lang.github.io/rustup/concepts/toolchains.html#toolchain-specification" target="_blank" rel="noopener noreferrer">链<ExternalLinkIcon/></a>将被编译为在该目标三重主机上运行，并且默认以该三重主机为目标。<code v-pre>x86_64-pc-windows-msvc aarch64-pc-windows-msvc rustup</code></p>
<p><code v-pre>rustup set default-host</code>您可以在安装过程中或在安装过程中更改此行为。</p>
<p>例如，要显式选择 32 位 MSVC 主机：</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ rustup set default-host i686-pc-windows-msvc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者选择 64 位 GNU 工具链：</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ rustup set default-host x86_64-pc-windows-gnu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 MSVC ABI 提供与其他 Windows 软件的最佳互操作性，因此建议用于大多数用途。GNU 工具链始终可用，即使您默认不使用它。只需安装它<code v-pre>rustup toolchain install</code>：</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ rustup toolchain install stable-gnu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过，您不需要切换工具链来支持所有 Windows 目标；单个工具链支持所有四个 x86 Windows 目标：</p>
<div class="language-console ext-console line-numbers-mode"><pre v-pre class="language-console"><code>$ rustup target add x86_64-pc-windows-msvc
$ rustup target add x86_64-pc-windows-gnu
$ rustup target add i686-pc-windows-msvc
$ rustup target add i686-pc-windows-gnu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有关使用相同编译器指定不同目标的更多详细信息，请参阅<a href="https://rust-lang.github.io/rustup/cross-compilation.html" target="_blank" rel="noopener noreferrer">交叉编译<ExternalLinkIcon/></a>一章。</p>
<h3 id="例如" tabindex="-1"><a class="header-anchor" href="#例如" aria-hidden="true">#</a> 例如</h3>
<p><img src="@source/rust/markdown/images/image-20221005183930123.png" alt="image-20221005183930123"></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">higth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">src</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>./images/image-20221005171906924.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>原文<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">higth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>50%<span class="token punctuation">"</span></span> <span class="token attr-name">src</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span> <span class="token punctuation">"</span>./images/image-20221005171917882.png<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>译文<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装tustup步骤" tabindex="-1"><a class="header-anchor" href="#安装tustup步骤" aria-hidden="true">#</a> 安装tustup步骤</h3>
<blockquote>
<p>选择自定义安装</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>If you will be targeting the GNU ABI or otherwise know what you are
doing <span class="token keyword">then</span> it is fine to <span class="token builtin class-name">continue</span> installation without the build
tools, but otherwise, <span class="token function">install</span> the C++ build tools before proceeding.

Continue? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> y


Welcome to Rust<span class="token operator">!</span>

This will download and <span class="token function">install</span> the official compiler <span class="token keyword">for</span> the Rust
programming language, and its package manager, Cargo.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>.rustup

This can be modified with the RUSTUP_HOME environment variable.

The Cargo home directory located at:

  C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>smile<span class="token punctuation">\</span>.cargo

This can be modified with the CARGO_HOME environment variable.

The cargo, rustc, rustup and other commands will be added to
Cargo<span class="token string">'s bin directory, located at:

  C:\Users\smile\.cargo\bin

This path will then be added to your PATH environment variable by
modifying the HKEY_CURRENT_USER/Environment/PATH registry key.

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: x86_64-pc-windows-msvc
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>2

I'</span>m going to ask you the value of each of these installation options.
You may simply press the Enter key to leave unchanged.

Default <span class="token function">host</span> triple? <span class="token punctuation">[</span>x86_64-pc-windows-msvc<span class="token punctuation">]</span>


Default toolchain? <span class="token punctuation">(</span>stable/beta/nightly/none<span class="token punctuation">)</span> <span class="token punctuation">[</span>stable<span class="token punctuation">]</span>
nightly

Profile <span class="token punctuation">(</span>which tools and data to <span class="token function">install</span><span class="token punctuation">)</span>? <span class="token punctuation">(</span>minimal/default/complete<span class="token punctuation">)</span> <span class="token punctuation">[</span>default<span class="token punctuation">]</span>
minimal

Modify <span class="token environment constant">PATH</span> variable? <span class="token punctuation">(</span>Y/n<span class="token punctuation">)</span>
y


Current installation options:


   default <span class="token function">host</span> triple: x86_64-pc-windows-msvc
     default toolchain: nightly
               profile: minimal
  modify <span class="token environment constant">PATH</span> variable: <span class="token function">yes</span>

<span class="token number">1</span><span class="token punctuation">)</span> Proceed with installation <span class="token punctuation">(</span>default<span class="token punctuation">)</span>
<span class="token number">2</span><span class="token punctuation">)</span> Customize installation
<span class="token number">3</span><span class="token punctuation">)</span> Cancel installation
<span class="token operator">></span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用的开发工具" tabindex="-1"><a class="header-anchor" href="#使用的开发工具" aria-hidden="true">#</a> 使用的开发工具</h2>
<ul>
<li>vscode – rust插件</li>
<li>clion(intellj idea) 用来开发C/C++的项目</li>
</ul>
<h2 id="end-链接" tabindex="-1"><a class="header-anchor" href="#end-链接" aria-hidden="true">#</a> END 链接</h2>
<ul><li><div><a href = '0.md' style='float:left'>⬆️上一节🔗</a><a href = '2.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>
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


