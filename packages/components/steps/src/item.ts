import { ExtractPropTypes } from 'vue';

export const stepProps = {
  title: {
    type: String,
    default: ''
  },
  icon: {
    type: String // iconPropType
  }
  // description: {
  //   type: String,
  //   default: ''
  // },
  // status: {
  //   type: String,
  //   values: ['', 'wait', 'process', 'finish', 'error', 'success'],
  //   default: ''
  // }
} as const;

export type StepProps = ExtractPropTypes<typeof stepProps>;
