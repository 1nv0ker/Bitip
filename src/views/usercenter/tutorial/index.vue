<template>
    <div class="w-full bg-[white] p-[2rem] rounded-[1.75rem]">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" >
                <template #tab>
                    <span class="text-[1rem]">{{t('tutorial.title1')}}</span>
                </template>
            </a-tab-pane>
            <a-tab-pane key="2" >
                <template #tab>
                    <span class="text-[1rem]">{{t('tutorial.title2')}}</span>
                </template>
            </a-tab-pane>
        </a-tabs>
        <div class="w-full pt-[1.75rem]">
            <div class="h-[2rem]  w-auto flex">
                <div :class="`pl-[1rem] pr-[1rem] h-[2rem] cursor-pointer flex items-center justify-center ${item.type==choose?'bg-[#01AA44] text-[white] shadow-[0 2px 6px 0 rgba(0,0,0,.1)]':'bg-[#999999] text-[]'}`" 
                v-for="item in codes" @click="choose=item.type">
                    <span>{{item.name}}</span>
                </div>
            </div>
            <div class="w-full flex justify-between mt-[2rem] pb-[2rem]">
                <div>
                    <span>{{t('tutorial.subtitle')}} <span class=" cursor-pointer underline decoration-1" @click="onDownload"> {{t('tutorial.button')}}</span></span>
                    
                </div>
                <span>{{t('tutorial.question')}} <span class="cursor-pointer underline decoration-1" @click="onContact">{{t('tutorial.question1')}}</span></span>
            </div>
            <div class="w-full  h-[50rem] overflow-auto">
                <highlightjs :code="codeString" :language="choose" class="pl-[1.75rem]" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { ref, computed } from 'vue'
    import userStore from '../../../store/user'
    import { useI18n } from 'vue-i18n'
    const { t } = useI18n()
    import { cpp, go, cpp2, go2, nodejs, nodejs2, php, php2, java, java2, python, python2, selenium, selenium2 } from './text'
    const useUserStore = userStore()
    const activeKey = ref('1')
    const choose = ref('cpp')
    const codes = ref([
        {
            name:'C/C++',
            type:'cpp',
            text:cpp,
            text2:cpp2,
            download:'C_API.zip',
            donwload2:'C_Auth.rar'
        },{
            name:'GO',
            type:'go',
            text:go,
            text2:go2,
            donwload:'API_Go.rar',
            donwload2:'Auth_Go.rar'
        },{
            name:'Node.js',
            type:'javascript',
            text:nodejs,
            text2:nodejs2,
            download:'APInode.js.rar',
            donwload2:'Autnode.js.rar'
        }, {
            name:'php',
            type:'php',
            text:php,
            text2:php2,
            download:'php_API.rar',
            donwload2:'php_Auth.rar'
        }, {
            name:'JAVA',
            type:'java',
            text:java,
            text2:java2,
            download:'ApiProxy_Java.rar',
            donwload2:'AuthProxy_Java.rar'
        },{
            name:'Python',
            type:'python',
            text:python,
            text2:python2,
            download:'ApiProxy_Python.rar',
            donwload2:'AuthProxy_Python.rar'
        }, {
            name:'python-selenium',
            type:'selenium',
            text:selenium,
            text2:selenium2,
            download:'api_python-selenium.rar',
            donwload2:'authnew_selenium_demo.rar'
        }
    ])
    const codeString = computed(() => {
        const item = codes.value.find(item=>item.type == choose.value)
        return item?(activeKey.value=='1'?item.text:item.text2):''
    })
    const onContact = () => {
        useUserStore.setConcat()
    }
    const onDownload = () => {
        const link = document.createElement('a');
        const item = codes.value.find(item=>item.type == choose.value)
        const href:any = item?(activeKey.value=='1'?item.download:item.donwload2):''
        link.href = '/'+href;
        // link.download = '全部地区文件'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
</script>
<style lang="less">
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: #01AA44;
        text-shadow:0 0 0.25px #01AA44;
    }
    .ant-tabs-tab-btn {
        &:hover {
            color: #01AA44!important;
        }
        &:active {
            color: #01AA44!important;
        }
    }
    :where(.css-dev-only-do-not-override-1p3hq3p).ant-tabs .ant-tabs-ink-bar {
        background: #01AA44;
    }
    .ant-tabs-tab {
        &:hover {
            color: #01AA44!important;
        }
    }
    .hljs {
        padding: 3rem!important;
    }
</style>