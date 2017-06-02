define("magix",["$"],function(n){var t,e=n("$"),r=function(){},i=function(t,e){if(t)if(window.seajs)seajs.use(t,e);else{var r=[];u(t)||(t=[t]);for(var i=0;i<t.length;i++)r.push(n(t[i]));e&&e.apply(p,r)}else e()},o=function(){},a=function(n,t,e,r,i){return o[g]=t[g],i=new o,A(i,e),A(n,r),i.constructor=n,n[g]=i,n},f=e.isPlainObject,u=e.isArray,c=function(n,t){e(n).html(t),d.triggerHandler({type:"htmlchange",target:n})},s=0,$=[],h=$.slice,p=null,v=window,l=document,d=e(l),m=JSON.stringify,g="prototype",w=/[#?].*$/,y=/([^=&?\/#]+)=?([^&#?]*)/g,b=/(?!^)=|&/,x=function(n){return(n||"mx_")+s++},k=x(),V={rootId:x(),defaultView:k,error:function(n){throw n}},q=V.hasOwnProperty,I=function(n){return"object"==typeof n?n:l.getElementById(n)},j=function(n,t,e){if(n=I(n),t=I(t),n&&t&&!(e=n==t))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(n){}return e},A=Object.assign||function(n,t,e){for(e in t)n[e]=t[e];return n},T=function(n,t){t&&!T[n]&&(T[n]=1,e("head").append("<style>"+t+"</style>"))},S=function(n,t,e,r,i,o){for(t=t||$,u(n)||(n=[n]),u(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(n){V.error(n)}return i},U=function(n,t){return n&&q.call(n,t)},H=function(n,t){return t.f-n.f||t.t-n.t},E=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};A(E[g],{get:function(n){var t=this,e=t.c,r=e[""+n];return r&&(r.f++,r.t=s++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=""+n,o=r[i],a=e.b;if(!o){if(r.length>=e.x)for(r.sort(H);a--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=s++},del:function(n){n=""+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v="",delete t[n],r&&S(r,e.o))},has:function(n){return U(this.c,""+n)}});var O,C=new E,M=function(n,t,e){try{e=decodeURIComponent(e)}catch(n){}O[t]=e},P=function(n){var t,e=C.get(n);return e||(O={},t=n.replace(w,""),n==t&&b.test(t)&&(t=""),n.replace(t,"").replace(y,M),C.set(n,e={a:t,b:O})),{path:e.a,params:A({},e.b)}},Z=function(n,t,e){var r,i,o,a=[];for(i in t)r=t[i]+"",(!e||r||U(e,i))&&(r=encodeURIComponent(r),a.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+a.join("&")),n},L=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;e<i;e++)r=n[e],o[t&&r?r[t]:r]=t?r:1+(0|o[r]);return o},R=Object.keys||function(n,t,e){t=[];for(e in n)U(n,e)&&t.push(e);return t},F={config:function(n,t){return t=V,n&&(t=f(n)?A(t,n):t[n]),t},boot:function(n){A(V,n),i(V.ini,function(t){A(V,t),A(V,n),i(V.exts,function(){hn.on("changed",Vn),Y()})})},toMap:L,toTry:S,toUrl:Z,parseUrl:P,mix:A,has:U,keys:R,inside:j,node:I,applyStyle:T,guid:x,Cache:E},N={fire:function(n,t,e,r){var i,o,a,f,u=""+n,c=this,s=c[u];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)a=r?i:o-i,f=s[a],f.f?(f.x=1,S(f.f,t,c),f.x=""):f.x||(s.splice(a,1),o--);s=c["on"+n],s&&S(s,t,c),e&&c.off(n)},on:function(n,t){var e=this,r=""+n;(e[r]||(e[r]=[])).push({f:t})},off:function(n,t){var e,r,i=""+n,o=this,a=o[i];if(t){if(a)for(e=a.length;e--;)if(r=a[e],r.f==t){r.f="";break}}else delete o[i],delete o["on"+n]}};F.Event=N;var B,D,z,J,K,Q,_,G=e.isFunction,W=function(n,t){n="#!"+n,t?en.replace(n):en.hash=n},X=function(n,t,e,r,i){(n=Z(n,t,i))!=e.srcHash&&W(n,r)},Y=function(){var n,t,r=sn().srcHash;e(v).on("hashchange",function(e,i,o){t||(i=sn(),(n=i.srcHash)!=r&&(o=function(){e.p=1,t="",W(r=n),$n()},e={reject:function(){e.p=1,t="",W(r)},resolve:o,prevent:function(){t=1}},hn.fire("change",e),t||e.p||o()))}),v.onbeforeunload=function(n){n=n||v.event;var t={};if(hn.fire("pageunload",t),t.msg)return n&&(n.returnValue=t.msg),t.msg},$n()},nn=new E,tn=new E,en=v.location,rn={query:{},params:{},href:""},on=/(?:^.*\/\/[^\/]+|#.*$)/gi,an=/^[^#]*#?!?/,fn=function(n,t){return t=this.params,t[n]||""},un=function(n,t){if(z||(z=V.routes||{},J=V.unmatchView,Q=V.defaultView,_=V.defaultPath||"/",(K=G(z))||z[_]||(z[_]=Q)),!n.view){var e=n.hash.path||void 0||_;t=K?z.call(V,e,n):z[e]||J||Q,n.path=e,n.view=t}},cn=function(n,t){var e=n.href,r=t.href,i=e+""+r,o=tn.get(i);if(!o){var a,f,u,c;o={force:!e},o.params=c={};var s,$,h=n.params,p=t.params,v=["path","view"].concat(R(h),R(p));for(s=v.length-1;s>=0;s--)$=v[s],1==s&&(h=n,p=t,c=o),f=h[$],u=p[$],f!=u&&(c[$]={from:f,to:u},a=1);tn.set(i,o={a:a,b:o})}return o},sn=function(n){n=n||en.href;var t,e,r,i,o,a=nn.get(n);return a||(t=n.replace(on,""),e=n.replace(an,""),r=P(t),i=P(e),o=A({},r.params),A(o,i.params),a={get:fn,href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:o},un(a),nn.set(n,a)),a},$n=function(){var n=sn(),t=cn(rn,rn=n);return t.a&&(D=rn.params,hn.fire("changed",B=t.b)),B},hn=A({parse:sn,diff:$n,to:function(n,t,e){!t&&f(n)&&(t=n,n="");var r=P(n),i=r.params,o=r.path,a=rn.path,u=rn.query.params;if(A(i,t),o)for(a in u)U(i,a)||(i[a]="");else D&&(o=a,i=A(A({},D),i));X(o,D=i,rn,e,u)}},N);F.Router=hn;var pn,vn,ln,dn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,(e=wn[n.pId])&&!U(e.$r,t)&&(e.$r[t]=1,e.$rc++,dn(e)))},mn=function(n,t,e,r){!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,(r=wn[n.pId])&&U(r.$r,e)&&(r.$rc--,delete r.$r[e],mn(r,t)))},gn=function(n,e){return pn||(t=l.body,n=V.rootId,e=I(n),e||(t.id=n),pn=new qn(n)),pn},wn={},yn=function(n,t){U(wn,n)||(wn[n]=t,qn.fire("add",{vframe:t}),(n=I(n))&&(n.vframe=t))},bn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},xn=function(n,t,e){(e=wn[n])&&(delete wn[n],qn.fire("remove",{vframe:e,fcc:t}),(n=I(n))&&(n.vframe=p))},kn=function(n,t){if(n&&n.$g!=ln&&(t=n.$v)&&t.$s>0){st(t)&&t.render();for(var e=n.children(),r=e.length,i=0;i<r;)kn(wn[e[i++]])}},Vn=function(n){var t,e=gn();(t=n.view)?e.mountView(t.to):(ln=s++,kn(e))},qn=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,yn(n,e)};A(qn,A({all:function(){return wn},get:function(n){return wn[n]}},N)),A(A(qn[g],N),{mountView:function(n,t){var e,r,o,a=this,f=a.id,u=I(f);if(!a.$a&&u&&(a.$a=1,a.$t=u.innerHTML),a.unmountView(),a.$d=0,u&&n){a.path=n,e=P(n),o=e.path,r=++a.$s;var c,s,$=e.params,h=wn[a.pId];if(h=h&&h.$v,(h=h&&h.updater)&&n.indexOf("")>0)for(c in $)s=$[c],""==s.charAt(0)&&($[c]=h.get(s));A($,t),i(o,function(n){if(r==a.$s){if(!n)return V.error(Error("id:"+f+" cannot load:"+o));ut(n),o=new n({owner:a,id:f},$),a.$v=o,a.$g=ln,ot(o),o.init($),o.render(),o.$t||o.$p||o.endUpdate()}})}},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(vn||(t=1,vn={id:e.id}),e.$d=1,e.unmountZone(),mn(e,vn),e.$v=0,r.$s>0&&(r.$s=0,r.fire("destroy",0,1,1),et(r,1),ot(r,1)),r.$s--,r.owner=p,n=I(e.id),n&&e.$a&&c(n,e.$t),t&&(vn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return mn(i,{id:n}),r=wn[n],r||(U(i.$c,n)||(i.$cl="",i.$cc++),i.$c[n]=n,r=new qn(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var r,i,o,a=this,f=[];n=n||a.id;var u=e("#"+n+" [mx-view]");for(a.$h=1,r=0;r<u.length;r++)i=u[r],o=i.id||(i.id=x()),i.$m||(i.$m=1,f.push([o,i.getAttribute("mx-view")]));for(;f.length;)i=f.shift(),o=i[0],f[o]?V.error(Error("vf.id duplicate:"+o+" at "+a.path)):a.mountVframe(f[o]=o,i[1],t);a.$h=0,dn(a)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,(e=wn[n])&&(r=e.$cr,i=e.pId,e.unmountView(),xn(n,r),e.id=e.pId="",(e=wn[i])&&U(e.$c,n)&&(delete e.$c[n],e.$cl="",e.$cc--,t||dn(e)))},unmountZone:function(n){var t,e=this,r=e.$c;for(t in r)(!n||t!=n&&j(t,n))&&e.unmountVframe(t,1)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=wn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=R(n.$c))},invoke:function(n,t){var e,r,i,o,a,f=this,u=f.$il;return(r=f.$v)&&r.$p?e=(i=r[n])&&S(i,t,r):(o=u[a=""+n],o&&(o.r=t==o.a),o={n:n,a:t,k:a},u.push(o),u[a]=o),e}}),F.Vframe=qn;var In=e.find||e.zepto,jn=In.matchesSelector||In.matches,An=function(n,t){t=n.data,n.eventTarget=t.e,S(t.f,n,t.v)},Tn=function(n,t,r,i,o){o&&(t+="."+o.i),i?e(n).off(t,r):e(n).on(t,o,r)},Sn=new E(30,10),Un=/(?:([\w\-]+)\u001e)?([^\(]+)\(([\s\S]*)?\)/,Hn={},En={},On=function(n,t){var e,r,i,o,a,f,u,c=[],s=n,h=n.getAttribute("mx-"+t),p=[];if(h&&(a=Sn.get(h),a||(a=h.match(Un)||$,a={v:a[1],n:a[2],i:a[3]},a.p=a.i&&S(Function("return "+a.i)),Sn.set(h,a)),c.push(a={r:h,v:a.v,p:a.p,n:a.n})),a&&!a.v||En[t]){if(n.$v)u=n.$v;else for(p.push(s);s=s.parentNode;){if(wn[r=s.id]||(r=s.$v)){u=r;break}p.push(s)}if(u){for(;h=p.pop();)h.$v=u;do{if(e=wn[u],f=e.$v){i=f.$so,o=i[t];for(r in o)jn(n,r)&&c.push({r:r,v:u,n:r});if(f.$t){a&&!a.v&&(a.v=u);break}}}while(u=e.pId)}}return c},Cn=function(n){for(var e,r,i,o,a,f,u,c=n.target,s=n.type,$=[];c!=t&&1==c.nodeType;){if(r=On(c,s),r.length)for($=[];e=r.pop();)e.v||V.error(Error("bad "+s+":"+e.r)),o=wn[e.v],a=o&&o.$v,f=e.n+""+s,(u=a[f])&&(n.eventTarget=c,n.params=e.p||{},S(u,n,a));if((i=c.$)&&i[s]||n.isPropagationStopped())break;$.push(c),c=c.parentNode||t}for(;c=$.pop();)i=c.$||(c.$={}),i[s]=1},Mn=function(n,e,r){var i=0|Hn[n],o=r?-1:1;(!i||r&&1==i)&&Tn(t,n,Cn,r),Hn[n]=i+o,e&&(En[n]=(0|En[n])+o)},Pn=/\\|'/g,Zn=/\r|\n/g,Ln=/<%([@=!])?([\s\S]+?)%>|$/g,Rn=function(n){var t=0,e="$p+='";return n.replace(Ln,function(r,i,o,a){return e+=n.slice(t,a).replace(Pn,"\\$&").replace(Zn,"\\n"),t=a+r.length,"@"==i?e+="'\n$s=$i();\n$p+=$s;\n$$[$s]="+o+";\n$p+='":"="==i?e+="'+\n(($t=("+o+"))==null?'':$e($t))+\n'":"!"==i?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":o&&(e+="';\n"+o+"\n$p+='"),r}),e+="';\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){return (''+v).replace($er,$ef)},$i=function(){return ''+$g++},$s,$eum={'!':'%21','\\'':'%27','(':'%28',')':'%29','*':'%2A'},$euf=function(m){return $eum[m]},$eur=/[!')(*]/g,$eu=function(v){return encodeURIComponent(v).replace($eur,$euf)};\n"+e+"return $p;\n",Function("$g","$$",e)},Fn=new E,Nn=function(n,t){var e=Fn.get(n);return e||(e=Rn(n),Fn.set(n,e)),e(1,t)},Bn=/\d+\u001d/g,Dn=/([\w\-:]+)(?:=(["'])([\s\S]*?)\2)?/g,zn={amp:"&",lt:"<",gt:">",quot:'"',"#x27":"'","#x60":"`"},Jn=/&([^;]+?);/g,Kn=function(n,t){return zn[t]||n},Qn=function(n){return!n||"object"!=typeof n},_n=function(n,t,e,r,i,o,a){var f,u,c,s=n.id||(n.id=x());if(i){var $=nt(Nn(e.attr,r),a),h={};$.replace(Dn,function(n,t,e,r){h[t]=r});for(var p,v,l,d,m,g=e.attrs.length-1;g>=0;g--)p=e.attrs[g],v=p.n,m=p.f,p.v?(f=1,u=h[v]):(l=p.p?n[m||v]:n.getAttribute(v),d=p.b?U(h,v):h[v]||"",l!=d&&(p.p?(p.q&&(d=d.replace(Jn,Kn)),n[m||v]=d):d?n.setAttribute(v,d):n.removeAttribute(v)))}f&&(c=wn[s])&&c[u?"unmountView":"unmountVframe"](),o&&t.setHTML(s,Nn(e.tmpl,r)),f&&u&&t.owner.mountVframe(s,u)},Gn=function(n,t,r){var i=wn[n.$i],o=i&&i.$v;if(o){var a=o.tmpl,f=a.html,u=a.subs,c=o.id;if(n.$rd&&t)for(var s,$,h,p,v,l,d,m,g=u.length-1;g>=0;g--){if(h=0,p=0,$=u[g],v=1,d=$.mask,s=$.pKeys)for(l=s.length;--l>=0;)if(U(t,s[l])){v=0;break}if(v){for(s=$.keys,l=s.length,v=0;--l>=0;)if(U(t,s[l])){if(v=1,!d||h&&p){h=$.tmpl,p=$.attr;break}m=d.charAt(l),h=h||1&m,p=p||2&m}if(v){var w=e(nt($.path,c));for(l=0;l<w.length;)_n(w[l++],o,$,r,p,h,c)}}}else{var y,b,x=function(n){return y[n].tmpl};if(u){if(!u.$)for(u.$=y={},b=u.length;b>0;){var k=u[--b];k.s&&(y[k.s]=k,k.tmpl=k.tmpl.replace(Bn,x),delete k.s)}y=u.$}n.$rd=1;var V=f.replace(Bn,x);o.setHTML(n.$t,Nn(V,r))}}},Wn=function(n){var t=this;t.$i=n,t.$t=n,t.$data={},t.$keys={}};A(Wn.prototype,{to:function(n,t){return t=this,t.$t=n,t},get:function(n){var t=this.$data;return n&&(t=t[n]),t},gain:function(n){for(var t,e=this.$data,r=n.split(".");e&&r.length;)t=r.shift(),e=e[t];return e},set:function(n){var t,e,r=this,i=r.$data,o=r.$keys;for(var a in n)e=n[a],t=i[a],Qn(e)&&t==e||(o[a]=1),i[a]=e;return r},digest:function(n){var t=this;n&&t.set(n),n=t.$data;var e=t.$keys;return Gn(t,e,n),t.$keys={},t},snapshot:function(){var n=this;return n.$ss=m(n.$data),n},altered:function(){var n=this;if(n.$ss)return n.$ss!=m(n.$data)}});var Xn=/^(\$?)([^<]+?)<([^>]+)>$/,Yn=/\u001f/g,nt=function(n,t){return(n+"").replace(Yn,t||this.id)},tt=function(n,t,e){return n.$l?e=n:(e=function(n){S(e.$l,n,this)},e.$l=[n],e.$m=1),e.$l=e.$l.concat(t.$l||t),e},et=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&rt(i,e,1)},rt=function(n,t,e,r){var i,o,a=n[t];return a&&a!=r&&(o=a.e,i=o.destroy,i&&e&&S(i,$,o),delete n[t]),o},it=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),et(e),S(t,h.call(arguments),e))}},ot=function(n,t){var e,r,i=n.$eo,o=n.$so;n.id;for(e in i)Mn(e,o[e],t);for(i=n.$el,e=i.length;e--;)r=i[e],Tn(r.e,r.n,An,t,{i:n.id,v:n,f:r.f,e:r.e})},at=[],ft={win:v,doc:l},ut=function(n){if(!n[""]){n[""]=1;var t,e,r,i,o,a,f,u,c,s=n[g],$={},h=[],p={};for(f in s)if(t=s[f],e=f.match(Xn))for(a=e[1],r=e[2],i=e[3].split(",");u=i.pop();){if(o=ft[r],c=1,a){if(o){h.push({f:t,e:o,n:u});continue}c=2,o=p[u],o||(o=p[u]={}),o[r]=1}$[u]=$[u]|c,u=r+""+u,o=s[u],o?o.$m&&(t.$m?s[u]=tt(o,t):U(s,f)&&(s[u]=t)):s[u]=t}it(s),s.$eo=$,s.$el=h,s.$so=p,s.$t=!!s.tmpl}},ct=function(n,t,e){for(var r=0;r<n.length&&!(e=U(t,n[r]));r++);return e},st=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=B.path),t||(t=ct(e.k,B.params))),t},$t=function(n,t){t=this,A(t,n),t.$l={k:[]},t.$r={},t.$s=1,t.updater=new Wn(t.id),S(at,n,t)},ht=$t[g];A($t,{merge:function(n,t){t=n&&n.ctor,t&&at.push(t),A(ht,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=[];r&&i.push(r);var o=function(n,t){e.call(this,n,t),S(i,t,this)},f=n.mixins;if(f){for(var u,c,s,$,h=f.length,p=0,v={};p<h;){u=f[p++];for(c in u)s=u[c],$=v[c],"ctor"==c?i.push(s):Xn.test(c)?($?s=tt($,s):s.$m=1,v[c]=s):$?V.error(Error("mixins duplicate:"+c)):v[c]=s}n=A(v,n)}return o.extend=e.extend,a(o,e,n,t)}}),A(A(ht,N),{render:r,init:r,wrapEvent:nt,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&(t.owner.unmountZone(n),t.fire("prerender",{id:n}))},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(n=n||t.id,t.fire("rendered",{id:n}),r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||setTimeout(t.wrapAsync(function(){bn(e)}),0))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,f(n)&&(t=n.path,n=n.params),e.p=t,n&&(e.k=r.concat((n+"").split(",")))},capture:function(n,t,e,r,i){return r=this.$r,t?(rt(r,n,1,t),i={e:t,x:e},r[n]=i):(i=r[n],t=i&&i.e||t),t},release:function(n,t){return rt(this.$r,n,t)},leaveTip:function(n,t){var e=this,r=function(i){var o="a",a="b";"change"!=i.type&&(o="b",a="a"),r[o]?(i.prevent(),i.reject()):t()?(i.prevent(),r[a]=1,e.leaveConfirm(n,function(){r[a]=0,i.resolve()},function(){r[a]=0,i.reject()})):i.resolve()},i=function(e){t()&&(e.msg=n)};hn.on("change",r),hn.on("pageunload",i),e.on("unload",r),e.on("destroy",function(){hn.off("change",r),hn.off("pageunload",i)})},share:function(n,t){var e=this;e.$sd||(e.$sd={}),e.$sd[n]=t},getShared:function(n){var t=this,e=t.$sd;if(e&&U(e,n))return e[n];var r=t.owner.parent();return r?r.invoke("getShared",n):void 0},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=I(n))&&c(e,nt(t,r.id)),r.endUpdate(n)}}),F.View=$t;var pt=e.type,vt=e.proxy,lt=e.now||Date.now,dt=function(){this.id=x("b"),this.$={}};A(dt[g],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,a=r.$,f=a;if(i){for(var c,s=u(n)?h.call(n):(n+"").split(".");(c=s.shift())&&f;)f=f[c];c&&(f=e)}var $;return o&&($=pt(t))!=pt(f)&&(V.error(Error("type neq:"+n+" is not a(n) "+$)),f=t),f},set:function(n,t){var e,r=this;f(n)||(e={},e[n]=t,n=e),A(r.$,n)}});var mt=function(n,t,e){(e=this[n])&&(delete this[n],S(e,t,e.e))},gt=function(n,t,e,r,i,o){var a=[],f=p,u=0;return function(c,s){var $,h=this;u++;var v=h.$m,l=v.k;a[c+1]=h;var d={bag:h,error:s};if(s)f=s,t.fire("fail",d),$=1;else if(!o.has(l)){l&&o.set(l,h),v.t=lt();var m=v.a;m&&S(m,h,h),v.x&&t.clear(v.x),t.fire("done",d),$=1}if(!e.$o){var g=u==r;g&&(e.$b=0,2==i&&(a[0]=f,S(n,a,e))),1==i&&S(n,[s||p,h,g,c],e)}$&&t.fire("end",d)}},wt=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){wt(this,t,e,r,i)});n.$b=1;var o=n.constructor,a=o.$r;u(t)||(t=[t]);for(var f,c=t.length,s=gt(e,o,n,c,r,o.$c),$=0;$<c;$++)if(f=t[$]){var h,p=o.get(f,i),v=p.e,l=v.$m.k,d=vt(s,v,$);l&&a[l]?a[l].push(d):p.u?(l&&(h=[d],h.e=v,a[l]=h,d=vt(mt,a,l)),o.$s(v,d)):d()}return n},yt=function(){var n=this;n.id=x("s"),n.$q=[]};A(yt[g],{all:function(n,t){return wt(this,n,t,2)},save:function(n,t){return wt(this,n,t,2,1)},one:function(n,t){return wt(this,n,t,1)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=h.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&S(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var bt=function(n,t,e){return e=[m(t),m(n)],e.join("")},xt=function(n,t,e,r){(r=n&&n.$m)&&t[r.n]&&e.del(r.k)},kt=A({add:function(n){var t=this,e=t.$m;u(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)(r=n[o])&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=0|n.cache||e.cache,i=new dt;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&bt(e,n)},f(n)&&i.set(n);var o=e.before;return o&&S(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){return this.$m[n.name||n]||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(xt,L((n+"").split(",")))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),a=0|n.cache||o.cache;if(a&&(e=bt(o,n)),e){var f=r.$r,u=f[e];u?t=u.e:(t=i.get(e))&&lt()-t.$m.t>a&&(i.del(e),t=0)}return t}},N);yt.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new E(t,e),i.$r={},i.$m={},a(i,r,p,kt)},F.Service=yt;var Vt=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=Vt,a(i,e,n,t)};return A(r[g],N),r.extend=Vt,F.Base=r,define(k,function(){return $t.extend()}),F});