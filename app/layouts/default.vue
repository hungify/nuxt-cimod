<script lang="ts">
import { cn } from '@/lib/utils'
import AppSidebar from '~/components/layouts/AppSidebar.vue'
import NavigationBreadcrumb from '~/components/layouts/NavigationBreadcrumb.vue'
import ThemeSwitcher from '~/components/layouts/ThemeSwitcher.vue'
import UserProfileNavItem from '~/components/layouts/UserProfileNavItem.vue'
</script>

<script setup lang="ts">
import {
  SidebarProvider,
} from '@/components/ui/sidebar'
import Header from '~/components/layouts/Header.vue'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <div
      :class="cn(
        ' w-full max-w-full',
        'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
        'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
        'sm:transition-[width] sm:duration-200 sm:ease-linear',
        'flex h-svh flex-col',
        'group-data-[scroll-locked=1]/body:h-full',
        'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh',
      )"
    >
      <Header>
        <NavigationBreadcrumb />
        <div class="ml-auto flex items-center gap-4">
          <ThemeSwitcher />
          <UserProfileNavItem />
        </div>
      </Header>
      <main
        :class="cn(
          'ml-auto w-full max-w-full',
          'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
          'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
          'sm:transition-[width] sm:duration-200 sm:ease-linear',
          'flex h-svh flex-col',
          'group-data-[scroll-locked=1]/body:h-full',
          'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh',
        )"
      >
        <slot />
      </main>
    </div>
  </SidebarProvider>
</template>
