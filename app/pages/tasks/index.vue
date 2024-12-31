<script setup lang="ts">
definePageMeta({
  breadcrumb: {
    label: 'Tasks',
  },
})
</script>

<template>
  <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
      <div class="p-4">
        <h1 class="text-2xl font-bold">
          Tasks Overview
        </h1>
        <p class="mt-2 text-muted-foreground">
          Here you can manage your tasks efficiently.
        </p>
      </div>
    </div>
  </div>
</template>
