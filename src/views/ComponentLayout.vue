<template>
    <div :class="`w-full flex relative justify-center ${customClass}`" :style="bg?`background:${props.bg}`:componetStyle">
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
        componetStyle:Object,
        customClass:String
    })
</script>
<style lang="less">
    .service_bg {
        background-image: url(../assets/service/bg.svg?inline);
        background-size: 100% 150%;
        background-repeat: no-repeat;
        background-position: 100% -100px
    }
</style>