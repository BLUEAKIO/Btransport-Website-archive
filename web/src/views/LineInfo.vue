<template>
  <div class="line-info">
    <h1>{{ $t('lineInfo.title') }}</h1>
    <img src="../assets/tozai-line-map.png" alt="Tozai Line Map" class="line-map" />
    <p>{{ $t('lineInfo.description') }}</p>
    <StationList />
  </div>
</template>

<script>
import StationList from '../components/StationList.vue';

export default {
  components: {
    StationList,
  },
};
</script>

<style src="../assets/css/LineInfo.css"></style>