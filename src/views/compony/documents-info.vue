<template>
  <div class="fullpage">
    <el-tabs type="border-card">
      <el-tab-pane label="报关单查询">
        <div class="baoguandan-container">
          <el-form :label-position="labelPosition" label-width="110px" :model="formLabelAlign_b" ref="bForm">
            <el-form-item label="报关单号：" prop="name">
              <el-input v-model="formLabelAlign_b.name" placeholder="报关单单号"></el-input>
            </el-form-item>
            <el-form-item label="查询验证码：" prop="region">
              <el-input v-model="formLabelAlign_b.region" placeholder="请输入验证码" style="width:60%"></el-input>
              <div class="verify-code">
                <el-button style="background:#000;color:#fff">VERIFYCODE</el-button>
              </div>
            </el-form-item>
            <el-form-item label="">
              <el-button @click.native="resetForm('bForm')">&nbsp;&nbsp;&nbsp;重置&nbsp;&nbsp;&nbsp;</el-button>
              <el-button type="primary" @click="fetchToResult">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
            <!--<div class="tag-font">结关环节：已结关</div>-->
          </el-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="舱单查询">
        <div class="cangdan-container">
          <el-form :label-position="labelPosition" label-width="138px" :model="formLabelAlign_c" ref="cForm">
            <el-form-item label="舱单查询方式：" prop="typeValue">
              <el-select v-model="formLabelAlign_c.typeValue" placeholder="按舱单信息查询" style="width: 100%">
                <el-option v-for="item in formLabelAlign_c.typeOptions" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="主要海关：" prop="mainCustom" v-show="selectType==='C'">
              <el-input v-model="formLabelAlign_c.mainCustom" style="width: 30%" :disabled="true"></el-input>
              <el-select v-model="formLabelAlign_c.mainCustom" placeholder="" style="position:absolute; top:0; right: 0; width: 65%">
                <el-option v-for="item in formLabelAlign_c.customs" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="舱单类型：" prop="cangdanVal" v-show="selectType==='C'">
              <el-select v-model="formLabelAlign_c.cangdanVal" placeholder="请选择运输方式" style="width: 100%">
                <el-option v-for="item in formLabelAlign_c.cangdanList" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="飞机编号：" prop="airportCode" v-show="selectType==='C'">
              <el-input v-model="formLabelAlign_c.airportCode" placeholder="请输入飞机编号"></el-input>
            </el-form-item>
            <el-form-item label="航班号：" prop="airportNumber" v-show="selectType==='C'">
              <el-input v-model="formLabelAlign_c.airportNumber" placeholder="请输入航班号"></el-input>
            </el-form-item>
            <el-form-item label="提运单号：" prop="extractNumber" v-show="selectType==='C'">
              <el-input v-model="formLabelAlign_c.extractNumber" placeholder="请输入提运单号"></el-input>
            </el-form-item>
            <el-form-item label="转关单预录入号码：" prop="preLogtNumber" v-show="selectType==='Z'">
              <el-input v-model="formLabelAlign_c.preLogtNumber" placeholder="请输入转关单预录入号码"></el-input>
            </el-form-item>
            <el-form-item label="查询验证码：">
              <el-input v-model="formLabelAlign_c.verifycode" placeholder="请输入验证码" style="width:60%"></el-input>
              <div class="verify-code">
                <el-button style="background:#000;color:#fff">VERIFYCODE</el-button>
              </div>
            </el-form-item>
            <el-form-item label="">
              <el-button @click="resetForm('cForm')">&nbsp;&nbsp;&nbsp;重置&nbsp;&nbsp;&nbsp;</el-button>
              <el-button type="primary">&nbsp;&nbsp;&nbsp;查询&nbsp;&nbsp;&nbsp;</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign_b: {
        name: '',
        region: '',
        type: '',
        verifycode: ''
      },
      formLabelAlign_c: {
        name: '',
        type: '',
        region: '',
        type: '',
        mainCustom: '0000',
        customs: [{
          value: '0000',
          label: '海关总署'
        }, {
          value: '0001',
          label: '天津海关'
        }, {
          value: '0002',
          label: '杭州海关'
        }, {
          value: '0003',
          label: '天津海关'
        }, {
          value: '0004',
          label: '上海海关'
        }],
        cangdanVal: '',
        cangdanList: [
          {
            value: '001',
            label: '航空运输'
          },
          {
            value: '002',
            label: '江海运输'
          },
          {
            value: '003',
            label: '汽车运输'
          },
          {
            value: '004',
            label: '铁路运输'
          },
          {
            value: '005',
            label: '邮件运输'
          }
        ],
        airportCode: '',
        airportNumber: '',
        extractNumber: '',
        verifycode: '',
        typeValue: '按舱单信息查询',
        typeOptions: [{
          value: 'cangdan',
          label: '按舱单信息查询'
        }, {
          value: 'zhuanguandan',
          label: '按转关单号码查询'
        }],
        preLogtNumber: ''
      }
    }
  },
  computed: {
    selectType() {
      if (this.formLabelAlign_c.typeValue === "zhuanguandan") {
        return 'Z';
      } else {
        return 'C';
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    fetchToResult() {
      this.$router.push('documents-result')
    }
  }
}
</script>

<style lang="scss">
.fullpage {
  margin-top: 30px;

  .baoguandan-container {
    margin: 60px auto;
    width: 440px;
  }

  .verify-code {
    position: absolute;
    top: 0;
    right: 0;
    background: #000;
    color: #fff;
  }

  .tag-font {
    font-size: 20px;
    color: #077fef;
    margin: 60px 0 0 110px;
  }

  .cangdan-container {
    margin: 60px auto;
    width: 440px;
  }
}
</style>
 