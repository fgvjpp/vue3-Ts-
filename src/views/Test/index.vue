<script setup lang="ts">
import { useInterval } from '@/hooks/index'

const { countTime, pause, resume } = useInterval(60)
</script>
<template>
  <div>
    {{ countTime }}
    <button @click="pause">点击暂停</button>
    <button @click="resume">点击继续</button>
  </div>
</template>
<style></style>
