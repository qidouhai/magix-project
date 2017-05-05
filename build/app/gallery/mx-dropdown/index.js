define("app/gallery/mx-dropdown/index",["magix","$","../mx-monitor/index"],function(e,t,i){var s=e("magix"),a=e("$"),d=e("../mx-monitor/index");s.applyStyle("p21",".p21-d9b{position:relative;display:inline-block;min-width:30px;border:1px solid #e6e6e6;border-radius:4px;background-color:#fff}.p21-d3b{color:#999;width:100%;padding:6px 30px 0 12px;text-align:left;cursor:pointer;line-height:1.5;user-select:none}.p21-d86{cursor:not-allowed;background-color:#e6e6e6;color:#ccc}.p21-c47,.p21-up{position:absolute;right:12px;top:8px}.p21-fbd .p21-c47{display:inline}.p21-c47,.p21-fbd .p21-up{display:none}.p21-fbd .p21-d3b{background-color:#e6e6e6;color:#333}.p21-fbd .p21-d3b:hover{background-color:#d4d4d4}.p21-17b{display:inline-block;white-space:nowrap}.p21-ecb{position:absolute;top:100%;left:0;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;overflow:hidden;line-height:1.5;display:none;user-select:none}.p21-fbd .p21-ecb{display:block}.p21-f2a{display:block;max-height:270px;overflow:auto}.p21-c14{display:inline-block;padding:9px 9px 4px}.p21-427{color:#ccc;position:absolute;left:15px;top:26px}.p21-749{padding-left:28px}.p21-f83{padding-left:5px;padding-right:15px;color:#999;display:block;cursor:default}.p21-f0e{color:#666;display:block;padding-left:7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px}.p21-f0e:active,.p21-f0e:focus,.p21-f0e:hover{color:#333;background-color:#f0f0f0}.p21-dfe,.p21-dfe:active,.p21-dfe:focus,.p21-dfe:hover{color:#fff;background-color:#6363e6}"),i.exports=s.View.extend({tmpl:{html:'<div mx-guid="g2" id="toggle_<%=$$.viewId%>" class="p21-d3b <%=$$.disabled ? \'p21-d86\' : \'\'%>" mx-click="toggle()" title="<%=$$.selectedText%>"><span mx-guid="g1" class="p21-17b p16-9e0" style="width:<%=($$.width-14)%>px">2</span><span class="pce-334 p21-up">&#xe786;</span><span class="pce-334 p21-c47">&#xe692;</span></div><div mx-guid="g7" class="p21-ecb" style="width:<%=($$.width+28)%>px">3</div>',subs:[{s:"2",keys:["width","selectedText"],tmpl:"<%=$$.selectedText%>",path:'span[mx-guid="g1"]',attr:'style="width:<%=($$.width-14)%>px"',attrs:[{n:"style"}],mask:"21"},{keys:["viewId","disabled","selectedText"],path:'div[mx-guid="g2"]',attr:'id="toggle_<%=$$.viewId%>" class="p21-d3b <%=$$.disabled ? \'p21-d86\' : \'\'%>" mx-click="toggle()" title="<%=$$.selectedText%>"',attrs:[{n:"id",p:1},{n:"class",p:1,f:"className"},{n:"mx-click"},{n:"title",p:1}]},{s:"3",keys:["width","rList","searchbox"],tmpl:'<%if($$.rList){if($$.searchbox){%><div class="p21-c14"><label><span class="pce-334 p21-427">&#xe608;</span><input mx-guid="g5" mx-keyup="search()" mx-paste="search()" type="text" placeholder="搜索关键词" mx-change="stop()" class="p5c-dc6 p21-749" style="width:<%=($$.width+8)%>px"/></label></div><%}%><ul mx-guid="g6" class="p21-f2a" id="list_<%=$$.viewId%>">4</ul><%}%>',path:'div[mx-guid="g7"]',attr:'style="width:<%=($$.width+28)%>px"',attrs:[{n:"style"}],mask:"311"},{s:"4",keys:["viewId","list","textKey","valueKey","selected"],tmpl:'<%for(var i = 0,item,text,value; item = $$.list[i]; i++){if($$.textKey&&$$.valueKey){text=item[$$.textKey];value=item[$$.valueKey];}else{text=item;value=item;}if(item&&item.group){%><li class="p21-f83 p16-9e0" title="<%=item[$$.textKey]%>"><%=item[$$.textKey]%></li><%}else{%><li title="<%=text%>"><%var equal=(value+\'\')===($$.selected+\'\')%><a href="javascript:;" class="p21-f0e p16-9e0 <%=equal ? \'p21-dfe\' : \'\'%>" mx-click="select({path:\'list.<%=i%>\'})"><%=text%></a></li><%}}%>',path:'ul[mx-guid="g6"]',pKeys:["rList","searchbox"],attr:'id="list_<%=$$.viewId%>"',attrs:[{n:"id",p:1}],mask:"21111"},{keys:["width"],path:'input[mx-guid="g5"]',pKeys:["rList","searchbox"],attr:'style="width:<%=($$.width+8)%>px"',attrs:[{n:"style"}]}]},init:function(e){var t=this;d.setup(),t.on("destroy",d.teardown),e.width||(e.width=120),e.width=(0|e.width)-30,e.viewId=t.id,t.updater.set(e)},inside:function(e){var t=this;return s.inside(e,t.id)},render:function(){var e=this,t=a("#"+e.id);e.$oNode=t;var i=e.updater,d=i.get();if(t.addClass("p21-d9b"),!d.list){var p,l=[];t.children().each(function(e,t){t=a(t),p="true"==t.attr("group"),l.push({group:p,text:t.text(),value:p?s.guid():t.attr("value")})}),e.updater.set({textKey:"text",valueKey:"value",list:l})}e.updateList(d.list,d.selected,!0)},hide:function(){var e=this;e.$oNode.hasClass("p21-fbd")&&(e.$oNode.removeClass("p21-fbd").trigger("focusout"),d.remove(e))},show:function(){var e=this;if(!e.$oNode.hasClass("p21-fbd")){e.updater.get().rList||e.updater.digest({rList:!0}),e.$oNode.addClass("p21-fbd").trigger("focusin");var t=a("#list_"+e.id),i=t.find(".p21-dfe"),s=i.position(),p=t.height(),l=t.prop("scrollTop");if(s.top<0||s.top>p){var o=s.top-p+l+p/2;t.prop("scrollTop",o)}d.add(e)}},updateList:function(e,t,i){var a=this;t+="";var d=a.updater,p=d.get();e=(e||[]).slice();var l=p.textKey||"",o=p.valueKey||"";if(p.emptyText)if(l&&o){var r={};r[l]=p.emptyText,r[o]="",e.unshift(r)}else e.unshift(p.emptyText);var c=s.toMap(e,o);a.$list=e,a.$map=c,t||!p.emptyText||l||o||(t=p.emptyText),t&&c[t]||(t=c[t]||e[0],l&&o&&(t=t[o])),d.digest({selected:t,selectedText:l&&o?c[t][l]:t,list:e}),a.$oNode.val(t),i||a.fireEvent(t)},search:function(e,t){var i=this;clearTimeout(i.$goTimer);var s=i.$list,a=i.updater.get(),d=[],p=0,l=s.length,o=a.textKey,r=a.valueKey;if(!e)return void t(s);var c=function(){if(p<l){for(var a=Math.min(p+400,l),n=p,u=void 0,x=void 0,f=void 0;n<a;n++)u=s[n],x=u,f=u,o&&r&&(x=u[o],f=u[r]),((x+"").indexOf(e)>=0||(f+"").indexOf(e)>=0)&&d.push(u);p=a,i.$goTimer=setTimeout(i.wrapAsync(c),20)}else t(d)};c()},fireEvent:function(e,t){var i=this,s=i.updater,d=s.get(),p=d.valueKey,l=d.textKey,o=s.gain(e),r=d.selected,c=o,n=o;if(l&&p&&(n=o[l],c=o[p]),!t||r!=c){s.set({selected:c});var u=a.Event("change",{item:o,keys:{text:l,value:p},value:p?o[p]:o,text:l?o[l]:o});i.$oNode.val(p?o[p]:o).trigger(u),u.isDefaultPrevented()?s.set({selected:r}):s.digest({selected:c,selectedText:n})}},getSelected:function(){return this.updater.get("selected")},getList:function(){return this.updater.get("list")},val:function(){return a("#"+this.id).val()},"toggle<click>":function(){var e=this,t=a("#toggle_"+e.id);e.$oNode.hasClass("p21-fbd")?e.hide():t.hasClass("p21-d86")||e.show()},"search<keyup,paste>":function(e){var t=this;clearTimeout(t.$sTimer),t.$sTimer=setTimeout(t.wrapAsync(function(){var i=a.trim(e.eventTarget.value);i!=t.$lVal&&t.search(t.$lVal=i,function(e){t.updater.digest({list:e})})}),300)},"select<click>":function(e){var t=this;t.fireEvent(e.params.path,!0),t.hide()},"stop<change>":function(e){e.stopPropagation()}})});