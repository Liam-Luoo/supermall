<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive" ><slot name="item-icon"></slot></div>
    <div  v-else><slot name="item-icon-active"></slot></div>
<!--    到这里因为 我们活跃的时候想让文字也变成红色  但是好像没效果   是因为这里是一个插槽 所以编译的时候会完全被替换掉 替换的时候是没有这个属性的 -->
<!--    解决方案  给外边包裹一个div  把要动态绑定的属性 绑定给外边的div 因为字体颜色可以继承过来 所以有效果了  那为什么上面的没有问题的???  虽然没有问题 但是还是推荐都绑定div的做法-->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return{
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    width: 49px;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    /*display: block;*/
    /*margin: 2px auto;*/
  }
  /*.active{
    color: red;
  }*/
</style>