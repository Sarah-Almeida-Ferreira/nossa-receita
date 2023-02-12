<script setup>
import { computed, onBeforeMount } from 'vue'
import RecipeCard from '../components/RecipeCard.vue'
import CategoryService from '@/services/CategoryService.js'
import store from '../store';

const categories = computed(() => store.getters['CategoryModule/getData'])
const recipes = [
  'Macarrão',
  'Pizza',
  'Lasanha',
  'Rondelli'
]

onBeforeMount(async () => {
  await CategoryService.getAll()
  console.log(categories.value)
})
</script>

<template>
  <v-app>
    <v-main class="pt-16">
      <v-sheet
        class="my-5"
        v-for="category in categories"
        :key="category.id">
        <div class="text-h5 ml-3" v-if="category.recipes">{{category.name}}</div>
        <v-slide-group class="cards-container">
          <v-slide-group-item v-for="recipe in category.recipes" :key="recipe.id">
            <RecipeCard
              :title="recipe.title"
              :rating="recipe.rating"
              :money="recipe.money"
              :time="recipe.time"
              :level="recipe.level"
              :image="recipe.image"/>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
</style>
