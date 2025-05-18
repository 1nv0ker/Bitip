<template>
    <ComponentLayout ref="fourthRef" class=" pb-[4rem] pt-[3.625rem] overflow-hidden relative " >
        <!-- bg-[#F4FAF6] -->
        <!-- :style="`background-image: url('${mapGif}');background-repeat: no-repeat;background-size: cover;`" -->
        <!-- <div class=" absolute top-0 bottom-0 left-0 right-0">
            <img src="../../assets/map_group.png" class="w-full h-full" />
        </div> -->
        <!-- <div class=" absolute w-full h-full">
            <img class="w-full h-full" src="../../assets/map.gif" />
        </div> -->
        <div class="flex justify-center w-full">
            <span class="text-[#191919] text-[3.25rem] font-bold text-center whitespace-nowrap">{{t('fourth.title')}}</span>
        </div>
        <!-- <div class="flex justify-center gap-[11.25rem] mt-[2rem] w-full">
           <div class="flex flex-col justify-center">
                <span class="text-[#191919] text-[2rem] font-bold text-center whitespace-nowrap">{{t('fourth.subtitle1')}}</span>
                <span class="text-[#191919] text-[1.25rem]  text-center whitespace-nowrap">{{t('fourth.content1')}}</span>
           </div>
           <div class="flex flex-col justify-center">
                <span class="text-[#191919] text-[2rem] font-bold text-center whitespace-nowrap">{{t('fourth.subtitle2')}}</span>
                <span class="text-[#191919] text-[1.25rem]  text-center whitespace-nowrap">{{t('fourth.content2')}}</span>
           </div>
           <div class="flex flex-col justify-center">
                <span class="text-[#191919] text-[2rem] font-bold text-center whitespace-nowrap">{{t('fourth.subtitle3')}}</span>
                <span class="text-[#191919] text-[1.25rem]  text-center whitespace-nowrap">{{t('fourth.content3')}}</span>
           </div>
        </div> -->
        <div class="mt-[4rem] w-full flex justify-center relative">
            <div class="world-map w-[80rem] h-[50rem] relative bg-red" id="world-map">
                <video autoplay type="video/mp4" loop  muted src="../../assets/map.mp4" playsinline disablepictureinpicture>
                    <!-- <source src="../../assets/map.mp4" type="video/mp4" /> -->
                </video>
                <div class="absolute right-[-4.5rem]  bottom-[8rem] flex flex-col gap-[0.5rem] justify-end pb-[4rem] w-[13rem]">
                    <div v-for="legend in legendDatas" class="flex items-center justify-between h-[4.5rem]  w-full rounded-[2rem] bg-[#FAFAFA] p-[0.5rem]">
                        <img :src="legend.img" class="w-[3.5rem] h-full "/>
                        <div class="flex flex-col h-full w-[15rem] justify-between pl-[0.5rem]">
                            <span class="text-[#191919] text-[1.1rem] ">{{legend.name}}</span>
                            <span class="text-[#191919] text-[1.1rem] ">{{legend.number}}</span>
                        </div>
                        </div>
                </div>
            </div>
            
        </div>
        
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import {ref, onMounted, computed} from 'vue'
    import ComponentLayout from '../ComponentLayout.vue'

    // import map_bg from '../../assets/map_group.png'
    import gerImg from '../../assets/ger.png'
    import usImg from '../../assets/us.png'
    import ukImg from '../../assets/uk.png'
    import canImg from '../../assets/can.png'
    import indImg from '../../assets/india.png'
    import mxImg from '../../assets/nations/mx.png'
    // import mapGif from '../../assets/map.gif'
    const { t } = useI18n()
    const fourthRef = ref<HTMLElement>()

    defineExpose({
        fourthRef: fourthRef
    })
    const legendDatas = computed(() => {
        return [
            {
                name: t('fourth.ger'),
                img:gerImg,
                value: 53,
                key:'a',
                number:'5,764,386 IPS'
            },
            {
                name: t('fourth.us'),
                img:usImg,
                value: 13,
                key:'b',
                number:'39,564,281 IPS'
            },
            {
                name: t('fourth.uk'),
                img:ukImg,
                value: 8,
                key:'c',
                number:'7,121,388 IPS'
            },
            {
                name: t('fourth.mx'),
                img:mxImg,
                value: 8,
                key:'c',
                number:'6,551,297 IPS'
            },
            {
                name: t('fourth.can'),
                img:canImg,
                value: 10,
                key:'d',
                number:'4,222,171 IPS'
            },
            {
                name: t('fourth.ind'),
                img:indImg,
                value: 10,
                key:'e',
                number:'1,203,578 IPS'
            }
        ]
    })

   
    onMounted(() => {

    })
    
</script>
<style>
.world-map {
   /* height: 50vh;
   width: 80vw;
  }
  @keyframes loading {
  0% { width: 0; }
  50% { background-color: #BAD162; }
  100% { width: 100%; } */
}

.progress-bar {
  animation: loading 5s ease-in-out infinite;
}
</style>