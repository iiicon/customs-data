<template>
  <div class="total" style="position:relative">
    <!--<div>{{tradeData}}</div>-->
    <img src="./echart.png" @click="dialogTableVisible = true" class="centerimg" width=16 height=16 v-show="tradeData.length">
    <el-table :data="tradeData" border show-summary style="width: 100%" ref="tables">
      <el-table-column prop="time" sortable label="时间" width="90">
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

    <el-dialog :visible.sync="dialogTableVisible">
        <poly-line :listData="tradeData" height='400px' width='100%' />
    </el-dialog>
  </div>
</template>
<script>
import PolyLine from 'components/Charts/polyline';

export default {
  props: {
    tradeData: {
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
    compData() {

    }
  },
  components: {
    'poly-line': PolyLine
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
@media screen and (min-width: 1771px) {
  .centerimg{
    position: absolute; 
    top: 51px; 
    left: 52px; 
    z-index: 999
  }
}
@media screen and (max-width: 1772px) and (min-width: 1268px) {
  .centerimg{
    position: absolute; 
    top: 73px;
    left: 52px;
    z-index: 999
  }
}
@media screen and (max-width: 1267px) {
  .centerimg{
    position: absolute; 
    top: 103px;
    left: 52px;
    z-index: 999
  }
}

</style>
