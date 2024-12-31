<script setup lang="ts">
import { computed } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface UserAvatarProfileProps {
  user: any
  className?: string
  showInfo?: boolean
}
const props = defineProps<UserAvatarProfileProps>()
const initials = computed(() => props.user?.name?.slice(0, 2).toUpperCase() || 'CN')
</script>

<template>
  <div class="flex items-center gap-2">
    <Avatar :class="props.className">
      <AvatarImage :src="props.user?.name || ''" :alt="props.user?.name || ''" />
      <AvatarFallback class="rounded-lg">
        {{ initials }}
      </AvatarFallback>
    </Avatar>
    <div v-if="props.showInfo" class="grid flex-1 text-left text-sm leading-tight">
      <span class="truncate font-semibold">{{ props.user?.name || '' }}</span>
      <span class="truncate text-xs">{{ props.user?.email }}</span>
    </div>
  </div>
</template>
