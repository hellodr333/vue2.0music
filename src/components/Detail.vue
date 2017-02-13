
<template>
	<div>{{msg}}</div>
</template>
<script>
	export default{
		name:'detail',
		data(){
			return {
				msg:''
			}
		},
		created:function(){
			//获取地址栏参数 id，请求对应数据
			this.msg = this.$route.query.id
			console.log(this.$route.query.id)
		}
	};
</script>
<style>
	
</style>