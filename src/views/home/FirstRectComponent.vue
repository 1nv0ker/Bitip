<template>
    <div class="w-[15.25rem] h-[20rem] border-[#EBEFF8] border-[1px] rounded-[1rem] bg-[white] pt-[1.5rem] pl-[0.75rem] pr-[0.75rem]">
        <div>
            <span class="text-[#191919] font-bold text-[1.1rem]">{{props.title}}</span>
        </div>
        <div class="pt-[0.75rem]">
            <span class="text-[#191919] text-[0.8rem]">{{props.content}}</span>
        </div>
        <div class="pt-[0.2rem] flex justify-center items-center ">
            <img :src="props.img" v-if="props.img" class="w-[11.375rem] h-[10.125rem]" />
            <div class="w-[11.375rem] h-[8rem] bg-[green]" v-else></div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        title:{type:String},
        content:{type:String},
        img:{type:String}
    })
</script>