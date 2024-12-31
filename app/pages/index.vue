<script setup lang="ts">
definePageMeta({
  breadcrumb: {
    icon: 'lucide:home',
    label: ' ', // Double empty label to avoid showing "Home" in the breadcrumb
  },
  middleware: () => {
    return '/dashboard/tasks'
  },
})
</script>
