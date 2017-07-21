<template>
  <div class="goods" style="position:relative">
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
      <el-table-column prop="firstUtil" label="第一数量单位" align="right">
      </el-table-column>
      <el-table-column prop="outCount"  label="出口第一数量" align="right">
      </el-table-column>
      <el-table-column prop="inCount"  label="进口第一数量" align="right">
      </el-table-column>
      <el-table-column prop="inOutCount"  label="进出口第一数量" align="right" header-align="right">
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
      labelName: '商品'
    };
  },
  computed: {
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

      let nameArr = ['萝卜', '绿豆', '水蜜桃', '罂粟', '玫瑰', '白百合', '蘑菇菌丝', '种百合球茎', '种用玫瑰', '菊花plus']
      let norArr = []
      nameArr.forEach(item => {
        let obj = {
          name: '',
          outAmount: 0,
          inAmount: 0,
          inOutAmount: 0,
          firstUtil: 'kg',
          outCount: 0,
          inCount: 0,
          inOutCount: 0
        }
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].name === item) {
            obj.name = arr[i].name;
            obj.outAmount += arr[i].outAmount;
            obj.inAmount += arr[i].inAmount;
            obj.inOutAmount += arr[i].inOutAmount;
            obj.firstUtil = arr[i].firstUtil;
            obj.outCount = arr[i].outCount;
            obj.inCount = arr[i].inCount;
            obj.inOutCount = arr[i].inOutCount;
          }
        }
        norArr.push(obj)
      })
      // filter idustry
      let disArr = norArr.filter(item => {
        if (this.options.indexOf(item.name) === -1) {
          return false;
        }
        return true;
      })
      return disArr
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
