define("app/views/index",["magix"],function(i,l,a){var t=i("magix");t.applyStyle("p54",".p54-275{color:#999}"),a.exports=t.View.extend({tmpl:{html:'<h3>Magix Project(3.2.4)</h3><p class="p54-275">这是Magix示例工程，<a href="https://github.com/thx/magix-project" target="_blank">点这里获取源码</a>。该工程包含常用组件及项目中的常见场景</p><h4 class="p16-716">使用框架及类库</h4><ol><li>1. seajs(2.2.3)<a href="https://github.com/seajs/seajs" target="_blank" class="p16-ml5">获取源码</a></li><li>2. jQuery(3.2.1)<a href="http://jquery.com/download/" target="_blank" class="p16-ml5">获取源码</a></li><li>3. Magix(3.3.2)<a href="https://github.com/thx/magix" target="_blank" class="p16-ml5">获取源码</a></li><li>4. magix-combine(3.2.0)<a href="https://github.com/thx/magix-combine" target="_blank" class="p16-ml5">获取源码</a></li></ol><h4 class="p16-716">项目特点</h4><ol><li>1. 集成常用组件及项目中的解决方案</li><li>2. 打包必须加载的资源，减少http请求</li><li>3. 按需加载后续资源</li><li>4. 解决css冲突和冗余问题</li><li>5. 使用Typescript编译js，不仅仅是新语法</li><li>6. 除对标签重置的css外，没有一个多余的css</li></ol><h4 class="p16-716">项目思路</h4><ol><li>1. 搭积木式开发（一个展现区块可以很方便的拆分成几个小的区块，同时拆分后的小区块仍然可以再拆分，通过mx-view属性快速的把拆分后的区块组装起来）</li><li>2. 便捷的事件绑定（只要在方法名后跟上事件类型，magix就会在合适的时候帮你绑定、解绑事件，开发者不需要做任何事情）</li><li>3. 有效的隔离机制（不论是事件绑定还是样式书写，magix均可保证这些只对当前区块有效，这在区块嵌套的情况下非常有用，完全不用担心误伤子区块）</li><li>4. 统一的接口管理（magix提供的service可以方便的管理项目中所有的接口，同时您可以自由的组合这些接口进行数据请求，完全不用担心后端开发人员把接口拆分的过细）</li><li>5. 强大的扩展（magix提供对整个项目的统一扩展或针对当前区块的mixin增强，让您在复用功能、后期统一处理变得得心应手）</li><li>6. 轻量的数据绑定（magix内置了非常轻量的局部刷新和数据绑定功能，在保证开发便利的情况下，遇到问题debug起来也会非常容易）</li><li>7. 离线处理（magix配合magix-combine工具，在上线前针对项目中的代码做离线处理，把一些结果提前计算好，减少线上计算，提升应用的性能）</li></ol>',subs:[]},render:function(){this.updater.digest()}})});