<template>
  <main class="container">
    <section class="Wrap" v-show="loginStatus">
      <h1 class="text-h1 text-bold">歡迎使用</h1>
    </section>

    <section class="Wrap" v-show="!loginStatus">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="username"
          label="帳號"
          lazy-rules
          color="cyan"
          :rules="[ val => val && val.length > 0 || '帳號欄位不能為空']"
        >
          <template v-slot:before>
            <q-icon name="account_circle" />
          </template>
        </q-input>

        <q-input
          filled
          type="password"
          v-model="password"
          label="密碼"
          lazy-rules
          color="cyan"
          :rules="[val => val !== null && val !== '' || '密碼欄位不能為空']"
        >
          <template v-slot:before>
            <q-icon name="lock" />
          </template>
        </q-input>

        <div>
          <q-btn label="確認" type="submit" class="submit text-bold" />
          <q-btn label="重設" type="reset" color="grey-9" flat class="q-ml-sm text-bold" />
        </div>
      </q-form>

    </section>
  </main>
</template>

<script>
import { login } from 'boot/axios'
export default {
  data () {
    return {
      username: null,
      password: null,
      loginStatus: null
    }
  },
  mounted () {
    this.checkUserId()
  },
  methods: {
    onSubmit () {
      // login.post('/api/login', { username: this.username, password: this.password }).then((res) => {
      // axios的header默認的Content-Type好像是'application/json;charset=UTF-8'
      login({
        method: 'post',
        url: '/api/login',
        data: { username: this.username, password: this.password },
        withCredentials: true
      }).then((res) => {
        const { loginStatus } = res.data
        if (loginStatus) {
          this.loginStatus = loginStatus
          this.$emit('validateLogin', { loginStatus })
        } else {
          this.$q.notify({
            type: 'negative',
            message: '帳號或密碼錯誤'
          })
        }
      })
    },
    onReset () {
      this.username = null
      this.password = null
    },
    checkUserId () {
      login({
        method: 'post',
        url: '/api/checkUserId',
        withCredentials: true
      }).then((res) => {
        const { loginStatus } = res.data
        this.loginStatus = loginStatus
      })
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
  }

  .Wrap {
    width: 50%;
    margin: auto;
  }

  .submit {
    background-color: #00bcd4;
    color: #fafafa;
  }

  h1 {
    color: #00bcd4;
  }
</style>
