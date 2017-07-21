<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
// 引入 ECharts 主模块
const echarts = require('echarts/lib/echarts');

require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

export default {
  name: 'pieline',
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
      let pieData = [];
      let inoutDataSum = 0;
      this.listData.forEach(item => {
        inoutDataSum += item.inOutAmount;
      });
      this.listData.forEach((item) => {
        let obj = {
          name: item.name,
          value: parseInt((item.inOutAmount/inoutDataSum)*100)
        }
        pieData.push(obj)
      });
      this.chart.setOption({
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [{
            name: '进出口金额',
            type: 'pie',
            radius: '68%',
            label: {
              normal: {
                show: true,
                position: 'outside',
                textStyle: {
                  color: '#222',
                  fontSize: '14px',
                  fontWeight: 700
                }
              }
            },
            // center: ['50%', '60%'],
            clockwise: false,
            data: pieData,
            labelLine: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }],
        color: [
            '#077fef', '#70c639', '#ffd71d', '#eb3a00', '#7f48a7'
        ]
    })
    }
  }
}
</script>