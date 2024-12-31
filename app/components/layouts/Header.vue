<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <header class="bg-background flex h-16 items-center gap-2 p-4 sm:gap-3 shadow-none">
    <SidebarTrigger class="-ml-1" />
    <Separator
      orientation="vertical"
      class="mr-2 data-[orientation=vertical]:h-4"
    />
    <slot />
  </header>
</template>
