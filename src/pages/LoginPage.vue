<script setup>
import axios from "axios";
import { ref } from "vue";
// import Login from "../components/Login.vue";
const user_name = ref("");
const password = ref("");
const sendUser = () => {
  axios.post("/api/login", {
    username: user_name.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="login">
    <div>
      <input v-model="user_name" type="text" />
      <input v-model="password" type="password" />
    </div>
    <div>
      <button @click="sendUser">送信</button>
    </div>
  </div>
</template>
