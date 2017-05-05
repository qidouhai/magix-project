define("app/views/partials/password",["magix","../../mixins/form","../../mixins/dialog"],function(a,s,i){var d=a("magix"),l=a("../../mixins/form"),e=a("../../mixins/dialog");i.exports=d.View.extend({tmpl:{html:'<div class="p61-255"><h4 class="p61-254">修改密码</h4></div><div class="p61-7f2"><form mx-guid="gf" mx-view="app/gallery/mx-validation/index" id="form_<%=$$.viewId%>"><div class="p5c-f1c p16-c8d"><label class="p5c-078"><i class="p5c-929">*</i>原始密码：</label><div class="p16-fl"><input mx-guid="ga" class="p5c-dc6" type="password" validator-required="true" value="<%=$$.originalPasswd%>" mx-change="syncValue({p:\'originalPasswd\'})"/> &nbsp;</div></div><div class="p5c-f1c p16-c8d"><label class="p5c-078"><i class="p5c-929">*</i>用户密码：</label><div class="p16-fl"><input mx-guid="gc" class="p5c-dc6" type="password" id="passwd" validator-required="true" value="<%=$$.passwd%>" mx-change="syncValue({p:\'passwd\'})" validator-length="[8,16]" validator-length-message="密码8-16个字符"/> &nbsp;</div><span class="p5c-92d">8-16个字符，英文字母区分大小写，不能是汉字。</span></div><div class="p5c-f1c p16-c8d"><label class="p5c-078"><i class="p5c-929">*</i>重复密码：</label><div class="p16-fl"><input mx-guid="ge" class="p5c-dc6" type="password" validator-equalto="#passwd" validator-required="true" value="<%=$$.repasswd%>" mx-change="syncValue({p:\'repasswd\'})" maxlength="16" validator-equalto-message="与用户密码一致"/></div></div></form></div><div class="p61-0f5"><a mx-click="enter()" class="pf0-btn pf0-046 p16-fdc">确定</a><a mx-click="cancel()" class="pf0-btn">取消</a></div>',subs:[{keys:["originalPasswd"],path:'input[mx-guid="ga"]',attr:'value="<%=$$.originalPasswd%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["passwd"],path:'input[mx-guid="gc"]',attr:'value="<%=$$.passwd%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["repasswd"],path:'input[mx-guid="ge"]',attr:'value="<%=$$.repasswd%>"',attrs:[{n:"value",q:1,p:1}]},{keys:["viewId"],path:'form[mx-guid="gf"]',attr:'id="form_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]}]},mixins:[l,e],init:function(a){this.$dialog=a.dialog},render:function(){var a=this;a.updater.digest({viewId:a.id})},"enter<click>":function(){var a=this,s=d.node("form_"+a.id).vframe;if(s&&s.invoke("isValid")){var i=a.updater.get(),l=a.getDataByKeys(i,"originalPasswd,passwd,repasswd");a.alert(JSON.stringify(l),function(){a["cancel<click>"]()})}},"cancel<click>":function(){this.$dialog.close()}},{dialogOptions:{width:600}})});