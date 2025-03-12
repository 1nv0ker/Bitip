<template>
    <div class="w-full h-full">
        <div class="w-full h-full hidden md:flex p-[1.75rem] gap-[1.75rem] bg-[#EAEAEA]">
            <div class="w-[19rem] h-full rounded-[1.5rem] bg-[white]">
                <!-- pc端菜单 -->
                <NavMenu />
            </div>
            <div style="width:calc( 100% - 20.75rem )" class="flex flex-col gap-[1.75rem] h-full">
                <div class="w-full h-[5.25rem] rounded-[1.5rem] bg-[white]"> 
                    <TopBar />
                </div>
                <div class="w-full overflow-y-auto" style="height: calc( 100% - 7rem );">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-[#EAEAEA] flex md:hidden gap-[1.75rem] p-[1.75rem] flex-col">
            <div class="w-full h-[5.25rem] rounded-[1.5rem] bg-[white]">
                <TopBar @onOpenMenu="onOpenMenu"/>
            </div>
            <div class="w-full overflow-y-auto" style="height: calc( 100% - 7rem );">
                <router-view></router-view>
            </div>
        </div>
        <div class="fixed top-0 overflow-hidden right-0 left-0 bottom-0 md:hidden" v-show="show">
            <div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden z-0 bg-[#000] opacity-[0.5]" @click="onCloseNav">
                
            </div>
            <div class="w-[19rem] h-full bg-[white] absolute top-0 bottom-0" style="z-index: 100;">
                <div class="flex justify-end p-[1rem]">
                    <div class="close-icon cursor-pointer text-[black]" @click="onCloseNav"></div>
                </div>
                <div>
                    <!-- 手机端菜单 -->
                    <NavMenu />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import NavMenu from './NavMenu.vue'
    import TopBar from './TopBar.vue'
    import { ref } from 'vue'
    const show = ref(false)
    const onCloseNav = () => {
        show.value = false
    }

    const onOpenMenu = () => {
        show.value = true
    }
</script>