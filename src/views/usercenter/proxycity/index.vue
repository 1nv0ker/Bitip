<template>
    <div class="w-full h-full">
        <div class="w-full h-full flex gap-[1.75rem] overflow-y-auto">
            <!-- 基础展示 -->
            <div class="rounded-[1.5rem] bg-white p-[1.75rem] overflow-y-auto h-full" style="width: calc( 100% - 27rem );">
                
                <div class="w-full h-[7rem]">
                    <div class="w-full flex justify-between items-center">
                        <span class="text-[#191919] text-[1.25rem] font-bold">{{t('proxycity.card1')}}</span>
                        <div class="flex gap-[1.25rem]">
                            <div  class=" right-[1rem] w-[5.5rem] h-[2.25rem]  border-[#01AA44] 
                            border-[1px] rounded-[0.5rem] flex justify-center items-center cursor-pointer bitip_button" @click="onBuyFlow">
                                <span class="text-[#01AA44] text-[1rem] pl-[0.5rem] pr-[0.5rem] ellipsis-single" :title="t('proxycity.card_button')">{{t('proxycity.card_button')}}</span>
                            </div >
                            <div  class="bitip_button right-[1rem] w-[5.5rem] h-[2.25rem] ] border-[#EBEFF8] bg-[#FAFAFA]
                            border-[1px] rounded-[0.5rem] flex justify-center items-center cursor-pointer" @click="onFlowManager">
                                <span class="text-[#191919] text-[1rem] pl-[0.5rem] pr-[0.5rem] ellipsis-single" :title="t('proxycity.card_button1')">{{t('proxycity.card_button1')}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex justify-between  gap-[1.75rem] mt-[1rem]">
                        <div v-for="item in items" class="w-[30rem] h-[3.75rem]  rounded-[0.75rem] items-center proxycity_card relative p-[1.75rem] pl-[2rem] pr-[2rem] flex" 
                            style="background: linear-gradient( 145deg, #E6FFF0 0%, #FBFFEC 100%);">
                            <div class="flex gap-[1.25rem] items-center">
                                <span class="text-[#191919] text-[1rem] font-medium" style="">{{item.title}} [GB]</span>
                                <NumberComponent class="text-[#191919] text-[1.5rem] font-bold" :step="0.05" :number="cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['value']:0"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full border-[1px] border-[#EBEFF8] mt-[1.5rem]">

                </div>
                <!-- 定位城市 -->
                <div class="mt-[1rem] pr-[1.5rem] w-full" style="height: calc( 100% - 10rem);">
                    <a-form layout="vertical" :rules="rules" :model="modelRef" ref="formRef" class="w-full">
                        <a-row :gutter="[24, 24]">
                            <a-col :span="8" class="h-[4.75rem]">
                                <a-form-item :label="t('proxycity.form1')" name="userName">
                                    <div class="relative h-[3rem]">
                                        <AccountSelect v-model="modelRef.userName" @onSelectAccount="onSelectAccount" />
                                    </div>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="[24, 24]" class="mt-[1.5rem] w-full">
                            <a-col :span="8" v-for="form in formItems" class="h-[4.75rem] w-full">
                                <a-form-item :label="!form.slot?form.label:null" :name="form.key" class="w-full">
                                    <template #label v-if="form.slot">
                                            <div class="flex justify-between w-full">
                                                <span>{{form.label}}</span>
                                                <span class="pl-[0.5rem] cursor-pointer text-[#01AA44]" @click="onDownload">{{t('proxycity.download')}}</span>
                                            </div>
                                    </template>
                                    <div class="relative h-[3rem] ">
                                        <a-select :showSearch="form.showSearch" optionFilterProp="label" :placeholder="form.placeholder" class="customASelect" :disabled="form.disabled"
                                         :options="form.options || []" v-model:value="modelRef[form.key]" @select="(_:any,props:any)=>onSelect(form.key, props)">
                                    
                                        </a-select>
                                    </div>
                                </a-form-item>
                            </a-col>
                        </a-row>    
                    </a-form>
                    <div class="pb-[1.5rem] flex gap-[1.75rem] mt-[1.5rem]">
                        <a-button :loading="loading" class="w-[9.625rem] h-[3rem] rounded-[0.75rem] bg-[#01AA44] flex justify-evenly items-center cursor-pointer" @click="onGenerate">
                            <img src="../../../assets/proxycity/2.png" class="w-[1.25rem] h-[1.25rem]" />
                            <span class=" text-white font-medium text-[0.9rem] pl-[0.5rem] pr-[0.5rem] ellipsis-single" :title="t('proxycity.button1')">{{t('proxycity.button1')}}</span>
                        </a-button>

                        <a-button :loading="loading"  class="w-[9.625rem] h-[3rem] rounded-[0.75rem] bg-[#FAFAFA] flex justify-evenly items-center border-[1px] border-[#EBEFF8] cursor-pointer" @click=onGenerateApi>
                            <img src="../../../assets/proxycity/3.png" class="w-[1.25rem] h-[1.25rem]" />
                            <span class=" text-[#191919] font-medium text-[0.9rem] pl-[0.5rem] pr-[0.5rem] ellipsis-single" :title="t('proxycity.button2')">{{t('proxycity.button2')}}</span>
                        </a-button>
                        <div class="flex items-center">
                            <span class="pr-[0.5rem]">{{t('proxycity.type')}}:</span>
                            <a-select  class="customASelect w-[20rem]" v-model:value="modelRef.type">
                                <a-select-option :value="'0'" label="">
                                    hostname:port:username:password
                                </a-select-option>
                                <a-select-option :value="'1'" label="">
                                    username:password@hostname:port
                                </a-select-option>
                                <a-select-option :value="'2'" label="">
                                    username:password:hostname:port
                                </a-select-option>
                            </a-select>
                        </div>
                    </div>
                    <div class="w-full h-[16.625rem] bg-[#FAFAFA] rounded-[0.75rem] border-[#EBEFF8] border-[1px] pl-[1.75rem] pr-[1.75rem]" style="height: calc( 100% - 23.25rem);">
                        <div class=" border-b-[1px] border-[#EBEFF8] overflow-auto flex flex-col gap-[1rem]  text-[#666666] text-[1rem] pt-[1.75rem]" style="height: calc( 100% - 4rem);">
                            <div v-for="item in proxyIPS" class="flex items-center">
                                <QrcodeOutlined class="text-[1.5rem] cursor-pointer text-[#666666]" @click="onOpenQRcode(item)"/>
                                <span class="pl-[0.5rem]">{{item}}</span>
                            </div>
                        </div>
                        <div class="w-full flex gap-[2.75rem] h-[4rem]">
                            
                            <div class="flex items-center text-[#666666] text-[1rem] cursor-pointer" @click="onCopy">
                                <a-tooltip  trigger="click" :open="copy"  @click="onCopy" :arrow="false" >
                                    <template #title>
                                        <span class="text-[1rem]">{{t('promotionrebate.copy')}}</span>
                                    </template>
                                    <img src="../../../assets/copy.png" class="w-[1.5rem] h-[1.5rem] cursor-pointer"/>
                                </a-tooltip>
                                <!-- <img src="../../../assets/copy.png" class="w-[1.5rem] h-[1.5rem]"/>
                                <span class="pl-[0.75rem]">{{ t('proxycity.copy') }}</span> -->
                            </div>
                            <div class="flex items-center text-[#666666] text-[1rem] cursor-pointer" v-show="modelRef.IP == '1'" @click="onSwitchAuto"> 
                                <img src="../../../assets/switch.png" class="w-[1.5rem] h-[1.5rem]"/>
                                <span class="pl-[0.75rem]">{{ t('proxycity.switch2') }}</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="pt-[1.25rem]">
                        <span class="text-[#999999] text-[0.9rem]">IP地址国家：美国IP地址 IP号码12834740329457209</span>
                    </div> -->
                </div>
            </div>
            <div class="h-full w-[25.25rem] bg-[white] rounded-[1.5rem] p-[1.75rem] gap-[1.5rem] flex-col flex">
                <div class="w-full h-[8.5rem]">
                    <!-- <a-textarea class="customArea"  :placeholder="t('proxycity.agentPlaceholder')" :rows="4" :maxlength="10" show-count /> -->
                    <ProxyText class="w-full" v-model="checkIP"/>
                </div>
                <a-button @click="onCancelCheck">
                    <span class="bitip_button">{{t('form.clear')}}</span>
                </a-button>
                <a-button :loading="checkLoading" class="w-full h-[3rem] rounded-[0.75rem] bitip_button bg-[#01AA44] cursor-pointer flex justify-center items-center " @click="onCheckIP">
                    <span class="text-white text-[1rem] font-medium ">{{ t('proxycity.button3') }}</span>
                </a-button>
                <div class="w-full  border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.75rem] overflow-auto p-[0.75rem]" style="height: calc( 100% - 10rem );">
                    <div v-for="content in checkContent" class="flex flex-col gap-y-[0.2rem] pb-[0.5rem]">
                        <div v-for="item in content">
                            <span>{{item}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <QrCodeModal v-model="open" :qrcode="qrcode"/>
    </div>
</template>
<script setup lang="ts">
    //选择数量1-1000 1 10 100 1000
    import { computed , onMounted, ref, reactive, nextTick } from 'vue'
    import NumberComponent from '../../../components/NumberComponent.vue'
    import QrCodeModal from '../purchaseddetail/QrCodeModal.vue';
    import locations from '../../../../public/map.json'
    import { QrcodeOutlined } from '@ant-design/icons-vue';
    import AccountSelect from './AccountSelect.vue'
    import type { Rule } from 'ant-design-vue/es/form';
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    import { GetProxyConfig, GetBandwidthAnalysis, GenerateApiLink, GenerateApiWhenEnable, SwitchIP, CheckIP } from '../../../api/proxy'
    import ProxyText from './ProxyText.vue';
    import { message } from 'ant-design-vue';
    import useUserStore from '../../../store/user'
    const userStore = useUserStore()
// import axios from 'axios';
    const controller = new AbortController();
    const { t } = useI18n()
    const cardDatas = ref<any[]>([])
    const checkIP = ref('')
    const modelRef = reactive<Record<string, string|undefined>>({
        userName:undefined,
        IP:'0',
        number:undefined,
        country:undefined,
        time: undefined,
        city:undefined,
        state: undefined,
        type: '0',
        generateType:'1'
    })
    const stateDatas = ref<any[]>([])
    const cityDatas = ref<any[]>([])
    const proxyConfig = ref<any>()
    const formRef = ref<any>()
    const proxyIPS = ref<any[]>([])
    const copy = ref(false)
    const loading = ref(false)
    const open = ref(false)
    const qrcode = ref('')
    const checkContent = ref<any[]>([])
    const stateList = ref<any[]>([])
    const cityList = ref<any[]>([])
    const checkLoading = ref(false)
    const autoPassword = ref('')
    const stopCheck = ref(false)
    let interval2:any
    const rules = computed<Record<string, Rule[]>>(() => {
        return {
            userName: [
                { required: true, message: t('proxycity.form1_rule'), trigger: 'change' },
            ],
            country: [
                { required: true, message: t('proxycity.form2_rule'), trigger: 'change' },
            ],
            time: [
                { required: modelRef.country=='0'?false:(modelRef.IP=='0'?true:false), message: t('proxycity.form3_rule'), trigger: 'change' },
            ],
            number: [
                { required: true, message: t('proxycity.form4_rule'), trigger: 'change' },
            ]
        }
    })
    const items = computed(() => {
        return [
            {
                title: t('proxycity.card_title1'),
                img: '',
                describe: t('proxycity.describe1'),
                key:1,
                showButton:true
            },
            {
                title: t('proxycity.card_title2'),
                img: '',
                describe: t('proxycity.describe2'),
                key:2,
                showButton: false
            },
            {
                title: t('proxycity.card_title3'),
                img: '',
                describe: t('proxycity.describe3'),
                key:3,
                showButton: false
            }
        ]
    })
    const formItems = computed(() => {
        const targets = ['us', 'uk', 'jp', 'fr', 'au', 'it']
        let tempLocations:any = locations.filter((item)=>targets.indexOf(item.country)!==-1).concat(locations.filter((item)=>targets.indexOf(item.country)===-1))
        return [
            {
                label: t('proxycity.form2'),
                placeholder: t('proxycity.form2_placeholder'),
                key:'country',
                showButton:false,
                slot: true,
                showSearch: true,
                options:[{
                    label:t('proxycity.countryform'),
                    value:'0',
                }].concat(tempLocations.map(((item:any)=>({
                    label:item.name+'-'+item.country,
                    value:item.country,
                    state:item.state,
                    city:item.city
                }))))
            },
            {
                label: t('proxycity.form3'),
                placeholder: t('proxycity.form3_placeholder'),
                key:'state',
                showButton:false,
                showSearch: true,
                options: stateDatas.value,
                disabled: (modelRef.country=='0'?true:false) || !modelRef.country
                // disabled:true
            },
            {
                label: t('proxycity.form4'),
                placeholder: t('proxycity.form4_placeholder'),
                key:'city',
                showButton:false,
                showSearch: true,
                options: cityDatas.value,
                disabled: (modelRef.country=='0'?true:false) || !modelRef.state
            },
            {
                label: t('proxycity.form5'),
                placeholder: t('proxycity.form5_placeholder'),
                key:'time',
                showButton:false,
                disabled: (modelRef.country=='0'?true:(modelRef.IP=='0'?false:true)),
                options: [
                    {
                        value: 0,
                        label:t('proxycity.IPform')
                    },
                    {
                        value: 5,
                        label: 5+t('form.min')
                    },
                    {
                        value: 10,
                        label: 10+t('form.min')
                    },
                    {
                        value: 15,
                        label: 15+t('form.min')
                    },
                    {
                        value: 30,
                        label: 30+t('form.min')
                    },
                    {
                        value: 60,
                        label: 60+t('form.min')
                    },
                    {
                        value: 120,
                        label: 120+t('form.min')
                    }
                ]
            },
            {
                label: t('proxycity.switch'),
                placeholder: t('proxycity.form6_placeholder'),
                key:'IP',
                showButton:false,
                disabled: (modelRef.country=='0'?true:false),
                options: [
                    {
                        value: '1',
                        label: t('purchaseddetail.yes') 
                    },
                    {
                        value: '0',
                        label: t('purchaseddetail.no') 
                    },
                ]
            },
            {
                label: t('proxycity.form7'),
                placeholder: t('proxycity.form7_placeholder'),
                key:'number',
                showButton:false,
                disabled: modelRef.IP=='0'?false:true,
                options: [
                    {
                        value: 1,
                        label: 1
                    },
                    {
                        value: 10,
                        label: 10
                    },
                    {
                        value: 100,
                        label: 100
                    },
                    {
                        value: 1000,
                        label: 1000
                    }
                ]
            }
        ]
    })
    //自动切换
    const onSwitchAuto = async () => {
        const {  userName } = proxyConfig.value
        if (!userName || !autoPassword.value) {
            return
        }
        const res:any = await SwitchIP({
            username:userName,
            password:autoPassword.value
        })
        .catch(() => {
            loading.value = false
        })
        loading.value = false
        if (res.code && res.code == 200) {
            message.success(t('form.success'))
            // proxyIPS.value = res.body.split(`\n`)
            // loading.value = false
        }
    }
    const onCancelCheck = () => {
        checkContent.value=[];checkIP.value='';stopCheck.value=true;
        controller.abort();
    }
    //检查IP
    const onCheckIP = async () => {
        if (checkIP.value.length == 0) {
            return
        }
        stopCheck.value = false
        checkContent.value = []
        let len = checkIP.value.split(';').length
        checkLoading.value = true
        let batchRequests:any[]= []
        for (let i=0;i<len;i++) {
            const IP = checkIP.value.split(';')[i]
            batchRequests.push(CheckIP({
                proxy:IP
            }, controller)
            .then((res:any) => {
                const content = res.body.split('\n')
                checkContent.value.push(content)
            }))
        }
        Promise.all(batchRequests)
        .then(() => {
            checkLoading.value = false
        })
        .catch(() => {
            console.log('请求被终止')
            checkLoading.value = false
            // if (err.name === 'CanceledError') {
            //     console.log('请求被终止'); // [3,4](@ref)
            // }
        });
        

    }
    //生成代理
    const onGenerate = () => {
        formRef.value.validate()
        .then(async () => {
            proxyIPS.value = []
            // modelRef.generateType = '1'
            if (modelRef.IP == '1') {
                // modelRef.generateType = '0'
                loading.value = true
                const params = {
                    KeyName:modelRef.userName,
                    Num:modelRef.number,
                    Country:modelRef.country,
                    State:modelRef.state,
                    City:modelRef.city,
                    SessionTime:modelRef.time,
                    AutoSwitch: modelRef.IP,
                    Format: modelRef.type
                }
                const res:any = await GenerateApiWhenEnable(params)
                .catch(() => {
                    loading.value = false
                })
                if (res.code && res.code == 200) {
                    const items = res.body.split(':')
                    autoPassword.value = items.length>0?items[3]:''
                    proxyIPS.value = res.body.split(`\n`)
                    loading.value = false
                }
                return
            }
            //生成代理
            const { proxyCityFmt, proxyCountryFmt, proxyPort, proxyPwd, proxyStateFmt, proxyUrl, userName, proxyGlobalFmt } = proxyConfig.value
            for (let i=0;i<Number(modelRef.number);i++) {
                
                const randomInPortIndex= Math.floor(Math.random() * proxyPort.length)
                const randomInUrlIndex= Math.floor(Math.random() * proxyUrl.length)
                if (proxyPort[randomInPortIndex] && proxyUrl[randomInUrlIndex]) {
                    const url = proxyUrl[randomInUrlIndex]
                    const port = proxyPort[randomInPortIndex]
                    
                    //rotating session存在
                    const sessiong = modelRef.IP == '0'?generateRandomString():0
                    const hostname_port = url+':'+port
                    let username_password = ''
                    let proxyIP = ''
                    if (modelRef.country == '0') {
                        username_password = userName+'_f-'+ proxyGlobalFmt + ':' + proxyPwd
                    } else {
                        username_password = userName+'_g-'+ modelRef.country + '_f-' + (modelRef.city?proxyCityFmt:(modelRef.state?proxyStateFmt:proxyCountryFmt))
                        + '_sid-'+sessiong + ((modelRef.state)?('_s-'+modelRef.state):'')
                        + (modelRef.city?('_c-'+modelRef.city):'') + (modelRef.time?('_l-'+modelRef.time):'')
                        + ':'+ proxyPwd
                    }
                    if (modelRef.type == '0') {
                        proxyIP = hostname_port + ':' + username_password
                    } else if (modelRef.type == '1') {
                        proxyIP = username_password + '@' + hostname_port
                    } else {
                        proxyIP = username_password + ':' + hostname_port
                    }
                    proxyIP = proxyIP
                    proxyIPS.value.push(proxyIP)
                } else {
                    message.error('端口号或者url不存在')
                    break
                }
            }
            // axios.get('http://'+proxyIPS.value[0])
            // console.log(proxyIPS.value)
        })
    }
    const onOpenQRcode = (code:string) => {
        console.log('code', code)
        
        open.value = true
        nextTick(() => {
            qrcode.value = code
        })
    }
    const onGenerateApi = () => {
        formRef.value.validate()
        .then( () => {
            // loading.value = true
            // let res:any;
            const params = {
                KeyName:modelRef.userName,
                Num:modelRef.number,
                Country:modelRef.country=='0'?undefined:modelRef.country,
                State:modelRef.state,
                City:modelRef.city,
                SessionTime:modelRef.time,
                AutoSwitch: modelRef.IP,
                Format: modelRef.type
            }
            const link = GenerateApiLink(params)
            // res = await GenerateApi(params)
            // .catch(() => {
            //     loading.value = false
            // })
            // }
            // if (res) {
                // modelRef.generateType = '0'
                // console.log('res', res, res.split(`\n`))
                proxyIPS.value = link.split(`\n`)
            //     loading.value = false
            // }
        })
        
    }
    const onDownload = () => {
        const link = document.createElement('a');
        link.href = '/locations.xlsx';
        link.download = '全部地区文件'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // window.open('/map.json', "__blank")
    }
    //随机session
    const generateRandomString = () => {
        const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
        let currentIndex = chars.length;
        
        while (currentIndex > 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [chars[currentIndex], chars[randomIndex]] = [chars[randomIndex], chars[currentIndex]];
        }
        return chars.slice(0, 8).join('');
    }
    const onCopy = () => {
        if (proxyIPS.value.length == 0) {
            return
        }
        let str:string = proxyIPS.value.join(';')
        
        // if (modelRef.generateType === '0') {
        //     str = proxyIPS.value.join(';')
        // } else {
        //     str = proxyIPS.value.map((item:any)=> {
        //         if (modelRef.type == '0') {
        //             return item.hostname_port + ':' + item.username_password 
        //         } else if (modelRef.type == '1') {
        //             return item.username_password + '@' + item.hostname_port 
        //         } else {
        //             return item.username_password + ':' + item.hostname_port
        //         }
        //     }).join(';')
        // }
         
        str = str.replace(/(\r\n|\n|\r)/g, '')
        // checkIP.value = str
        if (navigator.clipboard) {
            navigator.clipboard.writeText(str)
        } else {
            const input = document.createElement('input');
            input.value = str;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            input.remove();
        }
        copy.value = true
        interval2 && clearInterval(interval2)
        interval2 = setInterval(() => {
            copy.value = false
            clearInterval(interval2)
        }, 2000);
    }
    // const showIP = (hostname_port:string, username_password:string) => {
    //     if (modelRef.type == '0') {
    //         return hostname_port + ':' + username_password
    //     } else if (modelRef.type == '1') {
    //         return  username_password + '@' + hostname_port 
    //     } else {
    //         return username_password + ':' + hostname_port
    //     }
    // }
    //选择账户
    const onSelectAccount = () => {
        if (modelRef.userName) {
            loading.value = true
            GetProxyConfig({
                userName: modelRef.userName
            })
            .then((res:any)=> {
                proxyConfig.value = res.body
                loading.value = false
            })
            .catch(() => {
                loading.value = false
            })
        }
        
    }
    const onSelect = (key:string, props:any) => {
        
        if (key == 'country') {
            const { state, city } = props
            if (modelRef.country == '0') {
                modelRef.city = undefined
                modelRef.state = undefined
                modelRef.time = undefined
            }  else {
                //重新选择清空
                modelRef.city = undefined
                modelRef.state = undefined
                stateList.value = state
                cityList.value = city
                if (state && state.length==0) {
                    stateDatas.value = []
                } else {
                    stateDatas.value = [{
                        label:t('proxycity.cityform'),
                        value:''
                    }].concat(state.map((item:any)=>({
                        value:item.label,
                        label:item.label.toLowerCase().split(/\s+/)
                        .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                    })))
                }
                // if (city && city.length == 0) {
                //     cityDatas.value = []
                // } 
                cityDatas.value = []
                // else {
                //     cityDatas.value = [{
                //         label:t('proxycity.cityform'),
                //         value:''
                //     }].concat(city.map((item:any)=>({
                //         value:item.label,
                //         label:item.label
                //         .toLowerCase().split(/\s+/)
                //         .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                //         .join(' ')
                //     })))
                // }
            }
        }
        if (key == 'state') {
            modelRef.city = undefined
               cityDatas.value = [{
                label:t('proxycity.cityform'),
                value:''
            }].concat(cityList.value
                .filter((item:any)=>(item.value.indexOf(modelRef.state) !== -1) && item.value.indexOf(modelRef.country) !== -1)
                .map((item:any)=>({
                value:item.label,
                label:item.label
                .toLowerCase().split(/\s+/)
                .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            })))
        }
        if(key == 'IP') {
            const { value } = props
            console.log('value', value)
            if (value == '1') {
                modelRef.number = '1'
            } else {

            }
        }
    }
    onMounted(() => {
        modelRef.userName = userStore.userInfo?.mainKey
        // axios
        // axios.get('http://1t7e3st1237:1h7a3lanaoiwnaahgl@proxy.bitip.com:10001')
        GetBandwidthAnalysis()
        .then((res:any) => {
            cardDatas.value = [
                {
                    key: 1,
                    value: res.body.totalBandWidth-res.body.usedBandwidth
                },
                {
                    key: 2,
                    value: res.body.totalBandWidth
                },
                {
                    key: 3,
                    value: res.body.usedBandwidth
                }
            ]
        })

    })
    const router = useRouter()
    const onBuyFlow = () => {
        router.push({name:'purchasedflow'})
    }   
    const onFlowManager = () => {
        router.push({name:'trafficmanager'})
    }
</script>
<style scoped>
    .proxycity_card::before {
        content: '';
        position: absolute;
        inset: -1.25rem; /* 边框向外扩展 */
        border-image: linear-gradient(142deg, rgba(222, 255, 75, 1), rgba(255, 255, 255, 0)) 1 1;
        z-index: -1;
    }
</style>
<style lang="less">
    .customArea {
        border-radius: 1rem;
        textarea {
            border-radius: 1rem;
            &::placeholder {
                font-family: "Alibaba Sans";
                color:#666666;
                font-size: 1rem;
            }
        }
    }
    //form label
    // :where(.css-dev-only-do-not-override-1p3hq3p).ant-form-vertical .ant-form-item-label >label, :where(.css-dev-only-do-not-override-1p3hq3p).ant-col-24.ant-form-item-label >label, :where(.css-dev-only-do-not-override-1p3hq3p).ant-col-xl-24.ant-form-item-label >label
    // {
    //     width: 100%!important;
    // }
</style>