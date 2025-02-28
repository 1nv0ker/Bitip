<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid h-[4rem]">
            <div class="navbar-brand cursor-pointer ml-[2.625rem]" @click="onToHome">
                <img src="../../assets/logo.png" class="w-[5.25rem] h-[1.75rem]" />
            </div>
            <div class="flex items-center phone_show">
                <div class="w-4.5rem flex">
                    <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                    <select class="w-[5rem] cursor-pointer ml-[0.5rem]" v-model="lan" @change="onLanauageChange">
                        <option value="zh">中</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="text-[#191919] cursor-pointer text-[1rem] font-medium ml-[2rem]" @click="onLogin">
                    {{t('login.login')}}
                </div>
                <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                    {{t('login.register')}}
                </div>
            </div>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-[#191919] text-[1rem]" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div> -->
            <div class="flex items-center pc_show pr-[5.75rem]">
                <div class="w-4.5rem flex">
                    <img src="../../assets/translate.png" class="w-[1.5rem] h-1.5rem"/>
                    <select class="w-[3rem] cursor-pointer ml-[0.5rem]" v-model="lan" @change="onLanauageChange">
                        <option value="zh">中</option>
                        <option value="en">EN</option>
                    </select>
                </div>
                <div class="text-[#191919] cursor-pointer text-[1rem] font-medium ml-[2rem]" @click="onLogin">
                    {{t('login.login')}}
                </div>
                <div class="text-[white] cursor-pointer text-[1rem] font-medium ml-[2rem] bg-[#01AA44] w-[5.75rem] h-[2.25rem] rounded-[1.1rem] flex justify-center items-center" @click="onRegister">
                    {{t('login.register')}}
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n'
    import useI18nStore from '../../store/i18n'
    import { useRouter } from 'vue-router'
    const { t } = useI18n()
    const i18n = useI18n()
    const lan = ref()
    const store = useI18nStore()
    const router = useRouter()
    onMounted(()=> {
        lan.value = i18n.locale.value
    })
    const onLanauageChange = () => {
        // console.log('onLanauageChange', value, lan.value)
        i18n.locale.value = lan.value
        store.changeLanauage(lan.value)
    }
    const onLogin = () => {
        router.push('/login')
    }
    const onRegister = () => {
        router.push('/register')
    }
    const onToHome = () => {
        router.push('/home')
    }
</script>
<style>
/* 当屏幕宽度 ≥ 768px 时隐藏移动端元素 */
@media (min-width: 768px) {
  .phone_show {
    display: none !important;
  }
}

/* 当屏幕宽度 < 768px 时隐藏桌面端元素 */
@media (max-width: 767px) {
  .pc_show {
    display: none !important;
  }
}
</style>