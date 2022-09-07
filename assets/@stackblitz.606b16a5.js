function c(t){return t&&t.origin?t.origin:"https://stackblitz.com"}var S="300";function w(){return Math.random().toString(36).substring(7)}function p(t){var e=[];return t&&(t.forceEmbedLayout&&e.push("embed=1"),t.clickToLoad&&e.push("ctl=1"),typeof t.openFile=="string"&&e.push("file="+t.openFile),Array.isArray(t.openFile)&&t.openFile.forEach(function(n){typeof n=="string"&&e.push("file="+n)}),t.view!=="preview"&&t.view!=="editor"||e.push("view="+t.view),t.theme!=="light"&&t.theme!=="dark"||e.push("theme="+t.theme),t.hideExplorer&&e.push("hideExplorer=1"),t.hideNavigation&&e.push("hideNavigation=1"),t.hideDevTools&&e.push("hidedevtools=1"),typeof t.devToolsHeight=="number"&&t.devToolsHeight>=0&&t.devToolsHeight<=100&&e.push("devtoolsheight="+Math.round(t.devToolsHeight))),e.length?"?"+e.join("&"):""}function h(t,e,n){if(t.parentNode===null)throw new Error("Invalid Element");e.id=t.id,P(e,n),t.parentNode.replaceChild(e,t)}function f(t){if(typeof t=="string"){var e=document.getElementById(t);if(e!==null)return e}else if(t instanceof HTMLElement)return t;throw new Error("Invalid Element")}function v(t){return t&&t.newWindow===!1?"_self":"_blank"}function P(t,e){e&&(e.hasOwnProperty("height")&&(t.height=""+e.height),e.hasOwnProperty("width")&&(t.width=""+e.width)),t.height||(t.height=S),t.width||t.setAttribute("style","width:100%;")}var b=function(t){var e=this;this.pending={},this.port=t,this.port.onmessage=function(n){if(n.data.payload.__reqid){var i=n.data.payload.__reqid,o=n.data.payload.__success;if(e.pending[i]){if(delete n.data.payload.__reqid,delete n.data.payload.__success,o){var r=Object.keys(n.data.payload).length===0&&n.data.payload.constructor===Object?null:n.data.payload;e.pending[i].resolve(r)}else{var s=n.data.payload.error?n.data.type+": "+n.data.payload.error:n.data.type;e.pending[i].reject(s)}delete e.pending[i]}}}};b.prototype.request=function(t){var e=this,n=w();return new Promise(function(i,o){e.pending[n]={resolve:i,reject:o},t.payload.__reqid=n,e.port.postMessage(t)})};var u=function(t,e){var n=this;this.rdc=new b(t),this.preview={},Object.defineProperty(this.preview,"origin",{value:e.previewOrigin,writable:!1}),this.editor={openFile:function(i){return n.rdc.request({type:"SDK_OPEN_FILE",payload:{path:i}})}}};u.prototype.applyFsDiff=function(t){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:t})},u.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},u.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var l=[],T=function(t){var e=this;this.id=w(),this.element=t,this.pending=new Promise(function(n,i){var o=function(a){a.data.action&&a.data.action==="SDK_INIT_SUCCESS"&&a.data.id===e.id&&(e.vm=new u(a.ports[0],a.data.payload),n(e.vm),s())},r=function(){e.element.contentWindow&&e.element.contentWindow.postMessage({action:"SDK_INIT",id:e.id},"*")};function s(){window.clearInterval(E),window.removeEventListener("message",o)}window.addEventListener("message",o),r();var y=0,E=window.setInterval(function(){if(e.vm)s();else{if(y>=20)return s(),i("Timeout: Unable to establish a connection with the StackBlitz VM"),void l.forEach(function(a,j){a.id===e.id&&l.splice(j,1)});y++,r()}},500)}),l.push(this)},I=function(t){var e=t instanceof Element?"element":"id",n=l.find(function(i){return i[e]===t});return n||null},g=["angular-cli","create-react-app","javascript","node","polymer","html","typescript","vue"];function d(t,e){var n=document.createElement("input");return n.type="hidden",n.name=t,n.value=e,n}function _(t){g.indexOf(t.template)===-1&&console.warn("Unsupported project template, must be one of: "+g.join(", "));var e=document.createElement("form");return e.method="POST",e.setAttribute("style","display:none!important;"),e.appendChild(d("project[title]",t.title)),e.appendChild(d("project[description]",t.description)),e.appendChild(d("project[template]",t.template)),t.dependencies&&e.appendChild(d("project[dependencies]",JSON.stringify(t.dependencies))),t.settings&&e.appendChild(d("project[settings]",JSON.stringify(t.settings))),Object.keys(t.files).forEach(function(n){e.appendChild(d("project[files]["+n+"]",t.files[n]))}),e}function O(t,e){var n=_(t);return n.action=c(e)+"/run"+p(e),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}function D(t,e){var n=_(t);n.action=c(e)+"/run"+p(e),n.target=v(e),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}var m={connect:function(t){if(!t||!t.contentWindow)return Promise.reject("Provided element is not an iframe.");var e=I(t);return e?e.pending:new T(t).pending},openGithubProject:function(t,e){window.open(c(e)+"/github/"+t+p(e),v(e))},openProject:function(t,e){D(t,e)},openProjectId:function(t,e){window.open(c(e)+"/edit/"+t+p(e),v(e))},embedGithubProject:function(t,e,n){var i=f(t),o=document.createElement("iframe");return o.src=c(n)+"/github/"+e+p(n),h(i,o,n),m.connect(o)},embedProject:function(t,e,n){var i=f(t),o=O(e,n),r=document.createElement("iframe");return h(i,r,n),r.contentDocument&&r.contentDocument.write(o),m.connect(r)},embedProjectId:function(t,e,n){var i=f(t),o=document.createElement("iframe");return o.src=c(n)+"/edit/"+e+p(n),h(i,o,n),m.connect(o)}};export{m as g};