<template>
    <div class="w-full relative">
        <!-- <div class="w-[4.75rem] h-[21.75rem] fixed right-[1.5rem] 
        flex top-[30rem] z-[99] rounded-[6.25rem] bg-[white] 
        flex-col items-center 
        justify-evenly" style="box-shadow: 0px 4px 20px 0px rgba(3,42,18,0.08);" v-show="showContact">
            <div class="flex flex-col items-center cursor-pointer">
                <img src="../assets/qq.png" class="w-[2.25rem] h-[2.25rem]" />
                <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title1') }}</span>
            </div>
            <div class="flex flex-col items-center cursor-pointer">
                <img src="../assets/wechat.png" class="w-[2.25rem] h-[2.25rem]" />
                <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title2') }}</span>
            </div>
            
            <div class="flex flex-col items-center cursor-pointer">
                <img src="../assets/tel.png" class="w-[2.25rem] h-[2.25rem]" />
                <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title4') }}</span>
            </div>
            
            <div class="flex flex-col items-center cursor-pointer">
                <img src="../assets/offical.png" class="w-[2.25rem] h-[2.25rem]" />
                <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title3') }}</span>
            </div>
        </div> -->
        <Contact v-show="showContact"/>
        <NavComponent ref="navRef" @onCloseActivity="onCloseActivity" :customeStyle="customeStyle" class="z-50" />
        <div :class="`w-full  ${acvitityStatus?'mt-[6.8725rem]':'mt-[4rem]'}`">
        <div class="w-full ">
            <slot></slot>
            <RouterView></RouterView>
        </div>
        </div>
        <FooterComponent />
        <div class=" cursor-pointer fixed bottom-[5rem] w-[3rem] h-[3rem] rounded-[1rem] flex justify-center items-center right-[2rem]" @click="scrollToTop" v-show="showButton" style="box-shadow: rgba(3, 42, 18, 0.08) 0px 4px 20px 0px;">
            <img src="../assets/back_top.png" class="w-[2rem] h-[2rem] "/>
        </div>
    </div>
</template>
<script setup lang="ts">
    import NavComponent from './home/NavComponent.vue';
    import Contact from './Contact.vue';
    import FooterComponent from './home/FooterComponent.vue';
    // import { useI18n } from 'vue-i18n'
    import { useRoute  } from 'vue-router'
    import { ref, onBeforeMount, onMounted, onBeforeUnmount } from 'vue'
    import userStore from '../store/user'
    // const { t } = useI18n()
    const showContact = ref(false)
    const showButton = ref(false)
    const acvitityStatus = ref(true)
    const store = userStore()
    const route = useRoute()

    defineProps({
        customeStyle: Object
    })
    onBeforeMount(() => {
        const paths = ['/home']
        if (paths.indexOf(route.path) !== -1) {
            showContact.value = true
        }
        store.setUserInfo()
    })
    onMounted(() => {
         window.addEventListener('scroll', checkScroll)
    })
    const onCloseActivity = (status:boolean) => {
        console.log('acvitityStatus', status, acvitityStatus.value)
        acvitityStatus.value = status
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', checkScroll)
    })
    const checkScroll = () => {
        showButton.value = window.scrollY > 200
    }
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