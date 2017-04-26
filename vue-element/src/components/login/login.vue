<template>
  <div class="login-wrap">
    <div class="login-title">管理系统</div>
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="username"  v-on:change="userNameChange"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn">
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const self = this
      self.$refs[formName].validate((valid) => {
        if (valid) {
          self.$store.commit('showUserName')
          localStorage.setItem('ms_username', self.ruleForm.username)
          self.$router.push('/home')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    userNameChange () {
      this.$store.state.user.user_name = this.ruleForm.username
      console.log(this.$store.state.user.user_name)
    }
  }
}
</script>
<style>
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
    }
    .login-title{
      position: absolute;
      top:50%;
      width:100%;
      margin-top: 200px;
      text-align: center;
      font-size:30px;
    }
    .login{
      position: absolute;
      left:50%;
      top:50%;
      width:300px;
      height:160px;
      margin:250px 0 0 -190px;
      padding:40px;
      border-radius: 5px;
      background: #fff;
    }
</style>
