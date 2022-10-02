import{_ as t,r as i,o as l,c as d,a as e,b as r,e as n,d as s}from"./app.bfbab846.js";const c={},o=n(`<h1 id="docker\u642D\u5EFAgitlab-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#docker\u642D\u5EFAgitlab-\u670D\u52A1\u5668" aria-hidden="true">#</a> docker\u642D\u5EFAGitlab \u670D\u52A1\u5668</h1><p>[toc]</p><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u6211\u9700\u8981\u5728\u670D\u52A1\u5668\u4E0A\u9762\u90E8\u7F72\u4E00\u4E2A\u4ED3\u5E93\uFF0C\u65B9\u4FBF\u63D0\u4EA4\uFF0C\u800C\u4E14\u4F9B\u4E3B\u673A\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u6570\u636E\u4F20\u8F93</p><ul><li>\u7CFB\u7EDF\uFF1Acentos</li></ul><h2 id="\u5B89\u88C5\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u955C\u50CF" aria-hidden="true">#</a> \u5B89\u88C5\u955C\u50CF</h2><p>\u{1F1EB}\u{1F1EE}<strong>\u67E5\u627E\u955C\u50CF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u627EGitlab\u955C\u50CF
docker search gitlab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u{1F90F}\u62C9\u53D6Gitlab\u955C\u50CF</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull gitlab/gitlab-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u{1F320}\u542F\u52A8docker\u955C\u50CF</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u5BB9\u5668</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
 <span class="token parameter variable">-itd</span>  <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9980</span>:80 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-p</span> <span class="token number">9922</span>:22 <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>gitlab<span class="token punctuation">\\</span>etc:/etc/gitlab  <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>gitlab<span class="token punctuation">\\</span>log:/var/log/gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">-v</span> D:<span class="token punctuation">\\</span>docker<span class="token punctuation">\\</span>gitlab<span class="token punctuation">\\</span>opt:/var/opt/gitlab <span class="token punctuation">\\</span>
 <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
 <span class="token parameter variable">--name</span> gitlab <span class="token punctuation">\\</span>
 gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u542F\u52A8\u5BB9\u5668
docker run -itd -p 9980:80 -p 9922:22 -v D:\\docker\\gitlab\\etc:/etc/gitlab -v D:\\docker\\gitlab\\log:/var/log/gitlab -v D:\\docker\\gitlab\\opt:/var/opt/gitlab  --restart always --privileged=true --name gitlab gitlab/gitlab-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F388} \u89E3\u91CA\uFF1A</p><table><thead><tr><th>\u547D\u4EE4</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>-i</td><td>\u4EE5\u4EA4\u4E92\u6A21\u5F0F\u8FD0\u884C\u5BB9\u5668\uFF0C\u901A\u5E38\u4E0E -t \u540C\u65F6\u4F7F\u7528\u547D\u4EE4\u89E3\u91CA</td></tr><tr><td>-t</td><td>\u4E3A\u5BB9\u5668\u91CD\u65B0\u5206\u914D\u4E00\u4E2A\u4F2A\u8F93\u5165\u7EC8\u7AEF\uFF0C\u901A\u5E38\u4E0E -i \u540C\u65F6\u4F7F\u7528</td></tr><tr><td>-d</td><td>\u540E\u53F0\u8FD0\u884C\u5BB9\u5668\uFF0C\u5E76\u8FD4\u56DE\u5BB9\u5668 ID</td></tr><tr><td>-p 9980:80</td><td>\u5C06\u5BB9\u5668\u5185 80 \u7AEF\u53E3\u6620\u5C04\u81F3\u5BBF\u4E3B\u673A 9980 \u7AEF\u53E3\uFF0C\u8FD9\u662F\u8BBF\u95EE gitlab \u7684\u7AEF\u53E3</td></tr><tr><td>-p 9922:22</td><td>\u5C06\u5BB9\u5668\u5185 22 \u7AEF\u53E3\u6620\u5C04\u81F3\u5BBF\u4E3B\u673A 9922 \u7AEF\u53E3\uFF0C\u8FD9\u662F\u8BBF\u95EE ssh \u7684\u7AEF\u53E3</td></tr><tr><td>-v /home/gitlab/etc:/etc/gitlab</td><td>\u5C06\u5BB9\u5668 / etc/gitlab \u76EE\u5F55\u6302\u8F7D\u5230\u5BBF\u4E3B\u673A / usr/local/gitlab-test/etc \u76EE\u5F55\u4E0B\uFF0C\u82E5\u5BBF\u4E3B\u673A\u5185\u6B64\u76EE\u5F55\u4E0D\u5B58\u5728\u5C06\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF0C\u5176\u4ED6\u4E24\u4E2A\u6302\u8F7D\u540C\u8FD9\u4E2A\u4E00\u6837</td></tr><tr><td>--restart always</td><td>\u5BB9\u5668\u81EA\u542F\u52A8</td></tr><tr><td>--privileged=true</td><td>\u8BA9\u5BB9\u5668\u83B7\u53D6\u5BBF\u4E3B\u673A root \u6743\u9650</td></tr><tr><td>--name gitlab</td><td>\u8BBE\u7F6E\u5BB9\u5668\u540D\u79F0\u4E3A gitlab</td></tr><tr><td>gitlab/gitlab-ce</td><td>\u955C\u50CF\u7684\u540D\u79F0\uFF0C\u8FD9\u91CC\u4E5F\u53EF\u4EE5\u5199\u955C\u50CF ID</td></tr></tbody></table><p><strong>\u{1F933}\u4FEE\u6539\u914D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8FDB\u5BB9\u5668\u5185\u90E8</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> gitlab /bin/bash
 
<span class="token comment">#\u4FEE\u6539gitlab.rb</span>
<span class="token function">vi</span> /etc/gitlab/gitlab.rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u2764\uFE0F \u52A0\u5165\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#gitlab\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u5199\u57DF\u540D\u3002\u5982\u679C\u7AEF\u53E3\u4E0D\u5199\u7684\u8BDD\u9ED8\u8BA4\u4E3A80\u7AEF\u53E3</span>
external_url <span class="token string">&#39;http://192.168.124.194&#39;</span>

<span class="token comment">#ssh\u4E3B\u673Aip</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_ssh_host&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;192.168.124.194&#39;</span>

<span class="token comment">#ssh\u8FDE\u63A5\u7AEF\u53E3</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_shell_ssh_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9922</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u{1F90F}\u8BA9\u914D\u7F6E\u751F\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab-ctl reconfigure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21),p=s("\u26A0\uFE0F \u6CE8\u610F\u4E0D\u8981\u91CD\u542F\uFF0C"),u=e("code",null,"/etc/gitlab/gitlab.rb",-1),v=s("\u6587\u4EF6\u7684\u914D\u7F6E\u4F1A\u6620\u5C04\u5230"),g=e("code",null,"gitlab.yml",-1),b=s("\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u7531\u4E8E\u54B1\u4EEC\u5728"),m={href:"https://so.csdn.net/so/search?q=docker&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},h=s("docker"),k=s("\u4E2D\u8FD0\u884C\uFF0C\u5728"),x=e("code",null,"gitlab",-1),_=s("\u4E0A\u751F\u6210\u7684"),f=e("code",null,"http",-1),w=s("\u5730\u5740\u5E94\u8BE5\u662Fhttp://192.168.124.194:9980,\u6240\u4EE5\uFF0C\u8981\u4FEE\u6539\u4E0B\u9762\u6587\u4EF6"),y=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4FEE\u6539http\u548Cssh\u914D\u7F6E
vi /opt/gitlab/embedded/service/gitlab-rails/config/gitlab.yml
 
  gitlab:
    host: 192.168.124.194
    port: 9980 # \u8FD9\u91CC\u6539\u4E3A9980
    https: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924225234548.png?xxw@nsddd.top" alt="image-20220924225234548"></p><p>\u{1F90F}\u8BA9\u914D\u7F6E\u751F\u6548 \u5E76\u4E14\u9000\u51FA\u5BB9\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab-ctl reconfigure
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6D4F\u89C8\u5668\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u8BBF\u95EE" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u8BBF\u95EE</h2><p>\u8DEF\u5F84\u8BBF\u95EE\uFF1Ahttp://192.168.124.194:9980/</p><blockquote><p>\u26A0\uFE0F \u673A\u5668\u914D\u7F6E\u8981\u5927\u4E8E<code>4g</code>\uFF0C\u5426\u5219\u5F88\u5BB9\u6613\u542F\u52A8\u4E0D\u4E86\uFF0C\u62A5<code>502</code></p><ul><li>\u7B2C\u4E00\u6B21\u8BBF\u95EE\uFF0C\u4F1A\u8BA9\u4FEE\u6539root\u5BC6\u7801</li><li>\u4FEE\u6539\u540E\u4EE5root\u7528\u6237\u767B\u5F55\u5373\u53EF</li></ul></blockquote><h3 id="\u4FEE\u6539\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5BC6\u7801" aria-hidden="true">#</a> \u4FEE\u6539\u5BC6\u7801</h3><p><strong>\u8FDB\u5165\u5BB9\u5668\u5185\u90E8\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker exec -it gitlab /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u8FDB\u5165\u63A7\u5236\u53F0\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab-rails console -e production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u67E5\u8BE2id\u4E3A1\u7684\u7528\u6237\uFF0Cid\u4E3A1\u7684\u7528\u6237\u662F\u8D85\u7EA7\u7BA1\u7406\u5458\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user = User.where(id:1).first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924230110134.png?xxw@nsddd.top" alt="image-20220924230110134"></p><p><strong>\u4FEE\u6539\u5BC6\u7801\u4E3A<code>1234</code>\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user.password=&#39;1234&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4FDD\u5B58\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user.save!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u9000\u51FA\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924230332131.png?xxw@nsddd.top" alt="image-20220924230332131"></p><h2 id="\u91CD\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u91CD\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801" aria-hidden="true">#</a> \u91CD\u7F6E\u7BA1\u7406\u5458\u5BC6\u7801</h2><p><strong>\u8FDB\u5165docker gitlab \u5BB9\u5668\u4E2D</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker exec -it gitlab\uFF08\u5BB9\u5668\u540D\u5B57\uFF09 bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u8FDB\u5165gitlab \u63A7\u5236\u53F0</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitlab-rails console -e production   #\u53EF\u80FD\u4F1A\u7B49\u597D\u51E0\u79D2\u949F 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u641C\u7D22\u7528\u6237</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8FD9\u91CC\u63D0\u4F9B\u4E24\u79CD\u641C\u7D22\u65B9\u5F0F  \u901A\u8FC7id</span>
user <span class="token operator">=</span> User.where<span class="token punctuation">(</span>id:1<span class="token punctuation">)</span>.first
<span class="token comment">#\u6216\u8005 \u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u641C\u7D22  \u6216\u8005\u7528\u6237\u540D</span>
user <span class="token operator">=</span> User.find_by<span class="token punctuation">(</span>email:<span class="token string">&#39;admin@example.com&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smsmimage-20220924231302178.png?xxw@nsddd.top" alt="asdf"></p><p><strong>\u4FEE\u6539\u5BC6\u7801</strong></p><blockquote><p>\u26A0\uFE0F \u6CE8\u610F\uFF1A\u5BC6\u7801\u4E0D\u80FD\u8BBE\u7F6E\u592A\u7B80\u5355\uFF0C\u6570\u636E\u5E93\u6CA1\u529E\u6CD5\u901A\u8FC7</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6CE8\u610F\u8FD9\u4E24\u4E2A\u9009\u9879\u90FD\u5F97\u8BBE\u7F6E,1234\u4E3A\u4F60\u8981\u8BBE\u7F6E\u7684\u5BC6\u7801</span>
user.password <span class="token operator">=</span><span class="token string">&#39;1234&#39;</span>
user.password_confirmation <span class="token operator">=</span><span class="token string">&#39;1234&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4FDD\u5B58\u9000\u51FA\uFF1Awq</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user.save!
exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://sm.nsddd.top/smimage-20220924232113215.png?xxw@nsddd.top" alt="image-20220924232113215"></p><p><strong>\u767B\u9646\u6210\u529F\u{1F618}\u{1F618}</strong><img src="http://sm.nsddd.top/smimage-20220924233008364.png?xxw@nsddd.top" alt="image-20220924233008364"></p>`,37);function D(q,I){const a=i("ExternalLinkIcon");return l(),d("div",null,[o,e("blockquote",null,[e("p",null,[p,u,v,g,b,e("a",m,[h,r(a)]),k,x,_,f,w])]),y])}const V=t(c,[["render",D],["__file","44.html.vue"]]);export{V as default};
