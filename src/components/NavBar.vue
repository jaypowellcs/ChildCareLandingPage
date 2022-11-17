<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<div class="bg-white shadow ">
    <div class="container mx-auto px-4 ">
      <div class="flex items-center justify-between py-3">
        <div>
          <img class="w-16 md:w-16 lg:w-22" src="../assets/logo.png"/>
        </div>

        <div class="hidden sm:flex sm:items-center">
          <router-link to="/" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Home</router-link>
          <router-link to="/forms" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Parent Forms</router-link>
          <router-link to="/contactus" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Contact Us</router-link>
        </div>

        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Sign in</a>
          <a href="#" class="text-gray-900 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-gray-500 hover:border-text-grey-500">Sign up</a>
        </div>

        
      </div>
      
      <div class="block sm:hidden bg-white border-t-4 py-2">
        <div class="flex flex-col">
          <router-link to="/" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Home</router-link>
          <router-link to="/forms" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Parent Forms</router-link>
          <router-link to="/contactus" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Contact Us</router-link>
          <div class="flex justify-between items-center border-t-2 pt-2">
            <a href="#" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Sign in</a>
            <a href="#" class="text-gray-900 text-sm font-semibold border px-4 py-1 rounded-lg hover:text-gray-500 hover:border-text-grey-500">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>