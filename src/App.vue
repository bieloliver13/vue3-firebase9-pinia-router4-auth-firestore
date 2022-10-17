<template>
  <div>
      <h1>APP Base</h1>
      <nav v-if="!userStore.loadingSession">
        <router-link to="/" v-if="userStore.userData">HOME</router-link> |
        <router-link to="/login" v-if="!userStore.userData">LOGIN</router-link> |
        <router-link to="/register" v-if="!userStore.userData">REGISTER</router-link> |
        <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>

        
      </nav>
      <div v-else>loading user...</div>
      <router-view></router-view>
  </div>
</template>

<script setup>
import {useUserStore} from "./stores/user";

const userStore = useUserStore();
</script>

