<template>
    <BasicLayout>
        <!-- <NavComponent /> -->
        <FirstComponent  @onFreeUse="onFreeUse"/>
        <!-- <SecondComponent ref="secondRef" class="hiddleClass" @onFreeUse="onFreeUse"/> -->
        <SecondComponent ref="secondRef" @onFreeUse="onFreeUse"/>
        <ExtraComponent ref="extraRef" class="hiddleClass" />
        <ThirdCompoent class="hiddleClass" ref="thirdRef" />
        <!-- <FourthComponent class="hiddleClass" ref="fourthRef" /> -->
        <FifthComponent class="hiddleClass" ref="fifthRef" />
        <SixthComponent class="hiddleClass" ref="sixthRef" @onFreeUse="onFreeUse" />
        <SeventhComponent class="hiddleClass" ref="seventhRef" />
        <!-- <FooterComponent /> -->
    </BasicLayout>
</template>
<script setup lang="ts">
    // import NavComponent from './NavComponent.vue';
    import FirstComponent from './FirstComponent.vue'
    import SecondComponent from './SecondComponent.vue';
    import ThirdCompoent from './ThirdCompoent.vue';
    // import FourthComponent from './FourthComponent.vue';
    import FifthComponent from './FifthComponent.vue';
    import SixthComponent from './SixthComponent.vue';
    import SeventhComponent from './SeventhComponent.vue';
    import ExtraComponent from './ExtraComponent.vue';
    // import FooterComponent from './FooterComponent.vue';
    import BasicLayout from '../BasicLayout.vue'
    import { ref, onMounted, onUnmounted } from 'vue'

    import useUserStore from '../../store/user'
    import { useRouter } from 'vue-router'
    const userStore = useUserStore()
    const router = useRouter()

    const secondRef = ref<any>()
    const thirdRef = ref<any>()
    // const fourthRef = ref<any>()
    const fifthRef = ref<any>()
    const sixthRef = ref<any>()
    const seventhRef = ref<any>()
    const extraRef = ref<any>()
    const onScroll = () => {
        // ComponentActive(secondRef.value.secondRef)
        
        ComponentActive(thirdRef.value.thirdRef)
        // ComponentActive(fourthRef.value.fourthRef)
        ComponentActive(fifthRef.value.fifthRef)
        ComponentActive(sixthRef.value.sixthRef)
        ComponentActive(seventhRef.value.seventhRef)
        ComponentActive(extraRef.value.extraRef)
    }
    const ComponentActive = (targetRef:any) => {
        let showStatus = false
        const target = targetRef.$el || targetRef as HTMLElement
        if (!target) return
        const rect = target.getBoundingClientRect()
        const windowHeight = window.innerHeight;

        if (rect.top <= (windowHeight-100) && !showStatus) {
            // console.log('secondShow')
            target.classList.remove('hiddleClass')
            target.classList.add('activeClass');
            showStatus = true
        }
    }
    onMounted(() => {
        window.addEventListener('scroll', onScroll)
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll);
    })
    const onFreeUse = () => {
        if (!userStore.token) {
            router.push('/login')
        }
    }
    // defineOptions({
    //     metaInfo: {
    //         title:'bitip123',
    //         meta: [
    //             {
    //                 name:'Keywords', content:'爬虫代理,高匿代理ip,刷单代理ip,https代理,http代理,ip代理,代理ip,私密代理ip,免费代理ip,高速代理,独享代理ip,免费ip,在线代理,代理服务器'
    //             },
    //             {
    //                 name:'Description', content:'（www.bitip.com）是http代理ip服务供应商，拥有千万级独立ip池，覆盖全球，低延迟高可用率稳定专业！爬虫代理,网页代理ip,企业级代理ip,电脑换ip,https代理,私密代理ip,免费代理ip,独享代理ip,在线代理,代理服务器等!'
    //             }
    //         ]
    //     }
    // })
    
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