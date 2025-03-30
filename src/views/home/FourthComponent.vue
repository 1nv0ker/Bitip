<template>
    <ComponentLayout ref="fourthRef" class=" pb-[4rem] pt-[3.625rem] overflow-hidden relative " >
        <!-- bg-[#F4FAF6] -->
        <!-- :style="`background-image: url('${mapGif}');background-repeat: no-repeat;background-size: cover;`" -->
        <!-- <div class=" absolute top-0 bottom-0 left-0 right-0">
            <img src="../../assets/map_group.png" class="w-full h-full" />
        </div> -->
        <!-- <div class=" absolute w-full h-full">
            <img class="w-full h-full" src="../../assets/map.gif" />
        </div> -->
        <div class="flex justify-center w-full">
            <span class="text-[#191919] text-[3.25rem] font-bold text-center whitespace-nowrap">{{t('fourth.title')}}</span>
        </div>
        <!-- <div class="flex justify-center gap-[11.25rem] mt-[2rem] w-full">
           <div class="flex flex-col justify-center">
                <span class="text-[#191919] text-[2rem] font-bold text-center whitespace-nowrap">{{t('fourth.subtitle1')}}</span>
                <span class="text-[#191919] text-[1.25rem]  text-center whitespace-nowrap">{{t('fourth.content1')}}</span>
           </div>
           <div class="flex flex-col justify-center">
                <span class="text-[#191919] text-[2rem] font-bold text-center whitespace-nowrap">{{t('fourth.subtitle2')}}</span>
                <span class="text-[#191919] text-[1.25rem]  text-center whitespace-nowrap">{{t('fourth.content2')}}</span>
           </div>
           <div class="flex flex-col justify-center">
                <span class="text-[#191919] text-[2rem] font-bold text-center whitespace-nowrap">{{t('fourth.subtitle3')}}</span>
                <span class="text-[#191919] text-[1.25rem]  text-center whitespace-nowrap">{{t('fourth.content3')}}</span>
           </div>
        </div> -->
        <div class="mt-[4rem] w-full flex justify-center relative">
            <div class="world-map w-[30rem h-[10rem]]" id="world-map">
                
            </div>
            <div class="absolute right-0 bottom-0 flex flex-col gap-[1.5rem] justify-end pb-[4rem] w-[15rem]">
                <div v-for="legend in legendDatas" class="flex items-center justify-between h-[2.8125rem]  w-full">
                    <img :src="legend.img" class="w-[2.8125rem] "/>
                    <div class="flex flex-col h-[2.5rem] w-[11.25rem] justify-between">
                        <div class="w-full flex justify-between">
                            <span class="text-[#191919] text-[1.375rem] font-medium">{{legend.name}}</span>
                            <span class="text-[#999999] text-[1.375rem] font-medium">{{legend.value}}%</span>
                        </div>
                        <div class="w-full h-[0.375rem] bg-[#E4F0EB] rounded-[3.125rem]">
                            <div :style="`width:${legend.value}%`" class=" h-full rounded-[3.125rem]">
                                <div class="bg-[#BAD162] rounded-[3.125rem] h-full w-full progress-bar" style="transition: width 2s ease-in-out;width:100%"></div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        
    </ComponentLayout>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import {ref, onMounted, computed} from 'vue'
    import * as THREE from 'three';
    import ComponentLayout from '../ComponentLayout.vue'

    // import map_bg from '../../assets/map_group.png'
    import gerImg from '../../assets/ger.png'
    import usImg from '../../assets/us.png'
    import ukImg from '../../assets/uk.png'
    import canImg from '../../assets/can.png'
    import indImg from '../../assets/india.png'
    // import mapGif from '../../assets/map.gif'
    const { t } = useI18n()
    const fourthRef = ref<HTMLElement>()

    defineExpose({
        fourthRef: fourthRef
    })
    const legendDatas = computed(() => {
        return [
            {
                name: t('fourth.ger'),
                img:gerImg,
                value: 53,
                key:'a'
            },
            {
                name: t('fourth.us'),
                img:usImg,
                value: 13,
                key:'b'
            },
            {
                name: t('fourth.uk'),
                img:ukImg,
                value: 8,
                key:'c'
            },
            {
                name: t('fourth.can'),
                img:canImg,
                value: 10,
                key:'d'
            },
            {
                name: t('fourth.ind'),
                img:indImg,
                value: 10,
                key:'e'
            }
        ]
    })

   
    onMounted(() => {
        loadThree()
    })
    const loadThree = () => {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('white')
        const camera = new THREE.PerspectiveCamera(25, window.innerWidth/window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(1280, 600);
        const world = document.getElementById('world-map')
        if (world) {
            world.appendChild(renderer.domElement)
        }
        // 加载地球纹理
        const textureLoader = new THREE.TextureLoader();
        const earthTextures = {
            baseColor: textureLoader.load('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg'),
            normalMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_normal_2048.jpg'),
            // specularMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_specular_2048.jpg'),
            // cloudMap: textureLoader.load('https://threejs.org/examples/textures/planets/earth_clouds_1024.png')
        };

        // 创建地球材质
        const earthMaterial = new THREE.MeshPhongMaterial({
            map: earthTextures.baseColor,
            normalMap: earthTextures.normalMap,
            normalScale: new THREE.Vector2(0.8, 0.8),
            // specularMap: earthTextures.specularMap,
            // specular: new THREE.Color(0x111111),
            // shininess: 10,
        });
        // 构建地球模型
        const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        scene.add(earth);
        // 相机和控制器设置
        camera.position.z = 15;
        camera.position.y += 2.5
        camera.position.x += 0.5
        // 设置光源
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);
        // function addCityMarker(lat, lng) {
        //     const phi = (90 - lat) * Math.PI / 180;
        //     const theta = (180 - lng) * Math.PI / 180;
            
        //     const marker = new THREE.Mesh(
        //         new THREE.SphereGeometry(0.05),
        //         new THREE.MeshBasicMaterial({ color: 0xff0000 })
        //     );
            
        //     marker.position.setFromSphericalCoords(5.1, phi, theta);
        //     earth.add(marker);
        // }
        // addCityMarker()
        // 动画循环
        function animate() {
            requestAnimationFrame(animate);
            earth.rotation.y -= 0.0025;
            renderer.render(scene, camera);
        }
        animate();

    }
</script>
<style>
/* .world-map {
   height: 50vh;
   width: 80vw;
  }
  @keyframes loading {
  0% { width: 0; }
  50% { background-color: #BAD162; }
  100% { width: 100%; }
} */

.progress-bar {
  animation: loading 5s ease-in-out infinite;
}
</style>