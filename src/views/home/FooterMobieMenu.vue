<template>
    <div class="md:hidden w-full">
        <div class="accordion accordion-flush mt-[4rem]" id="accordionFlushExample">
            <div  v-for="item in items">
                <div class="accordion-item p-[1rem]">
                    <h2 class="accordion-header" :id="item.title">
                    <button class="accordion-button collapsed text-[2.5rem]" 
                    style="visibility:visible"
                    type="button" 
                    data-bs-toggle="collapse" :data-bs-target="`#${item.id}`" aria-expanded="false" :aria-controls="`#${item.id}`">
                        <span>{{item.title}}</span>
                    </button>
                    </h2>
                    <div :id="item.id" class="accordion-collapse collapse" :aria-labelledby="item.title" data-bs-parent="#accordionFlushExample" style="visibility:visible">
                        <div class="accordion-body flex flex-col gap-[1.2rem]">
                            <div v-for="item1 in item.items" class="text-[2rem] text-[black]">
                                <span @click="item1.path && router.push({name:item1.path})">{{item1.title}}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed } from 'vue'
    import { useRouter } from 'vue-router'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const items = computed(() => {
        return [
            {
                title:t('footer.title1'),
                id: 'footer_title1',
                items: [
                    {
                        title:t('footer.title1_subtitle1'),
                        path: 'dyagent'
                    },
                    {
                        title:t('footer.title1_subtitle2'),
                        path: 'staticagent'
                    }
                ]
            },
            {
                title:t('footer.title2'),
                id: 'footer_title2',
                items: [
                    {
                        title:t('footer.title2_subtitle1'),
                        path:''
                    },
                    {
                        title:t('footer.title2_subtitle2'),
                        path:''
                    }
                ]
            },
            {
                title:t('footer.title3'),
                id: 'footer_title3',
                items: [
                    {
                        title:t('footer.title3_subtitle1'),
                        path:'privatelaw'
                    },
                    {
                        title:t('footer.title3_subtitle2'),
                        path:'servicelaw'
                    },
                    {
                        title:t('footer.title3_subtitle3'),
                        path:'safety'
                    },
                    {
                        title:t('footer.title3_subtitle4'),
                        path:'service'
                    },
                    {
                        title:t('footer.title3_subtitle5'),
                        path:'plan'
                    },
                    {
                        title:t('footer.title3_subtitle6'),
                        path:''
                    }
                ]
            },
            {
                title:t('footer.title4'),
                id: 'footer_title4',
                items: [
                    {
                        title:t('footer.title4_subtitle1'),
                        path:''
                    },
                    {
                        title:t('footer.title4_subtitle2'),
                        path:''
                    },
                    {
                        title:t('footer.title4_subtitle3'),
                        path:''
                    },
                    {
                        title:t('footer.title4_subtitle4'),
                        path:''
                    },
                    {
                        title:t('footer.title4_subtitle5'),
                        path:''
                    }
                ]
            }
        ]
    })
</script>