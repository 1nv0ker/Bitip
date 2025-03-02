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
                        {{item.title}}
                    </button>
                    </h2>
                    <div :id="item.id" class="accordion-collapse collapse" :aria-labelledby="item.title" data-bs-parent="#accordionFlushExample" style="visibility:visible">
                        <div class="accordion-body flex flex-col gap-[1.2rem]">
                            <div v-for="item1 in item.items" class="text-[2rem] text-[black]">
                                {{item1.title}}
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
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const items = computed(() => {
        return [
            {
                title:t('footer.title1'),
                id: 'footer_title1',
                items: [
                    {
                        title:t('footer.title1_subtitle1')
                    },
                    {
                        title:t('footer.title1_subtitle2')
                    },
                    {
                        title:t('footer.title1_subtitle3')
                    },
                    {
                        title:t('footer.title1_subtitle4')
                    },
                    {
                        title:t('footer.title1_subtitle5')
                    }
                ]
            },
            {
                title:t('footer.title2'),
                id: 'footer_title2',
                items: [
                    {
                        title:t('footer.title2_subtitle1')
                    },
                    {
                        title:t('footer.title2_subtitle2')
                    },
                    {
                        title:t('footer.title2_subtitle3')
                    },
                    {
                        title:t('footer.title2_subtitle4')
                    },
                    {
                        title:t('footer.title2_subtitle5')
                    }
                ]
            },
            {
                title:t('footer.title3'),
                id: 'footer_title3',
                items: [
                    {
                        title:t('footer.title3_subtitle1')
                    },
                    {
                        title:t('footer.title3_subtitle2')
                    },
                    {
                        title:t('footer.title3_subtitle3')
                    },
                    {
                        title:t('footer.title3_subtitle4')
                    },
                    {
                        title:t('footer.title3_subtitle5')
                    }
                ]
            },
            {
                title:t('footer.title4'),
                id: 'footer_title4',
                items: [
                    {
                        title:t('footer.title4_subtitle1')
                    },
                    {
                        title:t('footer.title4_subtitle2')
                    },
                    {
                        title:t('footer.title4_subtitle3')
                    },
                    {
                        title:t('footer.title4_subtitle4')
                    },
                    {
                        title:t('footer.title4_subtitle5')
                    }
                ]
            }
        ]
    })
</script>