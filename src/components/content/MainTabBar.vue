<template>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/zhuye-0.svg" alt="主页">
        <img slot="item-icon-active" src="~assets/img/tabbar/zhuye-1.svg" alt="主页">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/fenlei-0.svg" alt="主页">
        <img slot="item-icon-active" src="~assets/img/tabbar/fenlei-1.svg" alt="主页">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/gouwuche-0.svg" alt="主页">
        <img slot="item-icon-active" src="~assets/img/tabbar/gouwuche-1.svg" alt="主页">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/wode-0.svg" alt="主页">
        <img slot="item-icon-active" src="~assets/img/tabbar/wode-1.svg" alt="主页">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>
