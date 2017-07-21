import fetch from 'utils/fetch';

export function getComList(value) {
  return fetch({
    url: '/compony/infoes',
    method: 'get',
    params: { value }
  });
}

export function getComTradeList(param) {
  return fetch({
    url: '/compony/trade',
    method: 'get',
    params: param
  });
}
