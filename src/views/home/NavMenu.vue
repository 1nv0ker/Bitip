<template>
    <div class="hidden md:flex  w-auto h-full justify-center sm:gap-[1rem] md:gap-[2rem] lg:gap-[3rem] z-50">
        <NavMenuItem 
        :items="packageItems"
        :text="t('navMenu.title1')" 
        :key="'package'"
        name="setmenu"
         />

        <NavMenuItem :text="t('navMenu.title2')" :key="'dyProxy'" :path="'dyagent'" name="dyagent" :show-arrow="false" 
        />
        <NavMenuItem :text="t('navMenu.title8')" :key="'staticProxy'" :path="'staticagent'" name="staticagent"  :show-arrow="false"
        />

        <!-- <NavMenuItem :text="t('navMenu.title3')" :key="'product'"/> -->

        <!-- <NavMenuItem :text="t('navMenu.title4')" :key="'help'"   :path="'/help'" name="help"  /> -->
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
    import menu5 from '../../assets/menu1_6.png'
     import menu6 from '../../assets/menu1_7.png'
     import menu7 from '../../assets/menu1_8.png'
    // import menu5 from '../../assets/menu1_5.png'
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
                        subtitle: t('navMenu.package_subtitle1_tips'),
                        img2:menu5,
                        style:{
                            width: '8rem',
                            height:'2.2rem'
                        }
                    },
                    {
                        title: t('navMenu.package_subtitle2'),
                        img: menu2,
                        path:'/setmenu',
                        name:'setmenu',
                        type: 1,
                        img2: menu6,
                        subtitle: t('navMenu.package_subtitle2_tips'),
                        style:{
                            width: '8rem',
                            height:'2.2rem'
                        }
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
                        img2:menu7,
                        // style:'width:5.5rem;height:1.5rem',
                        subtitle: t('navMenu.package_subtitle3_tips'),
                        style:{
                            width: '8rem',
                            height:'2.2rem'
                        }
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

                    }
                ]
            }
        ]
    })
</script>