<template>
  <div class="container" v-if="logined">
    账户{{username}}登陆成功。
  </div>
  <div class="container" v-else>
    <el-card header="用户登陆" class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
      <el-alert
        v-if="error !== ''"
        :title="error"
        type="error"
        show-icon>
      </el-alert>
      <el-form :rules="rules" :model="this" ref="loginForm">
        <el-form-item label="账户名称" prop="username" class="col-xs-12">
          <el-input v-model="username" placeholder="电子邮件地址"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" class="col-xs-12 ">
          <el-input v-model="password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item class="col-xs-12">
          <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  import * as types from '../../store/mutation-types';

  export default {
    data() {
      return {
        rules: {
          username: [
            { logined: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { logined: true, message: '请输入', trigger: 'blur' },
          ],
        },
      };
    },
    computed: {
      login: {
        get() {
          return this.$store.state.account.login.logined;
        },
      },
      username: {
        get() {
          return this.$store.state.account.login.username;
        },
        set(value) {
          this.$store.commit(types.ACCOUNT_LOGIN_SET_USERNAME, value);
        },
      },
      password: {
        get() {
          return this.$store.state.account.login.password;
        },
        set(value) {
          this.$store.commit(types.ACCOUNT_LOGIN_SET_PASSWORD, value);
        },
      },
      error: {
        get() {
          return this.$store.state.account.login.error;
        },
      },
    },
    methods: {
      ...mapActions({
        login: 'account/login/login',
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login();
            return true;
          }
          return false;
        });
      },
    },
  };
</script>
