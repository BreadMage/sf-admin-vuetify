<template>
  <v-card width="480" class="auth-login mx-auto">
    <v-card-title>登录</v-card-title>
    <v-card-subtitle>登录体验</v-card-subtitle>
    <v-card-text>
      <validation-observer ref="loginForm">
        <v-form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="用户名"
          >
            <v-text-field
              outlined
              label="用户名"
              placeholder="请输入用户名"
              prepend-inner-icon="mdi-account"
              v-model="loginFormData.username"
              :error-messages="errors"
            ></v-text-field>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="required" name="密码">
            <v-text-field
              outlined
              label="密码"
              placeholder="请输入密码"
              prepend-inner-icon="mdi-lock"
              v-model="loginFormData.password"
              :error-messages="errors"
            ></v-text-field>
          </validation-provider>
          <v-btn
            block
            x-large
            color="primary"
            type="submit"
            @click.prevent="handleLogin"
          >
            登录
          </v-btn>
        </v-form>
      </validation-observer>
    </v-card-text>
  </v-card>
</template>

<script>
import { required } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode
} from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_}不能为空'
})

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      loginFormData: {}
    }
  },
  methods: {
    // 登录处理
    handleLogin () {
      this.$refs.loginForm.validate().then(vali => {
        if (vali) {
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-login {
  margin-top: 200px;
}
</style>
