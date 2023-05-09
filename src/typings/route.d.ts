type Page<path extends string, suffix extends string = 'index'> = `pages/${path}/${suffix}`
type SubPage<path extends string, page extends string = 'main', suffix extends string = 'index'> = Page<`${path}/pages/${page}`, suffix>

declare namespace Route {
  type Tabar =
    Page<`tab-bar/home`> |
    Page<`tab-bar/curriculum`> |
    Page<`tab-bar/mine`>

  type ETextbook = SubPage<'e-textbook'>

  type Login = SubPage<'login'>

  type NavigatePages = ETextbook | Login
}
