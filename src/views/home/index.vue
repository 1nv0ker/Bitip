<template>
    <BasicLayout>
        <!-- <NavComponent /> -->
        <FirstComponent  />
        <SecondComponent ref="secondRef" class="hiddleClass"/>
        <ThirdCompoent class="hiddleClass" ref="thirdRef" />
        <FourthComponent class="hiddleClass" ref="fourthRef" />
        <FifthComponent class="hiddleClass" ref="fifthRef" />
        <SixthComponent class="hiddleClass" ref="sixthRef" />
        <SeventhComponent class="hiddleClass" ref="seventhRef" />
        <!-- <FooterComponent /> -->
    </BasicLayout>
</template>
<script setup lang="ts">
    // import NavComponent from './NavComponent.vue';
    import FirstComponent from './FirstComponent.vue'
    import SecondComponent from './SecondComponent.vue';
    import ThirdCompoent from './ThirdCompoent.vue';
    import FourthComponent from './FourthComponent.vue';
    import FifthComponent from './FifthComponent.vue';
    import SixthComponent from './SixthComponent.vue';
    import SeventhComponent from './SeventhComponent.vue';
    // import FooterComponent from './FooterComponent.vue';
    import BasicLayout from '../BasicLayout.vue'
    import { ref, onMounted, onUnmounted } from 'vue'
    const secondRef = ref<any>()
    const thirdRef = ref<any>()
    const fourthRef = ref<any>()
    const fifthRef = ref<any>()
    const sixthRef = ref<any>()
    const seventhRef = ref<any>()
    const onScroll = () => {
        ComponentActive(secondRef.value.secondRef)
        ComponentActive(thirdRef.value.thirdRef)
        ComponentActive(fourthRef.value.fourthRef)
        ComponentActive(fifthRef.value.fifthRef)
        ComponentActive(sixthRef.value.sixthRef)
        ComponentActive(seventhRef.value.seventhRef)
    }
    const ComponentActive = (targetRef:any,) => {
        let showStatus = false
        const target = targetRef as HTMLElement
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