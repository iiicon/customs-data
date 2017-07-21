import fetch from 'utils/fetch';

export function getIndustryInfo(param) {
  return fetch({
    url: '/compony/getIndustryInfo',
    method: 'get',
    params: param
  });
}
