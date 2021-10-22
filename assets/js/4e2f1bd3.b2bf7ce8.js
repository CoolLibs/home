"use strict";(self.webpackChunkcool_doc=self.webpackChunkcool_doc||[]).push([[643],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2079:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={title:"Hijacking the Dereference Operators",authors:"jules"},s=void 0,p={permalink:"/home/blog/2021/05/26/hijacking-the-dereference-operators",source:"@site/blog/2021-05-26-hijacking-the-dereference-operators.md",title:"Hijacking the Dereference Operators",description:"I often end up writting classes that wrap other classes or primitive types.",date:"2021-05-26T00:00:00.000Z",formattedDate:"May 26, 2021",tags:[],readingTime:2.33,truncated:!0,authors:[{name:"Jules Fouchy",title:"Cool developer & cool developer",url:"https://julesfouchy.github.io/home/",imageURL:"https://github.com/julesfouchy.png",key:"jules"}],prevItem:{title:"Unit Type-System",permalink:"/home/blog/2021/05/28/unit-type-system"}},c={authorsImageUrls:[void 0]},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I often end up writting classes that wrap other classes or primitive types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"struct MyData {\n      float field1;\n      float field2;\n      float field3;\n      float field4;\n      float field5;\n\n      void do_something();\n};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyDataWrapper {\npublic:\n      void do_something_else();\n\nprivate:\n      MyData _my_data;\n};\n")),(0,o.kt)("p",null,"And for a long time I was annoyed when needing to access the underlying wrapped class. At first I was writting one getter function for each method or field of the wrapped class that I still needed to access."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyDataWrapper {\npublic:\n      void do_something_else();\n      // -- Getters --\n      float field1() { return _my_data.field1; }\n      float field2() { return _my_data.field2; }\n      float field3() { return _my_data.field3; }\n      float field4() { return _my_data.field4; }\n      float field5() { return _my_data.field5; }\n      void do_something() { _my_data.do_something(); }\n      // -- Getters --\n\nprivate:\n      MyData _my_data;\n};\n")),(0,o.kt)("p",null,"But that was a lot of boilerplate code to write and I couldn't stand it. It get's especially annoying when you do some refactor or API change, because now you have to propagate the changes in two classes instead of one."),(0,o.kt)("p",null," So I moved to having only one getter function, typically called ",(0,o.kt)("em",{parentName:"p"},"get"),", that would return a reference to the whole wrapped class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyDataWrapper {\npublic:\n     void do_something_else();\n     // -- Getters --\n     const MyData& get() const { return _my_data; }\n     // -- Getters --\n\nprivate:\n     MyData _my_data;\n};\n")),(0,o.kt)("p",null,"In my opinion this is already much better because the implementor of the wrapper class needs to write way less code, and doesn't need to maintain it when the wrapped class changes."),(0,o.kt)("p",null,"But the API isn't as nice anymore ! We moved from"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"my_data_wrapper.do_something();\n")),(0,o.kt)("p",null,"to"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"my_data_wrapper.get().do_something();\n")),(0,o.kt)("p",null,"Basically, no matter what I call my getter function, it is still too long of a name and clutters the code."),(0,o.kt)("p",null,"So here comes the ultimate solution : ",(0,o.kt)("strong",{parentName:"p"},"Overload the dereference operators")," ! This makes the API only one character longuer than the original solution, and doesn't require the implementor to write a lot of boilerplate code either ! The best of both worlds !"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"my_data_wrapper->do_something();\n")),(0,o.kt)("p",null,"The only downside I can think of is that the syntax can be confusing for people who are not used to this pattern ; but I swear that when you are used to it, this is the greatest thing ever !"),(0,o.kt)("p",null,"For reference, this is how you would overload the dereference operators :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class MyDataWrapper {\npublic:\n      void do_something_else();\n      // -- Getters --\n      const MyData& operator* () const { return _my_data; }\n      const MyData* operator->() const { return &operator*(); } // Reuse the implementation of operator*\n      // -- Getters --\n\nprivate:\n      MyData _my_data;\n};\n")),(0,o.kt)("p",null,"You can see this pattern in action in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CoolLibs/Params/blob/main/src/Cool/Params/Params.h"},(0,o.kt)("em",{parentName:"a"},"Params")," module")," for example."),(0,o.kt)("p",null,"This is also used in ",(0,o.kt)("a",{parentName:"p",href:"https://en.cppreference.com/w/cpp/utility/optional"},"std::optional")," by the way !"))}m.isMDXComponent=!0}}]);