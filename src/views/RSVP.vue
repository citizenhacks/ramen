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
            <a>Step 2</a>
          </div>
        </div>
      </div>
    </div>
    <div class="signup-right-panel"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class RSVP extends Vue {
  ID: string | (string | null)[] = "";

  created() {
    this.ID = this.$route.query.id;
    if (this.ID) {
      this.processID();
    }
  }

  processID() {
    this.axios
      .get(`https://api.citizenhacks.com/application/status/${this.ID}`)
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        console.log(e);
      });
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
