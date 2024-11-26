<template>
    <div class="relative inline-block text-left mb-4">
        <div>
            <!-- Button to toggle dropdown -->
            <button @click="isOpen = !isOpen" type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                id="menu-button" aria-expanded="isOpen.toString()" aria-haspopup="true">
                Languages
                <!-- Icon indicating dropdown -->
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.707 7.707a1 1 0 01-1.414-1.414L10 0l5.707 5.707a1 1 0 01-1.414 1.414L11 4.414V16a1 1 0 11-2 0V4.414L7.121 6.293a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <!-- Dropdown menu -->
        <div v-if="isOpen"
            class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <!-- Language Links -->
                <NuxtLink to="/housa" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Housa</NuxtLink>
                <NuxtLink to="/yoruba" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Yoruba</NuxtLink>
                <NuxtLink to="/igbo" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Igbo</NuxtLink>
                <NuxtLink to="/ful" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fulfulde</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Define a reactive state to toggle the dropdown
const isOpen = ref(false);
</script>

<style scoped>
/* Optional: Add custom styles here */
</style>
