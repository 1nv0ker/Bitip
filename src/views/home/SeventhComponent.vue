<template>
    <div ref="seventhRef" class="pt-[4rem] pb-[4rem] overflow-hidden">
        <div class="flex justify-center">
            <span class="text-[#9398A8] text-[1.875rem] font-bold">{{t('seventh.title')}}</span>
        </div> 
        <div class="pt-[3rem] relative overflow-hidden h-[18rem]">
            <div class="h-[5rem]  flex gap-[4.375rem] absolute" ref="list1Ref">
                <img :src="image" v-for="image in imageLists.concat(imageLists)"/>
            </div>
            <div class="h-[5rem]  flex  gap-[4.375rem] justify-end absolute top-[10rem]" ref="list2Ref">
                <img :src="image" v-for="image in imageLists2.concat(imageLists2)"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref, onMounted, onUnmounted } from 'vue'
    import logo1 from '../../assets/logo/logo1.svg'
    import logo2 from '../../assets/logo/logo2.png'
    import logo3 from '../../assets/logo/logo3.webp'
    import logo4 from '../../assets/logo/logo4.png'
    import logo5 from '../../assets/logo/logo5.svg'
    import logo6 from '../../assets/logo/logo6.svg'
    import logo7 from '../../assets/logo/logo7.png'
    import logo8 from '../../assets/logo/logo8.png'

    import logo9 from '../../assets/logo/logo9.png'
    import logo10 from '../../assets/logo/logo10.png'
    import logo11 from '../../assets/logo/logo11.svg'
    import logo12 from '../../assets/logo/logo12.png'
    import logo13 from '../../assets/logo/logo13.png'
    import logo14 from '../../assets/logo/logo14.png'
    import logo15 from '../../assets/logo/logo15.png'

    const imageLists = ref([
        logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8
    ])
    const imageLists2 = ref([
    logo9,logo10,logo11,logo12,logo13,logo14,logo15
    ])
    const list1Ref = ref<any>()
    const list2Ref = ref<any>()
    let list1Interval:any = null
    let list2Interval:any = null
    const { t } = useI18n()
    const seventhRef = ref(null)
    defineExpose({
        seventhRef: seventhRef
    })
    onMounted(() => {
        let index = 0
        list1Interval = setInterval(() => {
            if ((list1Ref.value.clientWidth+index)>list1Ref.value.scrollWidth) {
                index = 0
                
            } else {
                index = index + 0.5
            }
            list1Ref.value.style.cssText = `left:-${index}px`
        }, 16);

        let index1 = 0
        // const scrollWidth = list2Ref.value.scrollWidth
        // console.log([list2Ref.value.clientWidth, scrollWidth])
        list2Interval = setInterval(() => {
            // console.log([list2Ref.value.scrollWidth, list2Ref.value.clientWidth, list2Ref.value.offsetWidth, list2Ref.value.scrollLeft])
            // console.log([list2Ref.value])
            // console.log((list2Ref.value.clientWidth-scrollWidth), scrollWidth)
            if (index1>=1200) {
                index1 = 0
                // console.log('1')
                // console.log([list2Ref.value])
            } else {
                index1 = index1 + 0.5
            }
            list2Ref.value.style.cssText = `right:-${index1}px`
        }, 16);

    })
    onUnmounted(() => {
        list1Interval && clearInterval(list1Interval)
        list2Interval && clearInterval(list2Interval)
    })
</script>