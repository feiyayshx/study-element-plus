<template>
  <div :class="[ns.b(), ns.m(simple ? 'simple' : direction)]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue';
import { useNamespace } from '@el-study/hooks';
import { stepsEmits, stepsProps } from './steps';

import type { Ref } from 'vue';
import type { StepItemState } from './item.vue';

defineOptions({
  name: 'ElSteps'
});

const emit = defineEmits(stepsEmits);

const props = defineProps(stepsProps);

const ns = useNamespace('steps');

const steps: Ref<StepItemState[]> = ref([]);

provide('ElSteps', { props, steps });

watch(steps, () => {
  steps.value.forEach((instance: StepItemState, index: number) => {
    instance.setIndex(index);
  });
});
</script>

<style lang="scss" scoped></style>
