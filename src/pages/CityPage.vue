<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const props = defineProps({
  cityName: {
    type: String,
    required: true,
  },
});
const cityInfo = ref();
onMounted(async () => {
  const res = await axios.get("/api/cities/" + props.cityName);
  cityInfo.value = res.data;
});
</script>

<template>
  <div v-if="cityInfo">
    <h1>
      {{ cityInfo.name.String }}
    </h1>
    <h2>CountryCode</h2>
    <p>{{ cityInfo.countryCode.String }}</p>
    <h2>District</h2>
    <p>{{ cityInfo.district.String }}</p>
    <h2>Population</h2>
    <p>{{ cityInfo.population.String }}</p>
    <h2>ID</h2>
    <p>{{ cityInfo.id.Int64 }}</p>
  </div>
  <div v-else>街の情報が見つかりませんでした</div>
</template>
