<script setup lang="ts">
import { Icon } from '#components'
import { useRouter } from 'vue-router'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import UserAvatarProfile from './UserAvatarProfile.vue'

const { user, logout } = {
  user: { name: 'John Doe', email: 'john.doe@example.com' },
  logout: async () => {
    // Simulate logout
  },
}
const router = useRouter()

async function handleLogout() {
  await logout()
  router.push('/sign-in')
}
</script>

<template>
  <DropdownMenu v-if="user">
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="relative h-8 w-8 rounded-full cursor-pointer">
        <UserAvatarProfile :user="user" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="min-w-56 rounded-lg"
      align="end"
      :side-offset="4"
    >
      <DropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar class="h-8 w-8 rounded-lg">
            <AvatarImage :src="user?.name" :alt="user?.name" />
            <AvatarFallback class="rounded-lg">
              N/A
            </AvatarFallback>
          </Avatar>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user?.name }}</span>
            <span class="truncate text-xs">{{ user?.email }}</span>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Icon name="lucide:badge-check" class="mr-2 h-4 w-4" />
          Account
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="handleLogout">
        <Icon name="tabler:logout" class="mr-2 h-4 w-4" />
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
