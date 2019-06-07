<template>
  <div class="login-form">
    <div class="item">
      <h1 class="login-header">Login</h1>
      <div class="error-container">
        <p v-if="isError" class="login-error">Invalid login or password. Please try again.</p>
      </div>
    </div>
    <div class="item">
      <div class="login-field-container">
        <label>
          Email
          <input @focus="inputUpdate" v-model="email" class="login-field" type="text">
        </label>
      </div>
      <div class="login-field-container">
        <label class="login-field">
          Password
          <input
            @focus="inputUpdate"
            v-model="password"
            class="login-field"
            type="password"
          >
        </label>
      </div>
      <div>
        <label class="container">
          Remember me
          <input
            type="checkbox"
            @value="isRemember"
            @checked="isRemember"
            @input="check"
          >
          <span class="checkmark"/>
        </label>
      </div>
      <button @click="submit" class="login-button" type="submit">Login</button>
    </div>
    <div class="item login-forgot-container">
      <a href class="login-forgot-link">Forgot email?</a>
      <a href class="login-forgot-link">Forgot password?</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class LoginForm extends Vue {
  isError: boolean = false;

  email: string = "";

  password: string = "";

  isRemember: boolean = false;

  submit() {
    this.isError = this.email !== "test@gmail.com" || this.password !== "test";
    if (!this.isError) {
      this.$router.push("/dashboard");
    }
  }

  inputUpdate() {
    if (this.isError) {
      this.isError = false;
    }
  }

  check() {
    this.isRemember = !this.isRemember;
  }
}
</script>

<style scoped>
.login-header {
  height: 32px;
}
.login-form {
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #222222;
}
.login-field {
  margin: 10px 0;
}
.login-button {
  margin-top: 30px;
  margin-bottom: 10px;
}
.login-field-container {
  margin: 10px 0;
}
.error-container {
  height: 64px;
  width: 360px;
}
.login-error {
  color: #ff6961;
}
.item {
  padding: 50px;
}
.login-forgot-link {
  margin-right: 16px;
  opacity: 0.5;
}
.login-forgot-link:hover {
  opacity: 1;
}
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-top: 3px;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #e2e2e2;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #222222;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
