<template>
  <div>
    <van-tabbar v-model="active" route>
      <!-- 首页 -->
      <van-tabbar-item to="/oneroute/home">
        <template #icon>
          <van-icon name="wap-home-o" />
        </template>
        <span>首页</span>
      </van-tabbar-item>
      <!-- 找房 -->
      <van-tabbar-item to="/oneroute/look">
        <template #icon>
          <van-icon name="search" />
        </template>
        <span>找房</span>
      </van-tabbar-item>
      <!-- 资讯 -->
      <van-tabbar-item to="/oneroute/tidings">
        <template #icon>
          <van-icon name="newspaper-o" />
        </template>
        <span>资讯</span>
      </van-tabbar-item>
      <!-- 我的 -->
      <van-tabbar-item to="/oneroute/my">
        <template #icon>
          <van-icon name="contact" />
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style></style>
