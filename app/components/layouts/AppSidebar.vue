<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,

  SidebarRail,
} from '@/components/ui/sidebar'
import { sidebarConfiguration } from '~/config/layout'
import NavMain from './NavMain.vue'
import NavUser from './NavUser.vue'
import TeamSwitcher from './TeamSwitcher.vue'

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: 'icon',
})
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="sidebarConfiguration.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="sidebarConfiguration.menuGroups" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="sidebarConfiguration.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
