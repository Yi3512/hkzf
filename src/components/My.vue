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

<style scoped lang="less"></style>
