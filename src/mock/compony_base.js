import Mock from 'mockjs';
import { param2Obj } from 'utils';

const COMPONY_NAME = ['台湾普拉斯科技有限公司', '杭州普拉斯科技有限公司', '杭州征数信息科技有限公司'];
const COMPONY_CREDIT_CODE = [440102296888092, 440102296888093, 440102296888094];
const COMPONY_ORIGIN_HZ = '杭州市高新区市场监督管理局'
const COMPONY_ORIGIN_TW = '高雄市高新区市场监督管理局'
const count = 3;
const List = [];

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    name: COMPONY_NAME[i],
    creditNumber: COMPONY_CREDIT_CODE[i],
    info: {
      base: {
        title: COMPONY_NAME[i],
        data: [
          {
            "creditCode": 440102296888092,
            "lagelRepresident": '吴五',
            "registerOrganization": COMPONY_ORIGIN_HZ,
            "setupDate": '@date("yyyy-MM-dd")'
          }
        ]
      },
      yingyezhizhao: {
        title: '营业执照信息',
        data: [
          {
            "creditCode": 440102296888092,
            "lagelRepresident": '吴五',
            "type": '法人独资',
            "registerCapital": '500万',
            "setupDate": '@date("yyyy-MM-dd")',
            "registerState": '存续',
            "operateFrom": '@date("yyyy-MM-dd")',
            "operateEnd": '@date("yyyy-MM-dd")',
            "registerOrganization": COMPONY_ORIGIN_HZ,
            "approveDate": '@date("yyyy-MM-dd")',
            "address": '杭州市滨江长河街道文艺路100号A楼10层1001室',
            "operateScope": '技术开发、技术服务、技术咨询、成果转让；计算机软硬件、通信设备；服务：设计、制作、代理、发布国内广告（除网络广告发布），承接计算机网络工程（涉及资质证凭证经营）；批发、零售：计算机软硬件、通信设备。'
          }
        ]
      },
      xingzhengchufa: {
        title: '行政处罚信息',
        data: [
          {
            "index": 1,
            "decisionBookNumber": '京文执罚(2014)第40398',
            "illegalType": '',
            "administrativePenaltiesContent": '没收违法所得(0元);罚款(20000元);没收出版物(0册);没收光盘(0张);',
            "decisionOrganization": '北京文化市场行政执法总队',
            "penaltyDecisionDate": '2014-12-23 ',
            "publicDate": '',
            "toView": {
              title: '查看',
              content: {
                "decisionBookNumber": '京文执罚(2014)第40398',
                "name": '北京奇虎科技有限公司',
                "illegalType": '',
                "administrativePenaltiesContent": '没收违法所得(0元);罚款(20000元);没收出版物(0册);没收光盘(0张);',
                "decisionOrganization": '北京文化市场行政执法总队',
                "penaltyDecisionDate": '2014-12-23 ',
                "publicDate": '',
              }
            },
          }
        ]
      },
      jingyinyichang: {
        title: '经营异常信息',
        data: [
          {
            "index": 1,
            "oddResion": '未依照《企业信息公示暂行条例》第八条规定的期限公示年度报告的',
            "pushDate": '@date("yyyy-MM-dd")',
            "decisionOrganization": '浙江省杭州市工商管理局',
            "popResion": '',
            "popDate": '',
            "popOranization": ''
          }
        ]
      },
      yanzhongweifa: {
        title: '严重违法失信信息',
        data: [
          {
            "index": 1,
            "type": '严重违法失信企业名单',
            "oddResion": '提交虚假材料或者采取其  它欺诈手段隐瞒重要事实，取得公司变更或者注销登记，被撤销登记的',
            "pushDate": '@date("yyyy-MM-dd")',
            "decisionOrganization": '陕西省工商行政管理局',
            "popResion": '5年未发生列入严重违法失信企业名单情形的',
            "popDate": '',
            "popOranization": ''
          }
        ]
      }
    },
    enforcementInfo: [
      {
        index: 1,
        enforcementName: COMPONY_NAME[i],
        eventTime: '2016-08-09',
        eventCode: '(2016)浙137执507号',
        toView: {
          title: '查看',
          content: {
            enforcementName: COMPONY_NAME[i],
            Idcard: 29409072352362345324,
            lagelRepresident: 'pluszZ~',
            extention: '银川市金凤区人民法院',
            province: '宁夏',
            decisionBookNumber: '京文执罚(2014)第40398',
            eventTime: '2016-08-09',
            eventCode: '(2016)浙137执507号',
            decisionOrganizition: '银川市金凤区人民法院',
            obligation: '详见判决书',
            extentioned: '全部未履行',
            details: '其他有履行能力而不履行生效法律文书确定义务'
          }
        }
      },
      {
        index: 2,
        enforcementName: COMPONY_NAME[i],
        eventTime: '2016-08-09',
        eventCode: '(2016)浙137执507号',
        toView: {
          title: '查看',
          content: {
            enforcementName: COMPONY_NAME[i],
            Idcard: 29409072352362345324,
            lagelRepresident: 'pluszZ~',
            extention: '银川市金凤区人民法院',
            province: '宁夏',
            decisionBookNumber: '京文执罚(2014)第40398',
            eventTime: '2016-08-09',
            eventCode: '(2016)浙137执507号',
            decisionOrganizition: '银川市金凤区人民法院',
            obligation: '详见判决书',
            extentioned: '全部未履行',
            details: '其他有履行能力而不履行生效法律文书确定义务'
          }
        }
      },
      {
        index: 3,
        enforcementName: COMPONY_NAME[i],
        eventTime: '2016-08-09',
        eventCode: '(2016)浙137执507号',
        toView: {
          title: '查看',
          content: {
            enforcementName: COMPONY_NAME[i],
            Idcard: 29409072352362345324,
            lagelRepresident: 'pluszZ~',
            extention: '银川市金凤区人民法院',
            province: '宁夏',
            decisionBookNumber: '京文执罚(2014)第40398',
            eventTime: '2016-08-09',
            eventCode: '(2016)浙137执507号',
            decisionOrganizition: '银川市金凤区人民法院',
            obligation: '详见判决书',
            extentioned: '全部未履行',
            details: '其他有履行能力而不履行生效法律文书确定义务'
          }
        }
      },
      {
        index: 4,
        enforcementName: COMPONY_NAME[i],
        eventTime: '2016-08-09',
        eventCode: '(2016)浙137执507号',
        toView: {
          title: '查看',
          content: {
            enforcementName: COMPONY_NAME[i],
            Idcard: 29409072352362345324,
            lagelRepresident: 'pluszZ~',
            extention: '银川市金凤区人民法院',
            province: '宁夏',
            decisionBookNumber: '京文执罚(2014)第40398',
            eventTime: '2016-08-09',
            eventCode: '(2016)浙137执507号',
            decisionOrganizition: '银川市金凤区人民法院',
            obligation: '详见判决书',
            extentioned: '全部未履行',
            details: '其他有履行能力而不履行生效法律文书确定义务'
          }
        }
      },
      {
        index: 5,
        enforcementName: COMPONY_NAME[i],
        eventTime: '2016-08-09',
        eventCode: '(2016)浙137执507号',
        toView: {
          title: '查看',
          content: {
            enforcementName: COMPONY_NAME[i],
            Idcard: 29409072352362345324,
            lagelRepresident: 'pluszZ~',
            extention: '银川市金凤区人民法院',
            province: '宁夏',
            decisionBookNumber: '京文执罚(2014)第40398',
            eventTime: '2016-08-09',
            eventCode: '(2016)浙137执507号',
            decisionOrganizition: '银川市金凤区人民法院',
            obligation: '详见判决书',
            extentioned: '全部未履行',
            details: '其他有履行能力而不履行生效法律文书确定义务'
          }
        }
      }
    ],
    registerInfo: {
      name: COMPONY_NAME[i],
      componyCode: 1105930838,
      componyType: 'A',
      componySymbol: '',
      componyScore: '',
      address: '杭州市滨江长河街道文艺路100号A楼10层1001室',
      zipCode: 310000,
      telephone: '0571-5638723',
      openAcountBank: '杭州银行滨江高新支行',
      openAcountNumber: "190* **** **** *988"
    },
    managementInfo: {
      name: '刘六',
      idcard: '410************566',
      position: '市场总监',
      telephone: '0571-5638723',
      sex: '男',
      nationality: '中国',
      creditSymbol: '',
      address: '杭州市滨江长河街道文艺路100号A楼10层1001室'
    },
    comTradeData: {
      comInOutTrade: [
        {
          'time': '2017-06',
          'outAmount': 165876,
          'inAmount': 1237297,
          'inOutAmount': 1233797,
          'YOYout': '6.75%',
          'YOYin': '12.34%',
          'YOYinout': '19.09%',
          'MOMout': '4.09%',
          'MOMin': '17.98%',
          'MOMinout': '32.07%',
        },
        {
          'time': '2017-05',
          'outAmount': 65876,
          'inAmount': 123797,
          'inOutAmount': 123797,
          'YOYout': '16.75%',
          'YOYin': '2.34%',
          'YOYinout': '19.09%',
          'MOMout': '7.09%',
          'MOMin': '7.98%',
          'MOMinout': '15.07%',
        },
        {
          'time': '2017-04',
          'outAmount': 4533,
          'inAmount': 2876,
          'inOutAmount': 3332,
          'YOYout': '11.51%',
          'YOYin': '2.75%',
          'YOYinout': '14.26%',
          'MOMout': '-21.09%',
          'MOMin': '-12.23%',
          'MOMinout': '-33.32%',
        },
        {
          'time': '2017-03',
          'outAmount': 68799,
          'inAmount': 13797,
          'inOutAmount': 912397,
          'YOYout': '10.75%',
          'YOYin': '12.34%',
          'YOYinout': '18.09%',
          'MOMout': '17.09%',
          'MOMin': '6.98%',
          'MOMinout': '15.07%',
        },
        {
          'time': '2017-02',
          'outAmount': 565876,
          'inAmount': 413797,
          'inOutAmount': 183797,
          'YOYout': '10.75%',
          'YOYin': '12.34%',
          'YOYinout': '16.09%',
          'MOMout': '7.99%',
          'MOMin': '7.09%',
          'MOMinout': '19.07%',
        },
        {
          'time': '2017-01',
          'outAmount': 65876,
          'inAmount': 123797,
          'inOutAmount': 123797,
          'YOYout': '16.75%',
          'YOYin': '2.34%',
          'YOYinout': '19.09%',
          'MOMout': '7.09%',
          'MOMin': '7.98%',
          'MOMinout': '15.07%',
        },
        {
          'time': '2016-12',
          'outAmount': 885876,
          'inAmount': 543797,
          'inOutAmount': 7689797,
          'YOYout': '21.75%',
          'YOYin': '9.34%',
          'YOYinout': '29.09%',
          'MOMout': '11.09%',
          'MOMin': '14.98%',
          'MOMinout': '19.88%',
        },
        {
          'time': '2016-11',
          'outAmount': 99976,
          'inAmount': 1223797,
          'inOutAmount': 1213797,
          'YOYout': '6.75%',
          'YOYin': '22.34%',
          'YOYinout': '29.09%',
          'MOMout': '5.09%',
          'MOMin': '9.98%',
          'MOMinout': '14.07%',
        },
        {
          'time': '2016-10',
          'outAmount': 1456,
          'inAmount': 22876,
          'inOutAmount': 3332,
          'YOYout': '11.51%',
          'YOYin': '2.75%',
          'YOYinout': '14.26%',
          'MOMout': '-21.09%',
          'MOMin': '-12.23%',
          'MOMinout': '-33.32%',
        },
        {
          'time': '2016-09',
          'outAmount': 226876,
          'inAmount': 1371197,
          'inOutAmount': 9212397,
          'YOYout': '10.75%',
          'YOYin': '12.34%',
          'YOYinout': '18.09%',
          'MOMout': '17.09%',
          'MOMin': '6.98%',
          'MOMinout': '15.07%',
        },
        {
          'time': '2016-08',
          'outAmount': 5165876,
          'inAmount': 4132797,
          'inOutAmount': 1843797,
          'YOYout': '20.75%',
          'YOYin': '22.34%',
          'YOYinout': '6.09%',
          'MOMout': '9.99%',
          'MOMin': '8.09%',
          'MOMinout': '18.07%',
        },
        {
          'time': '2016-07',
          'outAmount': 69976,
          'inAmount': 23797,
          'inOutAmount': 23797,
          'YOYout': '26.75%',
          'YOYin': '12.34%',
          'YOYinout': '17.09%',
          'MOMout': '3.09%',
          'MOMin': '18.98%',
          'MOMinout': '21.07%',
        },
        {
          'time': '2016-06',
          'outAmount': 785876,
          'inAmount': 43797,
          'inOutAmount': 689797,
          'YOYout': '11.75%',
          'YOYin': '15.34%',
          'YOYinout': '26.09%',
          'MOMout': '11.09%',
          'MOMin': '14.98%',
          'MOMinout': '26.88%',
        }
      ],
      comInOutGood: [
        {
          time: '2017-05',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-04',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-03',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-02',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-01',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2016-12',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-11',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-10',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-09',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-08',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-07',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        },
        {
          time: '2017-06',
          items: [
            {
              'name': '电机、电气设备',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '光学、照相、电',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '塑料及其制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '钢铁制品',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            },
            {
              'name': '书籍、报纸、印',
              'rank|1-100': 100,
              'outAmount': '65876',
              'inAmount': '123797',
              'inOutAmount': '123797'
            }
          ]
        }

      ],
      comBussinessRank: [
        {
          title: '2017-05',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-04',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-03',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-02',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-01',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2016-12',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2016-11',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-10',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-09',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-08',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-07',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        },
        {
          title: '2017-06',
          items: [
            {
              name: '农业',
              rank: 44,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '林业',
              rank: 34,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '畜牧业',
              rank: 25,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '渔业',
              rank: 15,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            },
            {
              name: '服务业',
              rank: 5,
              'outAmount': '65122876',
              'inAmount': '122223797',
              'inOutAmount': '123333797'
            }
          ]
        }
      ]
    }
  }))
}

