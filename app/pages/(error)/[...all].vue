<script setup lang="ts">
import { Button } from '@/components/ui/button'

definePageMeta({
  title: '404',
  description: 'The page you are looking for does not exist.',
  breadcrumb: {
    label: 'Not Found',
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
        404
      </h1>
      <span class="font-medium">Oops! Page not found!</span>
      <p class="text-muted-foreground text-center">
        It seems like the page you are looking for <br>
        does not exist or may have been removed.
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
