<template>
  <div class="station-list">
    <h2>{{ $t('stationList.title') }}</h2>
    <ul>
      <li
        v-for="station in allStations"
        :key="station.id"
        @click="showStationDetails(station)"
      >
        {{ $t(`stationList.stations.${station.id}`) }}
      </li>
    </ul>
  </div>
</template>

<script>
import lineInfo from '../data/lineInfo.json'; // 确保路径正确

export default {
  data() {
    return {
      allStations: [], // 所有车站的列表
    };
  },
  created() {
    // 在组件创建时，将所有线路的车站合并到一个数组中
    this.allStations = lineInfo.lines.flatMap((line) => line.stations);
  },
  methods: {
    showStationDetails(station) {
      // 跳转到车站详情页面
      this.$router.push(`/station/${station.id}`);
    },
  },
};
</script>

<style src="../assets/css/StationList.css"></style>