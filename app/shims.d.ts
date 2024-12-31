import type { BreadcrumbItem } from './types/layout'

declare module '#app' {
  interface PageMeta {
    breadcrumb?: BreadcrumbItem
  }
}

export {}
