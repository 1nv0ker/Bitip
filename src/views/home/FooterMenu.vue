<template>
    <div class="hidden md:flex justify-between gap-[5rem] pt-[4rem] pb-[4rem] h-auto">
        <div class="flex flex-col gap-[2.25rem] justify-start w-auto">
            <img src="../../assets/logo.svg" class="w-[9.125rem] h-[3rem]"/>
            <div class="flex gap-[1rem] text-[#191919] text-[1rem]">
                <img src="../../assets/phone.png" class="w-[1.5rem] h-[1.5rem]" />
                <span>15371927863</span>
                <span>{{ t('footer.describe') }}</span>
            </div>
            <div class="flex gap-[1rem] text-[#191919] text-[1rem]">
                <img src="../../assets/mail.png" class="w-[1.5rem] h-[1.5rem]" />
                <span>support@bitip.com</span>
            </div>
            <div class="flex gap-[1rem] text-[#191919] text-[1rem]">
                <img src="../../assets/alipay1.svg" class="w-[2rem] h-[2rem]" />
                <img src="../../assets/wechat1.svg" class="w-[2rem] h-[2rem]" />
                <img src="../../assets/unionpay.svg" class="w-[2.86rem] h-[1.7725rem]" />
            </div>
        </div>
        <div v-for="item in items" class="flex flex-col">
            <span class="text-[#9BA2BB] text-[1.2rem] font-medium pb-[1.5rem]">{{item.title}}</span>
            <div v-for="subtitle in item.items" class="flex flex-col gap-[1.25rem]">
                <span :class="`${subtitle?.selected?'hover:text-[#01AA44]':''} text-[#191919] text-[1rem] font-normal pb-[1.25rem] cursor-pointer  pr-[0.5rem] ellipsis-single`" 
                @click="menuClick(subtitle)">{{subtitle.title}}</span>
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
                        path: 'dyproxy',
                        selected:true
                    },
                    {
                        title:t('footer.title1_subtitle2'),
                        path: 'staticproxy',
                        selected:true
                    }
                ]
            },
            {
                title:t('footer.title2'),
                id: 'footer_title2',
                items: [
                    {
                        title:t('footer.title2_subtitle1'),
                        path:'tutorial',
                        selected:true
                    },
                    {
                        title:t('footer.title2_subtitle2'),
                        path:'',
                        selected:true,
                        url:'https://bit_ip.helplook.com/'
                    },
                    {
                        title:t('footer.title3_subtitle5'),
                        path:'plan',
                        selected:true
                    },
                    // {
                    //     title:t('footer.title3_subtitle6'),
                    //     path:'',
                    //     selected:true
                    // }
                ]
            },
            {
                title:t('footer.title3'),
                id: 'footer_title3',
                items: [
                {
                        title:t('footer.title3_subtitle3'),
                        path:'safety',
                        selected:true
                    },
                    {
                        title:t('footer.title3_subtitle4'),
                        path:'service',
                        selected:true
                    },
                    {
                        title:t('footer.title3_subtitle1'),
                        path:'privatelaw',
                        selected:true
                    },
                    {
                        title:t('footer.title3_subtitle2'),
                        path:'servicelaw',
                        selected:true
                    },
                    {
                        title:t('footer.title4_subtitle7'),
                        path:'refundlaw',
                        selected:true
                    },
                    
                    
                ]
            },
            {
                title:t('footer.title4'),
                id: 'footer_title4',
                items: [
                    {
                        title:t('footer.title4_subtitle1'),
                        path:'',
                        selected:true
                    },
                    {
                        title:t('footer.title4_subtitle2'),
                        path:'',
                        selected:true
                    },
                    {
                        title:t('footer.title4_subtitle3'),
                        path:'',
                        selected:true
                    },
                    {
                        title:t('footer.title4_subtitle4'),
                        path:'',
                        selected:true
                    },
                    {
                        title:t('footer.title4_subtitle5'),
                        path:'',
                        selected:true
                    }
                ]
            }
        ]
    })
    const menuClick = (subtitle:any) => {
        subtitle.path && router.push({name:subtitle.path})
        subtitle.url && window.open(subtitle.url, '__blank')
    }
</script>