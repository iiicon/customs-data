/*
 * @Author: shiguangwei 
 * @Date: 2017-07-13 15:36:30 
 * @Last Modified by:   shiguangwei 
 * @Last Modified time: 2017-07-13 15:36:30 
 */

export default function createUniqueString() {
  const timestamp = +new Date() + '';
  const randomNum = parseInt((1 + Math.random()) * 65536) + '';
  return (+(randomNum + timestamp)).toString(32);
}