export default {
  // getComponyList: () => List,
  getComList: config => {
    const { value } = param2Obj(config.url);
    // console.log({ value })
    const componyList = List.filter(item => {
      if (value && item.name.indexOf(value) < 0) {
        return false;
      }
      return true;
    })
    return { items: componyList }
  },
  getComTradeList: config => {
    // console.log(config);    
    const param = param2Obj(config.url);
    const comTradeLit = List.filter(item => {
      if (param && item.creditNumber == param.comNumber) {
        return true;
      }
      return false;
    })

    let comTrade = comTradeLit[0].comTradeData;
    let compTrade = {};
    if (param.startTime && param.endTime) {
      const comInOutTrade = comTrade.comInOutTrade.filter(item => {
        // 企业进出口金额
        let m = new Date(item.time).setDate(15);
        let endm = new Date(Number(param.endTime)).setDate(30);
        let startm = new Date(Number(param.startTime)).setDate(1);
        if (m <= endm && m >= startm) {
          return true;
        }
        return false;
      })
      compTrade.comInOutTrade = comInOutTrade;

      const comInOutGood = comTrade.comInOutGood.filter(item => {
        // 企业进出口贸易
        let m = new Date(item.time).setDate(15);
        let endm = new Date(Number(param.endTime)).setDate(30);
        let startm = new Date(Number(param.startTime)).setDate(1);
        if (m <= endm && m >= startm) {
          return true;
        }
        return false;
      })
      compTrade.comInOutGood = comInOutGood;

      const comBussinessRank = comTrade.comBussinessRank.filter(item => {
        // 所在行业排名
        let m = new Date(item.title).setDate(15);
        let endm = new Date(Number(param.endTime)).setDate(30);
        let startm = new Date(Number(param.startTime)).setDate(1);
        if (m <= endm && m >= startm) {
          return true;
        }
        return false;
      })
      compTrade.comBussinessRank = comBussinessRank;
    }
    return { items: compTrade }
  }
}
