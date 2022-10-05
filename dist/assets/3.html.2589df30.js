import{_ as i,r,o as a,c as d,a as e,b as n,w as s,d as o,e as l}from"./app.62e004fa.js";const u="/assets/image-20220906174618397.pngmail3293172751@qq.336d7108.png",_={},p=e("h1",{id:"docker\u548C\u4F20\u7EDF\u865A\u62DF\u673A",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker\u548C\u4F20\u7EDF\u865A\u62DF\u673A","aria-hidden":"true"},"#"),o(" docker\u548C\u4F20\u7EDF\u865A\u62DF\u673A")],-1),h={class:"table-of-contents"},k=o("linux\u5185\u6838\u4E0B\u7684docker"),m=o("\u4F20\u7EDF\u865A\u62DF\u673A\u548C\u5BB9\u5668\u7684\u5BF9\u6BD4"),x=o("\u5728\u540E\u53F0\u7684Docker\uFF1AWindows\u548CLinux\u7684\u533A\u522B"),g=e("p",null,"[toc]",-1),b=e("h2",{id:"linux\u5185\u6838\u4E0B\u7684docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linux\u5185\u6838\u4E0B\u7684docker","aria-hidden":"true"},"#"),o(" linux\u5185\u6838\u4E0B\u7684docker")],-1),f=e("code",null,"runc",-1),w=o(" \u662F\u4E00\u4E2A Linux \u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u7528\u4E8E\u6839\u636E "),D={href:"https://github.com/opencontainers/runtime-spec",target:"_blank",rel:"noopener noreferrer"},v=o("OCI\u5BB9\u5668\u8FD0\u884C\u65F6\u89C4\u8303"),L=o(" \u521B\u5EFA\u548C\u8FD0\u884C\u5BB9\u5668\u3002"),q=e("p",null,[e("code",null,"containerd"),o(" \u662F\u4E00\u4E2A\u5B88\u62A4\u7A0B\u5E8F\uFF0C\u5B83\u7BA1\u7406\u5BB9\u5668\u751F\u547D\u5468\u671F\uFF0C\u63D0\u4F9B\u4E86\u5728\u4E00\u4E2A\u8282\u70B9\u4E0A\u6267\u884C\u5BB9\u5668\u548C\u7BA1\u7406\u955C\u50CF\u7684\u6700\u5C0F\u529F\u80FD\u96C6\u3002")],-1),y=l('<p><strong>Docker</strong> \u5728\u5BB9\u5668\u7684\u57FA\u7840\u4E0A\uFF0C\u8FDB\u884C\u4E86\u8FDB\u4E00\u6B65\u7684\u5C01\u88C5\uFF0C\u4ECE\u6587\u4EF6\u7CFB\u7EDF\u3001\u7F51\u7EDC\u4E92\u8054\u5230\u8FDB\u7A0B\u9694\u79BB\u7B49\u7B49\uFF0C\u6781\u5927\u7684\u7B80\u5316\u4E86\u5BB9\u5668\u7684\u521B\u5EFA\u548C\u7EF4\u62A4\u3002\u4F7F\u5F97 <code>Docker</code> \u6280\u672F\u6BD4\u865A\u62DF\u673A\u6280\u672F\u66F4\u4E3A\u8F7B\u4FBF\u3001\u5FEB\u6377\u3002</p><p>\u4E0B\u9762\u7684\u56FE\u7247\u6BD4\u8F83\u4E86 <strong>Docker</strong> \u548C\u4F20\u7EDF\u865A\u62DF\u5316\u65B9\u5F0F\u7684\u4E0D\u540C\u4E4B\u5904\u3002<strong>\u4F20\u7EDF\u865A\u62DF\u673A\u6280\u672F\u662F\u865A\u62DF\u51FA\u4E00\u5957\u786C\u4EF6\u540E\uFF0C\u5728\u5176\u4E0A\u8FD0\u884C\u4E00\u4E2A\u5B8C\u6574\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5728\u8BE5\u7CFB\u7EDF\u4E0A\u518D\u8FD0\u884C\u6240\u9700\u5E94\u7528\u8FDB\u7A0B\uFF1B\u800C\u5BB9\u5668\u5185\u7684\u5E94\u7528\u8FDB\u7A0B\u76F4\u63A5\u8FD0\u884C\u4E8E\u5BBF\u4E3B\u7684\u5185\u6838\uFF0C\u5BB9\u5668\u5185\u6CA1\u6709\u81EA\u5DF1\u7684\u5185\u6838\uFF0C\u800C\u4E14\u4E5F\u6CA1\u6709\u8FDB\u884C\u786C\u4EF6\u865A\u62DF\u3002\u56E0\u6B64\u5BB9\u5668\u8981\u6BD4\u4F20\u7EDF\u865A\u62DF\u673A\u66F4\u4E3A\u8F7B\u4FBF\u3002</strong></p><p><strong>\u4F20\u7EDF\u865A\u62DF\u5316</strong>:</p><img src="https://sm.nsddd.top//typora/spaces_-M5xTVjmK7ax94c8ZQcm_uploads_git-blob-6e94771ad01da3cb20e2190b01dfa54e3a69d0b2_virtualization.png?mail:3293172751@qq.com" alt="a" style="zoom:80%;"><p><strong>Docker</strong>:</p><img src="https://sm.nsddd.top//typora/spaces_-M5xTVjmK7ax94c8ZQcm_uploads_git-blob-5c1a41d44b8602c8f746e8929f484a701869ca25_docker.png?mail:3293172751@qq.com" alt="b" style="zoom:80%;"><h2 id="\u4F20\u7EDF\u865A\u62DF\u673A\u548C\u5BB9\u5668\u7684\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#\u4F20\u7EDF\u865A\u62DF\u673A\u548C\u5BB9\u5668\u7684\u5BF9\u6BD4" aria-hidden="true">#</a> \u4F20\u7EDF\u865A\u62DF\u673A\u548C\u5BB9\u5668\u7684\u5BF9\u6BD4</h2><ol><li>\u4F20\u7EDF\u7684VMware\u4ECE\u5F00\u59CB\u5230\u8FD0\u884C\uFF0C\u5F88\u6162\uFF0C\u800C\u4E14\u5185\u5B58\u5F88\u5927 <ul><li>\u8D44\u6E90\u5360\u7528\u591A</li><li>\u5197\u4F59\u6B65\u9AA4\u591A</li><li>\u542F\u52A8\u6162</li></ul></li></ol><p><strong>linux\u5BB9\u5668\u4E0D\u662F\u6A21\u62DF\u4E00\u4E2A\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u800C\u662F\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u9694\u79BB\u3002\u6709\u4E86\u5BB9\u5668\uFF0C\u5C31\u53EF\u4EE5\u5C06\u8F6F\u4EF6\u8FD0\u884C\u6240\u9700\u8981\u7684\u6240\u6709\u8D44\u6E90\u6253\u5305\u5230\u6709\u4E2A\u9694\u79BB\u7684\u5BB9\u5668\u4E2D\u3002==\u5BB9\u5668\u548C\u865A\u62DF\u673A\u4E0D\u540C\uFF0C\u4E0D\u9700\u8981\u6346\u7ED1\u4E00\u6574\u5957\u7684\u64CD\u4F5C\u7CFB\u7EDF==\uFF0C\u53EA\u9700\u8981\u8F6F\u4EF6\u5DE5\u4F5C\u6240\u9700\u8981\u7684\u5E93\u548C\u8D44\u6E90\u548C\u8BBE\u7F6E\u3002</strong></p><ul><li>docker\u5BB9\u5668\u662F\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u76F4\u63A5\u590D\u7528\u672C\u5730\u4E3B\u673A\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5BB9\u5668\u4E4B\u95F4\u76F8\u4E92\u9694\u79BB\uFF0C\u8FDB\u7A0B\u4E92\u4E0D\u5F71\u54CD\u3002</li><li>\u4F20\u7EDF\u865A\u62DF\u673A\u662F\u5728\u786C\u4EF6\u5C42\u9762\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u7136\u540E\u8FD0\u884C\u4E00\u4E2A\u5B8C\u6574\u7684\u64CD\u4F5C\u7CFB\u7EDF</li></ul><blockquote><p>\u5373docker\u7684\u4F18\u52BF\u4F53\u73B0\u4E3A\u542F\u52A8\u901F\u5EA6\u5FEB\uFF0C\u5360\u7528\u4F53\u79EF\u5C0F</p></blockquote><p><strong>docker\u4F5C\u4E3A==\u5185\u6838\u7EA7\u865A\u62DF\u5316==\uFF0C\u4E0D\u50CF\u4F20\u7EDF\u865A\u62DF\u5316\u6280\u672F\u4E00\u6837\u9700\u8981\u989D\u5916\u7684hypervisor\u652F\u6301\uFF0C\u6240\u4EE5\u5728\u4E00\u53F0\u7269\u7406\u673A\u4E0A\u53EF\u4EE5\u8FD0\u884C\u5F88\u591A\u4E2A\u5BB9\u5668\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u5927\u5927\u63D0\u5347CPU\u548C\u5185\u5B58\u5229\u7528\u7387.</strong></p><img src="'+u+`" alt="image-20220906174618397" style="zoom:40%;"><h2 id="\u5728\u540E\u53F0\u7684docker-windows\u548Clinux\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#\u5728\u540E\u53F0\u7684docker-windows\u548Clinux\u7684\u533A\u522B" aria-hidden="true">#</a> \u5728\u540E\u53F0\u7684Docker\uFF1AWindows\u548CLinux\u7684\u533A\u522B</h2><p>\u5728Windows\u548CLinux\u7CFB\u7EDF\u4E2D\u5B89\u88C5Docker\u7684\u65B9\u6CD5\u53EA\u6709\u4E00\u4E2A\u4E0D\u540C\u3002\u5728Linux\u7CFB\u7EDF\u4E0A\u5B89\u88C5Docker\u65F6\uFF0C\u53EA\u9700\u8981\u5B89\u88C5Docker\u5F15\u64CE\u548C\u7BA1\u7406\u5DE5\u5177\uFF0C\u800C\u4E0D\u9700\u8981\u521B\u5EFA\u865A\u62DF\u673A\u6216\u8005\u865A\u62DF\u7F51\u7EDC\uFF0C\u56E0\u4E3A\u4F60\u7684\u5BB9\u5668\u5C06\u4F1A\u4E3A\u4F60\u521B\u5EFA\u73AF\u5883\u3002\u5176\u5B9Edocker\u542F\u52A8\u7684\u5E94\u7528\uFF0C\u8FD8\u662F\u76F4\u63A5\u8FD0\u884C\u5728\u5BBF\u4E3B\u673A\u4E0A\uFF0C<strong>\u548C\u666E\u901A\u7684\u7A0B\u5E8F\u4E00\u6837\uFF0C\u76F4\u63A5\u8C03\u7528\u5BBF\u4E3B\u673A\u7684\u5185\u6838\uFF1B--</strong>-- \u5728\u5BBF\u4E3B\u673A\u4E0A\uFF0C\u901A\u8FC7ps\u53EF\u4EE5\u770B\u5230docker\u542F\u52A8\u7684\u5E94\u7528\u8FDB\u7A0B \uFF08\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u8BF4\uFF0Cdocker\u53EA\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\u7684\u539F\u56E0\uFF09\uFF1B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker ps 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u63D0\u9192\u4E0B\u4F60</p><p>Docker\u5728Windows\u7CFB\u7EDF\u4E0A\u5B89\u88C5\u662F\u4E0D\u540C\u7684\u3002\u5728\u5B89\u88C5\u65F6\uFF0CDocker\u4F1A\u521B\u5EFA\u4E00\u4E2A\u57FA\u4E8ELinux\u7684\u865A\u62DF\u673A\uFF0C\u53EB\u505AMobyLinux\u865A\u62DF\u673A\uFF0C\u8FD9\u4E2A\u865A\u62DF\u673A\u662F\u57FA\u4E8EAlpine Linux\u7684\u3002Docker\u5E94\u7528\u7A0B\u5E8F\u4F1A\u8FDE\u63A5\u5230\u6B64\u865A\u62DF\u673A\uFF0C\u4F60\u4FBF\u53EF\u4EE5\u5F00\u59CB\u521B\u5EFA\u5177\u6709\u5FC5\u8981\u64CD\u4F5C\u7EC4\u4EF6\u7684\u5BB9\u5668\u4E86\u3002</p><p>\u4E3A\u4E86\u4E0E\u672C\u5730\u7F51\u7EDC\u548CNAT\uFF08\u7F51\u7EDC\u5730\u5740\u8F6C\u6362\uFF09\u8FDB\u884C\u901A\u4FE1\uFF0C\u5728Docker\u5B89\u88C5\u4E2D\u4F1A\u4E3A\u865A\u62DF\u673A\u914D\u7F6E\u4E00\u4E2A\u5B50\u7F51\uFF0C\u4EE5\u4FBF\u4F60\u7684\u5BB9\u5668\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u3002</p><p>\u56E0\u4E3A\u6240\u6709\u8FD9\u4E9B\u6B65\u9AA4\u90FD\u53D1\u751F\u5728\u540E\u53F0\uFF0C\u8EAB\u4E3A\u7528\u6237\u7684\u4F60\u4E0D\u5FC5\u4E3A\u8FD9\u4E9B\u6B65\u9AA4\u64CD\u5FC3\u3002\u4E0D\u8FC7\uFF0C\u4E8B\u5B9E\u4E0ADocker\u662F\u5728Windows\u540E\u53F0\u8FD0\u884C\u865A\u62DF\u673A\uFF0C\u8FD9\u4E5F\u662FDocker\u5728Windows\u548CLinux\u7684\u53E6\u5916\u4E00\u4E2A\u4E3B\u8981\u533A\u522B\u3002</p></div>`,17);function V(W,N){const t=r("router-link"),c=r("ExternalLinkIcon");return a(),d("div",null,[p,e("nav",h,[e("ul",null,[e("li",null,[n(t,{to:"#linux\u5185\u6838\u4E0B\u7684docker"},{default:s(()=>[k]),_:1})]),e("li",null,[n(t,{to:"#\u4F20\u7EDF\u865A\u62DF\u673A\u548C\u5BB9\u5668\u7684\u5BF9\u6BD4"},{default:s(()=>[m]),_:1})]),e("li",null,[n(t,{to:"#\u5728\u540E\u53F0\u7684docker-windows\u548Clinux\u7684\u533A\u522B"},{default:s(()=>[x]),_:1})])])]),g,b,e("blockquote",null,[e("p",null,[f,w,e("a",D,[v,n(c)]),L]),q]),y])}const C=i(_,[["render",V],["__file","3.html.vue"]]);export{C as default};