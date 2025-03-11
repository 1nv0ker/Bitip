<template>
    <div class="w-full h-[5.75rem] flex pl-[1.25rem] items-center">
        <img src="../../assets/logo.png" class="w-[5.25rem] h-[1.75rem] cursor-pointer" @click="onHome"/>
    </div>
    <div class="w-full p-[1.5rem]">
        <a-menu
      mode="inline"
      class="bitip_menu"
       v-model:selectedKeys="selectedKeys"
      :items="items"
    >

        </a-menu>
    </div>
</template>
<script setup lang="ts">
    import { useRouter} from 'vue-router'
    import { reactive, ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const router = useRouter()
    const selectedKeys = ref([])
    const items = reactive([
        {
            key: 1,
            icon: () => '',
            label: t('backend_menu.menu1'),
            title: t('backend_menu.menu1'),
            children:[
                {
                    key: 2,
                    label:t('backend_menu.menu1_sub1'),
                    title: t('backend_menu.menu1_sub1')
                },
                {
                    key: 3,
                    label:t('backend_menu.menu1_sub2'),
                    title: t('backend_menu.menu1_sub2')
                },
                {
                    key: 4,
                    label:t('backend_menu.menu1_sub3'),
                    title: t('backend_menu.menu1_sub3')
                }
            ]
        },
        {
            key: 5,
            icon: () => '',
            label: t('backend_menu.menu2'),
            title: t('backend_menu.menu2'),
            children:[
                {
                    key: 6,
                    label:t('backend_menu.menu2_sub1'),
                    title: t('backend_menu.menu2_sub1'),

                },
                {
                    key: 7,
                    label:t('backend_menu.menu2_sub2'),
                    title: t('backend_menu.menu2_sub2')
                }
            ]
        },
        {
            key: 8,
            icon: () => '',
            label: t('backend_menu.menu3'),
            title: t('backend_menu.menu3'),
        }
    ])
    const onHome = () => {
        router.push('/home')
    }
</script>
<style lang="less">
.bitip_menu {
    .ant-menu-submenu-title {
        font-size: 1rem;
        color:#191919;
        font-weight: 500;
        height: 3.25rem!important;
    }
    .ant-menu-item {
        font-size: 1rem;
        color:#191919;
        height: 3.25rem;
        // font-weight: 700;
    }
    .ant-menu-item-selected {
        color: #01AA44;
        font-size: 1rem;
        font-weight: 500;
        background-color: white;
       
    }
    .ant-menu-submenu-selected {
        .ant-menu-submenu-title {
            color:#01AA44;
            font-size: 1rem;
            font-weight: 500;
        }
        .ant-menu-item-selected {
            padding:1rem;
            background: rgba(1,170,68,0.04);
            // border-left: 4px solid #01AA44;
            border-radius: 0.5rem;
            font-size: 1rem;
            color:#191919;
            font-weight: 700;
            position: relative;
            &::after {
                width: 4px; /* 边框粗细 */
                background: #01AA44; /* 边框颜色 */
                // left: 10px;
                left:0;
                position: absolute;
                top:0.5rem;
                bottom:0.5rem;
            }
        }
    }
    
    
}
:where(.css-dev-only-do-not-override-1p3hq3p).ant-menu-light.ant-menu-root.ant-menu-inline, :where(.css-dev-only-do-not-override-1p3hq3p).ant-menu-light.ant-menu-root.ant-menu-vertical {
    border-inline-end:none!important;
}
:where(.css-dev-only-do-not-override-1p3hq3p).ant-menu-light.ant-menu-inline .ant-menu-sub.ant-menu-inline {
    background: transparent!important;
}
</style>