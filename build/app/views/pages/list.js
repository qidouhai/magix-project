define("app/views/pages/list",["magix","../../mixins/checkbox-linkage","../../mixins/checkbox-storestate"],function(e,t,a){var i=e("magix"),m=e("../../mixins/checkbox-linkage"),l=e("../../mixins/checkbox-storestate");i.applyStyle("p3e",""),a.exports=i.View.extend({tmpl:{html:'<h4>列表页面</h4><div class="p16-mb5 p16-mt5 p16-c8d"><div class="p16-fl" mx-view="app/gallery/mx-dropdown/index?searchbox=true&emptyText=%E8%BF%87%E6%BB%A4%E6%9D%A1%E4%BB%B6" mx-change="showValue()" style="width:140px"><item value="a1">text 1</item><item value="a2">text 2</item><item value="a3">text 3</item><item value="a4">text 4</item><item value="a5">text 5</item><item value="a6">text 6</item><item value="a7">text 7</item><item value="a8">text 8</item><item value="a9">text 9</item><item value="a10">very long text very long text very long text very long text</item><item value="a11">text 11</item><item value="a12">text 12</item><item value="a13">text 13</item><item value="a14">text 14</item><item value="a15">text 15</item><item value="a16">text 16</item><item value="a17">text 17</item><item value="a18">text 18</item></div><div class="p16-fl p16-043" mx-view="app/gallery/mx-dropdown/index?searchbox=true&emptyText=%E8%BF%87%E6%BB%A4%E6%9D%A1%E4%BB%B6" mx-change="showValue()" style="width:180px"><item value="a1">text 1</item><item value="a2">text 2</item><item value="a3">text 3</item><item value="a4">text 4</item><item value="a5">text 5</item><item value="a6">text 6</item><item value="a7">text 7</item><item value="a8">text 8</item><item value="a9">text 9</item><item value="a10">very long text very long text very long text very long text</item><item value="a11">text 11</item><item value="a12">text 12</item><item value="a13">text 13</item><item value="a14">text 14</item><item value="a15">text 15</item><item value="a16">text 16</item><item value="a17">text 17</item><item value="a18">text 18</item></div><div class="p16-fr"><input type="text" class="p5c-dc6" placeholder="搜索关键字"/></div></div><table class="p3a-c06 p3a-042"><thead><tr mx-guid="g0">1</tr></thead><tbody mx-guid="g1">2</tbody><tfoot><tr><td mx-guid="g2" colspan="6" mx-view="app/gallery/mx-pagination/index?total=<%@$$.total%>&step=3&page=<%@$$.page%>&size=<%@$$.size%>" mx-change="changePage()"></td></tr></tfoot></table>',subs:[{s:"1",keys:["headers"],tmpl:'<th><input type="checkbox" linkage-name="example1"/></th><%for(var i=0;i<$$.headers.length;i++){%><th><%=$$.headers[i]%></th><%}%>',path:'tr[mx-guid="g0"]'},{s:"2",keys:["list","headers"],tmpl:'<%for(var i=0;i<$$.list.length;i++){%><tr><td><input type="checkbox" linkage-parent-name="example1" value="<%=$$.list[i].id%>"/></td><%for(var j=0;j<$$.headers.length;j++){%><td><%=$$.list[i][\'f\'+j]%></td><%}%></tr><%}%>',path:'tbody[mx-guid="g1"]'},{keys:["total","page","size"],path:'td[mx-guid="g2"]',attr:'mx-view="app/gallery/mx-pagination/index?total=<%@$$.total%>&step=3&page=<%@$$.page%>&size=<%@$$.size%>"',attrs:[{n:"mx-view",v:1}]}]},mixins:[m,l],init:function(){for(var e=[],t=0;t<5;t++)e[t]="示例字段"+t;for(var a=[],i=0;i<100;i++){for(var m={id:i},t=0;t<5;t++)m["f"+t]="字段内容"+i+"_"+t;a.push(m)}var l=this;l.$headers=e,l.$list=a,l.observe("page,size")},getInfo:function(){var e=i.Router.parse(),t=e.get("page")||1,a=e.get("size")||10,m=this.$list.slice(a*(t-1),a*t);return{total:100,headers:this.$headers,list:m,page:t,size:a}},render:function(){var e=this,t=e.getInfo();e.updater.digest(t)},"changePage<change>":function(e){i.Router.to({page:e.state.page,size:e.state.size})}})});