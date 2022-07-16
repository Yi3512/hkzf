<template>
  <div>
    <!-- 登录 页面切换 等vuex -->
    <!-- 头部 -->
    <div class="my-title">
      <!-- 背景图 -->
      <img
        v-if="isLogin"
        src="http://liufusong.top:8080/img/avatar.png"
        alt=""
      />

      <img v-else src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <!-- 登录框 -->
      <div class="my-title-login">
        <!-- 头像 -->
        <div class="avatar">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <!-- 登录成功--显示 -->
        <div v-if="isLogin" class="my-title-btn">
          <div>
            <p>好客_845296</p>
          </div>
          <van-button class="vanbtn vanbtn2" type="primary" @click="logout"
            >退出</van-button
          >
          <div class="material">
            <p>编辑个人资料<van-icon name="play" /></p>
          </div>
        </div>
        <!-- 登录按钮 -->
        <div v-else class="my-title-btn">
          <div>
            <p>游客</p>
          </div>
          <van-button class="vanbtn" type="primary" to="/login"
            >去登录</van-button
          >
        </div>
      </div>
    </div>
    <!-- 导航宫格 -->
    <van-grid :border="false" clickable :column-num="3">
      <van-grid-item icon="star-o" to="/collect" text="我的收藏" />
      <van-grid-item icon="wap-home-o" text="我的出租" />
      <van-grid-item icon="clock-o" text="看房记录" />
      <van-grid-item icon="debit-pay" text="成为房主" />
      <van-grid-item icon="contact" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <!-- 广告位置 -->
    <div class="my-ad">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    isLogin () {
      console.log(this.$store.state)
      return !!this.$store.state.user
    }
  },
  methods: {
    logout () {
      this.$dialog
        .confirm({
          title: '标题',
          message: '弹窗内容'
        })
        .then(() => {
          this.$store.commit('setUser', '')
          // on confirm
        })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style lang="less" scoped>
// 头部
.my-title {
  min-height: 300px;
  position: relative;
  img {
    width: 100%;
  }
  // 登录框
  .my-title-login {
    position: absolute;
    background-color: #fff;
    width: 85%;
    height: 55%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 3px #ddd;
    font-size: 13px;
    text-align: center;
    // 头像
    .avatar {
      display: inline-block;
      position: relative;
      transform: translateY(-50%);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 5px solid #f5f5f5;
      box-shadow: 0 0 2px 3px #ddd;
    }
    // 登录按钮
    .my-title-btn {
      position: relative;
      transform: translateY(-20%);
      .vanbtn {
        width: 72px;
        height: 30px;
        margin-top: 20px;
        border-radius: 5px;
        border: 1px solid #18a3b1;
        font-size: 13px;
        background-color: #21b97a;
      }
      .vanbtn2 {
        margin-top: 0;
        width: 60px;
        height: 20px;
        border-radius: 30px;
        font-size: 12px;
      }
      .material {
        margin-top: 20px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
// 广告栏
.my-ad {
  height: 84px;
  text-align: center;
  img {
    width: 92%;
  }
}
</style>
