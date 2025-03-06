<template>
    <div class="hidden md:flex space-x-[4rem] w-auto h-full">
        <NavMenuItem 
        :items="packageItems"
        :text="t('navMenu.title1')" 
        :key="'package'"
         />

        <NavMenuItem :text="t('navMenu.title2')" :key="'getProxy'" 
        />

        <NavMenuItem :text="t('navMenu.title3')" :key="'product'"
         />

        <NavMenuItem :text="t('navMenu.title4')" :key="'help'"   :path="'/help'" />
        <NavMenuItem :text="t('navMenu.title5')" :key="'safety'" :show-arrow="false" :path="'/safety'"/>
        <NavMenuItem :text="t('navMenu.title6')" :key="'service'" :show-arrow="false" :path="'/service'"/>
        <NavMenuItem :text="t('navMenu.title7')" :key="'plan'" :show-arrow="false" :path="'/plan'"/>
    </div>
</template>
<script setup lang="ts">
    import NavMenuItem  from './NavMenuItem.vue'
    import { computed } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const packageItems = computed(() => {
        return [
            {
                title: t('navMenu.package_title1'),
                items: [
                    {
                        title: t('navMenu.package_subtitle1'),
                        img: '',
                        path:'/setMeal?1'
                    },
                    {
                        title: t('navMenu.package_subtitle2'),
                        img: '',
                        path:'/setMeal?2'
                    }
                ]
            },
            {
                title: t('navMenu.package_title2'),
                items: [
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
                title: t('navMenu.package_title3'),
            }
        ]
    })
</script>