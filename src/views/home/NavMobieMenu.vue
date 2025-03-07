<template>
    <div class="fixed top-0 overflow-hidden right-0 left-0 bottom-0 z-50">
        <div class=" absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-[#000] opacity-[0.5]" @click="onCloseNav">

        </div>
        <div :class="`w-[35rem] bg-[white] absolute z-2000 top-0 bottom-0 ${props.status?'animate__fadeInLeft':'animate__fadeOutLeft'} animate__animated`" style="animation-duration: 0.5s">
            <div class="flex justify-end p-[1rem]">
                <div class="close-icon cursor-pointer text-[black]" @click="onCloseNav"></div>
            </div>
            <div class="accordion accordion-flush mt-[4rem]" id="accordionFlushExample">
                <div  v-for="item in items">
                    <div class="accordion-item p-[1rem]" v-if="!item.path">
                        <h2 class="accordion-header" :id="item.title">
                        <button class="accordion-button collapsed text-[2.5rem]" 
                        style="visibility:visible"
                        type="button" 
                        data-bs-toggle="collapse" :data-bs-target="`#${item.id}`" aria-expanded="false" :aria-controls="`#${item.id}`">
                            {{item.title}}
                        </button>
                        </h2>
                        <div :id="item.id" class="accordion-collapse collapse" :aria-labelledby="item.title" data-bs-parent="#accordionFlushExample" style="visibility:visible">
                            <div class="accordion-body flex flex-col gap-[1.2rem]">
                                <div v-for="item1 in item.items" class="text-[2rem] text-[black]" @click="onPage(item1.path)">
                                    {{item1.title}}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div v-else class="p-[2rem] bg-[white]">
                        <span class="text-[2.5rem]" @click="onPage(item.path)">{{item.title}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    const { t } = useI18n()
    const emit = defineEmits(['onCloseNav'])
    const onCloseNav = () => {

        emit('onCloseNav')
    }
    
    const props = defineProps({
        status:Boolean
    })
    const router = useRouter()
    const items = computed(() => {
        return [
            {
                title: t('navMenu.title1'),
                id: 'navMenu_1',
                items: [
                    {
                        title: t('navMenu.package_subtitle1'),
                        path:'/setMeal?1'
                    },
                    {
                        title: t('navMenu.package_subtitle2'),
                        path:'/setMeal?2'
                    },
                    {
                        title: t('navMenu.package_subtitle3'),
                        img: '',
                        path:'/setMeal?3'
                    },
                    {
                        title: t('navMenu.package_subtitle4'),
                        img: '',
                        path:'/setMeal?4'
                    }
                ]
            },
            {
                title: t('navMenu.title2'),
                id: 'navMenu_2',
            },
            {
                title: t('navMenu.title3'),
                id: 'navMenu_3',
            },
            {
                title: t('navMenu.title4'),
                id: 'navMenu_4',
            },
            {
                title: t('navMenu.title5'),
                path: '/safety'
            },
            {
                title: t('navMenu.title6'),
                path:'/service'
            },
            {
                title: t('navMenu.title7'),
                path:'/plan'
            }
        ]
    })
    const onPage = (path:string) => {
        path && router.push({path:path})
    }
</script>