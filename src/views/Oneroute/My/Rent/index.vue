<template>
  <div>
    <my tt="房屋管理"></my>
    <van-list>
      <div class="Listbox" v-for="(item, index) in myrent" :key="index">
        <div class="List">
          <div class="ListImg">
            <img :src="baseUrl + item.houseImg" alt="" />
          </div>
          <div class="ListTitle">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
            <p>{{ item.tags[0] }}</p>
            <p>
              <span>{{ item.price }}</span
              >元/月
            </p>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import My from '@/components/My.vue'
import { getrent } from '@/api'
export default {
  components: { My },
  data () {
    return {
      myrent: [],
      baseUrl: 'http://liufusong.top:8080'
    }
  },
  created () {
    this.getrent()
  },
  methods: {
    async getrent () {
      try {
        const {
          data: { body }
        } = await getrent()
        // console.log(res)
        this.myrent = body
        console.log(this.myrent)
      } catch (error) {
        this.$toast.fail('请重新获取页面')
      }
    }
  }
}
</script>

<style lang="less" scoped>
// 列表
.Listbox {
  padding: 0 10px;
  background-color: #fff;
  .List {
    width: 100%;
    height: 120px;
    display: flex;
    padding-top: 18px;
    border-bottom: 1px solid #e5e5e5;
    .ListImg {
      width: 106px;
      height: 80px;
    }
    .ListTitle {
      // overflow: hidden;
      line-height: 24px;
      padding-left: 12px;
      h3 {
        font-size: 15px;
        color: #202124;
      }
      p {
        &:nth-child(2) {
          font-size: 12px;
          color: #afb2b3;
        }
        &:nth-child(3) {
          padding: 0 5px;
          width: 46px;
          border-radius: 3px;
          font-size: 12px;
          background: #e1f5f8;
          color: #39becd;
        }
        &:nth-child(4) {
          font-size: 12px;
          color: #afb2b3;
          color: #fa5741;
          span {
            margin-right: 5px;
            font-size: 16px;
            font-weight: bolder;
          }
        }
      }
    }
  }
}
</style>
