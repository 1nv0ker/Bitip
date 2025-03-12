<template>
    <div class="w-full">
        <div class="w-[4.75rem] h-[21.75rem] fixed right-[1.5rem] hidden 
        md:flex top-[30rem] z-[99] rounded-[6.25rem] bg-[white] 
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
                <img src="../assets/offical.png" class="w-[2.25rem] h-[2.25rem]" />
                <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title3') }}</span>
            </div>
            <div class="flex flex-col items-center cursor-pointer">
                <img src="../assets/tel.png" class="w-[2.25rem] h-[2.25rem]" />
                <span class="pt-[0.25rem] text-[#666666] text-[0.8rem] font-normal">{{ t('contact.title4') }}</span>
            </div>
        </div>
        <NavComponent ref="navRef" @onCloseActivity="onCloseActivity"/>
        <div :class="`w-full  ${acvitityStatus?'mt-[6.8725rem]':'mt-[4rem]'}`">
            <slot></slot>
            <RouterView></RouterView>
        </div>
        <FooterComponent />
    </div>
</template>
<script setup lang="ts">
    import NavComponent from './home/NavComponent.vue';

    import FooterComponent from './home/FooterComponent.vue';
    import { useI18n } from 'vue-i18n'
    import { useRoute  } from 'vue-router'
    import { ref, onBeforeMount, onMounted } from 'vue'
    import userStore from '../store/user'
    import { GetUserInfo } from '../api/login'
    const { t } = useI18n()
    const showContact = ref(false)
    const acvitityStatus = ref(true)
    const store = userStore()
    const route = useRoute()
    onBeforeMount(() => {
        const paths = ['/home']
        if (paths.indexOf(route.path) !== -1) {
            showContact.value = true
        }
        if (store.token) {
            GetUserInfo()
            .then((res1:any) => {
                console.log('res1', res1)
                store.setUserInfo(res1.body.userInfo)
            })
        }
    })
    onMounted(() => {
        
    })
    const onCloseActivity = (status:boolean) => {
        console.log('acvitityStatus', status, acvitityStatus.value)
        acvitityStatus.value = status
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