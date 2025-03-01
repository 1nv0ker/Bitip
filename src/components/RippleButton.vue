<template>
    <div class="cursor-pointer flex justify-center items-center relative bitip_btn"
        @mousemove="onMousemove"
        @mouseenter="onMouseEnter" 
        @mouseout="onMouseOut"
        @click="onClick"
        ref="bitip_btn_ref">
        <span class="z-20">{{props.text}}</span>
        <div class="ripple bg-[white]" ref="rippleRef"></div>
    </div>
</template>
<script setup lang="ts">
    import { ref } from 'vue'
    const rippleRef = ref<any>(null)
    const bitip_btn_ref = ref<any>(null)
    const is_in = ref(false)
    const props = defineProps({
        text: {type:String}
    })
    const emit = defineEmits(['btnClick'])
    const onMouseEnter = () => {
        is_in.value = true
    }
    const onMouseOut = () => {
        is_in.value = false
    }
    const onMousemove = (event:MouseEvent) => {
        if (!is_in.value) {
            return
        }
        let x = event.x
        let y = event.y
        
        let rect = bitip_btn_ref.value .getBoundingClientRect()
        let left = x - rect.left;
        rippleRef.value.style.left = left + 'px';
        let top = y - rect.top;
        rippleRef.value.style.top = top + 'px'
    }
    const onClick = () => {
        emit('btnClick')
    }
</script>

<style >
    .bitip_btn:hover .ripple {
        transform: scale(10);
        transition: transform 1.2sease;
    }
    .bitip_btn {
        /* border: none; */
        overflow: hidden;
        transition: 0.3s;
        /* color: white; */
    }
    .ripple {
        border-radius: 50%;
        height: 60px;
        position: absolute;
        transform: scale(0);
        transition: transform .5sease;
        width: 60px;
        transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.5s ease;
    }
</style>