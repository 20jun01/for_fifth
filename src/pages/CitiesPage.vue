<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const props = defineProps({
  countryCode: {
    type: String,
    required: true,
  },
});
const cities = ref();
onMounted(async () => {
  const res = await axios.get("/api/countries/" + props.countryCode);
  cities.value = res.data;
});
</script>

<template>
  <div>
    <h1>街一覧/Cities</h1>
    <div v-if="cities">
      <div v-for="city in cities" :key="city.name">
        <router-link :to="`/city/${city.name.String}`">
          {{ city.name.String }}
        </router-link>
      </div>
    </div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>
