<template>
  <div class="language-switcher">
    <button @click="switchLanguage('en')">EN</button>
    <button @click="switchLanguage('zh')">中文</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang; // 切换语言
    },
  },
};
</script>

<style src="../assets/css/LanguageSwitcher.css"></style>