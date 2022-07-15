<template>
  <div>
    <div class="home-title">
      <!-- 左侧搜索框 -->
      <div class="home-search">
        <!-- 地点选择 -->
        <div class="dizhi">北京<van-icon name="play" /></div>
        <span class="xian">|</span>
        <!-- 搜索框 -->
        <div>
          <van-icon name="search" /><input
            type="text"
            placeholder="请输入小区或地址"
          />
        </div>
      </div>
      <!-- 右侧地图选点 -->
      <div>
        <span><van-icon color="#fefefd" name="map-marked" /></span>
      </div>
    </div>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      images: [
        'http://liufusong.top:8080/img/swiper/1.png',
        'http://liufusong.top:8080/img/swiper/2.png',
        'http://liufusong.top:8080/img/swiper/3.png'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.home-title {
  display: flex;
  position: absolute;
  top: 25px;
  z-index: 2;
  padding: 0 10px;
  width: 100%;
  .home-search {
    display: flex;
    background-color: #fff;
    font-size: 13px;
    align-items: center;
    .xian {
      margin: 0 10px;
    }
    .van-icon {
      transform: rotate(90deg);
    }
  }
}
</style>
