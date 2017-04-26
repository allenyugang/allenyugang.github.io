<template>
    <div class="sidebar">
		<el-col :span="24" class="main">
			<aside>
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router >
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i ></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="item.id" v-if="!child.hidden">{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
			</aside>
		</el-col>
    </div>
</template>
<script>
export default {
}
</script>
<style>
.sidebar{
  display: block;
  position: absolute;
  width: 250px;
  left: 0;
  top: 70px;
  bottom:0;
  background: #2E363F;
}
.sidebar > ul {
    height:100%;
}
.sidebar a{
  color:#bfcbd9;
  text-decoration: none
} 
</style>
