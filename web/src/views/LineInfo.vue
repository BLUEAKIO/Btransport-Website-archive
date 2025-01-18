<template>
  <div class="line-info">
    <h2>{{ $t('lineInfo.title') }}</h2>

    <!-- 搜索框 -->
    <div class="search-box">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索车站"
        @input="filterStations"
      />
      <ul v-if="filteredStations.length">
        <li
          v-for="station in filteredStations"
          :key="station.id"
          @click="showStationDetails(station)"
        >
          {{ $t(`stationList.stations.${station.id}`) }}
        </li>
      </ul>
      <p v-else>没有找到匹配的车站。</p>
    </div>

    <!-- 线路和车站列表 -->
    <div v-for="line in lines" :key="line.id" class="line">
      <div class="line-header" @click="toggleStations(line.id)">
        <h3 :style="{ color: line.color }">{{ line.name }}</h3>
        <span class="station-count">{{ line.stations.length }} 站</span>
        <button @click.stop="toggleStations(line.id)">
          {{ showStations[line.id] ? '隐藏车站' : '显示车站' }}
        </button>
      </div>
      <ul v-if="showStations[line.id]">
        <li
          v-for="station in line.stations"
          :key="station.id"
          @click="showStationDetails(station)"
        >
          {{ $t(`stationList.stations.${station.id}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import lineInfo from '../data/lineInfo.json'; // 确保路径正确

export default {
  data() {
    return {
      lines: lineInfo.lines || [], // 如果 lineInfo.lines 为 undefined，使用空数组
      showStations: (lineInfo.lines || []).reduce((acc, line) => {
        acc[line.id] = false; // 默认隐藏车站列表
        return acc;
      }, {}),
      searchQuery: '',
      filteredStations: [],
    };
  },
  methods: {
    showStationDetails(station) {
      // 跳转到车站详情页面
      this.$router.push(`/station/${station.id}`);
    },
    toggleStations(lineId) {
      this.showStations[lineId] = !this.showStations[lineId]; // Vue 3 中直接赋值
    },
    filterStations() {
      if (!this.searchQuery) {
        this.filteredStations = [];
        return;
      }
      const query = this.searchQuery.toLowerCase();
      this.filteredStations = this.lines
        .flatMap((line) => line.stations)
        .filter((station) =>
          this.$t(`stationList.stations.${station.id}`)
            .toLowerCase()
            .includes(query)
        );
    },
  },
};
</script>

<style src="../assets/css/LineInfo.css"></style>