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
            default:-1
        },
        step: {
            type:Number,
            default: 0.05
        },
        extra: {
            type:String,
            default:''
        },
        mode: {
            type:String,
            default:'show'
        }
    })
    let animatioId:any = null
    const { number, step} = toRefs(props)
    let addStatus = true
    let stopStatus = false
    onMounted(() => {
        if (props.mode == 'loading') {
            animate()
        } else {
            if (number.value>0) {
                animate()
            }
        }
    })
    watch(()=>props.number, (val1, val2) => {
        console.log('props', props.number, val1, val2)
        if (props.mode == 'loading') {
            stopStatus = true
        }
    })
    const animate = () => {
        if (props.mode == 'loading') {
            if (stopStatus == true) {
                count.value = props.number
            } else {
                if (count.value>=1) {
                
                    addStatus = false
                } 
                if (count.value==0) {
                    addStatus = true
                }
                if (addStatus) {
                    count.value = Math.round(Number(count.value + step.value)*100)/100
                } else {
                    count.value = Math.round(Number(count.value - step.value)*100)/100
                }
                animatioId = requestAnimationFrame(animate)
            }
            
        } else {
            count.value = Math.round(Number(count.value + step.value)*100)/100
            if (count.value<number.value) {
                animatioId = requestAnimationFrame(animate)
            } else {
                count.value = props.number
            }
        }
    }
    const stopAnimate = () => {
        count.value = props.number
        animatioId && cancelAnimationFrame(animatioId)
    }
    defineExpose({
        stopAnimate: stopAnimate
    })
    watch(number, () => {
        console.log('number', number)
        count.value = 0
        animate()
    })
    onUnmounted(() => {
        animatioId && cancelAnimationFrame(animatioId)
    })
</script>