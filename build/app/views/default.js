define("app/views/default",["magix"],function(i,a,e){var v=i("magix"),s=v.Router;e.exports=v.View.extend({tmpl:{html:'<div mx-view="app/views/partials/header" style="height:50px"></div><div class="pc6-671"><div mx-view="app/views/partials/nav"></div><div class="pc6-a7b"><div mx-guid="g0" id="inmain" class="pc6-a9c" mx-view="<%=$$.mainView%>"><div class="p28-f0b"><span></span></div></div></div></div><div mx-view="app/views/partials/robot"></div>',subs:[{keys:["mainView"],path:'div[mx-guid="g0"]',attr:'mx-view="<%=$$.mainView%>"',attrs:[{n:"mx-view",v:1}]}]},init:function(){this.observe({path:!0})},render:function(){var i=this,a=s.parse();i.updater.digest({mainView:"app/views"+a.path})}})});