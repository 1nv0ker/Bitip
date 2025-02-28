<template>
    <div class="w-full">
        <NavComponent />
        <FirstComponent  />
        <SecondComponent ref="secondRef" class="hiddleClass"/>
        <ThirdCompoent class="hiddleClass" ref="thirdRef" />
    </div>
</template>
<script setup lang="ts">
    import NavComponent from './NavComponent.vue';
    import FirstComponent from './FirstComponent.vue'
    import SecondComponent from './SecondComponent.vue';
    import ThirdCompoent from './ThirdCompoent.vue';
    import { ref, onMounted, onUnmounted } from 'vue'
    const secondRef = ref<any>()
    const thirdRef = ref<any>()
    const onScroll = () => {
        
        ComponentActive(secondRef.value.secondRef)
        ComponentActive(thirdRef.value.thirdRef)
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