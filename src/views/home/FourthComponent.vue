<template>
    <ComponentLayout ref="fourthRef" class=" pb-[4rem] pt-[3.625rem] overflow-hidden relative" :style="`background-image: url('${map_bg}');background-repeat: no-repeat;background-size: cover;`">
        <!-- <div class=" absolute top-0 bottom-0 left-0 right-0">
            <img src="../../assets/map_group.png" class="w-full h-full" />
        </div> -->
        <div class="flex justify-center w-full">
            <span class="text-[#191919] text-[2.625rem] font-bold text-center whitespace-nowrap">{{t('fourth.title')}}</span>
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
            <div class="world-map" id="world-map">

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
                            <div class="bg-[#BAD162] rounded-[3.125rem] h-full" :style="`width:${legend.value}%`"></div>
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
    import * as d3 from 'd3';
    import * as topojson from "topojson-client";
    import ComponentLayout from '../ComponentLayout.vue'
    import map_bg from '../../assets/map_group.png'
    import gerImg from '../../assets/ger.png'
    import usImg from '../../assets/us.png'
    import ukImg from '../../assets/uk.png'
    import canImg from '../../assets/can.png'
    import indImg from '../../assets/india.png'
    const { t } = useI18n()
    const fourthRef = ref<HTMLElement>()
    const remInPixels = ref(0)
    defineExpose({
        fourthRef: fourthRef
    })
    const legendDatas = computed(() => {
        return [
            {
                name: t('fourth.ger'),
                img:gerImg,
                value: 53
            },
            {
                name: t('fourth.us'),
                img:usImg,
                value: 13
            },
            {
                name: t('fourth.uk'),
                img:ukImg,
                value: 8
            },
            {
                name: t('fourth.can'),
                img:canImg,
                value: 10
            },
            {
                name: t('fourth.ind'),
                img:indImg,
                value: 10
            }
        ]
    })
    const createLine = (point1:any, point2:any, projection:any, svg:any, type:string='') => {
        const point1Pos = projection(point1.coordinates) as any;
        const point2Pos = projection(point2.coordinates) as any;
        // console.log('point1Pos', point1Pos, point2Pos)
        // const controlPoints = [
        //     (point1Pos[0] + point2Pos[0]) / 2 + 50, // 水平偏移量
        //     (point1Pos[1] + point2Pos[1]) / 2 - 30  // 垂直偏移量
        // ];
        console.log(point1)
        const controlPoints = {
            c1: { x: (point1Pos[0] + point2Pos[0])/2, y: 50 },  // 上方控制点
            // c2: { x: (point1Pos[0] + point2Pos[1])/2, y: 50 }   // 三次贝塞尔需要两个控制点
        };
        // 生成三次贝塞尔曲线路径
        const lineGenerator = d3.line()
        .curve(d3.curveBasis)  // 使用Basis曲线
        .x((d:any) => d.x)
        .y((d:any) => d.y);
        // const lineGenerator = d3.line()
        //     .curve(d3.curveBasis) // 或自定义贝塞尔插值
        //     .x(d => d[0])
        //     .y(d => d[1]);
        // console.log(point1, point2)
        // const pathData:any = lineGenerator([point1Pos, controlPoints, point2Pos]);
        const pathData = lineGenerator([
            {x:point1Pos[0],y:point1Pos[1]} as any ,
            controlPoints.c1,
            // controlPoints.c2,
            {x:point2Pos[0],y:point2Pos[1]}
        ]);

        // const totalLength = path.getTotalLength();
        // const totalLength = path.getTotalLength();
        // const points = Array.from({length: totalLength}, (_, i) => 
        //     path.getPointAtLength(i)
        // );
        // console.log('pathData', pathData, controlPoints)
        const path2 = svg.append("path")
        .attr("d", pathData)
        .attr("fill", "none")
        .attr("stroke", "url(#bezierGradient)")
        .attr("stroke-width", 2);
        // const path2 = svg.append("path")
        //             .datum(path)
        //             .attr("d", (d:any) => d)
        //             .attr("stroke", "url(#bezierGradient)")
        //             .attr("stroke-width", '4px')
        //             .attr("fill", "none").node()
        // return pathData
        // dotLinearGradient()
        // const totalLength = path2.node().getTotalLength();
        // const svg = d3.select("svg");
         // 定义线性渐变
        // const gradient = svg.append("defs")
        //     .append("linearGradient")
        //     .attr("id", "dot-linearGradient")
        //     .attr("x1", "0%").attr("y1", "0%")
        //     .attr("x2", "100%").attr("y2", "0%"); // 水平渐变
        // // 添加颜色停止点
        // gradient.append("stop")
        //     .attr("offset", "0%")
        //     .style("stop-color", "rgba(247,255,190)");

        // gradient.append("stop")
        //     .attr("offset", "100%")
        //     .style("stop-color", "rgba(247,255,190)");
        // const dot = svg.append("circle")
        // .attr("r", 3)
        
        // .style("fill", "url(#dot-linearGradient)");

        // const movingLine = svg.append("line")
        // .attr("stroke", "red")
        // .attr("stroke-width", 4)
        // .attr("fill", "steelblue")
        // 4. 获取路径点序列
        const totalLength = path2.node().getTotalLength();
        // console.log('totalLength', totalLength, path2)
        path2
        .attr("stroke-dasharray", totalLength)
        .attr("stroke-dashoffset", totalLength)
        .transition()
        .duration(5000)
        .ease(d3.easeCubicInOut)
        .attr("stroke-dashoffset", 0)
        .on("end", function() {
            // 动画完成回调
            if (type) {
                dotEndBox(point2Pos, svg)
            }

        });
        // 创建流动光点
            
            
        // const points = Array.from({length: totalLength}, (_, i) => 
        //     path2.getPointAtLength(i)
        // );

        // let startTime:any;
        // let lastCycle = 0; // 记录上一次的周期索引
        // let boxStatus = false
        // function animate(timestamp:any) {
        //     if (!startTime) startTime = timestamp;
        //     const progress = timestamp - startTime;
        //     const t = (progress % 5000) / 5000; // 5秒循环
            
        //     const posIndex = Math.floor(t * points.length);
        //     const {x, y} = points[posIndex];
        //     const currentCycle = Math.floor(progress / 5000); // 当前循环次数

        //     // 检测是否进入新周期
        //     if ((currentCycle > lastCycle) && !boxStatus && type) {
        //         lastCycle = currentCycle;
        //         boxStatus = true
        //         dotEndBox(dot, svg)
        //     }
        //     dot.attr("transform", `translate(${x},${y})`)
            
        //     requestAnimationFrame(animate);
        // }
        // requestAnimationFrame(animate);
    }
    //添加ipbox
    const dotEndBox = (point2Pos:any, svg:any) => {
        // const svg = d3.select("svg");
        // const currentPos = d3.select(dot.node()).attr("transform");
        const matrix = point2Pos;
        const LINE_CONFIG = {
            height: 5,     // 虚线长度
            color: "#000000", 
            dash: "4 2"     // 虚线样式
        };
        const BOX_CONFIG = {
            width: 13.5,
            height: 2.5,
            padding: 0.75,
            text: "美国 IP：120.187 .120.18", // 动态文本示例
            bgColor: "#191919",

        };
        const x = parseFloat(matrix[0]);
        const y = parseFloat(matrix[1]);
        svg
        .append("line")
        .attr("x1", x)
        .attr("y1", y)
        .attr("x2", x)
        .attr("y2", y - LINE_CONFIG.height*remInPixels.value)
        .style("stroke", LINE_CONFIG.color)
        .style("stroke-dasharray", LINE_CONFIG.dash)
        .style("stroke-width", 1.5);
        
        const box = svg
        .append("g")
        .attr("transform", `translate(${x - BOX_CONFIG.width*remInPixels.value/2}, ${y - LINE_CONFIG.height*remInPixels.value - BOX_CONFIG.height*remInPixels.value})`);
        

        svg.append("path")
        .attr("d", "M-10 0 L0 10 L10 0") // 等腰三角形路径
        .attr("transform", `translate(${x }, ${y - LINE_CONFIG.height*remInPixels.value})`)
        .style("fill", "##191919")

         // 背景框
         box.append("rect")
        .attr("width", BOX_CONFIG.width*remInPixels.value)
        .attr("height", BOX_CONFIG.height*remInPixels.value)
        .style("fill", BOX_CONFIG.bgColor)
        .attr("rx", '1.5rem')  // 水平方向圆角
        .attr("ry", '1.5rem'); // 垂直方向圆角
        svg.append('path')
            .attr("d", `M ${BOX_CONFIG.width*remInPixels.value/2},${BOX_CONFIG.height*remInPixels.value}
                        L ${BOX_CONFIG.width*remInPixels.value/2},${BOX_CONFIG.height*remInPixels.value-40}
                        L ${BOX_CONFIG.width*remInPixels.value/2 },${BOX_CONFIG.height*remInPixels.value} Z`)
            .attr("fill", 'red')
        box.append("text")
        .attr("x", BOX_CONFIG.width*remInPixels.value/2)
        .attr("y", BOX_CONFIG.height*remInPixels.value/2)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .style("font-size",  '0.8rem')
        .style("font-family", "Alibaba Sans")
        .style("fill", "#FFFFFF")
        .text(BOX_CONFIG.text);
    }
    onMounted(() => {
        const rootElement = document.documentElement;
        const computedStyle = window.getComputedStyle(rootElement);
        const remValue = computedStyle.getPropertyValue('font-size');
        remInPixels.value = parseFloat(remValue); 
        d3.json("/worldMap.json")
        .then((data:any) => {
            const targetCountry = ['Brazil', 'United States of America', 'Algeria', 'Iceland', 'Japan', 'Madagascar', 'Russia', 'France', 'India']
            const countries = topojson.feature(data, data.objects.countries) as any;
            const newData = Object.assign({}, countries, {
                features: countries.features.filter((d:any) => 
                    d.properties.name !== "Antarctica"
                )
            })
            const countryCentroids = countries.features.map((d:any) => {
                const centroid = d3.geoCentroid(d);
                // console.log('centroid', centroid, d)
                return {name: d.properties.name, coordinates: centroid};
            });
           
            //美国和巴西
            const brazil = countryCentroids.find((d:any) => d.name === "Brazil");
            const us = countryCentroids.find((d:any) => d.name === "United States of America");
            //
            const Algeria = countryCentroids.find((d:any) => d.name === "Algeria");
            const Iceland = countryCentroids.find((d:any) => d.name === "Iceland");
            
            const Japan = countryCentroids.find((d:any) => d.name === "Japan");
            const Madagascar = countryCentroids.find((d:any) => d.name === "Madagascar");
            //
            const container :any = d3.select("#world-map");
            const width = container.node()?.clientWidth;
            console.log(window.innerHeight)
            // const height = Math.min(window.innerHeight * 0.8, width * 0.6);
            const projection = d3.geoEquirectangular()
            // .scale((width / 2) / Math.PI * 0.95) // 缩放系数
            // .translate([width / 2, height / 2]); // 居中偏移
            
            .fitSize([width*75/100, window.innerHeight*0.5], newData)

            const path = d3.geoPath().projection(projection) as any;
            const svg = d3.select("#world-map").append("svg")
            .attr("width", '100%')
            .attr("height", '100%');

            

            const gradient = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "bezierGradient")
            .attr("gradientTransform", "rotate(90)");
            const highlightCountry = (d:any) => {
                // const targetName = ['Brazil', 'United States of America', 'Algeria', 'Iceland', 'Japan', 'Madagascar']; // 目标国家名称
                return targetCountry.indexOf(d.properties.name)!==-1 ? "#01AA44" : "#E4F0EB";
            };
            svg.selectAll("path")
                .data(newData.features)
                .enter().append("path")
                .attr("d", path)
                .attr("class", "country")
                
                // .style("fill", "#01AA44")
                .style("stroke", "#C3D1CB")
                .attr('fill', highlightCountry)
                .on("mouseover", function(event) {
                    const name = event.target.__data__.properties.name
                    // console.log(name)
                    if (targetCountry.indexOf(name) !== -1) {
                        return
                    }
                    event.target.style.fill = '#01AA44'
                })
                .on("mouseout", function(event) {
                    const name = event.target.__data__.properties.name
                    if (targetCountry.indexOf(name) !== -1) {
                        return
                    }
                    event.target.style.fill = '#E4F0EB'
                })
                
                gradient.append("stop").attr("offset", "0%").style("stop-color", "#BAD162");
                gradient.append("stop").attr("offset", "100%").style("stop-color", "#C3FF79");
                createLine(brazil, us, projection, svg, 'us')
                createLine(us, Algeria, projection, svg)
                createLine(Iceland, Algeria, projection, svg,)
                createLine(Algeria, Madagascar, projection, svg)
                createLine(Japan, Madagascar, projection, svg)
                //坐标点添加圆环
                addRing(us, projection, svg)
                addRing(brazil, projection, svg)
                // addRing(Algeria, projection, svg)
                // addRing(Madagascar, projection, svg)
                // addRing(Japan, projection, svg)
                // addRing(Iceland, projection, svg)
            });
        })
        const addRing = (point:any, projection:any, svg:any) => {
            const center = projection(point.coordinates)
            // 绘制外层圆（先绘制）
            svg.append("circle")
                .attr("cx", center[0])
                .attr("cy", center[1])
                .attr("r", 20)  // 外层圆半径
                .attr("fill", "rgba(247,255,190,0.38)");  // 外层颜色[1](@ref)
            
            // 绘制内层圆（后绘制）
            svg.append("circle")
                .attr("cx", center[0])
                .attr("cy", center[1])
                .attr("r", 10)   // 内层圆半径
                .attr("fill", "rgba(247,255,190,0.6)");      // 内层颜色[1](@ref)
            }
</script>
<style>
.world-map {
   height: 50vh;
   width: 80vw;
  }
</style>