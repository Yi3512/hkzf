<template>
  <div class="CityList">
    <my class="my" tt="城市列表"></my>
    <div class="hid" v-if="!CityList.length"></div>
    <van-index-bar
      :index-list="indexList"
      :sticky-offset-top="46"
      :sticky="false"
      v-else
    >
      <!-- 当前城市 -->
      <van-index-anchor class="Current" index="#">当前城市</van-index-anchor>
      <van-cell :title="$store.state.hkzf_city.label" />
      <!-- 热门城市列表 -->
      <van-index-anchor index="热">热门城市</van-index-anchor>
      <van-cell
        v-for="item in myhotCity"
        :key="item.label"
        :clickable="true"
        :title="item.label"
        @click="setAddress(item)"
      />
      <!-- 字母排序列表 -->
      <div v-for="(item, index) in CityList" :key="index">
        <van-index-anchor :index="item[0]" />
        <van-cell
          v-for="item in item[1]"
          :key="item.value"
          :clickable="true"
          :title="item.label"
          @click="setAddress(item)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCity, hotCity } from '@/api'
import My from '@/components/My.vue'
export default {
  components: { My },
  props: ['addname'],
  data () {
    return {
      CityList: [], // 城市列表数据
      myhotCity: [], // 首字母分类
      indexList: ['#', '热'] // 城市首字母数据
    }
  },
  created () {
    this.hotCity()
    this.getCity()
  },
  methods: {
    // 热门列表
    async hotCity () {
      try {
        const { data } = await hotCity()
        this.myhotCity = data.body
        // console.log(this.myhotCity)
      } catch (e) {
        this.$toast.fail('数据加载失败')
      }
    },
    // 城市列表
    async getCity () {
      try {
        // 进入开启加载提示
        this.$toast.loading({
          message: '加载中',
          duration: 0
        })
        const { data } = await getCity()
        const obj = {}
        // 获取所有数据,并且通过首字母进行分类
        data.body.forEach((item) => {
          const letter = item.short.charAt(0).toUpperCase()
          if (!obj[letter]) {
            obj[letter] = []
            obj[letter][0] = item.short.charAt(0).toUpperCase()
            obj[letter][1] = []
          }
          obj[letter][1].push(item)
        })
        // console.log(obj)
        // 将key值进行排序并且把数据全部转化为数组方便渲染页面
        const newkey = Object.keys(obj).sort()
        newkey.forEach((item) => {
          this.CityList.push(obj[item])
          this.indexList.push(item)
        })
        // console.log(this.CityList)
        // console.log(this.indexList)
      } catch (e) {
        this.$toast.fail('数据加载失败')
      }
      // 加载完毕 关闭加载提示
      this.$toast.loading({
        message: '加载中',
        duration: 1
      })
    },
    setAddress (item) {
      this.$store.commit('addCity', item)
      this.$router.push('/oneroute/home')
    }
  }
}
</script>

<style lang="less" scoped>
.CityList {
  :deep(.van-index-anchor) {
    color: #999;
    font-size: 14px;
    padding: 10px 15px;
  }
  :deep(.van-cell) {
    height: 50px;
    padding: 0 15px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    span {
      font-size: 16px;
    }
  }
  :deep(.van-index-bar__sidebar) {
    position: fixed;
    display: flex;
    padding-top: 20px;
    right: 0.13333rem;
    z-index: 2;
    height: 90%;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-evenly;
  }
  :deep(.van-index-bar__index) {
    padding: 0;
    font-size: 14px;
  }
  :deep(.van-index-bar__index--active) {
    background-color: #21b97a;
    border-radius: 100%;
    color: #fff;
  }
  .my {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 45px;
  }
}
</style>
