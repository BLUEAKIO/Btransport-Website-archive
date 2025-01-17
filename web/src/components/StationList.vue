<template>
  <section class="station-list">
    <h2>{{ language === 'en' ? 'Stations' : '车站列表' }}</h2>
    <input
      type="text"
      v-model="searchQuery"
      :placeholder="language === 'en' ? 'Search stations...' : '搜索车站...'"
    >
    <div class="station-container">
      <!-- 车站信息 -->
      <div
        v-for="station in filteredStations"
        :key="station.name[language]"
        class="station-item"
        @click="showStationDetails(station)"
      >
        <div class="station-info">
          <strong>{{ station.name[language] }}</strong> - {{ station.description[language] }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    stations: {
      type: Array,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: '', // 搜索框内容
    };
  },
  computed: {
    // 过滤后的车站列表
    filteredStations() {
      const filtered = this.stations.filter((station) =>
        station && station.name && station.name[this.language] && station.name[this.language].toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      console.log('Filtered Stations:', filtered); // 打印过滤后的车站
      return filtered;
    },
  },
  methods: {
    // 显示车站详情
    showStationDetails(station) {
      this.$emit('station-click', station);
    },
  },
};
</script>

<style src="src/assets/css/StationList.css"></style>