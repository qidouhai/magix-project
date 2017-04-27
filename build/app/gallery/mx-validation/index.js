define("app/gallery/mx-validation/index",["magix","$"],function(e,t,r){var a=e("magix"),n=e("$"),i=a.Vframe;a.applyStyle("p70",".p70-pr{position:relative}.p70-ea5{border-color:#a62a22!important}.p70-msg,.p70-adf{display:none;line-height:18px;border-radius:4px;padding:4px 8px;position:absolute;background:#fff;white-space:nowrap;word-wrap:normal;z-index:1}.p70-adf{line-height:22px;border:1px solid #e6e6e6}");var o=function(e){return e.replace(/[^\x00-\xff]/g,"xl").length},u=function(e){for(var t;e&&e!=document;){var r=e.id;if(r&&(t=i.get(r)))break;e=e.parentNode}return t},d=["required","number","length","blength","range","equalto","pattern"],s={required:function(e,t){return"true"!=t||n.trim(e)},number:function(e,t){return!(e=n.trim(e))||"true"!=t||e.indexOf(".")==e.lastIndexOf(".")&&/^[\d\.]+$/.test(e)},length:function(e,t){return t=n.parseJSON(t),!(e.length<t[0]||e.length>t[1])},blength:function(e,t){t=n.parseJSON(t);var r=o(e);return!(r<t[0]||r>t[1])},range:function(e,t){return t=n.parseJSON(t),!((e=parseFloat(e))<t[0]||e>t[1])},equalto:function(e,t){return n(t).val()==e},pattern:function(e,t){if(e=n.trim(e)){return new RegExp(t).test(e)}return!0}},f={required:function(){return"亲，此项必填哦～"},number:function(){return"亲，请输入数字哦～"},length:function(e){return e=n.parseJSON(e),"亲，此项长度不能小于"+e[0]+"，也不能大于"+e[1]+"哦～"},blength:function(e){return e=n.parseJSON(e),"亲，此项长度不能小于"+e[0]+"个字符，也不能大于"+e[1]+"个字符哦～"},range:function(e){return e=n.parseJSON(e),"亲，请输入"+e[0]+"-"+e[1]+"之间的数字哦～"},equalto:function(e){return"亲，请与"+e+"填写同样的内容～"},pattern:function(){return"亲，输入格式有误～"}},l={msg:function(e,t){var r=e.attr("id");r||(r=a.guid(),e.attr("id",r));var i=r+"_msg",o=n("#"+i);if(!t)return void o.hide();o.length||(e.wrap('<div class="p16-ib" />'),e.parent().addClass("p70-pr"),e.before('<div class="p70-msg" id="'+i+'"/>'),o=n("#"+i)),o.html(t).show();var u,d=e.offset(),s=e.attr("validator-message-type"),f=d.top;if("outer"==s){o.addClass("p70-adf");switch(e.attr("validator-message-placement")){case"top":u=d.left,f=d.top-e.outerHeight()-5;break;case"bottom":u=d.left,f=d.top+e.outerHeight()+5;break;default:u=d.left+e.outerWidth()+10}}else u=d.left-o.outerWidth()+e.outerWidth()-1,f+=3;var l=e.attr("validator-message-offset");l&&(l=n.parseJSON(l),u+=l[0],f+=l[1]),o.offset({left:u,top:f})},hideMsg:function(e){e=n(e);var t=e.attr("id");t||(t=a.guid(),e.attr("id",t)),n("#"+t+"_msg").hide()},ctrl:function(e,t){t?(e.addClass("p70-ea5"),l.msg(e,e.attr("validator-"+t+"-message"))):(e.removeClass("p70-ea5"),l.msg(e))}};r.exports=a.View.extend({one:function(e,t){e=n(e);var r=this,a=!1,i=e.data("owner");if(i||e.attr("data-owner",i=r.id),i==r.id){for(var o=0;o<d.length;o++){var u=d[o],p=e.attr("validator-"+u);if(p){var c=s[u];if(c&&!(c=c(t||e.val(),p))){a=u;var g=e.attr("validator-"+u+"-message");g||(g=f[u](p),e.attr("validator-"+u+"-message",g));break}}}l.ctrl(e,a)}return a},isValid:function(){var e=this,t=!0;return n("#"+e.id+" input,#"+e.id+" textarea,#"+e.id+" [mx-view],#"+e.id+" [validator]").each(function(r,a){var i=n(a);if(!i.data("owner")){var o=u(a.parentNode);o&&i.attr("data-owner",o.id)}e.one(a)&&(t=!1)}),t},'$div[class="p70-msg"]<click>':function(e){var t=n(e.eventTarget);if("outer"!=t.attr("validator-message-type")){var r=e.eventTarget.id;(t=a.node(r.replace(/_msg$/,"")))&&"INPUT"==t.tagName&&(t.select(),t.focus())}},"$input,textarea,[mx-view]<keyup,change,focusin,focusout>":function(e){var t=this,r=e.eventTarget;e.verify||(clearTimeout(r.timer),e.verify=t.id,"focusin"==e.type?l.hideMsg(r):r.timer=setTimeout(t.wrapAsync(function(){t.one(r)}),20))}})});