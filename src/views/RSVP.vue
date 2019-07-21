<template>
  <div class="rsvp-container">
    <div class="rsvp-item">b</div>
    <div class="rsvp-item">
      <div v-if="rsvpSubmitted">Already RSVP'd</div>
      <div v-else-if="isAccepted">Accepted</div>
    </div>
    <div class="rsvp-item">
      <FileUpload />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { State, Action, Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, User } from "../store/profile/types";
import FileUpload from "@/components/molecules/FileUpload.vue";
const namespace: string = "profile";

@Component({
  components: {
    FileUpload
  }
})
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
  uploading: boolean = true;

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
      })
      .catch(e => {
        console.log(e);
        this.message = "Unfortunate message.";
      });
  }

  async onFilesUploaded() {}

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
.rsvp-item {
  width: 100%;
  height: 100vh;
}
</style>
