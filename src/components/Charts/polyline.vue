<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

export default {
  name: 'lineChart',
  props: {
    className: {
      type: String,
      default: 'line-chart'
    },
    id: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '280px'
    },
    listData: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    listData(dataList) {
      this.setLine(dataList)
    }
  },
  mounted() {
    this.chart = echarts.init(document.getElementById(this.id));
    this.setLine(this.listData);
  },
  methods: {
    setLine(dataList) {
      let xAxisData = [];
      let outData = [];
      let inData = [];
      let inOutData = [];
      this.listData.forEach((item) => {
        xAxisData.push(item.time);
        outData.push(item.outAmount);
        inData.push(item.inAmount);
        inOutData.push(item.inOutAmount);
      });
      this.chart.setOption({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '10px',
            right: '10px',
            bottom: '50px',
            containLabel: true
        },
        color: [
          '#077fef', '#70c639', '#ffd71d'
        ],
        legend: {
            orient: 'horizontal',
            top: '0px',
            itemGap: 20,
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 14,
            },
            data: [{
                name: '出口',
                icon: 'roundRect',
            }, {
                name: '进口',
                icon: 'roundRect',
            }, {
                name: '进出口',
                icon: 'roundRect',
            }]
        },
        xAxis: {
            type: 'category',
            data: xAxisData,
            name: '时间',
            nameLocation: 'middle',
            nameGap: 40,
            nameTextStyle: {
              fontStyle: 'normal',
              fontWeight: 'bold'
            }
        },
        yAxis: {
            type: 'value',
            name: '金额：千美元',
            nameTextStyle: {
              fontStyle: 'normal',
              fontWeight: 'bold'
            }
        },
        series: [{
            name: '出口',
            type: 'line',
            smooth: true,
            data: outData
        }, {
            name: '进口',
            type: 'line',
            smooth: true,
            data: inData
        }, {
            name: '进出口',
            type: 'line',
            smooth: true,
            data: inOutData
        }]
    })
    }
  }
}
</script>