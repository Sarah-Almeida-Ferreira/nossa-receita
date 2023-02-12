<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  rating: Number,
  image: String,
  money: Number,
  time: String,
  level: String
})

const loading = ref(false)

function reserve() {
  loading.value = true
  setTimeout(() => (loading.value = false), 2000)
}
</script>

<template>
  <v-card :loading="loading" class="mx-2 my-2" min-width="200" max-width="374">
    <template v-slot:loader="{ isActive }">
      <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
    </template>

    <v-img cover height="150" :src="image"></v-img>

    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <v-row align="center" class="my-2 mx-1">
        <v-rating :model-value="rating" color="amber" density="compact" half-increments readonly />
      </v-row>
      <v-row align="center" class="my-2 mx-1">
        <v-rating :model-value="money" density="compact" empty-icon="mdi-piggy-bank-outline" full-icon="mdi-piggy-bank"
        length="3" half-increments hover readonly />
      </v-row>
      <v-row align="center" class="my-2 mx-1">
        <v-icon icon="mdi-clock-time-four-outline" />
        <div class="text-subtitle-1 ml-2">{{time}}</div>
      </v-row>
      <v-row align="center" class="my-2 mx-1">
        <div class="text-subtitle-1">{{level}}</div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>

</style>