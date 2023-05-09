export function useRouter() {
  function navigateTo(url: Route.NavigatePages, params?: Omit<UniApp.NavigateToOptions, 'url'>) {
    const current = getCurrentPages().at(0)?.route
    if (url === current) return

    return uni.navigateTo({ url: '/' + url, ...params })
  }

  function redirectTo(url: Route.NavigatePages, params?: Omit<UniApp.RedirectToOptions, 'url'>) {
    const current = getCurrentPages().at(0)?.route
    if (url === current) return

    return uni.redirectTo({ url: '/' + url, ...params })
  }

  function switchTab(url: Route.Tabar, params?: Omit<UniApp.SwitchTabOptions, 'url'>) {
    const current = getCurrentPages().at(0)?.route
    if (url === current) return

    return uni.switchTab({ url: '/' + url, ...params })
  }

  /**
   * 返回的页面数，如果 delta 大于现有页面数，则返回到首页
   */
  function navigateBack(delta?: number, params?: Omit<UniApp.NavigateBackOptions, 'delta'>) {
    return uni.navigateBack({ delta, ...params })
  }

  function reLaunch(url?: Route.Tabar | Route.NavigatePages, params?: Omit<UniApp.ReLaunchOptions, 'url'>) {
    const current = getCurrentPages().at(0)?.route
    if (url === current) return

    return uni.reLaunch({ url: '/' + url, ...params })
  }


  return {
    navigateTo, redirectTo, switchTab, navigateBack, reLaunch
  }
}
