<script setup>
import axios from "axios";
// import { ref } from "vue";
// import Login from "../components/Login.vue";
const Logout = () => {
  axios.get("/api/logout");
};
</script>

<template>
  <div class="logout">
    This is Logout Page
    <div>Are you sure for Logout?</div>
    <div>
      <button @click="Logout">Yes</button>
      <button @click="Logout">No</button>
    </div>
  </div>
</template>
