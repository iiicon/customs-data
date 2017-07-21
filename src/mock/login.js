import { param2Obj } from 'utils';

const userMap = {
  admin: {
    role: ['admin'],
    token: 'admin',
    introduction: '管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '西瓜',
    uid: '001'
  },
  user: {
    role: ['user'],
    token: 'user',
    introduction: '亲爱的用户',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: '亲爱的用户',
    uid: '002'

  },
  develop: {
    role: ['develop'],
    token: 'develop',
    introduction: '开发',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'front-end iiicon',
    uid: '003'
  }
}

export default {
  /**
   * loginByEmail
   * @ param {any} config 
   * @ returns Object 
   * {url: "https://api-dev/user/info?token=admin", type: "POST", body: "{"email":"admin@zs5s.com","password":"8888888"}"}
   */
  loginByEmail: config => {
    const { email } = JSON.parse(config.body);
    return userMap[email.split('@')[0]];
  },
  getInfo: config => {
    const { token } = param2Obj(config.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return Promise.reject('no this token');
    }
  },
  logout: () => 'success'
};
