<template>
  <PageLayout>
    <section class="p-16">
      Homepage

      <RouterLink :to="{ name: 'ABOUT_ID', params: { id: 555 } }">
        <button>Open about</button>
      </RouterLink>


      <CustomButton :size="'large'" @alert="(v) => t(v + v)">
        Новая кнопка

        <template slot="additional">
          Еще кнопка?
        </template>

        !
      </CustomButton>


      <CustomButton size="small" @alert="(v) => t(v)">
      </CustomButton>
    </section>
  </PageLayout>
</template>

<script>
import { RouteNames } from '../../router/routes'
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import CustomButton from "@/components/ui/CustomButton.vue";

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    CustomButton
  },
  methods: {
    t () {
      this.$router.push({ name: RouteNames.ABOUT })
    }
  }
}
</script>

<style>
</style>
