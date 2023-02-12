<template>
  <v-layout>
    <v-app-bar color="amber-darken-2">

      <template v-slot:prepend>
        <v-app-bar-nav-icon color="white"/>
      </template>

      <v-spacer/>

      <v-btn icon>
        <v-icon icon="mdi-magnify" color="white"/>
      </v-btn>

      <v-btn icon>
        <v-icon icon="mdi-heart" color="white" />
      </v-btn>

      <v-btn icon>
        <v-icon icon="mdi-dots-vertical" color="white" />
      </v-btn>
    </v-app-bar>
  </v-layout>
</template>