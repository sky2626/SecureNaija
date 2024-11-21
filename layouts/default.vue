<script setup lang="ts">
import specialnav from '~/components/specialnav.vue';
</script>

<template>
    <div class="bg-white">
        <header>
            <specialnav />
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <Specialfooter />
        </footer>
    </div>
</template>