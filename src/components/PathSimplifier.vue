<template>
  <div id="nig">
  </div>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "PathSimplifier",
  data() {
    return {
      map: null,
      polylineMap: null
    }
  },
  mounted() {
    this.createMap()
  },
  methods: {
    initPage(PathSimplifier) {
      //创建组件实例
      const pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        map: this.map, //所属的地图实例
        getPath: function (pathData, pathIndex) {
          //返回轨迹数据中的节点坐标信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng|number,lat|number],...]
          return pathData.path;
        },
        getHoverTitle: function (pathData, pathIndex, pointIndex) {
          //返回鼠标悬停时显示的信息
          if (pointIndex >= 0) {
            //鼠标悬停在某个轨迹节点上
            return pathData.name + '，点:' + pointIndex + '/' + pathData.path.length;
          }
          //鼠标悬停在节点之间的连线上
          return pathData.name + '，点数量' + pathData.path.length;
        },
        renderOptions: {
          //轨迹线的样式
          pathLineStyle: {
            strokeStyle: 'red',
            lineWidth: 6,
            dirArrowStyle: true
          }
        }
      });

      //这里构建两条简单的轨迹，仅作示例
      pathSimplifierIns.setData([{
        name: '轨迹0',
        path: [
          [100.340417, 27.376994],
          [108.426354, 37.827452],
          [113.392174, 31.208439],
          [124.905846, 42.232876]
        ]
      }, {
        name: '大地线',
        //创建一条包括500个插值点的大地线
        path: PathSimplifier.getGeodesicPath([116.405289, 39.904987], [87.61792, 43.793308], 500)
      }]);

      //创建一个巡航器
      const navg0 = pathSimplifierIns.createPathNavigator(0, //关联第1条轨迹
          {
            loop: true, //循环播放
            speed: 1000000
          });

      navg0.start();
    },
    createMap() {
      let vue = this
      AMapLoader.load({
        "key": "e0ab3d4d7575ea836a69abc393a4b6f6",              // 申请好的Web端开发者Key，首次调用 load 时必填
        "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        "plugins": [],           // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        "AMapUI": {             // 是否加载 AMapUI，缺省不加载
          "version": '1.1',   // AMapUI 缺省 1.1
          "plugins": [],       // 需要加载的 AMapUI ui插件
        },
      }).then((AMap) => {
        this.map = new AMap.Map('nig', {
          zoom: 13
        })
        //加载PathSimplifier，loadUI的路径参数为模块名中 'ui/' 之后的部分
        AMapUI.load(['ui/misc/PathSimplifier'], function (PathSimplifier) {

          if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
          }

          //启动页面
          vue.initPage(PathSimplifier);
        });

      }).catch(e => {
        console.log(e);
      })
    }
  }
}
</script>

<style scoped>
#nig {
  height: 900px;
  width: 100%;
}
</style>
