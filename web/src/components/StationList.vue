<template>
  <div class="station-list">
    <h2>{{ $t('stationList.title') }}</h2>
    <ul>
      <li
        v-for="station in stations"
        :key="station.id"
        @click="showStationDetails(station)"
      >
        {{ $t(`stationList.stations.${station.id}`) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stations: [
        { id: 'nakano', name: 'Nakano' },
        { id: 'takadanobaba', name: 'Takadanobaba' },
        { id: 'waseda', name: 'Waseda' },
      ],
    };
  },
  methods: {
    showStationDetails(station) {
      alert(
        this.$t('stationList.stations.' + station.id) // 显示车站名称
      );
    },
  },
};
</script>

<style src="../assets/css/StationList.css"></style>