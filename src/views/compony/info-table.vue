<template>
  <div>
    <!--<div>{{info || ''}}</div>-->
    <div class="infotable-wrapper" v-if="hasResult">
      <div class="info-list">
        <h2 class="title">{{info.info.base.title || ''}}</h2>
        <ul class="item-info">
          <li class="item">
            <div class="item-key">统一社会信用代码</div>
            <div class="item-value">{{info.creditNumber || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">法定代表人</div>
            <div class="item-value">{{info.info.base.data[0].lagelRepresident || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">登记机关</div>
            <div class="item-value">{{info.info.base.data[0].registerOrganization || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">成立日期</div>
            <div class="item-value">{{info.info.base.data[0].setupDate || ''}}</div>
          </li>
        </ul>
      </div>
      <div class="info-list">
        <h2 class="title">{{info.info.yingyezhizhao.title || ''}}</h2>
        <ul class="item-info">
          <li class="item">
            <div class="item-key">统一社会信用代码</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].creditCode || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">法定代表人</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].lagelRepresident || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">类型</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].type || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">注册资本</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].registerCapital || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">成立日期</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].setupDate || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">登记状态</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].registerState || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">营业期限自</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].operateFrom || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">营业期限至</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].operateEnd || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">登记机关</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].registerOrganization || ''}}</div>
          </li>
          <li class="item">
            <div class="item-key">核准日期</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].approveDate || ''}}</div>
          </li>
          <li class="item lang">
            <div class="item-key">住所</div>
            <div class="item-value">{{info.info.yingyezhizhao.data[0].address || ''}}</div>
          </li>
          <li class="item lang" style="height: auto; background: #e9f0f5">
            <div class="item-key">经营范围</div>
            <div class="item-value" style="height: auto; overflow: auto;word-wrap: break-word; word-break: normal; ">{{info.info.yingyezhizhao.data[0].operateScope || ''}}</div>
          </li>
        </ul>
      </div>
      <div class="info-list">
        <h2 class="title">{{info.info.xingzhengchufa.title || ''}}</h2>
        <ul class="item-info">
          <li class="head">
            <span style="width: 5%">序</span>
            <span style="width: 17%">决定书文号</span>
            <span style="width: 17%">违法行为类型</span>
            <span style="width: 17%">行政处罚内容</span>
            <span style="width: 17%">决定机关名称</span>
            <span style="width: 11%">处罚决定日期</span>
            <span style="width: 11%">公示日期</span>
            <span style="width: 5%">查看</span>
          </li>
          <li class="content">
            <span style="width: 5%">{{info.info.xingzhengchufa.data[0].index || ''}}</span>
            <span style="width: 17%">{{info.info.xingzhengchufa.data[0].decisionBookNumber || ''}}</span>
            <span style="width: 17%">{{info.info.xingzhengchufa.data[0].illegalType || ''}}</span>
            <span style="width: 17%">{{info.info.xingzhengchufa.data[0].administrativePenaltiesContent || ''}}</span>
            <span style="width: 17%">{{info.info.xingzhengchufa.data[0].decisionOrganization || ''}}</span>
            <span style="width: 11%">{{info.info.xingzhengchufa.data[0].penaltyDecisionDate || ''}}</span>
            <span style="width: 11%">{{info.info.xingzhengchufa.data[0].publicDate || ''}}</span>
            <span style="width: 5%" class="toview" @click="openToView">{{info.info.xingzhengchufa.data[0].toView.title || ''}}</span>
          </li>
        </ul>
      </div>
      <div class="info-list">
        <h2 class="title">{{info.info.jingyinyichang.title || ''}}</h2>
        <ul class="item-info">
          <li class="head">
            <span style="width: 5%">序</span>
            <span style="width: 17%">列入经营异常名录原因</span>
            <span style="width: 17%">列入日期</span>
            <span style="width: 17%">做出决定机关（列入）</span>
            <span style="width: 17%">移出经营异常名录原因</span>
            <span style="width: 11%">移出日期</span>
            <span style="width: 16%">做出决定机关（移出）</span>
          </li>
          <li class="content">
            <span style="width: 5%">{{info.info.jingyinyichang.data[0].index || ''}}</span>
            <span style="width: 17%">{{info.info.jingyinyichang.data[0].oddResion || ''}}</span>
            <span style="width: 17%">{{info.info.jingyinyichang.data[0].pushDate || ''}}</span>
            <span style="width: 17%">{{info.info.jingyinyichang.data[0].decisionOrganization || ''}}</span>
            <span style="width: 17%">{{info.info.jingyinyichang.data[0].popResion || ''}}</span>
            <span style="width: 11%">{{info.info.jingyinyichang.data[0].popDate || ''}}</span>
            <span style="width: 16%">{{info.info.jingyinyichang.data[0].popOranization || ''}}</span>
          </li>
        </ul>
      </div>
      <div class="info-list">
        <h2 class="title">{{info.info.yanzhongweifa.title || ''}}</h2>
        <ul class="item-info">
          <li class="head">
            <span style="width: 5%">序</span>
            <span style="width: 10%">类型</span>
            <span style="width: 17%">列入经营异常名录原因</span>
            <span style="width: 10%">列入日期</span>
            <span style="width: 17%">做出决定机关（列入）</span>
            <span style="width: 17%">移出严重违法失信企业名单(黑名单)原因</span>
            <span style="width: 10%">移出日期</span>
            <span style="width: 14%">做出决定机关（移出）</span>
          </li>
          <li class="content">
            <span style="width: 5%">{{info.info.yanzhongweifa.data[0].index || ''}}</span>
            <span style="width: 10%">{{info.info.yanzhongweifa.data[0].type || ''}}</span>
            <span style="width: 17%">{{info.info.yanzhongweifa.data[0].oddResion || ''}}</span>
            <span style="width: 10%">{{info.info.yanzhongweifa.data[0].pushDate || ''}}</span>
            <span style="width: 17%">{{info.info.yanzhongweifa.data[0].decisionOrganization || ''}}</span>
            <span style="width: 17%">{{info.info.yanzhongweifa.data[0].popResion || ''}}</span>
            <span style="width: 10%">{{info.info.yanzhongweifa.data[0].popDate || ''}}</span>
            <span style="width: 14%">{{info.info.yanzhongweifa.data[0].popOranization || ''}}</span>
          </li>
        </ul>
      </div>
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
            <span class="key">决定书文号</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.decisionBookNumber || ''}}</span>
          </div>
          <div class="item">
            <span class="key">名称</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.name || ''}}</span>
          </div>
          <div class="item">
            <span class="key">违法行为类型</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.illegalType || ''}}</span>
          </div>
          <div class="item">
            <span class="key">行政处罚内容</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.administrativePenaltiesContent || ''}}</span>
          </div>
          <div class="item">
            <span class="key">决定机关名称</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.decisionOrganization || ''}}</span>
          </div>
          <div class="item">
            <span class="key">处罚决定日期</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.penaltyDecisionDate || ''}}</span>
          </div>
          <div class="item">
            <span class="key">公示日期</span>
            <span class="value">{{info.info.xingzhengchufa.data[0].toView.content.publicDate || ''}}</span>
          </div>
        </div>
      </info-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6" scoped>
