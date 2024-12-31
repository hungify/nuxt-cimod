<script setup lang="ts">
import { Button } from '@/components/ui/button'

definePageMeta({
  title: '401',
  description: 'You are not authorized to access this page.',
  breadcrumb: {
    label: 'Unauthorized',
  },
})

const router = useRouter()

function goBack() {
  router.back()
}

async function goHome() {
  await navigateTo('/')
}
</script>

<template>
  <div class="h-full">
    <div class="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
      <h1 class="text-[7rem] leading-tight font-bold">
        401
      </h1>
      <span class="font-medium">Unauthorized!</span>
      <p class="text-muted-foreground text-center">
        You are not authorized to access this page.<br>
        Please check your credentials or contact the administrator.
      </p>
      <div class="mt-6 flex gap-4">
        <Button
          variant="outline"
          @click="goBack"
        >
          Go Back
        </Button>
        <Button @click="goHome">
          Go Home
        </Button>
      </div>
    </div>
  </div>
</template>
