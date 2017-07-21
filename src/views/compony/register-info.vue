<template>
  <div>
    <!--<div>{{info.registerInfo}}</div>-->
    <div class="info-wrapper" v-if="hasResult">
      <ul class="item-container">
        <div class="col">
          <li class="item">
            <span class="key">企业名称</span>
            <span class="value">{{info.registerInfo.name}}</span>
          </li>
          <li class="item">
            <span class="key">企业代码</span>
            <span class="value">{{info.registerInfo.componyCode}}</span>
          </li>
        </div>
        <div class="col">
          <li class="item">
            <span class="key">海关企业分类</span>
            <span class="value">{{info.registerInfo.componyType}}</span>
          </li>
          <li class="item">
            <span class="key">企业资信标志</span>
            <span class="value">{{info.registerInfo.componySymbol}}</span>
          </li>
        </div>
        <div class="col">
          <li class="item">
            <span class="key">企业评分</span>
            <span class="value">{{info.registerInfo.componyScore}}</span>
          </li>
          <li class="item">
            <span class="key">地址</span>
            <span class="value">{{info.registerInfo.address}}</span>
          </li>
        </div>
        <div class="col">
          <li class="item">
            <span class="key">邮政编码</span>
            <span class="value">{{info.registerInfo.zipCode}}</span>
          </li>
          <li class="item">
            <span class="key">联系电话</span>
            <span class="value">{{info.registerInfo.telephone}}</span>
          </li>
        </div>
        <div class="col">
          <li class="item">
            <span class="key">开户银行</span>
            <span class="value">{{info.registerInfo.openAcountBank}}</span>
          </li>
          <li class="item">
            <span class="key">开户账号</span>
            <span class="value">{{info.registerInfo.openAcountNumber}}</span>
          </li>
        </div>
      </ul>
    </div>
    <div class="info-none" v-if="!hasResult">
      <div class="icon"></div>
      <p class="content" v-if="!isSearch">还没有内容</p>
      <p class="content" v-if="isSearch">没有搜索到
        <font color="#077fef">“{{componyCode}}”</font>的信息</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    info: {
      type: Object,
      default: function () {
        return {}
      }
    },
    componyCode: {
      type: String,
      default: ''
    },
    hasSearched: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasResult() {
      if (this.info !== null && this.info.name) {
        return true;
      }
      return false;
    },
    isSearch() {
      if (this.componyCode && this.componyCode !== undefined && this.hasSearched && !this.hasResult) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.info-wrapper {
  padding: 20px;

  .item-container {
    overflow: hidden;
    border-left: 1px solid #d8dbe1;
    border-top: 1px solid #d8dbe1;

    .col {
      min-height: 40px;
      height: 40px;
      font-size: 0;
      // overflow: hidden;

      .item {
        display: inline-block;
        vertical-align: top;
        height: 100%;
        width: 50%;
        line-height: 40px;
        font-size: 14px;
        border-bottom: 1px solid #d8dbe1;

        .key {
          float: left;
          width: 30%;
          height: 100%;
          padding-right: 10px;
          text-align: right;
          background: #eaeff6;
          border-right: 1px solid #d8dbe1;
        }

        .value{
          float: left;
          width: 70%;
          height: 100%;
          padding-left: 10px;
          text-align: left;
          background: #f9fafc;
          border-right: 1px solid #d8dbe1
        }
      }
    }
  }
}
.info-none {
  min-height: 360px;

  .icon {
    width: 128px;
    height: 140px;
    margin: 100px auto 0;
    background: url(./none-default.png) no-repeat;
    background-size: contain;
  }

  .content {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 16px;
    color: #555;
  }
}
</style>
