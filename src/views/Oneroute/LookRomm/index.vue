<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <!-- 左侧搜索框 -->
    <div class="home-search">
      <div class="left-ss">
        <!-- 地点选择 -->
        <div class="dizhi">北京<van-icon class="icon-play" name="play" /></div>
        <span class="xian"></span>
        <!-- 搜索框 -->
        <div>
          <van-icon name="search" class="icon-search" /><input
            type="text"
            placeholder="请输入小区或地址"
          />
        </div>
      </div>
      <!-- 右侧地图选点 -->
      <div class="ditu">
        <span><van-icon color="#fefefd" name="map-marked" /></span>
      </div>
    </div>
    <!-- 导航栏 -->

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
// 头部样式
:deep(.van-nav-bar__content) {
  background-color: #21b97a;
  .van-nav-bar__title {
    color: #fff;
    font-size: 18px;
  }
  .van-icon {
    color: #fff;
  }
}
:deep(.van-icon-arrow-left) {
  position: relative;
  left: -10px;
  font-size: 22px;
}
// 搜索框样式
.home-search {
  position: absolute;
  top: 6px;
  right: -40px;
  z-index: 2;
  width: 100%;
  padding: 0 10px;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  font-size: 13px;
  .left-ss {
    display: flex;
    background-color: #fff;
    border-radius: 3px;
    width: 274px;
    height: 34px;
    align-items: center;
    // line-height: 34px;
    .dizhi {
      margin-left: 5px;
      font-size: 14px;
      .icon-play {
        margin-left: 2px;
        transform: rotate(90deg);
        font-size: 12px;
        color: #7f7f80;
      }
    }
    .xian {
      height: 15px;
      width: 1px;
      background-color: #e5e5e5;
      margin: auto 10px;
      color: #e5e5e5;
    }
    .icon-search {
      font-size: 15px;
    }
  }
  .ditu {
    .van-icon {
      margin-left: 10px;
      font-size: 25px;
    }
  }
}
</style>