import Dialog from 'views/components/dialog'

export default {
  name: 'info-table',
  data() {
    return {
      componyList: [],
      dialogTableVisible: false,
      toViewWidth: {
        "width": "750px"
      }
    }
  },
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
  created() {
    // console.log(this.info)
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
    },
    dialogTitle() {
      return
    }
  },
  components: {
    "info-dialog": Dialog
  },
  methods: {
    openToView() {
      this.dialogTableVisible = true;
    },
    closeComList() {
      this.dialogTableVisible = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.infotable-wrapper {
  padding: 20px;

  .info-list {
    padding-bottom: 12px;

    .title {
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      color: #000;
    }

    .item-info {
      overflow: hidden;
      border-left: 1px solid #d8dbe1;
      border-top: 1px solid #d8dbe1;

      .item {
        float: left;
        width: 50%;
        height: 40px;
        font-size: 0;
        overflow: hidden;
        border-right: 1px solid #d8dbe1;
        border-bottom: 1px solid #d8dbe1;
        &.lang {
          width: 100%;
          .item-key {
            width: 20%;
          }
          .item-value {
            width: 80%;
          }
        } // border-top: 1px solid #d8dbe1;
        // &:nth-last-child(2) {
        //   width: 100%;
        // }
        .item-key {
          display: inline-block;
          vertical-align: top;
          width: 40%;
          height: 40px;
          line-height: 40px;
          padding-right: 16px;
          text-align: right;
          font-size: 14px;
          background: #eaeff6;
          color: #555;
          border-right: 1px solid #d8dbe1;
        }
        .item-value {
          display: inline-block;
          vertical-align: top;
          width: 60%;
          height: 40px;
          line-height: 40px;
          padding-left: 16px;
          font-size: 14px;
          background: #f9fafc;
        }
      }

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
        }
      }

      .content {
        display: table;
        width: 100%;
        min-height: 80px;
        font-size: 0;
        background: #f9fafc;
        border-bottom: 1px solid #d8dbe1;

        span {
          display: table-cell;
          vertical-align: middle;
          overflow: hidden;
          height: 100%;
          min-height: 80px;
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

.dialog-head {
  border-bottom: 1px solid #d8dbe1;
  .dialog-title {
    text-align: left;
    line-height: 30px;
    color: #222;
    font-size: 16px;
  }
  .close-icon {
    float: right;
    color: #ccc;
    border-radius: 50%;
    padding: 5px;
    box-sizing: border-box;
    font-size: 14px;
    border: 1px solid #ccc;
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
</style>
 