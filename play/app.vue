<template>
  <el-icon :size="12" color="red">
    <Edit />
  </el-icon>
  <div style="width: 600px">
    <el-steps>
      <el-step title="step1"></el-step>
      <el-step title="step2"></el-step>
      <el-step title="step3"></el-step>
    </el-steps>
  </div>
</template>

<script lang="ts" setup>
import { Edit } from '@element-plus/icons-vue';
</script>
