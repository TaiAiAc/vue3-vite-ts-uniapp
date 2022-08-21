<template>
  <view class="uni-container">
    <view class="uni-header-logo">
      <image class="uni-header-image" src="@/assets/img/logo.png"></image>
    </view>
    <view class="uni-hello-text">
      <text class="hello-text">uni-app内置组件，展示样式仅供参考，文档详见：</text>
      <uni-link
        :href="'https://uniapp.dcloud.io/component/'"
        :text="'https://uniapp.dcloud.io/component/'"
        inWhiteList
      ></uni-link>
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
/* #ifndef APP-PLUS-NVUE */
page {
  min-height: 100%;
  height: auto;
}
/* #endif */

/* 解决头条小程序字体图标不显示问题，因为头条运行时自动插入了span标签，且有全局字体 */
/* #ifdef MP-TOUTIAO */
/* text :not(view) {
    font-family: uniicons;
} */
/* #endif */

.uni-icon {
  font-family: uniicons;
  font-weight: normal;
}

.uni-container {
  padding: 15px;
  background-color: #f8f8f8;
}

.uni-header-logo {
  /* #ifdef H5 */
  display: flex;
  /* #endif */
  padding: 15px 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rpx;
}

.uni-header-image {
  width: 80px;
  height: 80px;
}

.uni-hello-text {
  margin-bottom: 20px;
}

.hello-text {
  color: #7a7e83;
  font-size: 14px;
  line-height: 20px;
}

.hello-link {
  color: #7a7e83;
  font-size: 14px;
  line-height: 20px;
}

.uni-panel {
  margin-bottom: 12px;
}

.uni-panel-h {
  /* #ifdef H5 */
  display: flex;
  /* #endif */
  background-color: #ffffff;
  flex-direction: row !important;
  /* justify-content: space-between !important; */
  align-items: center !important;
  padding: 12px;
  /* #ifdef H5 */
  cursor: pointer;
  /* #endif */
}
/*
.uni-panel-h:active {
    background-color: #f8f8f8;
}
 */
.uni-panel-h-on {
  background-color: #f0f0f0;
}

.uni-panel-text {
  flex: 1;
  color: #000000;
  font-size: 14px;
  font-weight: normal;
}

.uni-panel-icon {
  margin-left: 15px;
  color: #999999;
  font-size: 14px;
  font-weight: normal;
  transform: rotate(0deg);
  transition-duration: 0s;
  transition-property: transform;
}

.uni-panel-icon-on {
  transform: rotate(180deg);
}

.uni-navigate-item {
  /* #ifdef H5 */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-top-style: solid;
  border-top-color: #f0f0f0;
  border-top-width: 1px;
  padding: 12px;
  /* #ifdef H5 */
  cursor: pointer;
  /* #endif */
}

.uni-navigate-item:active {
  background-color: #f8f8f8;
}

.uni-navigate-text {
  flex: 1;
  color: #000000;
  font-size: 14px;
  font-weight: normal;
}

.uni-navigate-icon {
  margin-left: 15px;
  color: #999999;
  font-size: 14px;
  font-weight: normal;
}
</style>
