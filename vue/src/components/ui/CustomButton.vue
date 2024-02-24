<template>
  <button class="custom-button" :class="'custom-button--' + size" @click="$emit('alert', size)">
    <slot>
      Кнопка
    </slot>
    <span class="custom-button__additional">
      <slot name="additional">
        Доп
      </slot>
    </span>  
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    size: {
      default: 'medium',
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="less">
.custom-button {
  font-size: 12px;
  color: red;

  &--small {
    font-size: 8px;
  }

  &--large {
    font-size: 20px;
  }

  &__additional {
    color: green;
  }
}
</style>
