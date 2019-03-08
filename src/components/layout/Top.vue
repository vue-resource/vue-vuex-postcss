<template>
  <div class="bg-dark header">
    <h1 class="logo">CMS后台管理系统</h1>
    <div class="login-box">
      <p class="logined">已登录</p>
      <p class="btn">退出</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'top'
  }
</script>

<style scoped>
  .header { position: fixed; left: 0; top: 0;z-index:1000;font-size: 18px;  width: 100%; height: 60px; line-height: 60px; color: #fff }
  .logo { float: left; margin-left: 120px;font-size: 18px; font-size: 20px;}
  .login-box { display: flex; float: right; padding-right: 90px;}
  .logined { background: url('http://cms.biyao.com/images/loginIcon.png') center left no-repeat; background-size: 30px;}
  .login-box p { padding-left: 40px;}
  .login-box .btn { cursor: pointer;}
</style>


