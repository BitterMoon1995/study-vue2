<template>
  <div id="nig">
  </div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  name: "VehicleTrack",
  data() {
    return{
      map: null,
      polylineMap: null
    }
  },
  mounted() {
    this.createMap()
    setTimeout(()=>{
      console.log(this.polylineMap.size)
      //南山大桥
      let marker3 = new AMap.LngLat(104.761193,31.449204)

      let polyline = this.polylineMap.get("nigger1")
      console.log(polyline.getPath())
    },2000)
  },
  methods: {
    genPolyline() {
      //1958
      let marker1 = new AMap.LngLat(104.743791,31.476311)
      //公园
      let marker2 = new AMap.LngLat(104.747396, 31.461176)

      let polyline = new AMap.Polyline({
        borderWeight: 18,// 线条宽度，默认为 1
        strokeColor: 'black',
        lineJoin: 'round',
      })
      polyline.setPath([marker1,marker2])
      this.map.add(polyline)
      this.polylineMap = new Map()
      this.polylineMap.set("nigger1",polyline)
    },
    createMap() {
      AMapLoader.load({
        "key": "e0ab3d4d7575ea836a69abc393a4b6f6",              // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        "AMapUI": {             // 是否加载 AMapUI，缺省不加载
          "version": '1.1',   // AMapUI 缺省 1.1
          "plugins":[],       // 需要加载的 AMapUI ui插件
        },
      }).then((AMap)=>{
        this.map = new AMap.Map('nig', {
          zoom: 13
        })
        this.genPolyline()
      }).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style scoped>
#nig{
  height: 900px;
  width: 100%;
}
</style>
