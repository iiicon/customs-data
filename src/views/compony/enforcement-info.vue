<template>
  <div>
    <!--<div>{{info.enforcementInfo}}</div>-->
    <!--<div>{{viewData}}</div>-->
    <div class="info-wrapper" v-if="hasResult">
      <ul class="table-container">
        <li class="head">
          <span style="width:8%">序</span>
          <span style="width:28%">被执行人姓名/名称</span>
          <span style="width:28%">立案事件</span>
          <span style="width:28%">案号</span>
          <span style="width:8%">查看</span>
        </li>
        <li class="content" v-for="item in info.enforcementInfo">
          <span style="width:8%">{{item.index}}</span>
          <span style="width:28%">{{item.enforcementName}}</span>
          <span style="width:28%">{{item.eventTime}}</span>
          <span style="width:28%">{{item.eventCode}}</span>
          <span class="toview" style="width:8%;" @click="openToView(item.toView.content)">{{item.toView.title}}</span>
        </li>
      </ul>
    </div>
    <div class="info-none" v-if="!hasResult">
      <div class="icon"></div>
      <p class="content" v-if="!isSearch">还没有内容</p>
      <p class="content" v-if="isSearch">没有搜索到
        <font color="#077fef">“{{componyCode}}”</font>的信息</p>
    </div>
    <!--dialog-->
    <div>
      <info-dialog v-if="dialogTableVisible" :classWidth="toViewWidth">
        <div class="dialog-head">
          <span class="dialog-title" v-html="info.info.xingzhengchufa.title"></span>
          <i class="el-icon-close close-icon" @click="closeComList"></i>
        </div>
        <div class="dialog-content">
          <div class="item">
            <span class="key">被执行人姓名</span>
            <span class="value">{{viewData.enforcementName || ''}}</span>
          </div>
          <div class="item">
            <span class="key">身份号码/组织机构代码</span>
            <span class="value">{{viewData.Idcard || ''}}</span>
          </div>
          <div class="item">
            <span class="key">法定代表人或者负责人姓名</span>
            <span class="value">{{viewData.lagelRepresident || ''}}</span>
          </div>
          <div class="item">
            <span class="key">省份</span>
            <span class="value">{{viewData.province || ''}}</span>
          </div>
          <div class="item">
            <span class="key">执行依据文号</span>
            <span class="value">{{viewData.decisionBookNumber || ''}}</span>
          </div>
          <div class="item">
            <span class="key">立案时间</span>
            <span class="value">{{viewData.eventTime || ''}}</span>
          </div>
          <div class="item">
            <span class="key">案号</span>
            <span class="value">{{viewData.eventCode || ''}}</span>
          </div>
          <div class="item">
            <span class="key">做出执行依据单位</span>
            <span class="value">{{viewData.decisionOrganizition || ''}}</span>
          </div>
          <div class="item">
            <span class="key">生效法律文书确定的义务</span>
            <span class="value">{{viewData.obligation || ''}}</span>
          </div>
          <div class="item">
            <span class="key">被执行人的履行情况</span>
            <span class="value">{{viewData.extentioned || ''}}</span>
          </div>
          <div class="item">
            <span class="key">失信被执行人行为具体情况</span>
            <span class="value">{{viewData.details || ''}}</span>
          </div>
          <div class="item">
            <span class="key">发布时间</span>
            <span class="value">{{''}}</span>
          </div>
        </div>
      </info-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Dialog from 'views/components/dialog'

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
  data() {
    return {
      viewData: {},
      dialogTableVisible: false,
      toViewWidth: {
        "width": "750px"
      }
    }
  },
  components: {
    "info-dialog": Dialog
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
  },
  created() {
    // console.log(this.hasResult)
    // console.log(this.isSearch)
  },
  methods: {
    openToView(item) {
      this.dialogTableVisible = true;
      this.viewData = item;
    },
    closeComList() {
      this.dialogTableVisible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.info-wrapper {
  padding: 20px;

  .table-container {
    overflow: hidden;
    border-left: 1px solid #d8dbe1;
    border-top: 1px solid #d8dbe1;

    .head {
      display: table;
      width: 100%;
      height: 40px;
      font-size: 0;
      background: #eaeff6;
      border-bottom: 1px solid #d8dbe1;

      span {
        display: table-cell;
        vertical-align: middle;
        overflow: hidden;
        height: 40px;
        font-size: 14px;
        text-align: center;
        border-right: 1px solid #d8dbe1;
        font-size: 14px;
        color: #555;
      }
    }

    .content {
      display: table;
      width: 100%;
      min-height: 42px;
      font-size: 0;
      background: #f9fafc;
      border-bottom: 1px solid #d8dbe1;

      &:hover {
        background: #eeeeee;
      }

      span {
        display: table-cell;
        vertical-align: middle;
        overflow: hidden;
        height: 40px;
        font-size: 14px;
        text-align: center;
        border-right: 1px solid #d8dbe1;
        font-size: 14px;

        &.toview {
          color: #077fef;

          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.dialog-content {
  margin: 30px 10px 10px;
  overflow: auto;
  border-top: 1px solid #d8dbe1;
  border-left: 1px solid #d8dbe1;
  .item {
    height: 40px;
    line-height: 40px;
    color: #222;
    font-size: 0;

    span {
      display: inline-block;
      vertical-align: top;
      height: 100%;
      border-right: 1px solid #d8dbe1;
      border-bottom: 1px solid #d8dbe1;

      &.key {
        width: 30%;
        padding-right: 10px;
        text-align: right;
        font-size: 15px;
        background: #eaeff6;
        color: #666666;
      }

      &.value {
        width: 70%;
        background: #f9fafc;
        padding-left: 10px;
        text-align: left;
        font-size: 15px;
        color: #222;
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

