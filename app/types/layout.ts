import type { RoutesNamedLocations } from '@typed-router'
import type { LucideIcon } from 'lucide-vue-next'
import type { NuxtLinkProps } from 'nuxt/app'

export interface BreadcrumbItem extends NuxtLinkProps {
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
  to?: RoutesNamedLocations
}

export interface SidebarUser {
  name: string
  email: string
  avatar: string
}

// Team information for sidebar
export interface SidebarTeam {
  name: string
  logo: LucideIcon
  plan: string
}

// Base navigation item with common properties
export interface BaseNavItem {
  title: string
  badge?: string
  icon?: string
}

type Urls = RoutesNamedLocations

// Navigation item that links to a specific URL
export interface NavLinkItem extends BaseNavItem {
  url: Urls
  items?: never
}

// Sub-navigation item for collapsible sections
export interface NavSubItem extends BaseNavItem {
  url: Urls
}

// Navigation item that can be collapsed/expanded with sub-items
export interface NavCollapsibleItem extends BaseNavItem {
  items: NavSubItem[]
  url?: Urls // Allow optional URL for collapsible items
}

// Union type for all navigation item types
export type MenuItem = NavLinkItem | NavCollapsibleItem

// Group of navigation items
export interface MenuGroup {
  title: string
  items?: MenuItem[]
  url?: Urls // Optional URL for the group
  icon?: LucideIcon
  isActive?: boolean
}

// Complete sidebar data structure
export interface SidebarMenuSettings {
  user: SidebarUser
  teams: SidebarTeam[]
  menuGroups: MenuGroup[]
}
