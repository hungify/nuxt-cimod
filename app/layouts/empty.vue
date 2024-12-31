<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

<template>
  <div
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
</template>
