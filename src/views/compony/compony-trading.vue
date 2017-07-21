<template>
  <div>
    <div class="trade-wrapper">
      <div class="search-condition">
        <el-form :inline="true" :model="searchFormInline" class="demo-form-inline">
          <el-form-item label="企业登记号：" style="margin-right:30px">
            <el-input v-model="searchFormInline.comNumber" placeholder="企业登记号" style="width:194px"></el-input>
          </el-form-item>
          <el-form-item label="时间范围：">
            <el-select v-model="searchFormInline.range" placeholder="时间范围" style="width: 190px">
              <el-option label="近一个月" value="1"></el-option>
              <el-option label="近三个月" value="3"></el-option>
              <el-option label="近六个月" value="6"></el-option>
              <el-option label="近一年" value="12"></el-option>
              <el-option label="自定义" value="0"></el-option>
            </el-select>
          </el-form-item>
          <br>
          <el-form-item>
            <div class="block">
              <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;起始日期：</span>&nbsp;&nbsp;
              <el-date-picker @click.native="test" v-model="searchFormInline.startTime" type="month" placeholder="选择起始月" :picker-options="pikerOptionsAfter">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="block">
              <span class="demonstration">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结束日期：&nbsp;&nbsp;</span>
              <el-date-picker v-model="searchFormInline.endTime" type="month" placeholder="选择结束月" :picker-options="pikerOptionsAfter">
              </el-date-picker>
            </div>
          </el-form-item>
          <el-form-item style="margin-left: 30px">
            <el-button type="primary" @click.native="_getComTradeList(normalizeParams)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="search-result">
        <h2 class="title">查询结果</h2>
        <div class="content">
          <el-tabs type="border-card">
            <el-tab-pane label="企业进出口金额">
              <inout-total :tradeData="tradeData"></inout-total>
            </el-tab-pane>
            <el-tab-pane label="企业进出口商品">
              <inout-goods :goodsData="goodsData"></inout-goods>
            </el-tab-pane>
            <el-tab-pane label="所在行业排名">
              <inout-rank :rankData="rankData"></inout-rank>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import InOutTotal from 'views/compony/in-out-total'
import InOutGoods from 'views/compony/in-out-goods'
import InOutRank from 'views/compony/in-out-rank'
import { getComTradeList } from 'api/compony'

export default {
  data() {
    return {
      tradeData: [],
      goodsData: [],
      rankData: [],
      searchFormInline: {
        comNumber: '440102296888092',
        range: '1',
        startTime: '',
        endTime: new Date().setMonth(new Date().getMonth() - 1)
      },
      dateNow: new Date(),
      pikerOptionsAfter: {
        disabledDate(time) {
          return time.getTime() >= Date.now() - 8.64e7 * 30
        }
      }
    }
  },
  mounted() {
    // init startTime
    this.searchFormInline.endTime = new Date().setMonth(new Date().getMonth() - 1);
    let now = new Date(this.searchFormInline.endTime).getMonth();
    switch (this.searchFormInline.range) {
      case "1":
        this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now);
        break;
      case "3":
        this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now - 2);
        break;
      case "6":
        this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now - 5);
        break;
      case "12":
        this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now - 11);
        break;
      case "0":
        break;
    }
  },
  computed: {
    normalizeParams() {
      let param = {};
      param.comNumber = this.searchFormInline.comNumber;
      if (this.searchFormInline.startTime) {
        param.startTime = new Date(this.searchFormInline.startTime).setDate(1);
      }
      if (this.searchFormInline.endTime) {
        param.endTime = new Date(this.searchFormInline.endTime).setDate(30);
      }
      return param;
    }
  },
  watch: {
    'searchFormInline.range'() {
      this.searchFormInline.endTime = new Date().setMonth(new Date().getMonth() - 1);
      let now = new Date(this.searchFormInline.endTime).getMonth();
      switch (this.searchFormInline.range) {
        case "1":
          this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now);
          break;
        case "3":
          this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now - 2);
          break;
        case "6":
          this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now - 5);
          break;
        case "12":
          this.searchFormInline.startTime = new Date(this.searchFormInline.endTime).setMonth(now - 11);
          break;
        case "0":
          break;
      }
    }
  },
  methods: {
    test() {
      this.searchFormInline.range = "0"
    },
    _getComTradeList(param) {
      if (!this.searchFormInline.startTime || this.searchFormInline.startTime === undefined) {
        this.$message({
          showClose: true,
          message: '请选择起始日期',
          type: 'warning'
        });
        return;
      } else if (Date.parse(new Date(this.searchFormInline.startTime)) > Date.parse(new Date(this.searchFormInline.endTime))) {
        this.$message({
          showClose: true,
          message: '请重新选择起始日期',
          type: 'warning'
        });
        return;
      }
      getComTradeList(param).then(res => {
        if (res && res.data.items) {
          this.tradeData = res.data.items.comInOutTrade
          this.goodsData = res.data.items.comInOutGood
          this.rankData = res.data.items.comBussinessRank
        }
      })
    }
  },
  components: {
    "inout-total": InOutTotal,
    "inout-goods": InOutGoods,
    "inout-rank": InOutRank
  }
}
</script>

<style lang="scss" scoped>
.trade-wrapper {
  padding: 30px 0;

  .search-condition {
    padding: 30px 30px 20px;
    background: #eaeff6; // height: 200px;
    font-size: 0;
    border: 1px solid #d8dbe1;
  }
  .search-result {

    .title {
      height: 44px;
      line-height: 44px;
      margin-top: 7px;
      color: #222222;
      font-size: 16px;
    }
  }
}
</style>
 