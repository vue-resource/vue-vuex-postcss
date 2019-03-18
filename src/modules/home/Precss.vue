<template>
  <div>
    <ul class="my-precss">
      <li>
        <div class="list-title">按钮组合</div>
        <div class="list-content">
          <span class="btn-disable">disable</span>
          <span class="btn-info">info</span>
          <span class="btn-warning">warning</span>
          <span class="btn-danger">danger</span>
          <span class="btn-success">success</span>
          <div class="ma-right-10"></div>
          <span class="btn-warning btn-mini">warning</span>
          <span class="btn-danger">danger</span>
          <span class="btn-success btn-large">danger</span>
        </div>
      </li>
      <li>
        <div class="list-title">工具类</div>
        <div class="list-content">
          <span class="btn-disable">disable</span>
          <span class="btn-info ma-left-20 ma-right-20">info</span>
          <span class="btn-warning">warning</span>
          <div class="square100">我是宽高都是100</div>
        </div>
      </li>
      <li>
        <div class="list-title">图标/背景</div>
        <div class="list-content">
          <span class="icon-back"></span>back
          <span class="icon-cart"></span>cart
          <span class="icon-mil"></span>mil
          <span class="icon-person"></span>person
          <span class="icon-phone"></span>phone
          <span class="icon-share"></span>share
        </div>
        <div class="list-content">
          <span class="square100 bg-warning"></span>
          <span class="square100 bg-danger"></span>
          <span class="square100 bg-success"></span>
        </div>
      </li>
      <li>
        <div class="list-title">字体</div>
        <div class="list-content">
          <span class="font-disable">disable</span>
          <span class="font-warning">warning</span>
          <span class="font-danger">danger</span>
          <span class="font-success">success</span>
          <span class="font-info">info</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'hello'
  }
</script>
<style scoped>
  .my-precss {
    .list-title {
      line-height: 35px;
      border-bottom:1px solid #ccc;
      color: #000;
      font-size: 14px;
    }
    .list-content {
      padding: 20px;
    }
  }
</style>


