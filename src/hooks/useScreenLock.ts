import { onShow, onHide, } from '@dcloudio/uni-app'

export function useScreenLock() {
  /**
   * 锁定竖屏
   */
  const setPortrait = () => {
    // #ifdef APP-PLUS
    onShow(() => {
      plus.screen.lockOrientation('portrait-primary')
    })
    // #endif
  }

  /**
   * 锁定横屏
   */
  const setLandscape = () => {
    // #ifdef APP-PLUS
    onShow(() => {
      plus.screen.lockOrientation('landscape-primary')
    })
    // #endif
  }

  // #ifdef APP-PLUS
  onHide(() => {
    plus.screen.unlockOrientation()
    plus.screen.lockOrientation('portrait-primary')
  })
  // #endif

  return {
    setPortrait,
    setLandscape
  }
}
