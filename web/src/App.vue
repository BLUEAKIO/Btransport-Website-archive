<template>
  <div class="app">
    <!-- 页眉 -->
    <header>
      <div class="header-content">
        <img src="./assets/logo.png" alt="Tokyo Metro Logo" class="logo">
        <h1>{{ language === 'en' ? 'Tokyo Metro Tozai Line' : '东京地铁东西线' }}</h1>
        <LanguageSwitcher :language="language" @update:language="switchLanguage" />
      </div>
    </header>

    <!-- 主要内容 -->
    <main>
      <div class="main-content">
        <!-- 线路图 -->
        <section class="line-map">
          <img src="./assets/tozai-line-map.png" alt="Tozai Line Map">
        </section>

        <!-- 车站列表 -->
        <StationList
          :stations="stations"
          :language="language"
          @station-click="showStationDetails"
        />
      </div>
    </main>

    <!-- 页脚 -->
    <footer>
      <div class="footer-content">
        <p>{{ language === 'en' ? '© 2023 Tokyo Metro. All rights reserved.' : '© 2023 东京地铁。版权所有。' }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import StationList from './components/StationList.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';
import stationsData from './data/stations.json';

export default {
  components: {
    StationList,
    LanguageSwitcher,
  },
  data() {
    return {
      language: 'zh', // 默认语言改为中文
      stations: [], // 车站数据
    };
  },
  methods: {
    // 显示车站详情
    showStationDetails(station) {
      alert(
        this.language === 'en'
          ? `Station: ${station.name.en}\nDescription: ${station.description.en}`
          : `车站: ${station.name.zh}\n描述: ${station.description.zh}`
      );
    },
    // 切换语言
    switchLanguage(lang) {
      this.language = lang;
    },
  },
  // 在组件挂载时加载车站数据
  mounted() {
    this.stations = stationsData;
    console.log('Stations Data:', this.stations); // 打印车站数据
  },
};
</script>

<!-- 引入外部 CSS 文件 -->
<style src="./assets/css/App.css"></style>