<template>
    <div class="border-t-[1px] border-[#EBEFF8] w-full overflow-hidden bg-white">
        <ComponentLayout>
            <!-- 桌面底部菜单 -->
            <FooterMenu />
            <!-- 移动端底部菜单 -->
            <FooterMobieMenu />
        </ComponentLayout>
        <Partner />
        <div class="w-full h-[5.125rem] flex justify-center items-center border-t-[1px] border-[#EBEFF8] text-[#666666] text-[1rem] font-light">
            Copyright ©2025 江苏米亚信息科技有限公司《中华人民共和国增值电信业务许可证》B1-20250216 备案号:
            <div class="pl-[0.2rem] flex items-center" ><span class="pl-[0.2rem] underline decoration-1 cursor-pointer pr-[0.2rem]" @click="onToDomain">苏ICP备2024151633号-2</span><img src="../../assets/备案图标.png" class="w-[1.5rem] h-[1.5rem]"/> <span @click="onToDomain" class="pl-[0.2rem] underline decoration-1 cursor-pointer"> 沪公网安备31011502403216号</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import FooterMenu from './FooterMenu.vue';
    import FooterMobieMenu from './FooterMobieMenu.vue';
    import ComponentLayout from '../ComponentLayout.vue'
    import Partner from './Partner.vue';
    const onToDomain = () => {
        window.open('https://beian.miit.gov.cn', '_blank')
    }
</script>