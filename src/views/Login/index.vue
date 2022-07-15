<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      class="navbar"
      title="账号登录"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 账号:hzhmqd  密码:123456 -->
    <!-- 表单 -->
    <van-form @submit="login" class="form">
      <van-field
        class="field"
        v-model="username"
        name="username"
        placeholder="请输入账号"
      />
      <van-field
        class="field"
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
      />
      <!-- 按钮 -->
      <div style="margin: 16px">
        <van-button
          class="btn"
          block
          type="info"
          native-type="submit"
          @click="btnFn"
          >登 录</van-button
        >
      </div>
    </van-form>
    <p class="zhuc">还没有账号，去注册~~</p>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      password: '',
      username: ''
    }
  },
  methods: {
    btnFn () {
      if (this.username.length === 0 || this.password.length === 0) {
        return Toast('用户名和密码不能为空')
      }
      Toast.loading({
        message: '加载中...',
        forbidClick: true
      })
    },
    onClickLeft () {
      this.$router.back()
    },
    async login () {
      const res = await login(this.username, this.password)
      console.log(res)
      if (res.data.status !== 200) {
        return Toast({ message: '你的账号或者密码错误', icon: 'close' })
      }
      Toast({ message: '登录成功', icon: 'passed' })
      this.$router.push({ name: 'my' })
    }
  }
}
</script>

<style lang="less" scoped>
// 头部样式
:deep(.navbar) {
  background-color: #21b97a;
  margin-bottom: 21px;
  .van-nav-bar__content {
    height: 45px;
  }
  .van-ellipsis {
    color: #fff !important;
  }
  .van-icon {
    color: #fff;
    font-size: 16px;
  }
  .van-nav-bar__title {
    font-size: 18px;
  }
}
// 表单样式
.form {
  :deep(.field) {
    margin-bottom: 9px;
    .van-field__control {
      height: 40px;
      line-height: 60px;
      font-size: 17px;
      padding: 2px 0;
      vertical-align: middle;
    }
  }
  // 按钮样式
  .btn {
    margin-top: 27px;
    height: 50px;
    line-height: 50px;
    background-color: #21b97a;
    font-size: 18px;
    border: none;
  }
}
.zhuc {
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: #666;
}
</style>
