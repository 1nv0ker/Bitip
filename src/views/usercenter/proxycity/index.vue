<template>
    <div class="w-full h-full">
        <div class="w-full h-full flex gap-[1.75rem] overflow-y-auto">
            <!-- 基础展示 -->
            <div class="rounded-[1.5rem] bg-white p-[1.75rem] overflow-y-auto " style="width: calc( 100% - 27rem );">
                
                <div class="w-full ">
                    <div class="w-full flex justify-between items-center">
                        <span class="text-[#191919] text-[1.25rem] font-bold">{{t('proxycity.card1')}}</span>
                        <div class="flex gap-[1.25rem]">
                            <div  class="  right-[1rem] w-[5.5rem] h-[2.25rem]  border-[#01AA44] 
                            border-[1px] rounded-[0.5rem] flex justify-center items-center cursor-pointer" @click="onBuyFlow">
                                <span class="text-[#01AA44] text-[1rem] pl-[0.5rem] pr-[0.5rem] ellipsis-single" :title="t('proxycity.card_button')">{{t('proxycity.card_button')}}</span>
                            </div>
                            <div  class=" right-[1rem] w-[5.5rem] h-[2.25rem] ] border-[#EBEFF8] bg-[#FAFAFA]
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
                                <NumberComponent class="text-[#191919] text-[1.5rem] font-bold" :step="1" :number="cardDatas.find(data=>data.key==item.key)?cardDatas.find(data=>data.key==item.key)['value']:0"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full border-[1px] border-[#EBEFF8] mt-[1.5rem]">

                </div>
                <!-- 定位城市 -->
                <div class="mt-[1rem] pr-[1.5rem]">
                    <a-form layout="vertical" :rules="rules" :model="modelRef" ref="formRef">
                        <a-row :gutter="[24, 24]">
                            <a-col :span="8" class="h-[4.75rem]">
                                <a-form-item :label="t('proxycity.form1')" name="userName">
                                    <div class="relative h-[3rem]">
                                        <AccountSelect v-model="modelRef.userName" @onSelectAccount="onSelectAccount" />
                                    </div>
                                </a-form-item>
                            </a-col>
                        </a-row>
                        <a-row :gutter="[24, 24]" class="mt-[1.5rem]">
                            <a-col :span="8" v-for="form in formItems" class="h-[4.75rem]">
                                <a-form-item :label="form.label" :name="form.key">
                                    <div class="relative h-[3rem]">
                                        <a-select :showSearch="form.showSearch" :placeholder="form.placeholder" class="customASelect" :disabled="form.disabled"
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
                    <div class="w-full h-[20.625rem] bg-[#FAFAFA] rounded-[0.75rem] border-[#EBEFF8] border-[1px] pl-[1.75rem] pr-[1.75rem]">
                        <div class=" border-b-[1px] border-[#EBEFF8] overflow-auto flex flex-col gap-[1rem]  text-[#666666] text-[1rem] h-[16.625rem] pt-[1.75rem]">
                            <span v-for="item in proxyIPS">
                                {{modelRef.generateType=='1'?showIP(item.hostname_port, item.username_password):item}}
                            </span>
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
                            <div class="flex items-center text-[#666666] text-[1rem] cursor-pointer">
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
                <div class="">
                    <a-textarea class="customArea"  :placeholder="t('proxycity.agentPlaceholder')" :rows="4" :maxlength="10" show-count />
                </div>
                <div class="w-full h-[3rem] rounded-[0.75rem] bg-[#01AA44] cursor-pointer flex justify-center items-center ">
                    <span class="text-white text-[1rem] font-medium">{{ t('proxycity.button3') }}</span>
                </div>
                <div class="w-full h-[39rem] border-[1px] border-[#EBEFF8] bg-[#FAFAFA] rounded-[0.75rem]">

                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    //选择数量1-1000 1 10 100 1000
    import { computed , onMounted, ref, reactive } from 'vue'
    import NumberComponent from '../../../components/NumberComponent.vue'
    import locations from './location.json'
    import AccountSelect from './AccountSelect.vue'
    import type { Rule } from 'ant-design-vue/es/form';
    import { useI18n } from 'vue-i18n'
    import { useRouter } from 'vue-router'
    import { GetProxyConfig, GetBandwidthAnalysis, GenerateApi } from '../../../api/proxy'
    import { message } from 'ant-design-vue';
    const { t } = useI18n()
    const cardDatas = ref<any[]>([])
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
                { required: modelRef.IP=='0'?true:false, message: t('proxycity.form3_rule'), trigger: 'change' },
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
        return [
            {
                label: t('proxycity.form2'),
                placeholder: t('proxycity.form2_placeholder'),
                key:'country',
                showButton:false,
                showSearch: true,
                options: locations.map((item=>({
                    label:item.country,
                    value:item.country,
                    state:item.state,
                    city:item.city
                })))
            },
            {
                label: t('proxycity.form3'),
                placeholder: t('proxycity.form3_placeholder'),
                key:'state',
                showButton:false,
                showSearch: true,
                options: stateDatas.value
                // disabled:true
            },
            {
                label: t('proxycity.form4'),
                placeholder: t('proxycity.form4_placeholder'),
                key:'city',
                showButton:false,
                showSearch: true,
                options: cityDatas.value,
                disabled: !modelRef.state
            },
            {
                label: t('proxycity.form5'),
                placeholder: t('proxycity.form5_placeholder'),
                key:'time',
                showButton:false,
                disabled: modelRef.IP=='0'?false:true,
                options: [
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
    //生成代理
    const onGenerate = () => {
        formRef.value.validate()
        .then(() => {
            proxyIPS.value = []
            modelRef.generateType = '1'
            //生成代理
            const { proxyCityFmt, proxyCountryFmt, proxyPort, proxyPwd, proxyStateFmt, proxyUrl, userName } = proxyConfig.value
            for (let i=0;i<Number(modelRef.number);i++) {
                
                const randomInPortIndex= Math.floor(Math.random() * proxyPort.length)
                const randomInUrlIndex= Math.floor(Math.random() * proxyUrl.length)
                if (proxyPort[randomInPortIndex] && proxyUrl[randomInUrlIndex]) {
                    const url = proxyUrl[randomInUrlIndex]
                    const port = proxyPort[randomInPortIndex]
                    
                    //rotating session存在
                    const sessiong = modelRef.IP == '0'?generateRandomString():0
                    const hostname_port = url+':'+port
                    const username_password = userName+'_g-'+ modelRef.country + '_f-' + (modelRef.city?proxyCityFmt:(modelRef.state?proxyStateFmt:proxyCountryFmt))
                        + '_sid-'+sessiong + (modelRef.state?('_s-'+modelRef.state):'')
                        + (modelRef.city?('_c-'+modelRef.city):'') + (modelRef.time?('_l-'+modelRef.time):'')
                        + ':'+ proxyPwd
                    let proxyIP = ''
                    if (modelRef.type == '0') {
                        proxyIP = hostname_port + ':' + username_password
                    } else if (modelRef.type == '1') {
                        proxyIP = username_password + '@' + hostname_port
                    } else {
                        proxyIP = username_password + ':' + hostname_port
                    }
                    proxyIP = proxyIP
                    proxyIPS.value.push({
                        hostname_port: hostname_port,
                        username_password: username_password
                    })
                } else {
                    message.error('端口号或者url不存在')
                    break
                }
            }
            // axios.get('http://'+proxyIPS.value[0])
            // console.log(proxyIPS.value)
        })
    }
    const onGenerateApi = () => {
        formRef.value.validate()
        .then(() => {
            loading.value = true
            
            GenerateApi({
                KeyName:modelRef.userName,
                Num:modelRef.number,
                Country:modelRef.country,
                State:modelRef.state,
                City:modelRef.city,
                SessionTime:modelRef.time,
                AutoSwitch: modelRef.IP,
                Format: modelRef.type
            })
            .then((res:any) => {
                modelRef.generateType = '0'
                console.log('res', res, res.split(`\n`))
                proxyIPS.value = res.split(`\n`)
                loading.value = false
            })
            .catch(() => {
                loading.value = false
            })
        })
        
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
        const str = proxyIPS.value.map((item:any)=> {
            if (modelRef.type == '0') {
                return item.hostname_port + ':' + item.username_password 
            } else if (modelRef.type == '1') {
                return item.username_password + '@' + item.hostname_port 
            } else {
                return item.username_password + ':' + item.hostname_port
            }
        }).join(';')
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
    const showIP = (hostname_port:string, username_password:string) => {
        if (modelRef.type == '0') {
            return hostname_port + ':' + username_password
        } else if (modelRef.type == '1') {
            return  username_password + '@' + hostname_port 
        } else {
            return username_password + ':' + hostname_port
        }
    }
    //选择账户
    const onSelectAccount = (_value:string) => {
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
            //重新选择清空
            modelRef.city = undefined
            modelRef.state = undefined
            stateDatas.value = state.map((item:any)=>({
                value:item.label,
                label:item.label
            }))
            cityDatas.value = city.map((item:any)=>({
                value:item.label,
                label:item.label
            }))
        }
        if (key == 'state') {
            modelRef.city = undefined
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
</style>