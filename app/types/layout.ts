import type { NuxtLinkProps } from 'nuxt/app'

export interface NuxtUIBreadcrumbItem extends NuxtLinkProps {
  label: string
  labelClass?: string
  icon?: string
  iconClass?: string
  as?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  active?: boolean
  exact?: boolean
  exactQuery?: boolean
  exactMatch?: boolean
  inactiveClass?: string
}
