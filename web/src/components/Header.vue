<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo 和导航链接 -->
      <div class="header-left">
        <img src="../assets/logo.png" alt="Tokyo Metro Logo" class="logo" />
        <nav class="nav">
          <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
          <router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link>
          <router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link>
          <router-link to="/line-info" class="nav-link">{{ $t('nav.lineInfo') }}</router-link>
          <!-- 未来新增的按钮可以直接在这里添加 -->
        </nav>
      </div>

      <!-- 语言切换器 -->
      <div class="header-right">
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher,
  },
};
</script>

<style src="../assets/css/Header.css"></style>