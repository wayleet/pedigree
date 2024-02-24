<template>
  <PageLayout>
    <section class="p-16" @click="() => getInfoRouter()">
      About
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";

export default {
  name: 'AboutPage',
  mixins: [helpModal],
  components: {
    PageLayout
  },
  methods: {
    getInfoRouter () {
      console.log(this.$route);
    }
  }
}
</script>

<style>
</style>
