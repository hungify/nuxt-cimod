<script setup lang="ts">
import { Icon } from '#components'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const colorMode = useColorMode()

const theme = computed({
  get() {
    return colorMode.preference || 'system'
  },
  set(val: string) {
    colorMode.preference = val
  },
})

function setTheme(val: string) {
  theme.value = val
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon" class="scale-95 rounded-full cursor-pointer relative">
        <span class="relative flex items-center justify-center w-[1.8rem] h-[1.8rem]">
          <Icon
            name="lucide:sun"
            size="1.25rem"
            class="transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <Icon
            name="lucide:moon"
            size="1.25rem"
            class="transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </span>
        <span class="sr-only">Toggle theme</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="setTheme('light')">
        Light
        <Icon
          v-show="theme === 'light'"
          name="lucide:check"
          class="ml-auto size-3.5"
        />
      </DropdownMenuItem>
      <DropdownMenuItem @click="setTheme('dark')">
        Dark
        <Icon
          v-show="theme === 'dark'"
          name="lucide:check"
          class="ml-auto size-3.5"
        />
      </DropdownMenuItem>
      <DropdownMenuItem @click="setTheme('system')">
        System
        <Icon
          v-show="theme === 'system'"
          name="lucide:check"
          class="ml-auto size-3.5"
        />
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
