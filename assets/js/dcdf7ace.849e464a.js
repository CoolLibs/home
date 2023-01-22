"use strict";(self.webpackChunkcool_docs=self.webpackChunkcool_docs||[]).push([[551],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return I}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=i.createContext({}),s=function(e){var t=i.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(A.Provider,{value:t},e.children)},E={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,A=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(n),I=r,M=h["".concat(A,".").concat(I)]||h[I]||E[I]||o;return n?i.createElement(M,a(a({ref:t},l),{},{components:n})):i.createElement(M,a({ref:t},l))}));function I(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var A in t)hasOwnProperty.call(t,A)&&(c[A]=t[A]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2087:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return A},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={},A=void 0,s={unversionedId:"lab/Writing Nodes/Category",id:"lab/Writing Nodes/Category",title:"Category",description:'A category is defined by simply creating a folder with the desired name in the "Nodes" folder. All nodes belonging to that category will have to be put in that folder.',source:"@site/docs/lab/03-Writing Nodes/35-Category.md",sourceDirName:"lab/03-Writing Nodes",slug:"/lab/Writing Nodes/Category",permalink:"/lab/Writing Nodes/Category",tags:[],version:"current",sidebarPosition:35,frontMatter:{},sidebar:"lab",previous:{title:"Presets",permalink:"/lab/Writing Nodes/Presets"},next:{title:"Color Spaces",permalink:"/lab/Writing Nodes/Color Spaces"}},l=[{value:"Consistency between nodes of the same category",id:"consistency-between-nodes-of-the-same-category",children:[],level:2},{value:"Category config",id:"category-config",children:[],level:2}],E={toc:l};function h(e){var t=e.components,c=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},E,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'A category is defined by simply creating a folder with the desired name in the "Nodes" folder. All nodes belonging to that category will have to be put in that folder.'),(0,o.kt)("h2",{id:"consistency-between-nodes-of-the-same-category"},"Consistency between nodes of the same category"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Since nodes of the same category can be swapped with each other, it is important to make sure they will be compatible. This is achieved by using the exact same parameter names when they share common parameters. For example both "Square Grid" and "Hexagonal Grid" have a "Grid Size" parameter. By giving it the exact same name in both nodes we make sure that its value / links will be preserved when switching between a square and hexagonal grid in the dropdown.'))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9788).Z,width:"416",height:"240"})),(0,o.kt)("h2",{id:"category-config"},"Category config"),(0,o.kt)("p",null,"By right-clicking on a category in the nodes menu, you can configure its color. If you create a new category it is important to pick a color for it."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6320).Z,width:"529",height:"317"})))}h.isMDXComponent=!0},6320:function(e,t){t.Z="data:image/png;base64,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"},9788:function(e,t){t.Z="data:image/png;base64,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"}}]);