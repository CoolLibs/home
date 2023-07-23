"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[6238],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(u,".").concat(f)]||m[f]||s[f]||i;return r?n.createElement(b,o(o({ref:t},p),{},{components:r})):n.createElement(b,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},406:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Workflow | Create a new library"},u=void 0,c={unversionedId:"contribute/Programming/creating-a-new-library",id:"contribute/Programming/creating-a-new-library",title:"Workflow | Create a new library",description:"Brief",source:"@site/docs/contribute/01-Programming/03-creating-a-new-library.md",sourceDirName:"contribute/01-Programming",slug:"/contribute/Programming/creating-a-new-library",permalink:"/contribute/Programming/creating-a-new-library",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Workflow | Create a new library"},sidebar:"contribute",previous:{title:'Workflow | Branches TODO rename as "When starting to work on something"',permalink:"/contribute/Programming/branches"},next:{title:"Guidelines | Coding",permalink:"/contribute/Programming/coding-guidelines"}},p=[{value:"Brief",id:"brief",children:[],level:2},{value:"How to",id:"how-to",children:[],level:2}],s={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"brief"},"Brief"),(0,i.kt)("p",null,"If you are about to create a small system that doesn't have any dependencies on the rest of ",(0,i.kt)("em",{parentName:"p"},"Cool"),", then making it into a standalone library makes a lot of sense.",(0,i.kt)("br",null),"\nWe try to do that whenever possible because it encourages a more decoupled and flexible design, and makes it easily reusable by others without having to include the whole of ",(0,i.kt)("em",{parentName:"p"},"Cool"),"."),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new repository from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CoolLibs/library-template"},"our template"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u26a0\ufe0f ",(0,i.kt)("strong",{parentName:"li"},"Make sure the ",(0,i.kt)("em",{parentName:"strong"},"Owner")," is set to CoolLibs, not to your personal account!"),(0,i.kt)("img",{src:r(4666).Z,width:"541",height:"187"})),(0,i.kt)("li",{parentName:"ul"},"Add a ",(0,i.kt)("em",{parentName:"li"},"short")," description. (This is optional, you can add it later if you want)."),(0,i.kt)("li",{parentName:"ul"},"Make sure the repo is public."),(0,i.kt)("li",{parentName:"ul"},"Don't check ",(0,i.kt)("inlineCode",{parentName:"li"},"Include all branches"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create repository from template"),"."))),(0,i.kt)("li",{parentName:"ul"},"Add the library to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/CoolLibs/.github/edit/main/profile/README.md"},"our list of ",(0,i.kt)("strong",{parentName:"a"},"Standalone libraries"))," under ",(0,i.kt)("inlineCode",{parentName:"li"},"## Standalone libraries")," by adding:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},'<a href="https://github.com/CoolLibs/mynewlib">\n  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=CoolLibs&repo=mynewlib" />\n</a>\n')),(0,i.kt)("p",null,"(NB: Replace the two occurences of ",(0,i.kt)("inlineCode",{parentName:"p"},"mynewlib")," with the name of your library)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clone the repo ",(0,i.kt)("strong",{parentName:"li"},"recursively"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone --recursive url/to/the/new/repo"),"."),(0,i.kt)("li",{parentName:"ul"},'In the cloned repo, fill in "setup.py" and run the script: it will setup everything and then remove the Python scripts used for the setup and amend the initial commit.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"force push")," this initial commit."),(0,i.kt)("li",{parentName:"ul"},"Implement the library."),(0,i.kt)("li",{parentName:"ul"},"Once the library is stable and you are ready to mark it as ",(0,i.kt)("em",{parentName:"li"},"v1"),", make a release on GitHub and write an article about it in our blog.")))}m.isMDXComponent=!0},4666:function(e,t,r){t.Z=r.p+"assets/images/set_owner_to_coollibs-287fff92fefb53951e919f8974b3fbd1.png"}}]);