<template>
  <section>
    <h1>Test Page</h1>
    <MliButton>测试</MliButton>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MliButton from '@/components/MliButton.vue'

export default defineComponent({
  name: 'TestPage',
  components: { MliButton }
})
</script>
