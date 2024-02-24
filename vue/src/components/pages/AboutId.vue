<template>
  <PageLayout>
    <section class="p-16" @click="() => getInfoRouter()">
      About {{ $route.params.id }}

      <button @click="() => setUserHanler()">
        set
      </button>

      <span v-if="user">{{ user.name }}</span>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AboutIdPage',
  mixins: [helpModal],
  components: {
    PageLayout
  },
  computed: {
    ...mapGetters('users', [
      'getUser'
    ]),
    user () {
      return this.getUser
    }
  },
  methods: {
    ...mapActions('users', [
      'setUser'
    ]),
    getInfoRouter () {
      console.log(this.$route);
    },
    setUserHanler () {
      this.setUser({
        name: 'Jack',
        age: '36'
      })
    }
  }
}
</script>

<style>
</style>
