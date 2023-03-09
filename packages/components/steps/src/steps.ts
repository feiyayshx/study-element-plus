import { ExtractPropTypes } from 'vue';
import { CHANGE_EVENT } from '@el-study/constants';
import { isNumber } from '@el-study/utils';
export const stepsProps = {
  space: {
    type: [Number, String],
    default: ''
  },
  active: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'horizontal',
    values: ['horizontal', 'vertical']
  },
  // alignCenter: {
  //   type: Boolean
  // },
  simple: {
    type: Boolean
  }
  // finishStatus: {
  //   type: String,
  //   values: ['wait', 'process', 'finish', 'error', 'success'],
  //   default: 'finish'
  // },
  // processStatus: {
  //   type: String,
  //   values: ['wait', 'process', 'finish', 'error', 'success'],
  //   default: 'process'
  // }
};

export type StepsProps = ExtractPropTypes<typeof stepsProps>;

export const stepsEmits = {
  [CHANGE_EVENT]: (newVal: number, oldVal: number) => [newVal, oldVal].every(isNumber)
};

export type StepsEmits = typeof stepsEmits;
