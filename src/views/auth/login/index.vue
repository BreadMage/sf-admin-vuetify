<template>
  <v-card>
    <v-card-title>登录</v-card-title>
    <v-card-subtitle>赶快登录体验吧</v-card-subtitle>
    <v-card-text>
      <validation-observer ref="loginForm" v-slot="{ invalid }">
        <v-form @submit.prevent="submit">
          <validation-provider
            v-slot="{ errors }"
            rules="required"
            name="用户名"
          >
            <v-text-field
              v-model="loginFormData.username"
              :counter="10"
              :error-messages="errors"
              label="用户名"
            ></v-text-field>
          </validation-provider>
          <validation-provider v-slot="{ errors }" rules="required" name="密码">
            <v-text-field
              v-model="loginFormData.password"
              :error-messages="errors"
              label="密码"
            ></v-text-field>
          </validation-provider>
          <v-btn
            class="mr-4"
            type="submit"
            :disabled="invalid"
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

<style lang="scss" scoped></style>
