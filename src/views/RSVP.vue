<template>
  <div class="rsvp-container">
    <div class="rsvp-item">b</div>
    <div class="rsvp-item">{{message}}</div>
    <div class="rsvp-item">b</div>
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
  message: string = "";
  status: {
    isAccepted: boolean;
    rsvpSubmitted: boolean;
  } = {
    isAccepted: false,
    rsvpSubmitted: false
  };

  mounted() {
    this.id = this.$route.query.id;
    if (this.id) {
      this.processID();
    }
  }

  processID() {
    // @ts-ignore
    const LOADER = this.$loading.show();
    this.axios
      .get(`https://api.citizenhacks.com/application/status/${this.id}`)
      .then(res => {
        LOADER.hide();
        this.status = res.data;
        console.log(this.status.isAccepted);
      })
      .catch(e => {
        console.log(e);
        this.message = "Unfortunate message.";
      });
  }

  get email() {
    const user = this.profile && this.profile.user;
    return (user && user.id) || "";
  }

  get isAccepted() {
    return this.status.isAccepted;
  }

  get rsvpSubmitted() {
    return this.status.rsvpSubmitted;
  }
}
</script>

<style scoped>
.rsvp-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
}
</style>
