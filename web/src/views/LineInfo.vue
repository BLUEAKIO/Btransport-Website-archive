<template>
  <div class="line-info">
    <h2>{{ $t('lineInfo.title') }}</h2>

    <!-- 加载提示 -->
    <div v-if="isLoading">加载中...</div>

    <!-- 搜索框 -->
    <div v-else class="search-box">
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
          {{ getStationName(station) }}
        </li>
      </ul>
      <p v-else>没有找到匹配的车站。</p>
    </div>

    <!-- 线路和车站列表 -->
    <div v-for="line in lines" :key="line.id" class="line">
      <div class="line-header" @click="toggleStations(line.id)">
        <!-- 色块 -->
        <div class="line-color" :style="{ backgroundColor: line.color }"></div>
        <!-- 线路名称 -->
        <h3>{{ getLineName(line) }}</h3>
        <!-- 站点数量 -->
        <span class="station-count">{{ line.stations.length }} 站</span>
        <!-- 按钮 -->
        <button @click.stop="toggleStations(line.id)">
          {{ showStations[line.id] ? $t('lineInfo.hideStations') : $t('lineInfo.showStations') }}
        </button>
      </div>
      <ul v-if="showStations[line.id]">
        <li
          v-for="station in line.stations"
          :key="station.id"
          @click="showStationDetails(station)"
        >
          {{ getStationName(station) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lines: [], // 所有线路数据
      showStations: {}, // 控制每条线路的车站列表显示状态
      searchQuery: '', // 搜索框输入内容
      filteredStations: [], // 过滤后的车站列表
      isLoading: true, // 加载状态
    };
  },
  async created() {
    // 异步加载 lineInfo.json
    try {
      const response = await fetch('/data/lineInfo.json'); // 确保路径正确
      const data = await response.json();
      this.lines = data.lines || []; // 如果 data.lines 为 undefined，使用空数组
      // 初始化 showStations
      this.showStations = this.lines.reduce((acc, line) => {
        acc[line.id] = false; // 默认隐藏车站列表
        return acc;
      }, {});
    } catch (error) {
      console.error('Failed to load lineInfo.json:', error);
    } finally {
      this.isLoading = false; // 数据加载完成
    }
  },
  methods: {
    // 获取当前语言的线路名称
    getLineName(line) {
      const locale = this.$i18n.locale; // 获取当前语言
      return line.name[locale] || line.name.en; // 如果当前语言不存在，默认显示英文
    },
    // 获取当前语言的车站名称
    getStationName(station) {
      const locale = this.$i18n.locale; // 获取当前语言
      return station.name[locale] || station.name.en; // 如果当前语言不存在，默认显示英文
    },
    // 跳转到车站详情页面
    showStationDetails(station) {
      this.$router.push(`/station/${station.id}`);
    },
    // 切换车站列表的显示状态
    toggleStations(lineId) {
      this.showStations[lineId] = !this.showStations[lineId];
    },
    // 过滤车站
    filterStations() {
      if (!this.searchQuery) {
        this.filteredStations = [];
        return;
      }
      const query = this.searchQuery.toLowerCase();
      this.filteredStations = this.lines
        .flatMap((line) => line.stations)
        .filter((station) =>
          this.getStationName(station)
            .toLowerCase()
            .includes(query)
        );
    },
  },
};
</script>

<style scoped>
.line-info {
  padding: 20px;
}

/* 搜索框样式 */
.search-box {
  margin-bottom: 20px;
}

.search-box input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.search-box ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.search-box li {
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: white;
}

.search-box li:hover {
  background-color: #f0f0f0;
}

.search-box p {
  color: #666;
  font-size: 0.9em;
}

/* 线路和车站列表样式 */
.line {
  margin-bottom: 20px;
}

.line-header {
  display: flex;
  align-items: center; /* 确保子元素垂直居中 */
  cursor: pointer;
  gap: 10px; /* 添加间距，避免使用 margin */
}

/* 色块样式 */
.line-color {
  width: 16px; /* 色块宽度 */
  height: 16px; /* 色块高度 */
  border-radius: 4px; /* 圆角 */
  flex-shrink: 0; /* 防止色块被压缩 */
}

h3 {
  margin: 0; /* 移除默认的 margin */
  font-size: 1.2em; /* 调整字体大小 */
  color: inherit; /* 使用默认字体颜色 */
}

.station-count {
  font-size: 0.9em;
  color: #666;
}

button {
  margin-left: auto; /* 将按钮推到最右侧 */
  padding: 5px 10px;
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
  margin: 10px 0;
}

li {
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: white;
}

li:hover {
  background-color: #f0f0f0;
}
</style>