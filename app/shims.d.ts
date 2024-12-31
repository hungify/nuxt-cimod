import type { NuxtUIBreadcrumbItem } from './types/layout'

declare module '#app' {
  interface PageMeta {
    breadcrumb?: NuxtUIBreadcrumbItem
  }
}

export {}
