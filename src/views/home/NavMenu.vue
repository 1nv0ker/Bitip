<template>
    <div class="hidden md:flex  w-auto h-full justify-center sm:gap-[1rem] md:gap-[2rem] lg:gap-[3rem]">
        <NavMenuItem 
        :items="packageItems"
        :text="t('navMenu.title1')" 
        :key="'package'"
        name="setmenu"
         />

        <NavMenuItem :text="t('navMenu.title2')" :key="'getProxy'" 
        />

        <NavMenuItem :text="t('navMenu.title3')" :key="'product'"/>

        <NavMenuItem :text="t('navMenu.title4')" :key="'help'"   :path="'/help'" name="help"  />
        <NavMenuItem :text="t('navMenu.title5')" :key="'safety'" :show-arrow="false" :path="'/safety'" name="safety"/>
        <NavMenuItem :text="t('navMenu.title6')" :key="'service'" :show-arrow="false" :path="'/service'" name="service"/>
        <NavMenuItem :text="t('navMenu.title7')" :key="'plan'" :show-arrow="false" :path="'/plan'" name="plan"/>
    </div>
</template>
<script setup lang="ts">
    import NavMenuItem  from './NavMenuItem.vue'
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    import menu1 from '../../assets/menu1_1.png'
    import menu2 from '../../assets/menu1_2.png'
    import menu3 from '../../assets/menu1_3.png'
    import menu4 from '../../assets/menu1_4.png'
    import menu5 from '../../assets/menu1_5.png'
    const { t } = useI18n()
    const packageItems = computed(() => {
        return [
            {
                title: t('navMenu.package_title1'),
                items: [
                    {
                        title: t('navMenu.package_subtitle1'),
                        img: menu1,
                        path:'/setmenu',
                        type: 0,
                        name:'setmenu',
                        subtitle: t('navMenu.package_subtitle1_tips')
                    },
                    {
                        title: t('navMenu.package_subtitle2'),
                        img: menu2,
                        path:'/setmenu',
                        name:'setmenu',
                        type: 1,
                        subtitle: t('navMenu.package_subtitle2_tips')
                    }
                ]
            },
            {
                title: t('navMenu.package_title2'),
                items: [
                    {
                        title: t('navMenu.package_subtitle3'),
                        img: menu3,
                        path:'/setmenu',
                        type: 0,
                        subtitle: t('navMenu.package_subtitle3_tips')
                    },
                    // {
                    //     title: t('navMenu.package_subtitle4'),
                    //     img: menu3,
                    //     path:'/setMeal?4'
                    // }
                ]
            },
            {
                title: t('navMenu.package_title3'),
                special: true,
                items:[
                    {
                        // title: t('navMenu.package_subtitle2'),
                        img: menu4,
                        // path:'/setMeal',

                    },
                    {
                        // title: t('navMenu.package_subtitle2'),
                        img: menu5,
                        // path:'/setMeal',
                       
                    }
                ]
            }
        ]
    })
</script>