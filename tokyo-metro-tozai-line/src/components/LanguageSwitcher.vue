<template>
  <div class="language-switcher">
    <div class="selected-option" @click="toggleDropdown">
      {{ selectedLabel }}
      <span class="arrow">▼</span>
    </div>
    <div v-if="isOpen" class="dropdown-options">
      <div
        v-for="option in options"
        :key="option.value"
        class="dropdown-option"
        :class="{ active: option.value === language }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false, // 控制下拉菜单是否打开
      options: [
        { value: 'zh', label: '简体中文' },
        { value: 'en', label: 'English' },
        // 添加更多语言选项
      ],
    };
  },
  computed: {
    // 当前选中的语言标签
    selectedLabel() {
      const selectedOption = this.options.find((option) => option.value === this.language);
      return selectedOption ? selectedOption.label : '';
    },
  },
  methods: {
    // 切换下拉菜单的显示状态
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    // 选择语言
    selectOption(option) {
      this.$emit('update:language', option.value);
      this.isOpen = false; // 关闭下拉菜单
    },
  },
};
</script>

<style src="src/assets/css/LanguageSwitcher.css"></style>