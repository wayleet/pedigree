<template>
  <div class="custom-form">
    <ElSelect
      v-model="partnerId"
      class="custom-form__full-width"
      type="textarea"
      placeholder="Выберите партнёра"
    >
      <ElOption
        v-for="person in persons"
        :key="person.id"
        :label="person.name"
        :value="person.id"
      />
    </ElSelect>
    <ElDatePicker
      v-model="startDate"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата свадьбы"
      :picker-options="startPickerOptions"
    />
    <ElDatePicker
      v-model="endDate"
      class="custom-form__input"
      type="date"
      format="dd.MM.yyyy"
      value-format="dd.MM.yyyy"
      placeholder="Дата развода"
      :picker-options="endPickerOptions"
    />
  </div>
</template>

<script>
import { formatDateStringToISODate } from "@/services/formatDateStringToISODate";

export default {
  name: "WeddingForm",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
    persons: {
      type: Array,
      required: true,
    },
  },
  computed: {
    partnerId: {
      get() {
        return this.value.partnerId;
      },
      set(value) {
        this.emitFormData({ partnerId: value });
      },
    },
    startDate: {
      get() {
        return this.value.startDate;
      },
      set(value) {
        this.emitFormData({ startDate: value });
      },
    },
    endDate: {
      get() {
        return this.value.endDate;
      },
      set(value) {
        this.emitFormData({ endDate: value });
      },
    },
    startPickerOptions() {
      return {
        disabledDate: (time) => {
          if (this.endDate) {
            const endDate = formatDateStringToISODate(this.endDate);
            return time.getTime() > endDate.getTime();
          }
        },
      };
    },
    endPickerOptions() {
      return {
        disabledDate: (time) => {
          if (this.startDate) {
            const startDate = formatDateStringToISODate(this.startDate);
            return time.getTime() < startDate.getTime();
          }
        },
      };
    },
  },
  methods: {
    emitFormData(param) {
      this.$emit("change", {
        ...this.value,
        ...param,
      });
    },
  },
};
</script>

<style></style>
