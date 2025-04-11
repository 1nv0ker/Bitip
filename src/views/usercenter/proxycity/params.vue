<template>
    <div class="w-full h-full overflow-auto">
        <div>
            <span class="text-[#18181b] text-[1.2rem] font-bold">{{t('proxycity.params.title')}}</span>
        </div>
        <div class="w-full border-1 border-[#edeff2] p-[0.5rem]" :style="way=='1'?'height:20rem':'height:8rem'">
            <div>
                <span>{{t('proxycity.params.requesttitle')}}</span>
            </div>
            <div class="w-full flex mt-[0.5rem]">
                <div v-for="item in names" class="w-1/4 h-[2rem]">
                    <div class="h-[2rem] w-full bg-[#f0f9ff] flex items-center justify-center ">
                        <span>{{item.name}}</span>
                    </div>
                    <div class="w-full h-[2rem] flex items-center justify-center " v-for="data in datas">
                        <span :title="data[item.key]" class="w-full bitip_text text-center">{{data[item.key]}}</span>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="mt-[0.5rem]">
            <span>{{t('proxycity.params.responsetitle')}}</span>
        </div>
        <div class="w-full  h-[4rem]  pt-[0.5rem]">
            <highlightjs :code="codes"  class="" />
        </div>
    </div>
</template>
<script setup lang="ts">
    import { computed, ref } from 'vue'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    const way = defineModel()
    const names = ref([{
        name:t('proxycity.params.requestName1'),
        key:'name'
    }, {
        name:t('proxycity.params.requestName2'),
        key:'type'
    }, {
        name:t('proxycity.params.requestName3'),
        key:'required'
    }, {
        name:t('proxycity.params.requestName4'),
        key:'description'
    }])
    const codes = computed(() => {
        const way1 = `{
            body: "proxy.bitip.com:10004:账户:密码"
            code: 200
            message: "成功"
}`
        const way2 = `xxx:xxx:xxx:xxx`
        return way.value=='1'?way1:way2
    })
   
    const datas = computed(():any[] => {
        const way1 = [
            {
                name:'KeyName',
                type:'string',
                required:t('purchaseddetail.yes'),
                description:'子账户名'
            },
            {
                name:'Num',
                type:'int',
                required:t('purchaseddetail.yes'),
                description:'数量'
            },
            {
                name:'Country',
                type:'string',
                required:t('purchaseddetail.yes'),
                description:'国家'
            },
            {
                name:'State',
                type:'string',
                required:t('purchaseddetail.no'),
                description:'洲'
            },
            {
                name:'City',
                type:'string',
                required:t('purchaseddetail.no'),
                description:'城市账户名'
            },
            {
                name:'SessionTime',
                type:'int',
                required:t('purchaseddetail.yes'),
                description:'ip时效，当为0时代表每次请求更换'
            },
            {
                name:'AutoSwitch',
                type:'number',
                required:t('purchaseddetail.yes'),
                description:'自动切换：0关闭，1开启 '
            },
            {
                name:'Format',
                type:'int',
                required:t('purchaseddetail.yes'),
                description:'0 hostname:port:username:password\n1 username:password@hostname:port\n2 username:password:hostname:port'
            },
        ]
        const way2 = [ {
                name:'Num',
                type:'int',
                required:t('purchaseddetail.yes'),
                description:'数量'
            },
            {
                name:'Country',
                type:'string',
                required:t('purchaseddetail.yes'),
                description:'国家'
            },]

        return way.value=='1'?way1:way2
    })
</script>