<template>
  <div>
    <van-nav-bar :title="tt" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
  props: ['tt'],
  data () {
    return {}
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang="less">
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
</style>
