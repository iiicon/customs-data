<template>
  <div class="industry-wrapper">
    <div class="search-condition">
      <el-form :inline="true" :model="searchFormInline" class="demo-form-inline">
        <el-form-item label="行业选择：" style="margin-right:30px">
          <el-select v-model="value5" multiple placeholder="请选择" style="width:364px">
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
          <el-button type="primary" @click.native="_getIndustryInfo(normalizeParams)">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
        </el-form-item>
      </el-form>
      </div>
      <div class="search-result">
        <div style="width: 100%; height: 30px"></div>
        <div class="content">
          <el-tabs type="border-card">
            <el-tab-pane label="行业总值信息">
              <inout-trading :tradeData="industry" :options="optionsVal" :types="1"></inout-trading>
            </el-tab-pane>
            <el-tab-pane label="关区信息">
              <inout-trading :tradeData="customs" :options="optionsVal" :types="2"></inout-trading>
            </el-tab-pane>
            <el-tab-pane label="产销国信息">
              <inout-trading :tradeData="cuntry" :options="optionsVal" :types="3"></inout-trading>
            </el-tab-pane>
            <el-tab-pane label="收发货省份信息">
              <inout-trading :tradeData="province" :options="optionsVal" :types="4"></inout-trading>
            </el-tab-pane>
          </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getIndustryInfo } from 'api/industry'
import InOutTrading from 'views/trading/in-out-trading'

export default {
  data() {
    return {
      tags: [
        { name: '标签二', type: 'gray' },
        { name: '标签三', type: 'primary' },
      ],
      industry: [],
      customs: [],
      cuntry: [],
      province: [],
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
        value: '农业',
        label: '农业'
      }, {
        value: '林业',
        label: '林业'
      }, {
        value: '畜牧业',
        label: '畜牧业'
      }, {
        value: '渔业',
        label: '渔业'
      }, {
        value: '服务业',
        label: '服务业'
      }],
      value5: [],
      optionsVal: []
    }
  },
  created() {
    // console.log(this.value5)
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
    _getIndustryInfo(param) {
      getIndustryInfo(this.searchFormInline).then(res => {
        this.industry = res.data.industry;
        this.customs = res.data.customs;
        this.cuntry = res.data.cuntry;
        this.province = res.data.province;
        this.optionsVal = this.value5;
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
    "inout-trading": InOutTrading
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
}
</script>

<style lang="scss" scoped>
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
 