<template>
    <div class="w-[15.25rem] h-[20rem] border-[#EBEFF8] border-[1px] rounded-[1rem] bg-[white] pt-[1.5rem] pl-[0.75rem] pr-[0.75rem] hover_bg z-2" >
        <div>
            <span class="text-[#191919] font-bold text-[1.1rem]">{{props.title}}</span>
        </div>
        <div class="pt-[0.75rem]">
            <span class="text-[#191919] text-[0.8rem]">{{props.content}}</span>
        </div>
        <div class="pt-[0.4rem] flex justify-center items-center ">
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
<style  scoped>
    .hover_bg:hover {
        
        background: #fff;
        box-shadow: 0 2px 3px 0 transparent, 0 8px 7px 0 rgba(0, 0, 0, .01), 0 20px 13px 0 rgba(0, 0, 0, .01), 0 39px 25px 0 rgba(0, 0, 0, .01), 0 65px 47px 0 rgba(0, 0, 0, .02), 0 100px 80px 0 rgba(0, 0, 0, .02);
        border: 1px solid #f5f5f5;
    }
</style>