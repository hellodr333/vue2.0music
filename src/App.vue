<template>
  <div id="app" class="box">
    <header class="header">
      <!-- <a v-link="{ name: 'home' }"><i class="fa fa-expand"></i></a>
      <h1><i class="fa fa-music"></i> Music Player</h1>
      <a v-link="{ name: 'list' }"><i class="fa fa-list"></i></a> -->
       <router-link to="/home" class="home">主页</router-link>
       <span class="mid">music</span>
       <router-link to="/hello" class="list">菜单</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
*{margin:0;padding:0;}
.box{background:rgba(10, 10, 10, .3);}
.mid{position:absolute;left:50%;top:0;margin-left:-100px;width:200px;text-align:center;}
header{height:100px;}
.home{float:left;width:80px;}
.list{float:right;width:80px;}
</style>
