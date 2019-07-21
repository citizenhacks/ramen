<template>
  <div class="signup">
    <div class="signup-left-panel">
      <div class="item">
        <div class="logo-container">
          <img class="signup-logo" src="../assets/logo_box.svg" />
          <h1 class="logo-text">CH</h1>
        </div>
        <div class="step-container">
          <div class="step">
            <a>Step 1</a>
          </div>
          <div class="step">
            <a>{{ email }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="signup-right-panel"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action, Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, User } from "../store/profile/types";

const namespace: string = "profile";

@Component({
  components: {}
})
@Component
export default class RSVP extends Vue {
  @State("profile") profile!: ProfileState;
  @Action("initWithId", { namespace }) initWithId: any;
  @Getter("fullName", { namespace }) fullName!: string;

  id: string | (string | null)[] = "";

  mounted() {
    this.id = this.$route.query.id;
    if (this.id) {
      this.processID();
    }
  }

  processID() {
    this.axios
      .get(`https://api.citizenhacks.com/application/status/${this.id}`)
      .then(res => {
        console.log(res);
        this.initWithId(this.id);
      })
      .catch(e => {
        console.log(e);
      });
  }

  get email() {
    const user = this.profile && this.profile.user;
    return (user && user.id) || "";
  }
}
</script>

<style scoped>
.signup {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #fafafa;
}
.signup-left-panel {
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #222222;
  color: #ffffff;
}
.signup-right-panel {
  flex-grow: 3;
  display: flex;
  background-color: #fafafa;
}
.item {
  padding: 50px;
  text-align: left;
}
.signup-h1 {
  font-size: 64px;
  margin-bottom: 10px;
}
.signup-p {
  margin-top: 20px;
  font-size: 18px;
}
.signup-logo {
  height: auto;
  width: 48px;
}
.signup-logo-full {
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
.signup-signup {
  font-size: 24px;
  text-decoration: underline;
}
.signup-signup-icon {
  margin-left: 8px;
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 2px;
}
</style>
