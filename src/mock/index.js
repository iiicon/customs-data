import Mock from 'mockjs';
import loginAPI from './login';
import componyAPI  from './compony_base';
import industryAPI from './trade_base';

// 登录相关
Mock.mock(/\/login\/loginbyemail/, 'post', loginAPI.loginByEmail);
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout);
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getInfo)

// 公司信息
Mock.mock(/\/compony\/trade/, 'get', componyAPI.getComTradeList);
Mock.mock(/\/compony\/infoes/, 'get', componyAPI.getComList);

// 行业信息
Mock.mock(/\/compony\/getIndustryInfo/, 'get', industryAPI.getIndustryInfo);

export default Mock;
