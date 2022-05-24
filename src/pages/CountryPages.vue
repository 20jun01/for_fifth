<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const countryList = ref();
onMounted(async () => {
  const res = await axios.get("/api/countries");
  countryList.value = res.data;
});
</script>

<template>
  <div>
    <h1>国一覧/Countries</h1>
    <div v-if="countryList">
      <div v-for="country in countryList" :key="country.Name">
        <router-link :to="`/countries/${country.Code}`">
          {{ country.Name }}
        </router-link>
      </div>
    </div>
    <div v-else>国が見つかりませんでした</div>
  </div>
</template>
