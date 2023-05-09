<template>
  <uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>

  <uni-section
    class="mb-10"
    title="竖线装饰"
    sub-title="副标题"
    type="line"
  ></uni-section>

  <uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
    <template v-slot:decoration>
      <view class="decoration"></view>
    </template>
  </uni-section>

  <uni-section class="mb-10" title="默认插槽" sub-title="副标题"
    >默认插槽内容</uni-section
  >

  <uni-section class="mb-10" title="主标题">
    <template v-slot:right> right slot </template>
  </uni-section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
</script>
<style lang="scss" scoped></style>
