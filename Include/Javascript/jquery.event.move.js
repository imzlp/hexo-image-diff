(function(n){typeof define=="function"&&define.amd?define([],n):typeof module!="undefined"&&module!==null&&module.exports?module.exports=n:n()})(function(){function st(n){return new CustomEvent(n,ot)}function a(n){return n[l]||(n[l]={})}function n(n,t,i,r){function s(n){i(n,r)}t=t.split(c);for(var f=a(n),e=t.length,o,u;e--;)u=t[e],o=f[u]||(f[u]=[]),o.push([i,s]),n.addEventListener(u,s)}function t(n,t,i){t=t.split(c);var e=a(n),o=t.length,f,r,u;if(e)while(o--)if(f=t[o],r=e[f],r)for(u=r.length;u--;)r[u][0]===i&&(n.removeEventListener(f,r[u][1]),r.splice(u,1))}function u(n,t,i){var r=st(t);i&&ft(r,i);n.dispatchEvent(r)}function ht(n){function u(){t?(r(),et(u),i=!0,t=!1):i=!1}var r=n,t=!1,i=!1;this.kick=function(){t=!0;i||u()};this.end=function(n){var u=r;n&&(i?(r=t?function(){u();n()}:n,t=!0):n())}}function ct(){}function v(n){n.preventDefault()}function lt(n){return!!h[n.target.tagName.toLowerCase()]}function at(n){return n.which===1&&!n.ctrlKey&&!n.altKey}function f(n,t){var i,r;if(n.identifiedTouch)return n.identifiedTouch(t);for(i=-1,r=n.length;++i<r;)if(n[i].identifier===t)return n[i]}function y(n,t){var i=f(n.changedTouches,t.identifier);if(i)return i.pageX===t.pageX&&i.pageY===t.pageY?void 0:i}function vt(t){at(t)&&(lt(t)||(n(document,i.move,p,t),n(document,i.cancel,w,t)))}function p(n,t){d(n,t,n,b)}function w(){b()}function b(){t(document,i.move,p);t(document,i.cancel,w)}function yt(t){if(!h[t.target.tagName.toLowerCase()]){var i=t.changedTouches[0],u={target:i.target,pageX:i.pageX,pageY:i.pageY,identifier:i.identifier,touchmove:function(n,t){pt(n,t)},touchend:function(n,t){wt(n,t)}};n(document,r.move,u.touchmove,u);n(document,r.cancel,u.touchend,u)}}function pt(n,t){var i=y(n,t);i&&d(n,t,i,k)}function wt(n,t){var i=f(n.changedTouches,t.identifier);i&&k(t)}function k(n){t(document,r.move,n.touchmove);t(document,r.cancel,n.touchend)}function d(n,t,i,r){var u=i.pageX-t.pageX,f=i.pageY-t.pageY;u*u+f*f<s*s||bt(n,t,i,u,f,r)}function bt(n,t,i,r,f,e){var o=n.targetTouches,s=n.timeStamp-t.timeStamp,h={altKey:n.altKey,ctrlKey:n.ctrlKey,shiftKey:n.shiftKey,startX:t.pageX,startY:t.pageY,distX:r,distY:f,deltaX:r,deltaY:f,pageX:i.pageX,pageY:i.pageY,velocityX:r/s,velocityY:f/s,identifier:t.identifier,targetTouches:o,finger:o?o.length:1,enableMove:function(){this.moveEnabled=!0;this.enableMove=ct;n.preventDefault()}};u(t.target,"movestart",h);e(t)}function g(n,t){var i=t.timer;t.touch=n;t.timeStamp=n.timeStamp;i.kick()}function nt(n,i){var r=i.target,u=i.event,f=i.timer;kt();tt(r,u,f,function(){setTimeout(function(){t(r,"click",v)},0)})}function kt(){t(document,i.move,g);t(document,i.end,nt)}function dt(n,t){var i=t.event,u=t.timer,r=y(n,i);r&&(n.preventDefault(),i.targetTouches=n.targetTouches,t.touch=r,t.timeStamp=n.timeStamp,u.kick())}function gt(n,t){var r=t.target,i=t.event,u=t.timer,e=f(n.changedTouches,i.identifier);e&&(ni(t),tt(r,i,u))}function ni(n){t(document,r.move,n.activeTouchmove);t(document,r.end,n.activeTouchend)}function ti(n,t,i){var r=i-n.timeStamp;n.distX=t.pageX-n.startX;n.distY=t.pageY-n.startY;n.deltaX=t.pageX-n.pageX;n.deltaY=t.pageY-n.pageY;n.velocityX=.3*n.velocityX+.7*n.deltaX/r;n.velocityY=.3*n.velocityY+.7*n.deltaY/r;n.pageX=t.pageX;n.pageY=t.pageY}function tt(n,t,i,r){i.end(function(){return u(n,"moveend",t),r&&r()})}function ii(t){function o(){ti(e,f.touch,f.timeStamp);u(f.target,"move",e)}if(!t.defaultPrevented&&t.moveEnabled){var e={startX:t.startX,startY:t.startY,pageX:t.pageX,pageY:t.pageY,distX:t.distX,distY:t.distY,deltaX:t.deltaX,deltaY:t.deltaY,velocityX:t.velocityX,velocityY:t.velocityY,identifier:t.identifier,targetTouches:t.targetTouches,finger:t.finger},f={target:t.target,event:e,timer:new ht(o),touch:undefined,timeStamp:t.timeStamp};t.identifier===undefined?(n(t.target,"click",v),n(document,i.move,g,f),n(document,i.end,nt,f)):(f.activeTouchmove=function(n,t){dt(n,t)},f.activeTouchend=function(n,t){gt(n,t)},n(document,r.move,f.activeTouchmove,f),n(document,r.end,f.activeTouchend,f))}}function it(n){n.enableMove()}function rt(n){n.enableMove()}function ut(n){n.enableMove()}function o(n){var t=n.handler;n.handler=function(n){for(var r=e.length,i;r--;)i=e[r],n[i]=n.originalEvent[i];t.apply(this,arguments)}}var ft=Object.assign||window.jQuery&&jQuery.extend,s=8,et=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return window.setTimeout(function(){n()},25)}}(),h={textarea:!0,input:!0,select:!0,button:!0},i={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},r={move:"touchmove",cancel:"touchend",end:"touchend"},c=/\s+/,ot={bubbles:!0,cancelable:!0},l=Symbol("events"),e;(n(document,"mousedown",vt),n(document,"touchstart",yt),n(document,"movestart",ii),window.jQuery)&&(e="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" "),jQuery.event.special.movestart={setup:function(){return n(this,"movestart",it),!1},teardown:function(){return t(this,"movestart",it),!1},add:o},jQuery.event.special.move={setup:function(){return n(this,"movestart",rt),!1},teardown:function(){return t(this,"movestart",rt),!1},add:o},jQuery.event.special.moveend={setup:function(){return n(this,"movestart",ut),!1},teardown:function(){return t(this,"movestart",ut),!1},add:o})})