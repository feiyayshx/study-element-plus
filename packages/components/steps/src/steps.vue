<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { useNamespace } from '@el-study/hooks';
import { stepsEmits, stepsProps } from './steps';

defineOptions({
  name: 'ElSteps'
});

const emit = defineEmits(stepsEmits);

const props = defineProps(stepsProps);

const ns = useNamespace('steps');

provide('ElSteps', { props });
</script>

<style lang="scss" scoped></style>
