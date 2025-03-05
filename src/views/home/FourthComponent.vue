<template>
    <div ref="fourthRef" class="bg-[#01AA44] pb-[4rem] w-full overflow-hidden">
        <div class="flex justify-center pt-[3.625rem]">
            <span class="text-[white] text-[2.625rem] font-bold text-center">{{t('fourth.title')}}</span>
        </div>
        <div class="flex justify-center gap-[11.25rem] mt-[1.875rem]">
           <div class="flex flex-col justify-center">
                <span class="text-[white] text-[2rem] font-bold text-center">{{t('fourth.subtitle1')}}</span>
                <span class="text-[white] text-[1.25rem] font-light text-center">{{t('fourth.content1')}}</span>
           </div>
           <div class="flex flex-col justify-center">
                <span class="text-[white] text-[2rem] font-bold text-center">{{t('fourth.subtitle2')}}</span>
                <span class="text-[white] text-[1.25rem] font-light text-center">{{t('fourth.content2')}}</span>
           </div>
           <div class="flex flex-col justify-center">
                <span class="text-[white] text-[2rem] font-bold text-center">{{t('fourth.subtitle3')}}</span>
                <span class="text-[white] text-[1.25rem] font-light text-center">{{t('fourth.content3')}}</span>
           </div>
        </div>
        <div class=" pt-[4rem] w-full flex justify-center">
            <div class="world-map" id="world-map">

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import {ref, onMounted} from 'vue'
    import * as d3 from 'd3';
    import * as topojson from "topojson-client";
    const { t } = useI18n()
    const fourthRef = ref<HTMLElement>()
    defineExpose({
        fourthRef: fourthRef
    })
    const createLine = (point1:any, point2:any, projection:any, svg:any) => {
        const point1Pos = projection(point1.coordinates) as any;
        const point2Pos = projection(point2.coordinates) as any;
       
        const controlPoint = [
            (point1Pos[0] + point2Pos[0]) / 2 + 50, // 水平偏移量
            (point1Pos[1] + point2Pos[1]) / 2 - 30  // 垂直偏移量
        ];
        const lineGenerator = d3.line()
            .curve(d3.curveBasis) // 或自定义贝塞尔插值
            .x(d => d[0])
            .y(d => d[1]);
        // console.log(point1, point2)
        const path = lineGenerator([point1Pos, controlPoint, point2Pos]);
        svg.append("path")
                    .datum(path)
                    .attr("d", (d:any) => d)
                    .attr("stroke", "url(#bezierGradient)")
                    .attr("stroke-width", '3px')
                    .attr("fill", "none");
        // return pathData
    }
    onMounted(() => {
        d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        .then((data:any) => {
            const targetCountry = ['Brazil', 'United States of America', 'Algeria', 'Iceland', 'Japan', 'Madagascar']
            const countries = topojson.feature(data, data.objects.countries) as any;
            const newData = Object.assign({}, countries, {
                features: countries.features.filter((d:any) => 
                d.properties.name !== "Antarctica"
                )
            })
            const countryCentroids = countries.features.map((d:any) => {
                const centroid = d3.geoCentroid(d);
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

            const projection = d3.geoMercator()
            .fitSize([window.innerWidth*0.8, window.innerHeight*0.5], newData)

            const path = d3.geoPath().projection(projection) as any;
            const svg = d3.select("#world-map").append("svg")
            .attr("width", '100%')
            .attr("height", '100%');

            

            const gradient = svg
            .append("defs")
            .append("linearGradient")
            .attr("id", "bezierGradient")
            .attr("x1", "0%")    // 垂直方向：起始点 y 坐标为 0%
            .attr("y1", "0%")
            .attr("x2", "0%")    // 垂直方向：结束点 y 坐标为 100%
            .attr("y2", "100%");
            const highlightCountry = (d:any) => {
                // const targetName = ['Brazil', 'United States of America', 'Algeria', 'Iceland', 'Japan', 'Madagascar']; // 目标国家名称
                return targetCountry.indexOf(d.properties.name)!==-1 ? "#D0FFED" : "#01AA44";
            };
            svg.selectAll("path")
                .data(newData.features)
                .enter().append("path")
                .attr("d", path)
                .attr("class", "country")
                
                // .style("fill", "#01AA44")
                .style("stroke", "#fff")
                .attr('fill', highlightCountry)
                .on("mouseover", function(event) {
                    const name = event.target.__data__.properties.name
                    // console.log(name)
                    if (targetCountry.indexOf(name) !== -1) {
                        return
                    }
                    event.target.style.fill = '#D0FFED'
                })
                .on("mouseout", function(event) {
                    const name = event.target.__data__.properties.name
                    if (targetCountry.indexOf(name) !== -1) {
                        return
                    }
                    event.target.style.fill = '#01AA44'
                })
                
                // 设置渐变色标
                gradient.append("stop")
                .attr("offset", "0%")
                .style("stop-color", "#74ffe8"); // 对应 rgba(116,255,232,1)

                gradient.append("stop")
                .attr("offset", "100%")
                .style("stop-color", "#c3ff79"); // 对应 rgba(195,255,121,1)
                createLine(brazil, us, projection, svg)
                createLine(us, Algeria, projection, svg)
                createLine(Iceland, Algeria, projection, svg)
                createLine(Algeria, Madagascar, projection, svg)
                createLine(Japan, Madagascar, projection, svg)
                //坐标点添加圆环
                // const usCenter = projection(us.coordinates)
                addRing(us, projection, svg)
                addRing(brazil, projection, svg)
                addRing(Algeria, projection, svg)
                addRing(Madagascar, projection, svg)
                addRing(Japan, projection, svg)
                addRing(Iceland, projection, svg)
            });
        })
        const addRing = (point:any, projection:any, svg:any) => {
            const center = projection(point.coordinates)
            // 绘制外层圆（先绘制）
            svg.append("circle")
                .attr("cx", center[0])
                .attr("cy", center[1])
                .attr("r", 20)  // 外层圆半径
                .attr("fill", "rgba(66,246,255,0.18)");  // 外层颜色[1](@ref)
            
            // 绘制内层圆（后绘制）
            svg.append("circle")
                .attr("cx", center[0])
                .attr("cy", center[1])
                .attr("r", 10)   // 内层圆半径
                .attr("fill", "#42F6FF");      // 内层颜色[1](@ref)
            }
</script>
<style>
.world-map {
   height: 50vh;
   width: 80vw;
  }
</style>