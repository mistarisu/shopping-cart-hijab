<script setup>
import ShoppingCart from "./components/ShoppingCart.vue";
</script>

<template>
  <main class="min-h-screen w-full pt-10 pb-20 px-5 flex items-center justify-center bg-pink-200">
    <!-- Shop wrapper -->
    <div class="w-full max-w-md relative">
      <router-view></router-view>
    </div>

    <ShoppingCart/>
  </main>
</template>