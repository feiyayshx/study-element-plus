<template>
  <div :class="[ns.b()]">
    <div :class="[ns.e('head')]">
      <div :class="[ns.e('line')]"></div>
      <div :class="[ns.e('icon')]">
        <slot name="icon">
          <div :class="[ns.e('icon-inner')]"></div>
        </slot>
      </div>
    </div>
    <div :class="[ns.e('main')]">
      <div :class="[ns.e('title')]">
        <slot name="title">{{ title }}</slot>
      </div>
      <div :class="[ns.e('description')]"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { useNamespace } from '@el-study/hooks';
import { stepProps } from './item';
import type { Ref } from 'vue';

export interface IStepsProps {
  space: number | string;
  active: number;
}

export interface StepItemState {
  uid: number | undefined;
  // currentStatus: string;
  // setIndex: (val: number) => void;
  // calcProgress: (status: string) => void;
}

export interface IStepsInject {
  props: IStepsProps;
  steps: Ref<StepItemState[]>;
}

defineOptions({
  name: 'ElStep'
});

const props = defineProps(stepProps);
const parent = inject('ElSteps') as IStepsInject;
const ns = useNamespace('step');
</script>

<style lang="scss" scoped></style>
