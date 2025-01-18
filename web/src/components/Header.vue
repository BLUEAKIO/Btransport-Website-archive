<template>
  <header class="header">
    <div class="header-container">
      <!-- Logo 和导航链接 -->
      <div class="header-left">
        <img src="../assets/logo.png" alt="Tokyo Metro Logo" class="logo" />
        <nav class="nav">
          <router-link to="/" class="nav-link">{{ $t('nav.home') }}</router-link>
          <router-link to="/line-info" class="nav-link">{{ $t('nav.lineInfo') }}</router-link>
          <router-link to="/about" class="nav-link">{{ $t('nav.about') }}</router-link>
          <router-link to="/contact" class="nav-link">{{ $t('nav.contact') }}</router-link>
        </nav>
      </div>

      <!-- 语言切换器 -->
      <div class="header-right">
        <LanguageSwitcher />
      </div>

      <!-- 窄屏下的菜单按钮 -->
      <button class="menu-toggle" @click="toggleMenu">
        <span class="menu-icon">&#9776;</span>
      </button>
    </div>

    <!-- 窄屏下的下拉菜单 -->
    <div class="mobile-menu" :class="{ 'is-open': isMenuOpen }">
      <nav class="mobile-nav">
        <router-link to="/" class="mobile-nav-link" @click="closeMenu">{{ $t('nav.home') }}</router-link>
        <router-link to="/line-info" class="mobile-nav-link" @click="closeMenu">{{ $t('nav.lineInfo') }}</router-link>
        <router-link to="/about" class="mobile-nav-link" @click="closeMenu">{{ $t('nav.about') }}</router-link>
        <router-link to="/contact" class="mobile-nav-link" @click="closeMenu">{{ $t('nav.contact') }}</router-link>
      </nav>
      <div class="mobile-language-switcher">
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
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style src="../assets/css/Header.css"></style>