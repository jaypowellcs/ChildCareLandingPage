<script setup>

</script>

<template>
    <footer class="p-4 bg-white md:flex md:items-center md:justify-between md:p-5 dark:bg-gray-800">
        <span class="text-sm text-gray-900 sm:text-center dark:text-gray-400">© 2022 <router-link to="/" class="hover:underline">ABC Child Care</router-link>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-1 text-sm text-gray-500 dark:text-gray-400 sm:mt-4">
            <li><router-link to="/" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Home</router-link></li>
            <li><router-link to="/forms" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Parent Forms</router-link></li>
            <li><router-link to="/contactus" class="text-gray-900 text-sm font-semibold hover:text-gray-500 mr-4">Contact Us</router-link></li>
        </ul>
    </footer>
</template>