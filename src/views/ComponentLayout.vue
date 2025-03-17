<template>
    <div :class="`w-full row gx-0 relative`" :style="`background:${props.bg}`">
        <div class="col"></div>
        <div class="w-[80rem]">
            <slot></slot>
        </div>
        <div class="col"></div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        bg: String
    })
</script>