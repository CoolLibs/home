"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[7578],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3926:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Git guidelines"},c=void 0,u={unversionedId:"contribute/Programming/git-guidelines",id:"contribute/Programming/git-guidelines",title:"Git guidelines",description:"Make a lot of small commits",source:"@site/docs/contribute/01-Programming/02-git-guidelines.md",sourceDirName:"contribute/01-Programming",slug:"/contribute/Programming/git-guidelines",permalink:"/contribute/Programming/git-guidelines",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Git guidelines"},sidebar:"contribute",previous:{title:"Get started",permalink:"/contribute/Programming/get-started"},next:{title:"Coding guidelines",permalink:"/contribute/Programming/coding-guidelines"}},s=[{value:"Make a lot of small commits",id:"make-a-lot-of-small-commits",children:[],level:2},{value:"Message style",id:"message-style",children:[],level:2},{value:"Gitmoji",id:"gitmoji",children:[],level:2},{value:"Work on a branch",id:"work-on-a-branch",children:[],level:2},{value:"Write nice Pull Requests",id:"write-nice-pull-requests",children:[],level:2}],m={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"make-a-lot-of-small-commits"},"Make a lot of small commits"),(0,i.kt)("p",null,"As soon as you have made some progress and the code compiles, make a commit !"),(0,i.kt)("p",null,"Try to avoid mixing ",(0,i.kt)("em",{parentName:"p"},"unrelated")," changes in a single commit: If you have made lots of changes, consider pushing them in separate commits that make sense."),(0,i.kt)("h2",{id:"message-style"},"Message style"),(0,i.kt)("p",null,"Be explicit. Don't strip words from your sentence."),(0,i.kt)("p",null,"When appropriate, specify inside ",(0,i.kt)("inlineCode",{parentName:"p"},"[]")," which class / file / module is modified by the commit."),(0,i.kt)("p",null,"Example commit message: The class ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeEditor")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"is0")," module has been modified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[is0::NodeEditor] Generate sceneSDF from the nodes\n")),(0,i.kt)("h2",{id:"gitmoji"},"Gitmoji"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/uBLWVxnPLP4"},"gitmoji"),"."),(0,i.kt)("p",null,"You can see the ones we use regularly in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/tooling/blob/main/gitmoji.md"},"tooling")," folder of any Cool project."),(0,i.kt)("h2",{id:"work-on-a-branch"},"Work on a branch"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Never commit directly to the ",(0,i.kt)("inlineCode",{parentName:"strong"},"main")," branch !")," This is to avoid having to resolve merge conflicts on every commit while many people work on different aspects of the code. It is simpler that we each work on a branch, and only merge once in a while."),(0,i.kt)("p",null,"When you start working on a feature, create a dedicated branch and work there."),(0,i.kt)("p",null,"Once the feature is finished (or advanced enough that it would be interesting to merge):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"merge ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," into your branch and resolve any conflict that might arise"),(0,i.kt)("li",{parentName:"ul"},"submit a pull request and wait for the peer review"),(0,i.kt)("li",{parentName:"ul"},"once the review is done the reviewer will merge your pull request")),(0,i.kt)("h2",{id:"write-nice-pull-requests"},"Write nice Pull Requests"),(0,i.kt)("p",null,"Before you submit your PR for review:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double check the names you gave. Ask yourself: would someone who doesn't know the codebase have a clue as to what ",(0,i.kt)("inlineCode",{parentName:"li"},"functionXxx()")," does?"),(0,i.kt)("li",{parentName:"ul"},"Look for duplicated code and refactor it away."),(0,i.kt)("li",{parentName:"ul"},"Make sure the code will be easy to change in the future.")))}p.isMDXComponent=!0}}]);