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
  watch: {
    // 监听语言切换
    '$i18n.locale'(newLocale) {
      this.currentLocale = newLocale;
      this.loadStationData(); // 重新加载车站数据
    },
  },
  methods: {
    // 加载车站数据
    async loadStationData() {
      try {
        // 从环境变量中读取 baseUrl
        const baseUrl = import.meta.env.VITE_BASE_URL;
        if (!baseUrl) {
          throw new Error('Base URL is not defined in environment variables.');
        }

        const response = await fetch(`${baseUrl}/data/lineInfo.json`);
        const lineInfo = await response.json();
        this.lines = lineInfo.lines || [];

        const stationId = this.$route.params.id;
        const station = this.lines
          .flatMap((line) => line.stations)
          .find((s) => s.id === stationId);

        if (station) {
          // 找到所有经停的线路
          const stationLines = this.lines
            .filter((line) => line.stations.some((s) => s.id === station.id))
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
            lines: stationLines,
            transfers: station.transfers
              ? station.transfers.map((transfer) => ({
                  ...transfer,
                  color: this.getLineColor(transfer.line), // 获取他社线路颜色
                  stationCode: transfer.stationCode || '', // 他社线路车站编码（如果有）
                }))
              : [],
          };
        } else {
          this.$router.push('/'); // 如果找不到车站，跳转到首页
        }
      } catch (error) {
        console.error('Failed to load station data:', error);
        this.$notify({
          type: 'error',
          title: 'Error',
          message: 'Failed to load station data.',
        });
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
      const line = this.lines.find(
        (l) => l.name.zh === lineName.zh || l.name.en === lineName.en
      );
      return line ? line.color : '#ccc'; // 如果找不到线路颜色，使用默认颜色
    },
    // 返回上一页
    goBack() {
      if (window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push('/'); // 如果历史记录为空，跳转到首页
      }
    },
  },
};
</script>

<style scoped>
.station-details {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  h2 {
    margin-top: 0;
    font-size: 1.5em; /* 车站名称字体大小 */
  }
  h3 {
    margin: 10px 0 5px 0;
    font-size: 1.2em; /* 小标题字体大小 */
  }
  button {
    margin-top: 20px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    font-size: 1em; /* 统一字体大小 */
  }
  
  /* 线路颜色块 */
  .line-color {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 2px;
  }
  
  /* 车站编码 */
  .station-code {
    margin-left: 8px;
    font-size: 0.9em; /* 编码字体稍小 */
    color: #666;
  }
  
  /* 信息容器布局 */
  .info-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* 两个信息块之间的间距 */
  }
  
  /* 信息块样式 */
  .info-section {
    flex: 1;
    min-width: 250px; /* 每个信息块的最小宽度 */
  }
  
  /* 窄屏布局（宽度小于 600px 时） */
  @media (max-width: 600px) {
    .info-container {
      flex-direction: column; /* 竖向布局 */
    }
    .info-section {
      width: 100%; /* 占满整个宽度 */
    }
  }
</style>