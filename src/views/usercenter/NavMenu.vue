<template>
    <div class="w-full h-[5.75rem] flex pl-[1.25rem] items-center">
        <img src="../../assets/logo.png" class="w-[5.25rem] h-[1.75rem] cursor-pointer" @click="onHome"/>
    </div>
    <div class="w-full p-[1.5rem]">
        <a-menu
            mode="inline"
            class="bitip_menu"
            v-model:selectedKeys="selectedKeys"
            :open-keys="openKeys"
            
            :items="items"
            @click="onMenuClick"
            >
            <template #title>
                123
            </template>
        </a-menu>
    </div>
</template>
<script setup lang="ts">
    import { useRouter, useRoute } from 'vue-router'
    import { computed, ref, onMounted, watch } from 'vue'
    import proxycityImg from '../../assets/usercenter/dy.png'
    import staticImg from '../../assets/usercenter/static.png'

    import shopImg from '../../assets/usercenter/shop.png'
    import authImg from '../../assets/usercenter/auth.png'
    import planImg from '../../assets/usercenter/plan.png'
    import auth2Img from '../../assets/usercenter/auth_bg.png'
    import { useI18n } from 'vue-i18n'
    import { h } from 'vue'
    const { t } = useI18n()
    const router = useRouter()
    const route = useRoute()
    const selectedKeys = ref<string[]|number[]>([])
    const openKeys = ref<string[]|number[]>(['2'])
    const getimg = (img:string) => {
        return h(
                'img',
                {
                    src:img,
                    style:{
                        width:'1.25rem',
                        height:'1.25rem'
                    }

                }
            )
    }
    const items = computed(()=>[
        {
            key: '1',
            // icon: () => '',
            label: t('backend_menu.menu1'),
            title: t('backend_menu.menu1'),
            icon: () => getimg(proxycityImg),
            children:[
                {
                    key: 'proxycity',
                    label:t('backend_menu.menu1_sub1'),
                    title: t('backend_menu.menu1_sub1'),
                },
                {
                    key: 'purchasedflow',
                    label:t('backend_menu.menu1_sub2'),
                    title: t('backend_menu.menu1_sub2')
                },
                {
                    key: 'trafficmanager',
                    label:t('backend_menu.menu1_sub3'),
                    title: t('backend_menu.menu1_sub3')
                },
                {
                    key:'whitelist',
                    label:t('backend_menu.menu1_sub4'),
                    title:t('backend_menu.menu1_sub4')
                }
            ]
        },
        {
            key: '2',
            icon: () => getimg(staticImg),
            label: t('backend_menu.menu2'),
            title: t('backend_menu.menu2'),
            children:[
                {
                    key: 'purchased',
                    label:t('backend_menu.menu2_sub1'),
                    title: t('backend_menu.menu2_sub1'),

                },
                {
                    key: 'purchaseddetail',
                    label:t('backend_menu.menu2_sub2'),
                    title: t('backend_menu.menu2_sub2')
                }
            ]
        },
        {
            key: 'purchasedhistory',
            icon: () => getimg(shopImg),
            label: t('backend_menu.menu3'),
            title: t('backend_menu.menu3'),
        },
        {
            key: 'promotionrebate',
            icon: () => getimg(planImg),
            label: t('backend_menu.menu4'),
            title: t('backend_menu.menu4'),
        },
        {
            key: 'userauth',
            icon: () => getimg(authImg),
            // label: t('backend_menu.menu5'),
            // title: t('backend_menu.menu5'),
            label:h('div', {
                style: {
                    display: 'flex',
                    'align-items':'center'
                }
            },[h('span', t('backend_menu.menu5')), h('img', {
                src:auth2Img,
                style: {
                    width: '5.75rem',
                    height: '3.3rem'
                }
            })]),
            // title:h('span', {

            // }, 'abc')
        }
    ])
    watch(route, () => {
        const name = route.name as string
        selectedKeys.value = [name]
        openKeys.value = [name]
        const meta = route.meta
        const parent = meta.parent as string || ''
        openKeys.value = [parent]
        // console.log('route', 123)
    })
    const onHome = () => {
        router.push('/home')
    }
    const onMenuClick = (props:any) => {
        router.push({name:props.key})
    }
    onMounted(() => {
        const name = route.name as string
        selectedKeys.value = [name]
        openKeys.value = [name]
        const meta = route.meta
        const parent = meta.parent as string || ''
        openKeys.value = [parent]
        // console.log('route', selectedKeys.value, openKeys.value)

    })
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