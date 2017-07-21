<template>
  <div class="info-wrapper">
    <el-tabs type="border-card">
      <el-tab-pane label="最新排名">
        <div class="rank">
          <div class="tips" @click="slength=!slength">▼ 更多</div>
          <el-table :data="displayData" style="width: 100%">
            <el-table-column prop="name" label="重点商品企业排行榜">
            </el-table-column>
          </el-table>
          <div style="height: 30px"></div>
          <el-table :data="otherData" style="width: 100%">
            <el-table-column prop="name" label="主要贸易方式企业排行榜">
            </el-table-column>
          </el-table>
          <div style="height: 30px"></div>
          <el-table :data="otherData" style="width: 100%">
            <el-table-column prop="name" label="主要地区进出口企业排行榜">
            </el-table-column>
          </el-table>
          <div style="height: 30px"></div>
          <el-table :data="otherData" style="width: 100%">
            <el-table-column prop="name" label="对主要国家（地区）出口企业百强排行榜">
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="宏观数据">
        <div class="data">
          <div class="item">
            <div class="title">2017年进出口简要情况</div>
            <div class="content">
              <ul>
                <li class="contentItem">01月</li>
                <li class="contentItem">02月</li>
                <li class="contentItem">03月</li>
                <li class="contentItem">04月</li>
                <li class="contentItem">05月</li>
                <li class="contentItem">06月</li>
                <li class="contentItem">07月</li>
                <li class="contentItem">08月</li>
                <li class="contentItem">09月</li>
                <li class="contentItem">10月</li>
                <li class="contentItem">11月</li>
                <li class="contentItem">12月</li>
              </ul>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="" :visible.sync="dialogTableVisible">
      <div class="detail-wrapper">
        <p class="title">2016年下半年我国机电产品进口企业百强榜</p>
        <p class="desc">发布时间：
          <span>2017-06-02</span>
        </p>
        <div class="content">
          <img src="./info-rank.png" width="480" height="490" alt="">
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      dialogTableVisible: false,
      slength: true,
      tableData: [
        {
          name: '▷ 2016年下半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年下半年我国高新技术产品出口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国几点产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国几点产品出口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }, {
          name: '▷ 2016年上半年我国高新技术产品进口企业百强榜'
        }
      ]
    }
  },
  computed: {
    displayData() {
      if (this.slength) {
        return this._normalizeInfo()
      }
      else {
        return this.tableData
      }
    },
    otherData() {
      return this._normalizeInfo()
    }
  },
  methods: {
    _normalizeInfo() {
      return this.tableData.slice(0, 5)
    },
    _initItemClick() {
      let list = document.querySelectorAll('tr');
      let self = this;
      list.forEach((item, index) => {
        if (index) {
          item.addEventListener('click', function () {
            self.dialogTableVisible = true;
          })
        }
      })
    }
  },
  watch: {
    displayData(newVal) {
      if (newVal) {
        let self = this
        setTimeout(function () {
          self._initItemClick()
        }, 20)
      }
    }
  },
  mounted() {
    this._initItemClick()
  }
}
</script>

<style lang="scss">
.info-wrapper {
  padding-top: 50px;

  .el-table__body-wrapper {
    padding-top: 0;
  }

  .rank {
    margin: 30px;
    position: relative;

    .tips {
      position: absolute;
      right: 20px;
      top: 14px;
      z-index: 99;
      font-size: 13px;
      color: #222;

      &:hover {
        color: #077fef;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .data {
    margin: 30px;

    .item {
      border-top: 1px solid #d8dbe1;
      border-left: 1px solid #d8dbe1;

      .title {
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        background: #eaeff6;
        border-bottom: 1px solid #d8dbe1;
        border-right: 1px solid #d8dbe1;
      }

      .content {
        height: 40px;
        line-height: 40px;
        background: #f9fafc;
        border-bottom: 1px solid #d8dbe1;
        border-right: 1px solid #d8dbe1;

        .contentItem {
          float: left;
          width: 8.15%;
          text-align: center;
        }
      }
    }
  }

  .detail-wrapper {

    .title {
      font-size: 18px;
      color: #222222;
      text-align: center;
    }

    .desc {
      font-size: 14px;
      color: #222222;
      text-align: center;
      line-height: 40px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
    }

    .content {
      width: 500px;
      margin: 0 auto;
      padding: 40px 0;
    }
  }
}
</style>
 