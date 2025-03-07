<template>
    <div @mouseenter="status=true" 
        @mouseleave="status=false" class="h-full">
        <div class="cursor-pointer text-[1rem] h-full hover:text-[#01AA44] flex items-center gap-[0.4rem]  text-[#191919] font-medium" 
        >
            <span @click="onPage(props.path)" class="ellipsis-single">{{props.text}}</span>
            <img class="w-[0.625rem] h-[0.625rem]" :src="(selected==props.key || !status )?downImg:upImg" v-if="props.showArrow"/>
        </div>
        <div class="absolute top-[4rem] right-0 left-0 m-0 pb-[2rem] bg-[white] flex justify-center animate__fadeIn animate__animated" 
        v-show="status && showArrow" 
        style="animation-duration: 1s"
        @mouseenter="status=true">
            <div class="flex gap-[1rem]">
                <div v-for="item in items" class="w-[26.25rem]">
                    <div class="border-b-[1px] border-[#EBEFF8] pt-[1.25rem] pb-[1.25rem]">
                        <span class="text-[#9BA2BB] text-[1rem] font-medium">{{ item.title }}</span>
                    </div>
                    <div class="mt-[1.5rem] flex gap-[1rem] flex-col">
                        <div class="flex hover:bg-[#EDFBF7] p-[1rem] justify-between items-center w-auto rounded-[1rem] cursor-pointer" @click="onPage(item1?.path)" v-for="item1 in item.items" v-if="!item.special">
                            <div class="flex items-center">
                                <img  :src="item1.img" class="w-[1.5rem] h-[1.5rem] "/>
                                <span class="pl-[0.5rem] cursor-pointer">{{item1.title}}</span>
                            </div>
                            <span class="text-[#5D7404] text-[1rem] pl-[3.375rem]  ">{{ item1.subtitle }}</span>
                        </div>
                        <div class="flex  items-center w-auto rounded-[1rem] cursor-pointer" @click="onPage(item1?.path)" v-for="item1 in item.items" v-else>
                            <img  :src="item1.img" class="w-full h-full " />
                            <!-- <span class="pl-[0.5rem] cursor-pointer" >{{item1.title}}</span> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import type { PropType  } from 'vue'
    import { useRouter } from 'vue-router'
    import useStore from '../../store/i18n'
    import upImg from '../../assets/up.png'
    import downImg from '../../assets/down.png'
    interface item_type {
        title?:string,
        img?: string,
        items?:item_type[],
        path?:string,
        special?:boolean,
        subtitle?:string
    }
    const store = useStore()
    const selected = ref('')
    const status = ref(false)
    const router = useRouter()
    const props = defineProps({
        text:String,
        key:String,
        showArrow: {
            type: Boolean,
            default: true
        },
        items: Array as PropType<item_type[]>,
        path:String
    })
    onMounted(() => {
        selected.value = store.currentNav
    })
    const onPage = (path:string|undefined) => {
        path && router.push({path: path})
    }
</script>