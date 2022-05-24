<script setup>
import axios from "axios";
import { ref } from "vue";
const user_name = ref("");
const password = ref("");
const sndUser = () => {
  axios.post("/api/signup", {
    username: user_name.value,
    password: password.value,
  });
};
</script>

<template>
  <div class="signup">
    <div>
      <input v-model="user_name" type="text" />
      <input v-model="password" type="password" />
    </div>
    <div>
      <button @click="sndUser">アカウント作成</button>
    </div>
  </div>
</template>
