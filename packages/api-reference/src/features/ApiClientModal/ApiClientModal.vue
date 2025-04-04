<script setup lang="ts">
import { useWorkspace } from '@scalar/api-client/store'
import type { ApiClientConfiguration } from '@scalar/types/api-reference'
import { watchDebounced } from '@vueuse/core'
import { useExampleStore } from '#legacy'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { useApiClient } from './useApiClient'

const { configuration } = defineProps<{
  configuration: Partial<ApiClientConfiguration>
}>()

const el = ref<HTMLDivElement | null>(null)

const { client, init } = useApiClient()
const { selectedExampleKey, operationId } = useExampleStore()
const store = useWorkspace()

onMounted(() => {
  if (!el.value) {
    return
  }

  // Initialize the client
  init({
    el: el.value,
    configuration,
    store,
  })
})

// Update the config on change
// We temporarily just debounce this but we should switch to the diff from watch mode for updates
watchDebounced(
  () => configuration,
  (_config) => _config && client.value?.updateConfig(_config),
  { deep: true, debounce: 300 },
)

watch(selectedExampleKey, (newKey) => {
  if (client.value && newKey && operationId.value) {
    client.value.updateExample(newKey, operationId.value)
  }
})

onBeforeUnmount(() => client.value?.app.unmount())
</script>

<template>
  <div ref="el" />
</template>
