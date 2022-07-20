<template>
  <div>
    <my tt="内容"></my>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
    </van-swipe>
    <!-- 详情数据 -->
    <div class="HouseData">
      <van-row>
        <van-col span="24">
          <h3>1312</h3>
        </van-col>
        <van-col span="24">
          <span>近地铁</span>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center">
        <van-col span="8">
          <p>4343/月</p>
          <span>租金</span>
        </van-col>
        <van-col span="8">
          <p>4343/月</p>
          <span>租金</span>
        </van-col>
        <van-col span="8">
          <p>4343/月</p>
          <span>租金</span>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="12"> <span>装修：</span>123 </van-col>
        <van-col span="12"> <span>朝向：</span>123 </van-col>
        <van-col span="12"> <span>楼层：</span>123 </van-col>
        <van-col span="12"> <span>类型：</span>123 </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import My from '@/components/My.vue'
export default {
  components: { My }
}
</script>

<style lang="less" scoped>
body {
  background-color: red;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  width: 100%;
  height: 235px;
  // line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.HouseData {
  margin-top: 20px;
  padding: 15px;
  background-color: #f6f5f6;
}
</style>
