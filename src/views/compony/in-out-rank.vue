<template>
  <div class="displayRank">
    <el-table :data="_normalizeRankData" border show-summary style="width: 100%" ref="tables">
      <el-table-column prop="name" sortable label="行业名称" width="200">
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
  </div>
</template>
<script>
export default {
  props: {
    rankData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      colActiveIndex: '',
      colActive: 'colActive',
      data: []
    };
  },
  computed: {
    _normalizeRankData() {
      if(!this.rankData.length){return []};
      let data = [];
      let nameArr = ['农业', '林业', '畜牧业', '渔业', '服务业']
      for (let i = 0; i < this.rankData.length; i++) {
        let obj = {
          name: '',
          rank: 0,
          outAmount: 0,
          inAmount: 0,
          inOutAmount: 0
        };
        let items = this.rankData[i].items;
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
          if(item == data[i].name){
            o.name = data[i].name;
            o.rank += data[i].rank;
            o.outAmount += data[i].outAmount;
            o.inAmount += data[i].inAmount;
            o.inOutAmount += data[i].inOutAmount;
          }
        }
        o.rank = Math.floor((o.rank)/data.length).toString();
        dataArr.push(o)
      });
      return dataArr;
    }
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
.colActive {
  background: #eaeff6;
  color: red;
}
</style>
