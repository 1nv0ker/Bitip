<template>
    <Layout>
        <div class="container rounded-[1rem] bg-[white] pt-[5.12rem] pl-[3.25rem] pr-[3.25rem] pb-[5.12rem]">
            <nav>
                <div class="nav nav-tabs custom-tabs" id="nav-tab">
                    <div class="nav-link active cursor-pointer" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" aria-controls="nav-login" aria-selected="true" @click="selected=0">
                        {{t('login.passwordLogin')}}
                    </div>
                    <div class="nav-link cursor-pointer ml-[3.82rem]" id="nav-phone-tab" data-bs-toggle="tab" data-bs-target="#nav-phone" aria-controls="nav-phone" aria-selected="false" @click="selected=1">
                        {{t('login.smsLogin')}}
                    </div>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab" tabindex="0">
                    <PasswordLogin v-if="selected==0" />
                </div>
                <div class="tab-pane fade" id="nav-phone" role="tabpanel" aria-labelledby="nav-phone-tab" tabindex="0">
                    <TextLogin v-if="selected==1"/>
                </div>
            </div>
        </div>
    </Layout>
    
</template>
<script setup lang="ts">
    import Layout from './Layout.vue'
    import PasswordLogin from './PasswordLogin.vue'
    import TextLogin from './TextLogin.vue';
    import { useI18n } from 'vue-i18n'
    import { ref } from 'vue'
    const { t } = useI18n()
    const selected = ref(0)
</script>
<style lang="less" scoped>
     .custom-tabs {
        border:0;
        // border-bottom: 1;
        .nav-link {
            border: none;
            color:#666666;
            font-size: 1.75rem;
            font-weight: normal;
            padding:0;
        }
        .active {
            color:#191919;
            font-size: 1.75rem;
            font-weight: normal;
 
            text-decoration: underline;
            text-underline-offset: 0.8rem; /* 调整下划线与文字的距离 */
        }
    }
</style>
