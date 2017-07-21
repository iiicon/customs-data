<template>
  <div>
    <nav-bar></nav-bar>
    <section class="nav-main">
      <div class="nav-menu">
        <div class="nav-contain">
          <h2>欢迎{{name}}登陆</h2>
          <div class="nav-left">
            <h3>
              <span class="svg-container">
                <wscn-icon-svg icon-class="fangzi" />
              </span>
              &nbsp;企业信息查询</h3>
            <div class="nav-item"><router-link to='/compony/base-info'>企业基本信息</router-link></div>
            <div class="nav-item"><router-link to='/compony/documents-info'>单据查询</router-link></div>
            <div class="nav-item"><router-link to='/compony/compony-trading'>企业贸易信息</router-link></div>
          </div>
          <div class="nav-right">
            <h3>
              <span class="svg-container">
                <wscn-icon-svg icon-class="jiaoyi" />
              </span>
              &nbsp;贸易查询</h3>
            <div class="nav-item"><router-link to='/trading/industry-trading'>行业下贸易信息</router-link></div>
            <div class="nav-item"><router-link to='/trading/goods-trading'>商品下贸易信息</router-link></div>
            <div class="nav-item"><router-link to='/trading/info-trading'>贸易资讯信息</router-link></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Navbar } from '../layout';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  components: {
    'nav-bar': Navbar
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.nav-main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url('./home-bgimg.jpg') no-repeat;
  background-size: cover;

  .nav-menu {
    position: absolute;
    left: 0;
    top: 45%;
    transform: translateY(-50%);
    width: 100%;

    .nav-contain {
      width: 814px;
      margin: 0 auto;

      h2 {
        height: 124px;
        line-height: 124px;
        text-align: center;
        font-weight: 500;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
      }

      .nav-left {
        float: left;
      }

      .nav-right {
        float: right;
      }

      .nav-left,
      .nav-right {
        width: 320px;
        height: 330px;
        border-radius: 12px;
        overflow: hidden;
        text-align: center;
        color: #fff;
        background: rgba(255, 255, 255, .2);

        h3 {
          height: 90px;
          line-height: 90px;
          background: rgba(0, 0, 0, .6);
          font-weight: 700;
          font-size: 16px;

          .svg-container {
            display: inline-block;
            color: #fff;
            font-size: 20px;
          }
        }

        .nav-item {
          height: 80px;
          line-height: 80px;
          color: #fff;
          border-bottom: 1px solid rgba(0, 0, 0, .2);
          
          a{
            display: inline-block;
            width: 100%;
          }

          &:last-child{
            border: none;
          }

          &:hover{
            background: #077fef;
          }
        }
      }
    }
  }
}
</style>
