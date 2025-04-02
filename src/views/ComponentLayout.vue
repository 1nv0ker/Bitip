<template>
    <div :class="`w-full flex relative justify-center`" :style="bg?`background:${props.bg}`:componetStyle">
        <!-- <div class="col"></div> -->
        <div class="w-[80rem] ">
            <slot></slot>
        </div>
        <!-- <div class="col"></div> -->
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        bg: String,
        componetStyle:Object
    })
</script>