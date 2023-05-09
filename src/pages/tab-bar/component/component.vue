<template>
  <h1 class="text-primary  text20px">primary</h1>
  <h1 class="text-success  text20px">success</h1>
  <h1 class="text-warning  text20px">warning</h1>
  <h1 class="text-error  text20px">error</h1>
  <view class="uni-container">
    <view class="uni-header-logo">
      <image class="uni-header-image" src="@/assets/img/logo.png"></image>
    </view>
    <view class="uni-hello-text">
      <text class="hello-text">uni-app内置组件，展示样式仅供参考，文档详见：</text>
      <uni-link :href="'https://uniapp.dcloud.io/component/'" :text="'https://uniapp.dcloud.io/component/'"
        inWhiteList></uni-link>
    </view>
    <uni-badge size="small" :text="100" absolute="rightBottom" type="primary">
      <button @click="click">右下</button>
    </uni-badge>

    <uni-badge text="1"></uni-badge>

    <uni-badge text="3" type="primary" :inverted="true"></uni-badge>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const app = getApp()
console.log(app)

let current = getCurrentPages()
console.log('current: ', current)

const click = (e: Event) => {
  console.log('e :>> ', e)
}

const list = ref([
  {
    id: 'view',
    name: '视图容器',
    open: false,
    pages: [
      'view',
      'scroll-view',
      'swiper',
      // #ifndef MP-TOUTIAO || MP-LARK
      'movable-view',
      'cover-view'
      // #endif
    ]
  },
  {
    id: 'content',
    name: '基础内容',
    open: false,
    pages: ['text', 'rich-text', 'progress']
  },
  {
    id: 'form',
    name: '表单组件',
    open: false,
    pages: [
      'button',
      'checkbox',
      'form',
      'input',
      'label',
      'picker',
      'picker-view',
      'radio',
      'slider',
      'switch',
      'textarea',
      // #ifdef APP-PLUS || MP-WEIXIN || H5
      'editor'
      // #endif
    ]
  },
  {
    id: 'nav',
    name: '导航',
    open: false,
    pages: ['navigator']
  },
  {
    id: 'media',
    name: '媒体组件',
    open: false,
    pages: ['image', 'video']
  },
  // #ifndef MP-TOUTIAO || MP-KUAISHOU
  {
    id: 'map',
    name: '地图',
    open: false,
    pages: ['map']
  },
  // #endif
  // #ifndef QUICKAPP-WEBVIEW-UNION
  {
    id: 'canvas',
    name: '画布',
    open: false,
    pages: ['canvas']
  },
  // #endif
  // #ifdef APP-PLUS || H5
  {
    id: 'web-view',
    name: '网页',
    open: false,
    pages: [
      {
        name: '网络网页',
        url: '/pages/component/web-view/web-view'
      },
      {
        name: '本地网页',
        url: '/pages/component/web-view-local/web-view-local'
      }
    ]
  },
  // #endif
  // #ifndef APP-PLUS || H5 || MP-LARK || MP-JD
  {
    id: 'web-view',
    name: '网页',
    open: false,
    pages: ['web-view']
  },
  // #endif
  // #ifndef H5 || MP-BAIDU || QUICKAPP-WEBVIEW || MP-LARK || MP-JD
  {
    id: 'ad',
    url: 'ad',
    name: 'AD组件',
    open: false
  }
  // #endif
])

const goDetailPage = (panel: string, u: string | Record<string, 'url'>) => {
  if (typeof u === 'string') {
    const url = '/pages/component/' + u + '/' + u

    uni.navigateTo({
      url: url
    })
  } else {
    uni.navigateTo({
      url: u.url
    })
  }
}

const triggerCollapse = (e: number, id: string) => {
  if (!list.value[e].pages) {
    goDetailPage('', list.value[e].url as string)
    return
  }
  for (var i = 0; i < list.value.length; ++i) {
    if (e === i) {
      list.value[i].open = !list.value[i].open
    } else {
      list.value[i].open = false
    }
  }
}
</script>
<style lang="scss" scoped>
.uni-header-image {
  width: 80px;
  height: 80px;
}
</style>
