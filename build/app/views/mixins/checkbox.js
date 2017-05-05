define("app/views/mixins/checkbox",["magix","../../mixins/checkbox-linkage","../../mixins/gtip"],function(t,e,i){var a=t("magix");a.applyStyle("p1b",".p1b-e75{width:900px}");var c=t("../../mixins/checkbox-linkage"),p=t("../../mixins/gtip");i.exports=a.View.extend({tmpl:{html:'<h3>checkbox联动mixin</h3><h4>配置</h4><table class="p3a-c06 p3a-042 p1b-e75"><thead><tr><th>参数名称</th><th>参数说明</th></tr></thead><tbody><tr><td>linkage-name</td><td>控制全选\\取消的checkbox名称</td></tr><tr><td>linkage-parent-name</td><td>需要联动的子checkbox</td></tr></tbody></table><h4 class="p16-28f">示例1</h4><table class="p3a-c06 p3a-042 p1b-e75"><thead><tr><th><input type="checkbox" linkage-name="example1"/></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type="checkbox" linkage-parent-name="example1" value="ex1_<%=i%>"/></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table><div class="p1b-e75 p16-c8d"><button class="p16-fr p16-mt5 pf0-btn pf0-046" mx-click="showEx1()">显示示例1选中的checkbox</button></div><h4 class="p16-28f">示例2</h4><table class="p3a-c06 p3a-042 p1b-e75"><thead><tr><th><input type="checkbox" linkage-name="example2"/></th><%for(var i=0;i<5;i++){%><th>示例字段<%=i%></th><%}%></tr></thead><tbody><%for(var i=0;i<10;i++){%><tr><td><input type="checkbox" linkage-parent-name="example2" value="ex2_<%=i%>"/></td><%for(var j=0;j<5;j++){%><td>示例字段内容<%=j%></td><%}%></tr><%}%></tbody></table><div class="p1b-e75 p16-c8d"><button class="p16-fr p16-mt5 pf0-btn pf0-046" mx-click="showEx2()">显示示例2选中的checkbox</button></div><div class="p1b-e75 p16-716 p16-c8d"><button class="p16-fr p16-mt5 pf0-btn pf0-046" mx-click="show()">显示当前页面选中的checkbox</button></div>',subs:[]},mixins:[c,p],render:function(){this.updater.digest()},"showEx1<click>":function(){var t=this.getSelectedIds("example1");t.length?this.gtipRB("选中的值："+t.join(",")):this.gtipRB("请选择checkbox")},"showEx2<click>":function(){var t=this.getSelectedIds("example2");t.length?this.gtipRB("选中的值："+t.join(",")):this.gtipRB("请选择checkbox")},"show<click>":function(){var t=this.getSelectedIds();t.length?this.gtipRB("选中的值："+t.join(",")):this.gtipRB("请选择checkbox")}})});