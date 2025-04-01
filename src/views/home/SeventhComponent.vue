<template>
    <ComponentLayout ref="seventhRef" class="pb-[6.875rem]" :bg="'white'">
        <div class="w-full">
            <div class="flex justify-center">
                <span class="text-[#191919] text-[3.25rem] font-bold">{{t('seventh.title')}}</span>
            </div>
            <div class="gap-x-[1rem] gap-y-[1rem] grid-cols-4 grid grid-rows-3 pt-[3.75rem]">
                <div v-for="content in contents" class="border-[1px] bitip_logo
                flex justify-center items-center
                 border-[#EBEFF8] bg-[#FAFAFA] rounded-[2rem] h-[9.125rem] ">
                    <img :src="content.img" :style="`width:${content.w}rem;height:${content.h}rem`"/>
                </div>
            </div>
        </div>
        <!-- <div class="flex justify-center">
            <span class="text-[#9398A8] text-[1.875rem] font-bold">{{t('seventh.title')}}</span>
        </div> 
        <div class="pt-[3rem] relative overflow-hidden h-[18rem]">
            <div class="h-[5rem]  flex gap-[4.375rem] absolute" ref="list1Ref">
                <img :src="image" v-for="image in imageLists.concat(imageLists)"/>
            </div>
            <div class="h-[5rem]  flex  gap-[4.375rem] justify-end absolute top-[10rem]" ref="list2Ref">
                <img :src="image" v-for="image in imageLists2.concat(imageLists2)"/>
            </div>
        </div> -->
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { ref, computed } from 'vue'
    import ComponentLayout from '../ComponentLayout.vue'
    import logo1 from '../../assets/company/1.svg'
    import logo2 from '../../assets/company/2.svg'
    import logo3 from '../../assets/company/3.svg'
    import logo4 from '../../assets/company/4.svg'
    import logo5 from '../../assets/company/5.svg'
    import logo6 from '../../assets/company/6.svg'
    import logo7 from '../../assets/company/7.svg'
    import logo8 from '../../assets/company/8.svg'
    import logo9 from '../../assets/company/9.svg'
    import logo10 from '../../assets/company/10.svg'
    import logo11 from '../../assets/company/11.svg'
    import logo12 from '../../assets/company/12.svg'
    const { t } = useI18n()
    const seventhRef = ref(null)
    defineExpose({
        seventhRef: seventhRef
    })
    const contents = computed(() => {
        
        return [
            {
                img: logo1,
                w: 17.75,
                h:4.125
            },
            {
                img: logo2,
                w: 17.75,
                h:4.125
            },
            {
                img: logo3,
                w: 17.75,
                h:4.125
            },
            {
                img: logo4,
                w: 17.75,
                h:4.125
            },
            {
                img: logo5,
                w: 17.75,
                h:4.125
            },
            {
                img: logo6,
                w: 17.75,
                h:4.125
            },
            {
                img: logo7,
                w: 17.75,
                h:4.125
            },
            {
                img: logo8,
                w: 17.75,
                h:4.125
            },
            {
                img: logo9,
                w: 17.75,
                h:4.125
            },
            {
                img: logo10,
                w: 17.75,
                h:4.125
            },
            {
                img: logo11,
                w: 17.75,
                h:4.125
            },
            {
                img: logo12,
                w: 17.75,
                h:4.125
            }
        ]
    })
    

    // const imageLists = ref([
    //     logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8
    // ])
    // const imageLists2 = ref([
    // logo9,logo10,logo11,logo12,logo13,logo14,logo15
    // ])
    // const list1Ref = ref<any>()
    // const list2Ref = ref<any>()
    // let list1Interval:any = null
    // let list2Interval:any = null
    // const { t } = useI18n()
    // const seventhRef = ref(null)
    // defineExpose({
    //     seventhRef: seventhRef
    // })
    // onMounted(() => {
    //     let index = 0
    //     list1Interval = setInterval(() => {
    //         if ((list1Ref.value.clientWidth+index)>list1Ref.value.scrollWidth) {
    //             index = 0
                
    //         } else {
    //             index = index + 0.5
    //         }
    //         list1Ref.value.style.cssText = `left:-${index}px`
    //     }, 16);

    //     let index1 = 0
    //     // const scrollWidth = list2Ref.value.scrollWidth
    //     // console.log([list2Ref.value.clientWidth, scrollWidth])
    //     list2Interval = setInterval(() => {
    //         // console.log([list2Ref.value.scrollWidth, list2Ref.value.clientWidth, list2Ref.value.offsetWidth, list2Ref.value.scrollLeft])
    //         // console.log([list2Ref.value])
    //         // console.log((list2Ref.value.clientWidth-scrollWidth), scrollWidth)
    //         if (index1>=1200) {
    //             index1 = 0
    //             // console.log('1')
    //             // console.log([list2Ref.value])
    //         } else {
    //             index1 = index1 + 0.5
    //         }
    //         list2Ref.value.style.cssText = `right:-${index1}px`
    //     }, 16);

    // })
    // onUnmounted(() => {
    //     list1Interval && clearInterval(list1Interval)
    //     list2Interval && clearInterval(list2Interval)
    // })
</script>
<style >
    .bitip_logo > img {
        background: transparent;
        filter: grayscale(100%);
        opacity: 0.6;
    }
    .bitip_logo:hover > img {
        background: transparent;
        filter: grayscale(0%);
        opacity: 1
        /* opacity: 0.6; */
    }
</style>