<template>
    <div class="border-t-[1px] border-[#EBEFF8] w-full overflow-hidden bg-white">
        <ComponentLayout>
            <!-- 桌面底部菜单 -->
            <FooterMenu />
            <!-- 移动端底部菜单 -->
            <FooterMobieMenu />
            </ComponentLayout>
        
        <div class="w-full h-[5.125rem] flex justify-center items-center border-t-[1px] border-[#EBEFF8] text-[#666666] text-[1rem] font-light">
            Copyright © 2024 江苏网络科技有限公司 版权保留一切权力 备案号:<span class="underline decoration-1" @click="onToDomain">苏ICP备17060135号-7</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    import FooterMenu from './FooterMenu.vue';
    import FooterMobieMenu from './FooterMobieMenu.vue';
    import ComponentLayout from '../ComponentLayout.vue'
    const onToDomain = () => {

    }
</script>