<template>
  <div class="login">
    <div class="login-left-panel">
      <div class="login-header item">
        <div class="logo-container">
          <img class="login-logo" src="../assets/logo_box.svg">
          <h1 class="logo-text">CH</h1>
        </div>
      </div>
      <div class="login-title item">
        <img class="login-logo-full" src="../assets/logo_full.svg">
        <p
          class="login-p"
        >From here you’ll have easy access to all your account information, services and support</p>
      </div>
      <div class="login-footer item">
        <a class="login-signup" @click="signup">
          Sign up now
          <font-awesome-icon icon="arrow-right" class="login-signup-icon"/>
        </a>
      </div>
    </div>
    <div class="login-right-panel">
      <LoginForm/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/organisms/LoginForm.vue';

@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {
  signup() {
    this.$router.push('/signup');
  }
}
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #fafafa;
}
.login-left-panel {
  height: 100vh;
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #222222;
  color: #ffffff;
}
.login-right-panel {
  flex-grow: 2;
  display: flex;
  background-color: #fafafa;
}
.item {
  padding: 50px;
  text-align: left;
}
.login-h1 {
  font-size: 64px;
  margin-bottom: 10px;
}
.login-p {
  margin-top: 20px;
  font-size: 18px;
}
.login-logo {
  height: auto;
  width: 48px;
}
.login-logo-full {
  height: 96px;
  width: auto;
}
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo-text {
  margin-left: 16px;
}
.login-signup {
  font-size: 24px;
  text-decoration: underline;
}
.login-signup-icon {
  margin-left: 8px;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 2px;
}
</style>
