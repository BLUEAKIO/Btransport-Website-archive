<template>
  <div class="station-details">
    <h2>{{ station.name[currentLocale] }}</h2>

    <!-- 经停线路和经停的他社线路 -->
    <div class="info-container">
      <!-- 经停线路 -->
      <div class="info-section">
        <h3>{{ $t('stationDetails.stoppingLines') }}</h3>
        <ul>
          <li v-for="(line, index) in station.lines" :key="index">
            <span
              class="line-color"
              :style="{ backgroundColor: line.color }"
            ></span>
            {{ line.name[currentLocale] }}
            <span v-if="line.stationCode" class="station-code">
              ({{ line.stationCode }})
            </span>
          </li>
        </ul>
      </div>

      <!-- 经停的他社线路 -->
      <div class="info-section">
        <h3>{{ $t('stationDetails.otherCompanyLines') }}</h3>
        <ul v-if="station.transfers && station.transfers.length">
          <li v-for="(transfer, index) in station.transfers" :key="index">
            <span
              class="line-color"
              :style="{ backgroundColor: transfer.color }"
            ></span>
            {{ transfer.company[currentLocale] }} {{ transfer.line[currentLocale] }}
            <span v-if="transfer.stationCode" class="station-code">
              ({{ transfer.stationCode }})
            </span>
          </li>
        </ul>
        <p v-else>{{ $t('stationDetails.noOtherCompanyLines') }}</p>
      </div>
    </div>

    <!-- 返回按钮 -->
    <button @click="goBack">{{ $t('common.back') }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      station: {}, // 车站信息
      currentLocale: this.$i18n.locale, // 当前语言
      lines: [], // 所有线路信息
    };
  },
  created() {
    this.loadStationData(); // 初始化加载车站数据
  },
  watch: {
    // 监听语言切换
    '$i18n.locale'(newLocale) {
      this.currentLocale = newLocale; // 更新当前语言
      this.loadStationData(); // 重新加载车站数据
    },
  },
  methods: {
    // 加载车站数据
    async loadStationData() {
      try {
        const response = await fetch('/data/lineInfo.json'); // 确保路径正确
        const lineInfo = await response.json();
        this.lines = lineInfo.lines || []; // 填充所有线路信息

        const stationId = this.$route.params.id;
        const station = this.lines
          .flatMap((line) => line.stations)
          .find((s) => s.id === stationId);

        if (station) {
          // 找到所有经停的线路
          const stationLines = this.lines
            .filter((line) =>
              line.stations.some((s) => s.id === station.id)
            )
            .map((line) => {
              const stationInLine = line.stations.find((s) => s.id === station.id);
              return {
                name: line.name, // 线路名称（中英文）
                color: line.color, // 线路颜色
                stationCode: stationInLine.lineStationCode || '', // 线路车站编码（如果有）
              };
            });

          // 设置车站信息
          this.station = {
            ...station,
            lines: stationLines, // 经停线路
            transfers: station.transfers
              ? station.transfers.map((transfer) => ({
                  ...transfer,
                  color: this.getLineColor(transfer.line), // 获取他社线路颜色
                  stationCode: transfer.stationCode || '', // 他社线路车站编码（如果有）
                }))
              : [],
          };
        } else {
          this.$router.push('/');
        }
      } catch (error) {
        console.error('Failed to load lineInfo.json:', error);
      }
    },
    // 获取他社线路颜色
    getLineColor(lineName) {
      if (!this.lines || !Array.isArray(this.lines)) {
        return '#ccc'; // 如果 this.lines 未定义或不是数组，返回默认颜色
      }
      if (!lineName || !lineName.zh || !lineName.en) {
        return '#ccc'; // 如果 lineName 无效，返回默认颜色
      }
      const line = this.lines.find((l) => l.name.zh === lineName.zh || l.name.en === lineName.en);
      return line ? line.color : '#ccc'; // 如果找不到线路颜色，使用默认颜色
    },
    // 返回上一页
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style src="../assets/css/StationDetails.css"></style>