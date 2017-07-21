<template>
  <div style="position:relative" class="displayRank">
    <img src="./pchart.png" @click="dialogTableVisible = true" class="centerimg" width=17 height=17 v-show="_normalizeGoodsData.length">
    <el-table :data="_normalizeGoodsData" border show-summary style="width: 100%;" ref="tables">
      <el-table-column prop="name" sortable label="商品名称" width="200">
      </el-table-column>
      <el-table-column prop="rank" sortable label="企业排位" align="right">
      </el-table-column>
      <el-table-column prop="outAmount" sortable label="出口金额" align="right">
      </el-table-column>
      <el-table-column prop="inAmount" sortable label="进口金额" align="right">
      </el-table-column>
      <el-table-column prop="inOutAmount" sortable label="进出口金额" align="right">
      </el-table-column>
    </el-table>
  
    <el-dialog :visible.sync="dialogTableVisible">
      <pie-line :listData="_normalizeGoodsData" height='400px' width='100%'></pie-line>
      <!--<div>{{_normalizeGoodsData}}</div>-->
    </el-dialog>
  
  </div>
</template>
<script>
import Pieline from 'components/Charts/pieline';

export default {
  props: {
    goodsData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      colActiveIndex: '',
      colActive: 'colActive',
      data: []
    };
  },
  computed: {
    _normalizeGoodsData() {
      if (!this.goodsData.length) { return [] };
      let data = [];
      let nameArr = ['电机、电气设备', '光学、照相、电', '塑料及其制品', '钢铁制品', '书籍、报纸、印']
      for (let i = 0; i < this.goodsData.length; i++) {
        let obj = {
          name: '',
          rank: '',
          outAmount: 0,
          inAmount: 0,
          inOutAmount: 0
        };
        let items = this.goodsData[i].items;
        let arr = [];
        for (let j = 0; j < items.length; j++) {
          let obj = {};
          obj.name = items[j].name;
          obj.rank = Number(items[j].rank);
          obj.outAmount = Number(items[j].outAmount);
          obj.inAmount = Number(items[j].inAmount || '');
          obj.inOutAmount = Number(items[j].inOutAmount || '');
          arr.push(obj)
        }
        data = data.concat(arr)
      }
      let dataArr = [];
      nameArr.forEach((item) => {
        let o = {
          name: '',
          rank: 0,
          outAmount: 0,
          inAmount: 0,
          inOutAmount: 0
        };
        for (var i = 0; i < data.length; i++) {
          if (item == data[i].name) {
            o.name = data[i].name;
            o.rank += data[i].rank;
            o.outAmount += data[i].outAmount;
            o.inAmount += data[i].inAmount;
            o.inOutAmount += data[i].inOutAmount;
          }
        }
        o.rank = Math.floor((o.rank) / data.length).toString();
        // alert(typeof o.rank)
        dataArr.push(o)
      });
      return dataArr;
    }
  },
  components: {
    'pie-line': Pieline
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
  },
  watch: {
    colActiveIndex() {
      // alert(this.colActiveIndex);
    }
  },
  mounted() {
    this.$nextTick(() => {
      let thArr = document.querySelectorAll('th>.cell');
      thArr.forEach((item) => {

      })
    })
  }
};
</script>
<style lang="scss" scoped>
.centerimg {
  position: absolute;
  top: 54px;
  left: 52px;
  z-index: 999
}
</style>
