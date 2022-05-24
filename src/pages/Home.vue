<script setup>
// import axios from "axios";
import { ref } from "vue";
const cityName = ref("");
</script>

<template>
  <input v-model="cityName" type="text" />
  <router-link :to="`/city/${cityName.value}`">未実装</router-link>
</template>
