<template>
    
    <a-select 
    :placeholder="t('proxycity.form2_placeholder')"
     class="customASelect" v-model:value="account"
     :filter-option="false" 
     allowClear
     show-search
     @select="onSelect"
     @search="fetchAccountList"
    :not-found-content="state.fetching ? undefined : null"
     >
        <a-select-option :value="item.value" v-for="item in accountList">{{item.label}}</a-select-option>

        </a-select>
    <div class=" absolute z-20 h-[1.25rem] w-[1.25rem]  cursor-pointer top-[0.875rem] right-[3rem]" @click="onAddSub">
        <img src="../../../assets/proxycity/1.png" class="w-full h-full"/>
    </div>
    <AddSubModal v-model="open" @onAddComplate="onAddComplate" />
</template>
<script setup lang="ts">
    import { onMounted, ref, reactive } from 'vue'
    import { useI18n } from 'vue-i18n'
    import { GetSubAccountList } from '../../../api/account'
    import { debounce } from 'lodash-es';
    import AddSubModal from '../trafficmanager/AddSubModal.vue'
    const { t } = useI18n()
    const account = defineModel()
    const emit = defineEmits(['onSelectAccount'])
    const open = ref(false)
    const accountList = ref<any[]>([])
    const state = reactive({
        data: [],
        fetching: false,
        KeyWord:''
    })
    const onAddSub = () => {
        open.value = true
    }
    onMounted(() => {
        
    })
    const fetchAccountList = debounce((value:string) => {
        state.KeyWord = value
        loadAccountList()
    })
    const loadAccountList = () => {
        state.fetching = true
        GetSubAccountList({
            PageNo:1,
            PageSize: 10,
            KeyWord:state.KeyWord
        })
        .then((res:any) => {
            state.fetching = false
            accountList.value = res.body.records
            .filter((item:any)=>item.enabled==1)
            .map((item:any)=> ({
                value:item.keyName,
                label:item.keyName
            }))
        })
        .catch(() => {
            state.fetching = false
        })
    }
    const onAddComplate = () => {
        loadAccountList()
    }
    const onSelect = (value:string) => {
        // console.log('value', value)
        emit('onSelectAccount', value)
    }
</script>