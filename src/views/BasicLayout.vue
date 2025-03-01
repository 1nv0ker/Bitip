<template>
    <div class="w-full">
        <NavComponent />
        <slot></slot>
        <FooterComponent />
    </div>
</template>
<script setup lang="ts">
    import NavComponent from './home/NavComponent.vue';

    import FooterComponent from './home/FooterComponent.vue';
    
</script>
<style scoped>
    .activeClass {
        animation: fadeInUp;
        animation-duration: 1s;
    }
    .hiddleClass {
        visibility: hidden;
    }
</style>