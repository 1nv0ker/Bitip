<template>
    <div @mouseenter="status=true" 
        @mouseleave="status=false" class="h-full z-50">
        <div class="cursor-pointer text-[1rem] h-full hover:text-[#01AA44] flex items-center gap-[0.4rem] z-50  text-[#191919] font-medium" 
        >
            <span @click="onPage(props.path, props.name)" :class="`ellipsis-single ${selected==props.name?'text-[#01AA44]':''}`">{{props.text}}</span>
            <img class="w-[0.625rem] h-[0.625rem]" :src="(selected==props.key || !status )?downImg:upImg" v-if="props.showArrow"/>
        </div>
        <div class="absolute top-[6.8125rem] z-50 right-0 left-0 m-0 pb-[2rem]  bg-[white] flex justify-center animate__fadeIn animate__animated border-t-[1px] border-[#EBEFF8]" 
        v-show="status && showArrow" 
        style="animation-duration: 1s"
        @mouseenter="status=true">
            <div class="flex gap-[1rem] ">
                <div v-for="item in items" class="w-[30rem] z-50">
                    <div class="border-b-[1px] border-[#EBEFF8] pt-[1.25rem] z-50 pb-[1.25rem]">
                        <span class="text-[#9BA2BB] text-[1rem] font-medium z-50">{{ item.title }}</span>
                    </div>
                    <div class="mt-[1.5rem] flex gap-[1rem] flex-col ">
                        <div class="flex hover:bg-[#EDFBF7]  justify-between items-center w-auto rounded-[1rem] cursor-pointer" @click="onPage(item1?.path, item1?.name, item1?.type)" v-for="item1 in item.items" v-if="!item.special">
                            <div class="flex items-center ">
                                <img  :src="item1.img" class="z-50 w-[1.5rem] h-[1.5rem] "/>
                                <span class="pl-[0.5rem] z-50 cursor-pointer pr-[0.5rem]">{{item1.title}}</span>
                                <img  :src="item1.img2"  :style="item1.style" class="z-50" />
                                <span class="text-[#5D7404] text-[1rem] pl-[0.5rem]  z-50 " v-show="!item1.show">{{ item1.subtitle }}</span>
                            </div>
                            
                        </div>
                        <div class="flex  items-center w-auto  cursor-pointer" @click="onPage(item1?.path, item1?.name, item1?.type)" v-for="item1 in item.items" v-else>
                            <img  :src="item1.img" class="w-[26rem] h-[4.625rem] " />
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
    import { useRouter, useRoute } from 'vue-router'
    import useStore from '../../store/i18n'
    import upImg from '../../assets/up.png'
    import downImg from '../../assets/down.png'
    interface item_type {
        title?:string,
        img?: string,
        img2?:string,
        items?:item_type[],
        path?:string,
        special?:boolean,
        subtitle?:string,
        name?:string,
        type?:number,
        style?:any,
        show?:Boolean
    }
    const store = useStore()
    const selected = ref<any>('')
    const status = ref(false)
    const router = useRouter()
    const route = useRoute()
    const props = defineProps({
        text:String,
        key:String,
        showArrow: {
            type: Boolean,
            default: true
        },
        items: Array as PropType<item_type[]>,
        path:String,
        name:String
    })
    onMounted(() => {
        route.name && store.setNav(route.name as string)
        if (route.name) {
            selected.value =  route.name
        } else {
            selected.value = ''
        }
        
    })
    const onPage = (path:string|undefined, name:string|undefined, type:number|undefined=undefined) => {
        name && store.setNav(name)
        console.log('path')
        path && router.replace({path: path, query: {
            type:type
        }})
    }
</script>