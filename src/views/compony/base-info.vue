<template>
  <div>
    <div class="baseinfo-wrapper">
      <div class="search-wrapper">
        <div class="search-container">
          <form v-on:submit.prevent.stop="seachComponyInfo(componyCode)">
            <el-input class="search-input" v-on:keyup.delete.native="deleteComCode" v-model="componyCode" placeholder="请输入企业名/统一社会信用代码"></el-input>
            <el-button class="search-button" type="primary" :loading="false" v-on:click="seachComponyInfo(componyCode)">搜索</el-button>
          </form>
        </div>
      </div>
      <div class="info-wrapper">
        <el-tabs type="border-card">
          <el-tab-pane label="工商信息">
            <info-table :info="displayItem" :componyCode="componyCode" :hasSearched="hasSearched"></info-table>
          </el-tab-pane>
          <el-tab-pane label="被执行信息">
            <enforcement-info :info="displayItem" :componyCode="componyCode" :hasSearched="hasSearched"></enforcement-info>
          </el-tab-pane>
          <el-tab-pane label="企业海关注册信息">
            <register-info :info="displayItem" :componyCode="componyCode" :hasSearched="hasSearched"></register-info>
          </el-tab-pane>
          <el-tab-pane label="管理人员信息">
            <management-info :info="displayItem" :componyCode="componyCode" :hasSearched="hasSearched"></management-info>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <!--dialog-->
    <div>
      <info-dialog v-if="dialogTableVisible" :classWidth="searchWidth">
        <div class="dialog-head">
          <span class="dialog-title" v-html="dialogTitle"></span>
          <i class="el-icon-close close-icon" @click="closeComList"></i>
        </div>
        <div class="dialog-content">
          <p class="item" @click="openComItem(item)" v-for="item in comList" v-html="item"></p>
        </div>
      </info-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import infoTable from 'views/compony/info-table'
import registerInfo from 'views/compony/register-info'
import enforcementInfo from 'views/compony/enforcement-info'
import managementInfo from 'views/compony/management-info'
import Dialog from 'views/components/dialog'
import { getComList } from 'api/compony'

export default {
  name: 'base-info',
  data() {
    return {
      dialogTableVisible: false,
      componyCode: '',
      infoList: [],
      comList: [],
      hasSearched: false,
      displayItem: {},
      searchWidth: {
        "width": "430px"
      }
    }
  },
  created() {
  },
  computed: {
    dialogTitle() {
      let titleStr = '';
      if (this.componyCode) {
        titleStr = `搜索到${this.componyCode}有${this.infoList.length}条结果`.replace(new RegExp('(' + this.componyCode + ')', 'g'), ' “<font color="#077fef">$1</font>” ')
      } else {
        titleStr = `搜索到  有  条结果`
      }
      return titleStr;
    }
  },
  components: {
    'info-table': infoTable,
    'info-dialog': Dialog,
    registerInfo,
    enforcementInfo,
    managementInfo
  },
  methods: {
    deleteComCode() {
      this.hasSearched = false;
    },
    openComItem(name) {
      let item = {};
      for (let i = 0; i < this.infoList.length; i++) {
        if (this.infoList[i].name === name) {
          item = this.infoList[i]
        }
      }
      this.displayItem = item;
      if (this.dialogTableVisible) {
        this.dialogTableVisible = false;
      }
    },
    seachComponyInfo(val) {
      if (!val) { return }
      getComList(val).then(res => {
        this.infoList = res.data.items;
        if (!this.infoList || this.infoList.length === 0) {
          this.infoList = [];
          this.displayItem = {};
          if (!this.componyCode) {
            this.hasSearched = false;
          } else {
            this.hasSearched = true;
          }
        } else {
          if (this.infoList.length > 1) {
            var listArr = [];
            this.dialogTableVisible = true;
            this.infoList.forEach(item => {
              item.name = item.name.replace(new RegExp('(' + this.componyCode + ')', 'g'), ' “<font color="#077fef">$1</font>” ')
              listArr.push(item.name)
            })
            this.comList = listArr;
          } else {
            this.displayItem = this.infoList[0];
          }
        }
        // console.log(this.displayItem);
      }).catch(err => {
        this.hasSearched = true;
        this.displayItem = {};
      })
    },
    closeComList() {
      this.dialogTableVisible = false;
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../styles/btn.scss';

.baseinfo-wrapper {
  margin: 30px 0; // border: 1px solid #d8dbe1;
  .search-wrapper {
    height: 80px;
    border: 1px solid #d8dce0;
    background: #eaeff6;

    .search-container {
      width: 460px;
      height: 40px;
      margin: 20px auto;
      font-size: 0;

      .search-input {
        display: inline-block;
        width: 356px;
      }

      .search-button {
        display: inline-block;
        width: 104px;
      }
    }
  }

  .info-wrapper {
    margin: 20px 0;
    background: #eaeff6;
  }

  .componyInfoList {
    height: 100px;
  }
}

.dialog-head {
  border-bottom: 1px solid #d8dbe1;
  .dialog-title {
    text-align: left;
    line-height: 30px;
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
  padding: 20px 0;
  max-height: 300px;
  overflow: auto;
  p {
    height: 40px;
    line-height: 40px;
    color: #222;
    font-size: 15px;
    border-bottom: 1px solid #d8dbe1;
    &:hover {
      background: #d8dbe1;
    }
  }
}

</style>
 