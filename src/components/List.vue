<template>
  <div>
   <ul class="list">
     <li v-for="item in songs">
       <router-link :to="{path:'detail',query:{id:item.id}}">
            <span>{{item.name}}</span>
       </router-link>
     </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
          songs:[
                  {
                    name:'一生为你',
                    id:'01'
                  },
                  {
                    name:'豆腐西施',
                    id:'02'
                  },
                  {
                    name:'黑豆难煮',
                     id:'03'
                  }
                ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{margin:0;padding:0;}
li{list-style:none;}
.list li{background:#eee;width:100%;}
</style>
