import { ExtractPropTypes } from 'vue';

export const stepProps = {
  title: {
    type: String,
    default: ''
  }
} as const;

export type StepProps = ExtractPropTypes<typeof stepProps>;
