<template>
  <button :class="['mli-button', type ? 'mli-button--' + type : '', { 'is-disabled': disabled }]">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'MliButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: Boolean
  },
  setup(props) {
    const { type } = toRefs(props)
    console.log('props.type', type)
  }
})
</script>

<style lang="less">
.mli-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0 0 0 12px;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
