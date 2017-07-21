<template>
  <div class="industry-wrapper">
    <div class="search-condition">
      <el-form :inline="true" :model="searchFormInline" class="demo-form-inline">
        <el-form-item label="选择商品：" style="margin-right:30px">
          <el-select v-model="valueType" multiple placeholder="请选择" style="width:364px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
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
            <span class="demonstration">起始日期：</span>&nbsp;&nbsp;
            <el-date-picker @click.native="test" v-model="searchFormInline.startTime" type="month" placeholder="选择起始月" :picker-options="pikerOptionsAfter">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="block">
            <span class="demonstration" style="margin-left:192px">结束日期：&nbsp;&nbsp;</span>
            <el-date-picker v-model="searchFormInline.endTime" type="month" placeholder="选择结束月" :picker-options="pikerOptionsAfter">
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item style="margin-left: 30px">
          <el-button type="primary" @click.native="_getGoodsInfo(normalizeParams)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="search-result">
      <div style="width: 100%; height: 30px"></div>
      <div class="content">
        <el-tabs type="border-card">
          <el-tab-pane label="商品名称">
            <inout-goods :tradeData="goods" :options="optionsVal"></inout-goods>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getIndustryInfo } from 'api/industry'
import inOutGoods from './in-out-goods'

export default {
  data() {
    return {
      goods: [],
      searchFormInline: {
        name: [],
        range: '1',
        startTime: '',
        endTime: new Date().setMonth(new Date().getMonth() - 1)
      },
      dateNow: new Date(),
      pikerOptionsAfter: {
        disabledDate(time) {
          return time.getTime() >= Date.now() - 8.64e7 * 30
        }
      },
      options: [{
        value: '萝卜',
        label: '萝卜'
      }, {
        value: '绿豆',
        label: '绿豆'
      }, {
        value: '水蜜桃',
        label: '水蜜桃'
      }, {
        value: '罂粟',
        label: '罂粟'
      }, {
        value: '玫瑰',
        label: '玫瑰'
      },{
        value: '白百合',
        label: '白百合'
      },{
        value: '蘑菇菌丝',
        label: '蘑菇菌丝'
      },{
        value: '种百合球茎',
        label: '种百合球茎'
      },{
        value: '种用玫瑰',
        label: '种用玫瑰'
      },{
        value: '菊花plus',
        label: '菊花plus'
      }],
      valueType: [],
      optionsVal: []
    }
  },
  created() {
  },
  computed: {
    normalizeParams() {
      let param = {};
      param.name = this.value5;
      if (this.searchFormInline.startTime) {
        param.startTime = new Date(this.searchFormInline.startTime).setDate(1);
      }
      if (this.searchFormInline.endTime) {
        param.endTime = new Date(this.searchFormInline.endTime).setDate(30);
      }
      return param;
    }
  },
  methods: {
    test() {
      this.searchFormInline.range = "0"
    },
    _getGoodsInfo(param) {
      getIndustryInfo(this.searchFormInline).then(res => {
        this.goods = res.data.goods;
        this.optionsVal = this.valueType;
      })
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
  components: {
    'inout-goods': inOutGoods
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
  }
}
</script>

<style lang="scss">
.industry-wrapper {
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
 