<script setup lang="ts">
import { Icon } from '#components'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

const { separatorIcon = 'lucide:slash' } = defineProps<{
  separatorIcon?: string
}>()

const breadcrumbItems = useBreadcrumbItems()
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template v-for="(item, index) in breadcrumbItems" :key="index">
        <BreadcrumbItem>
          <BreadcrumbPage v-if="item.current">
            <span class="flex items-center gap-1">
              <Icon v-if="item.icon" :name="item.icon" class="h-4 w-4" />
              <span v-if="item.label">{{ item.label }}</span>
              <span v-else-if="item.ariaLabel">{{ item.ariaLabel }}</span>
            </span>
          </BreadcrumbPage>
          <NuxtLink
            v-else
            :to="item.to!"
            :aria-label="item.ariaLabel"
            class="transition-colors hover:text-foreground"
          >
            <span class="flex items-center gap-1">
              <Icon v-if="item.icon" :name="item.icon" class="h-4 w-4" />
              <span v-if="item.label">{{ item.label }}</span>
              <span v-else-if="item.ariaLabel">{{ item.ariaLabel }}</span>
            </span>
          </NuxtLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator
          v-if="index < breadcrumbItems.length - 1"
        >
          <Icon :name="separatorIcon" class="h-4 w-4" />
        </BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
