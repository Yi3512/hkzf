<template>
  <div>
    <!-- 左侧搜索框 -->
    <div class="home-search">
      <div class="left-ss">
        <!-- 地点选择 -->
        <div class="dizhi" @click="$router.push('/citylist')">
          {{ $store.state.hkzf_city.label }}<van-icon name="play" />
        </div>
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
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 导航栏 -->
    <van-grid clickable :column-num="4" :border="false" class="bar">
      <van-grid-item to="">
        <van-icon name="wap-home-o" class="icon-top" />
        <p>整租</p>
      </van-grid-item>

      <van-grid-item to="">
        <van-icon name="friends-o" class="icon-top" />
        <p>合租</p>
      </van-grid-item>

      <van-grid-item to="">
        <van-icon name="location-o" class="icon-top" />
        <p>地图找房</p>
      </van-grid-item>

      <van-grid-item to="">
        <span class="toutiao toutiao-home icon-top" />
        <p>去出租</p>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <div class="group">
      <h3 class="group-title">
        租房小组
        <span class="more">更多</span>
      </h3>
      <div class="am-grid">
        <div class="am-flexbox-top">
          <div class="am-flexbox">
            <img
              src="https://img0.baidu.com/it/u=957222524,3349400&fm=253&fmt=auto&app=120&f=JPEG?w=250&h=156"
              alt=""
            />
            <div>
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
          <div class="am-flexbox">
            <img
              src="https://img0.baidu.com/it/u=957222524,3349400&fm=253&fmt=auto&app=120&f=JPEG?w=250&h=156"
              alt=""
            />
            <div>
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
        </div>
        <div style="margin-top: 10px" class="am-flexbox-top">
          <div class="am-flexbox">
            <img
              src="https://img0.baidu.com/it/u=957222524,3349400&fm=253&fmt=auto&app=120&f=JPEG?w=250&h=156"
              alt=""
            />
            <div>
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
          <div class="am-flexbox">
            <img
              src="https://img0.baidu.com/it/u=957222524,3349400&fm=253&fmt=auto&app=120&f=JPEG?w=250&h=156"
              alt=""
            />
            <div>
              <p>家住回龙观</p>
              <p>归属的感觉</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  },
  created () {
    this.add()
  },
  methods: {}
}
</script>

<style lang="less" scoped>
// 头部
.home-search {
  position: absolute;
  top: 25px;
  z-index: 2;
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  .left-ss {
    display: flex;
    background-color: #fff;
    border-radius: 3px;
    align-items: center;
    width: 300px;
    height: 34px;
    // line-height: 34px;
    .dizhi {
      margin-left: 5px;
      font-size: 14px;
      .van-icon {
        margin-left: 2px;
        transform: rotate(90deg);
        font-size: 12px;
        color: #7f7f80;
      }
    }
    .icon-search {
      font-size: 15px;
    }
    .xian {
      height: 15px;
      width: 1px;
      background-color: #e5e5e5;
      margin: auto 10px;
      color: #e5e5e5;
    }
  }
  .ditu {
    font-size: 25px;
  }
}
// 中部导航栏
.bar {
  font-size: 14px;
  .icon-top {
    margin-bottom: 5px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #f2fbf7;
    border-radius: 50%;
    font-size: 35px;
    color: #00ae66;
  }
}
.group {
  width: 100%;
  height: 190px;
  background-color: #f6f5f6;
  overflow: hidden;
  padding: 0 10px;
  .group-title {
    display: flex;
    justify-content: flex-end;
    margin: 15px 0 15px 10px;
    justify-content: space-between;
    font-size: 15px;
    .more {
      color: #787d82;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .am-grid {
    .am-flexbox-top {
      display: flex;
      justify-content: space-between;
      .am-flexbox {
        display: flex;
        font-size: 14px;
        width: 172.5px;
        height: 60px;
        align-items: center;
        background-color: #fff;
        img {
          width: 50px;
          height: 50px;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
