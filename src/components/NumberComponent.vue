<template>
    <span>
        <span style="transition: --value 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);" >
        {{count}}</span>
        <span>{{extra}}</span>
    </span>
</template>
<script setup lang="ts">
    import { ref, watch, toRefs, onMounted, onUnmounted } from 'vue'

    const count = ref(0)
    const props = defineProps({
        number:{
            type:Number,
            default:0
        },
        step: {
            type:Number,
            default: 0.05
        },
        extra: {
            type:String,
            default:''
        }
    })
    let animatioId:any = null
    const { number, step} = toRefs(props)
    onMounted(() => {
        if (number.value>0) {
            animate()
        }
    })
    
    const animate = () => {
        count.value = Math.round(Number(count.value + step.value)*100)/100
        if (count.value<number.value) {
            animatioId = requestAnimationFrame(animate)
        } else {
            count.value = props.number
        }
    }
    watch(number, () => {
        console.log('number', number)
        count.value = 0
        animate()
    })
    onUnmounted(() => {
        animatioId && cancelAnimationFrame(animatioId)
    })
</script>