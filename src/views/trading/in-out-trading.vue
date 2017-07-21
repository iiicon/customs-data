<template>
  <div class="total" style="position:relative">
    <!--<div>{{tradeData}}</div>-->
    <el-table :data="normalizeTradeData" border show-summary style="width: 100%" ref="tables">
      <el-table-column prop="name" :label="labelName" width="90">
      </el-table-column>
      <el-table-column prop="outAmount" sortable label="出口金额" align="right">
      </el-table-column>
      <el-table-column prop="inAmount" sortable label="进口金额" align="right">
      </el-table-column>
      <el-table-column prop="inOutAmount" sortable label="进出口金额" align="right">
      </el-table-column>
      <el-table-column prop="YOYout" sortable label="出口金额同比" align="right">
      </el-table-column>
      <el-table-column prop="YOYin" sortable label="进口金额同比" align="right">
      </el-table-column>
      <el-table-column prop="YOYinout" sortable label="进出口金额同比" align="right">
      </el-table-column>
      <el-table-column prop="MOMout" sortable label="出口金额环比" align="right">
      </el-table-column>
      <el-table-column prop="MOMin" sortable label="进口金额环比" align="right">
      </el-table-column>
      <el-table-column prop="MOMinout" sortable label="进出口金额环比" align="right">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tradeData: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Array,
      default() {
        return []
      }
    },
    types: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      colActiveIndex: '',
      colActive: 'colActive',
      data: [],
      labelName: ''
    };
  },
  computed: {
    normalNameArr() {
      if (this.types == 1) {
        this.labelName = '行业'
        return ['农业', '林业', '畜牧业', '渔业', '服务业']
      } else if (this.types == 2) {
        this.labelName = '关区'        
        return ['北京海关', '天津海关', '杭州海关', '广州海关', '上海海关']
      } else if (this.types == 3) {
        this.labelName = '国家'        
        return ['韩国', '马来西亚', '泰国', '以色列', '爱尔兰']
      } else if (this.types == 4) {
        this.labelName = '省份'        
        return ['河北省', '浙江省', '海南省', '山东省', '辽宁省']
      }
    },
    normalizeTradeData() {
      let arr = [];

      for (var i = 0; i < this.tradeData.length; i++) {
        let val = this.tradeData[i]
        for (var key in val) {
          if (key !== 'time') {
            if (val[key]) {
              val[key].name = key
            }
            arr.push(val[key])
          }
        }
      }

      // let nameArr = ['农业', '林业', '畜牧业', '渔业', '服务业']
      let norArr = []
      this.normalNameArr.forEach(item => {
        let obj = {
          name: '',
          outAmount: 0,
          inAmount: 0,
          inOutAmount: 0,
          YOYout: '',
          YOYin: '',
          YOYinout: '',
          MOMout: '',
          MOMin: '',
          MOMinout: ''
        }
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].name === item) {
            obj.name = arr[i].name;
            obj.outAmount += arr[i].outAmount;
            obj.inAmount += arr[i].inAmount;
            obj.inOutAmount += arr[i].inOutAmount;
            obj.YOYout = arr[i].YOYout;
            obj.YOYin = arr[i].YOYin;
            obj.YOYinout = arr[i].YOYinout;
            obj.MOMout = arr[i].MOMout;
            obj.MOMin = arr[i].MOMin;
            obj.MOMinout = arr[i].MOMinout;
          }
        }
        if(obj.name){
          norArr.push(obj)
        }
      })
      if (this.types == 1) {
        // filter idustry
        let disArr = norArr.filter(item => {
          if (this.options.indexOf(item.name) === -1) {
            return false;
          }
          return true;
        })
        return disArr
      } else {
        return norArr
      }
    }
  },
  watch: {
    tradeData() {
      // console.log(this.tradeData)
    }
  },
  components: {
  },
  methods: {
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价';
          return;
        }
        const values = data.map(item => Number(item[column.property]));
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += ' 元';
        } else {
          sums[index] = 'N/A';
        }
      });

      return sums;
    }
  }
};
</script>
<style lang="scss" scoped>

</style>
