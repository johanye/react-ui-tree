!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="/example/",t(0)}([function(e,t,n){"use strict";var r=n(4),i=n(3),o=n(6);n(14),n(13),n(12);var s=i.createClass({displayName:"App",getInitialState:function(){return{active:null,tree:{module:"react-ui-tree",children:[{module:"dist",collapsed:!0,children:[{module:"node.js"},{module:"react-ui-tree.css"},{module:"react-ui-tree.js"},{module:"tree.js"}]},{module:"example",children:[{module:"app.js"},{module:"app.less"},{module:"index.html"}]},{module:"lib",children:[{module:"node.js"},{module:"react-ui-tree.js"},{module:"react-ui-tree.less"},{module:"tree.js"}]},{module:".gitiignore"},{module:"index.js"},{module:"LICENSE"},{module:"Makefile"},{module:"package.json"},{module:"README.md"},{module:"webpack.config.js"}]}}},renderNode:function(e){return i.createElement("span",{className:r("node",{"is-active":e===this.state.active}),onClick:this.onClickNode.bind(null,e)},e.module)},onClickNode:function(e){this.setState({active:e})},render:function(){return i.createElement("div",{className:"app"},i.createElement("div",{className:"tree"},i.createElement(o,{paddingLeft:20,tree:this.state.tree,onChange:this.handleChange,isNodeCollapsed:this.isNodeCollapsed,renderNode:this.renderNode})),i.createElement("div",{className:"inspector"},i.createElement("button",{onClick:this.updateTree},"update tree"),i.createElement("pre",null,JSON.stringify(this.state.tree,null,"  "))))},handleChange:function(e){this.setState({tree:e})},updateTree:function(){var e=this.state.tree;e.children.push({module:"test"}),this.setState({tree:e})}});i.render(i.createElement(s,null),document.getElementById("app"))},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var s=t[i];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=p[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(d(r.parts[o],t))}else{for(var s=[],o=0;o<r.parts.length;o++)s.push(d(r.parts[o],t));p[r.id]={id:r.id,refs:1,parts:s}}}}function i(e){for(var t=[],n={},r=0;r<e.length;r++){var i=e[r],o=i[0],s=i[1],d=i[2],a=i[3],l={css:s,media:d,sourceMap:a};n[o]?n[o].parts.push(l):t.push(n[o]={id:o,parts:[l]})}return t}function o(){var e=document.createElement("style"),t=f();return e.type="text/css",t.appendChild(e),e}function s(){var e=document.createElement("link"),t=f();return e.rel="stylesheet",t.appendChild(e),e}function d(e,t){var n,r,i;if(t.singleton){var d=m++;n=g||(g=o()),r=a.bind(null,n,d,!1),i=a.bind(null,n,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(),r=c.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=o(),r=l.bind(null,n),i=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function l(e,t){var n=t.css,r=t.media;t.sourceMap;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function c(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},u=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0;e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=u());var n=i(e);return r(n,t),function(e){for(var o=[],s=0;s<n.length;s++){var d=n[s],a=p[d.id];a.refs--,o.push(a)}if(e){var l=i(e);r(l,t)}for(var s=0;s<o.length;s++){var a=o[s];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete p[a.id]}}}};var v=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=React},function(e,t,n){var r;!function(){"use strict";function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e+=" "+n;else if(Array.isArray(n))e+=" "+i.apply(null,n);else if("object"===r)for(var o in n)n.hasOwnProperty(o)&&n[o]&&(e+=" "+o)}}return e.substr(1)}"undefined"!=typeof e&&e.exports?e.exports=i:(r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r)))}()},function(e,t,n){"use strict";var r=n(4),i=n(3),o=i.createClass({displayName:"Node",renderCollapse:function(){var e=this.props.index;if(e.children&&e.children.length){var t=e.node.collapsed;return i.createElement("span",{className:r("collapse",t?"caret-right":"caret-down"),onMouseDown:function(e){e.stopPropagation()},onClick:this.handleCollapse})}return null},renderChildren:function(){var e=this,t=this.props.index,n=this.props.tree,r=this.props.dragging;if(t.children&&t.children.length){var s={};return t.node.collapsed&&(s.display="none"),s.paddingLeft=this.props.paddingLeft+"px",i.createElement("div",{className:"children",style:s},t.children.map(function(t){var s=n.getIndex(t);return i.createElement(o,{tree:n,index:s,key:s.id,dragging:r,paddingLeft:e.props.paddingLeft,onCollapse:e.props.onCollapse,onDragStart:e.props.onDragStart})}))}return null},render:function(){var e=this.props.tree,t=this.props.index,n=this.props.dragging,o=t.node,s={};return i.createElement("div",{className:r("m-node",{placeholder:t.id===n}),style:s},i.createElement("div",{className:"inner",ref:"inner",onMouseDown:this.handleMouseDown},this.renderCollapse(),e.renderNode(o)),this.renderChildren())},handleCollapse:function(e){e.stopPropagation();var t=this.props.index.id;this.props.onCollapse&&this.props.onCollapse(t)},handleMouseDown:function(e){var t=this.props.index.id,n=this.refs.inner.getDOMNode();this.props.onDragStart&&this.props.onDragStart(t,n,e)}});e.exports=o},function(e,t,n){"use strict";var r=n(3),i=n(7),o=n(5);e.exports=r.createClass({displayName:"UITree",propTypes:{tree:r.PropTypes.object.isRequired,paddingLeft:r.PropTypes.number,renderNode:r.PropTypes.func.isRequired},getDefaultProps:function(){return{paddingLeft:20}},getInitialState:function(){return this.init(this.props)},componentWillReceiveProps:function(e){this._updated?this._updated=!1:this.setState(this.init(e))},init:function(e){var t=new i(e.tree);return t.isNodeCollapsed=e.isNodeCollapsed,t.renderNode=e.renderNode,t.changeNodeCollapsed=e.changeNodeCollapsed,t.updateNodesPosition(),{tree:t,dragging:{id:null,x:null,y:null,w:null,h:null}}},getDraggingDom:function(){var e=this.state.tree,t=this.state.dragging;if(t&&t.id){var n=e.getIndex(t.id),i={top:t.y,left:t.x,width:t.w};return r.createElement("div",{className:"m-draggable",style:i},r.createElement(o,{tree:e,index:n,paddingLeft:this.props.paddingLeft}))}return null},render:function(){var e=this.state.tree,t=this.state.dragging,n=this.getDraggingDom();return r.createElement("div",{className:"m-tree"},n,r.createElement(o,{tree:e,index:e.getIndex(1),key:1,paddingLeft:this.props.paddingLeft,onDragStart:this.dragStart,onCollapse:this.toggleCollapse,dragging:t&&t.id}))},dragStart:function(e,t,n){this.dragging={id:e,w:t.offsetWidth,h:t.offsetHeight,x:t.offsetLeft,y:t.offsetTop},this._startX=t.offsetLeft,this._startY=t.offsetTop,this._offsetX=n.clientX,this._offsetY=n.clientY,this._start=!0,window.addEventListener("mousemove",this.drag),window.addEventListener("mouseup",this.dragEnd)},drag:function(e){this._start&&(this.setState({dragging:this.dragging}),this._start=!1);var t=this.state.tree,n=this.state.dragging,r=this.props.paddingLeft,i=null,o=t.getIndex(n.id),s=o.node.collapsed,d=this._startX,a=this._startY,l=this._offsetX,c=this._offsetY,p={x:d+e.clientX-l,y:a+e.clientY-c};n.x=p.x,n.y=p.y;var h=n.x-r/2-(o.left-2)*r,u=n.y-n.h/2-(o.top-2)*n.h;if(0>h?o.parent&&!o.next&&(i=t.move(o.id,o.parent,"after")):h>r&&o.prev&&!t.getIndex(o.prev).node.collapsed&&(i=t.move(o.id,o.prev,"append")),i&&(o=i,i.node.collapsed=s,n.id=i.id),0>u){var f=t.getNodeByTop(o.top-1);i=t.move(o.id,f.id,"before")}else if(u>n.h)if(o.next){var g=t.getIndex(o.next);i=g.children&&g.children.length&&!g.node.collapsed?t.move(o.id,o.next,"prepend"):t.move(o.id,o.next,"after")}else{var g=t.getNodeByTop(o.top+o.height);g&&g.parent!==o.id&&(i=g.children&&g.children.length?t.move(o.id,g.id,"prepend"):t.move(o.id,g.id,"after"))}i&&(i.node.collapsed=s,n.id=i.id),this.setState({tree:t,dragging:n})},dragEnd:function(){this.setState({dragging:{id:null,x:null,y:null,w:null,h:null}}),this.change(this.state.tree),window.removeEventListener("mousemove",this.drag),window.removeEventListener("mouseup",this.dragEnd)},change:function(e){this._updated=!0,this.props.onChange&&this.props.onChange(e.obj)},toggleCollapse:function(e){var t=this.state.tree,n=t.getIndex(e),r=n.node;r.collapsed=!r.collapsed,t.updateNodesPosition(),this.setState({tree:t}),this.change(t)}})},function(e,t,n){"use strict";var r=n(8),i=r.prototype;i.updateNodesPosition=function(){function e(n,r,o,s){var d=1;return n.forEach(function(n){var r=i.getIndex(n);s?(r.top=null,r.left=null):(r.top=t++,r.left=o),r.children&&r.children.length?d+=e(r.children,r,o+1,s||r.node.collapsed):(r.height=1,d+=1)}),r.node.collapsed?r.height=1:r.height=d,r.height}var t=1,n=1,r=this.getIndex(1),i=this;r.top=t++,r.left=n++,e(r.children,r,n,r.node.collapsed)},i.move=function(e,t,n){if(e!==t&&1!==t){var r=this.remove(e),i=null;return"before"===n?i=this.insertBefore(r,t):"after"===n?i=this.insertAfter(r,t):"prepend"===n?i=this.prepend(r,t):"append"===n&&(i=this.append(r,t)),this.updateNodesPosition(),i}},i.getNodeByTop=function(e){var t=this.indexes;for(var n in t)if(t.hasOwnProperty(n)&&t[n].top===e)return t[n]},e.exports=r},function(e,t){"use strict";function n(e){this.cnt=1,this.obj=e||{children:[]},this.indexes={},this.build(this.obj)}var r=n.prototype;r.build=function(e){function t(e,r){var o=[];e.forEach(function(e,s){var d={};d.id=i.cnt,d.node=e,r&&(d.parent=r.id),n[i.cnt+""]=d,o.push(i.cnt),i.cnt++,e.children&&e.children.length&&t(e.children,d)}),r.children=o,o.forEach(function(e,t){var r=n[e+""];t>0&&(r.prev=o[t-1]),t<o.length-1&&(r.next=o[t+1])})}var n=this.indexes,r=this.cnt,i=this,o={id:r,node:e};return n[this.cnt+""]=o,this.cnt++,e.children&&e.children.length&&t(e.children,o),o},r.getIndex=function(e){var t=this.indexes[e+""];return t?t:void 0},r.removeIndex=function(e){function t(e){delete n.indexes[e.id+""],e.children&&e.children.length&&e.children.forEach(function(e){t(n.getIndex(e))})}var n=this;t(e)},r.get=function(e){var t=this.getIndex(e);return t&&t.node?t.node:null},r.remove=function(e){var t=this.getIndex(e),n=this.get(e),r=this.getIndex(t.parent),i=this.get(t.parent);return i.children.splice(i.children.indexOf(n),1),r.children.splice(r.children.indexOf(e),1),this.removeIndex(t),this.updateChildren(r.children),n},r.updateChildren=function(e){e.forEach(function(t,n){var r=this.getIndex(t);r.prev=r.next=null,n>0&&(r.prev=e[n-1]),n<e.length-1&&(r.next=e[n+1])}.bind(this))},r.insert=function(e,t,n){var r=this.getIndex(t),i=this.get(t),o=this.build(e);return o.parent=t,i.children=i.children||[],r.children=r.children||[],i.children.splice(n,0,e),r.children.splice(n,0,o.id),this.updateChildren(r.children),r.parent&&this.updateChildren(this.getIndex(r.parent).children),o},r.insertBefore=function(e,t){var n=this.getIndex(t),r=n.parent,i=this.getIndex(r).children.indexOf(t);return this.insert(e,r,i)},r.insertAfter=function(e,t){var n=this.getIndex(t),r=n.parent,i=this.getIndex(r).children.indexOf(t);return this.insert(e,r,i+1)},r.prepend=function(e,t){return this.insert(e,t,0)},r.append=function(e,t){var n=this.getIndex(t);return n.children=n.children||[],this.insert(e,t,n.children.length)},e.exports=n},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}body{margin:0;padding:0;font-size:100%}.inspector{margin-left:400px}.inspector pre{font-family:Menlo;font-size:13px}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".tree{position:fixed;top:0;left:0;bottom:0;width:300px;overflow-x:hidden;overflow-y:auto;background-color:#21252b}.m-node.placeholder{border:1px dashed #1385e5}.m-node .inner{color:#9da5b4;font-size:12px;font-family:Menlo}.m-node .node{display:inline-block;width:100%;padding:4px 5px}.m-node .node.is-active{background-color:#31363f}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".f-no-select,.m-tree{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-khtml-user-select:none}.f-no-select,.m-draggable,.m-tree{-khtml-user-select:none}.f-no-select{user-select:none}.m-tree{position:relative;overflow:hidden;user-select:none}.m-draggable{position:absolute;opacity:.8;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.m-node.placeholder>*{visibility:hidden}.m-node.placeholder{border:1px dashed #ccc}.m-node .inner{position:relative;cursor:pointer;padding-left:10px}.m-node .collapse{position:absolute;left:0;cursor:pointer}.m-node .caret-right:before{content:'\\25B8'}.m-node .caret-down:before{content:'\\25BE'}",""])},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.id,r,""]]);n(2)(r,{});r.locals&&(e.exports=r.locals)}]);
//# sourceMappingURL=bundle.js.map